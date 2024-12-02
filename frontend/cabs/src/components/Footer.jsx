import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* First Section: Get in Touch and Address */}
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-2">Email us at:</p>
            <p className="text-blue-400">
              <a href="mailto:thebrocabs@gmail.com">thecabbro@gmail.com</a>
            </p>
            <p className="text-gray-300 mb-2 mt-4">Call us at:</p>
            <p className="text-blue-400">
              <a href="tel:+919111034494">+919111034494</a>
            </p>
          </div>
          <div className="sm:ml-8 mt-6 sm:mt-0">
            <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
            <p className="text-gray-300">903/6 LIG Square, Indore, 452001</p>
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