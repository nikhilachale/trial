import React from "react";
import Coverimg from "../images/cover.jpg";

const HeroSection = () => {
  return (
    <section
      className="h-[50vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Coverimg})` }}
    >
      <h2 className="text-4xl font-bold">Affordable Cab Service</h2>
      <p className="text-lg mt-2">Your destination awaits!</p>
    </section>
  );
};

export default HeroSection;