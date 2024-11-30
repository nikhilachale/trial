

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CarSection from "./components/CarSection";
import ServicesSection from "./components/ServiceSection";
import PlacesContainer from "./components/PlacesContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection/>
      <CarSection />
      <PlacesContainer/>
      
      <Footer/>
    </div>
  );
}

export default App;



