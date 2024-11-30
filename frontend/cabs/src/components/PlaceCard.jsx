import React from "react";

const PlaceCard = ({ image, name }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg shadow-md"
      />
      <p className="text-lg font-semibold mt-2">{name}</p>
    </div>
  );
};

export default PlaceCard;