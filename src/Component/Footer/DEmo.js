import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Demo = () => {
    const handleCall = () => {
        window.open(`tel:${+917623916751}`);
      };
    
  return (
    <>
      <div className="p-10 text-white">

        <div className="inline-block rounded-full p-3 transition-all duration-500 bg-gradient-to-r from-red-400 hover:bg-red-500 animate-rotate">
          <a
            href="https://www.linkedin.com/in/vishal-virani-80143526a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-2xl" onClick={handleCall}  />
          </a>
        </div>

        <div className="inline-block rounded-full p-3 transition-all duration-500 bg-gradient-to-r from-red-400 hover:bg-red-500 animate-rotate">
          <a
            href="https://www.linkedin.com/in/vishal-virani-80143526a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
        
      </div>
    </>
  );
};

export default Demo;
