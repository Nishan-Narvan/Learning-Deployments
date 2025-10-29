import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from '../public/wallhaven-nzrvdg.jpg';
import slide2 from '../public/wallhaven-4v73q5.jpg';
import slide3 from '../public/wallhaven-pkmxgm.png';
import slide4 from '../public/wallhaven-yxy71k.png';

 const Hero=()=>{
  // STATE: Track which image is currently shown
  const images = [
    { url: slide1, alt: 'Slide 1' },
    { url: slide2, alt: 'Slide 2' },
    { url: slide3, alt: 'Slide 3' },
    { url: slide4, alt: 'Slide 4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
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
              className="w-full h-full object-contain"
            />
            {/* Overlay for text */}
            <div className="absolute inset bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-4">{img.alt}</h1>
               
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