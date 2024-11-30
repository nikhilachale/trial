import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-950 text-white flex items-center justify-between px-4 sm:px-8 py-4">
      <h1 className="text-2xl sm:text-3xl font-bold">ProCabs</h1>
      {/* <nav className="hidden sm:flex space-x-6">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav> */}
      <a
        href="tel:+919111034494"
        className="bg-white hover:bg-blue-700 text-blue-950 font-bold py-2 px-4 rounded text-sm sm:text-base"
      >
        Call Now
      </a>
    </div>
  );
};

export default Header;