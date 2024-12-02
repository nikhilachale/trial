import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* First Section: Get in Touch and Address */}
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="flex items-center text-gray-300 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
              Email us at:
            </p>
            <p className="text-blue-400">
              <a href="mailto:thebrocabs@gmail.com">thebrocabs@gmail.com</a>
            </p>
            <p className="flex items-center text-gray-300 mb-2 mt-4">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-400" />
              Call us at:
            </p>
            <p className="text-blue-400">
              <a href="tel:+919111034494">+91 91 11 0344 94</a>
            </p>
          </div>
          <div className="sm:ml-8 mt-6 sm:mt-0">
            <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
            <p className="flex items-center text-gray-300">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-400" />
              903/6 LIG Square, Indore, 452001
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-8">
          <p>&copy; 2024 TheBroCab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;