import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-blue-900 text-white shadow-md rounded-full p-8 text-center flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-white mt-4 mb-6">{description}</p>
     
    </div>
  );
};

export default ServiceCard;