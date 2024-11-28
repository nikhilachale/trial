

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CarSection from "./components/CarSection";
import ServicesSection from "./components/ServiceSection";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HeroSection />
      <CarSection />
      <ServicesSection/>
    </div>
  );
}

export default App;



