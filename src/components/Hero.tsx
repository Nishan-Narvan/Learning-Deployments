import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

 const Hero=()=>{
  // STATE: Track which image is currently shown
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Your images array
  const images = [
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200', alt: 'Mountain Lake' },
    { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200', alt: 'Forest Path' },
    { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200', alt: 'Ocean Sunset' },
    { url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200', alt: 'Desert Dunes' },
  ];
  
  // KEY PART 1: THE AUTO-SCROLL ENGINE
  // This runs every 5 seconds and advances to next image
  useEffect(() => {
    if (isPaused) return; // Don't auto-scroll when user is hovering
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length); // ← MODULO TRICK for infinite loop
    }, 5000); // Change every 5 seconds
    
    // KEY PART 2: CLEANUP to prevent memory leaks
    return () => clearInterval(timer);
  }, [isPaused, images.length]); // Re-run if pause state changes
  
  // Manual navigation functions
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-screen h-[500px] bg-gray-900 relative overflow-hidden">
      {/* IMAGE CONTAINER - shows all images but only current one is visible */}
      <div 
        className="h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // ← KEY: Slides images left
        onMouseEnter={() => setIsPaused(true)}  // Pause on hover
        onMouseLeave={() => setIsPaused(false)} // Resume on leave
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <img 
              src={img.url} 
              alt={img.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-4">{img.alt}</h1>
                <p className="text-xl">Slide {idx + 1} of {images.length}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* NAVIGATION ARROWS */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} className="text-gray-900" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition"
        aria-label="Next slide"
      >
        <ChevronRight size={32} className="text-gray-900" />
      </button>
      
      {/* DOTS INDICATOR - shows which slide is active */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-white w-8' // Active dot is wider
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* PAUSED INDICATOR */}
      {isPaused && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
          Paused
        </div>
      )}
    </div>
  );
}

export default Hero;