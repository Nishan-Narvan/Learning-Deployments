// ✅ Correct spelling + clean naming convention
// File name should be: ExistingCourses.jsx

import React from "react";
import Button from "./Button";

// ✅ Example: courses can later come from API or props
const courses = [
  {
    id: 1,
    title: "Full-Stack Development",
    img: "https://images.unsplash.com/photo-1761405378543-e74453424152?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=764",
  },
  {
    id: 2,
    title: "UI/UX Design Essentials",
    img: "https://images.unsplash.com/photo-1761246969211-4757c50faf45?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1031",
  },
  {
    id: 3,
    title: "UI/UX Design Advance",
    img: "https://images.unsplash.com/photo-1761246969211-4757c50faf45?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1031",
  }
];

const ExistingCourses = ({setOn}:{setOn: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    // ✅ Added padding + responsive width
    <div className="max-w-6xl  px-4 py-8 ">
      
      {/* ✅ Section title for context */}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Existing Courses
      </h2>

      {/* ✅ Responsive grid: 1 column on mobile, 2 on medium screens */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mx-6">
      
      {/* ✅ Loop through course data instead of hardcoding */}
      {courses.map((course) => (
        <div
        key={course.id}
        className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
        {/* ✅ Lazy loading improves performance */}
        <img
          src={course.img}
          alt={course.title}
          loading="lazy"
          className="object-cover w-full aspect-video h-64" // Increased height for the image
        />
        
        {/* ✅ Add info block for future extensibility */}
        <div className="p-4">
          <h3 className="text-lg font-medium">{course.title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            Learn the fundamentals and build real-world projects.
          </p>
        </div> {/* Closing grid container */}
        <Button onClick={()=>{
          setOn(prev=>!prev)
        }}>Enroll</Button>
        </div>
      ))}

    </div>
    </div>
  );
};

export default ExistingCourses;
