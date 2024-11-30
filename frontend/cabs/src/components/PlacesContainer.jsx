import React from "react";
import PlaceCard from "./PlaceCard";

// Importing the images manually
import Maheshwar from "../images/maheshwar.jpg";
import Ujjain from "../images/ujjain.jpg";
import Omk from "../images/omkareshwar.jpg";
import Mandu from "../images/mandu.jpg"; 
import JamGate from "../images/jamgate.jpg"
import Patalpani from "../images/patalpani.jpg"
import Rajwada from "../images/rajwada.jpg"
import India from "../images/india.png"

// Correct import for Rajwada image

const PlacesContainer = () => {
  const places = [
    { name: "Mandu", image: Mandu },
    { name: "Maheshwar ", image: Maheshwar },
    { name: "Mahakal Ujjain", image: Ujjain },
    { name: "Omkareshwar", image: Omk },
    { name: "Rajwada", image: Rajwada },
    { name: "Jam Gate", image: JamGate },
    { name: "PatalPani", image: Patalpani },
    { name: "Pan India", image: India },
    
  ];

  return (
    <div className="py-10 px-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-3xl font-bold mb-8">Explore Places</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {places.map((place, index) => (
          <PlaceCard key={index} image={place.image} name={place.name} />
        ))}
      </div>
    </div>
  );
};

export default PlacesContainer;