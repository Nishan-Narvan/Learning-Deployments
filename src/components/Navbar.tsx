import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full px-3 sm:px-6 py-2">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto flex-wrap gap-2">
        {/* Brand name */}
        <div className="text-2xl sm:text-3xl font-bold">
          HOODxDevs
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <Button
            className=" sm:px-4 sm:py-2 sm:text-base  transition-all"
            onClick={() => {
              window.location.href = "https://www.google.com";
            }}
          >
            Open Source
          </Button>
          <Button
            className=" sm:px-4 sm:py-2 sm:text-base transition-all"
            onClick={() => {
              window.location.href = "https://www.youtube.com";
            }}
          >
            YouTube
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
