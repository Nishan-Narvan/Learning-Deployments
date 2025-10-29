import React from "react";
import Button from "./Button";

const NewCourses = ({setOn}:{setOn: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <section className="md:max-w-5xl sm:max-w-xl mx-auto p-6 py-8 h-screen font-instrument">
      {/* ✅ Clean heading */}
      <h1 className="text-2xl font-semibold text-center mb-10">
        New Courses
      </h1>

      {/* ✅ Responsive grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5 gap-30">
        
        {/* ✅ First course card with figure + reserved image dimensions */}
        <figure className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
          <img
            src="https://i.pinimg.com/474x/ae/a8/a4/aea8a4ef38383042b6bf5cee638765b4.jpg"
            alt="Course 1 — React Frontend Essentials"
            loading="lazy"
            decoding="async"
            width="474"
            height="266"
            className="object-cover w-full aspect-video"
          />
          <figcaption className="p-4">
            <h3 className="text-lg font-medium">Hood Essentials</h3>
            <p className="text-sm text-gray-600 mt-1">
              Learn the hood fundamentals in the new world.
            </p>
          </figcaption>
          <Button onClick={()=>{
          setOn(prev=>!prev)
        }}>Enroll</Button>
        </figure>

        {/* ✅ Second course card */}
        <figure className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
          <img
            src="https://wallpapercave.com/wp/wp4218295.jpg"
            alt="Course 2 — Node.js Backend Mastery"
            loading="lazy"
            decoding="async"
            width="500"
            height="281"
            className="object-cover w-full aspect-video"
          />
          <figcaption className="p-4">
            <h3 className="text-lg font-medium"> Swag Mastery</h3>
            <p className="text-sm text-gray-600 mt-1">
              Master the swag like "Young, Black and Rich"
            </p>
          </figcaption>
          <Button onClick={()=>{
          setOn(prev=>!prev)
        }}>Enroll</Button>
        </figure>
      </div>
    </section>
  );
};

export default NewCourses;
