import React from "react";
import { Mail, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const handleCall = () => {
    window.open(`tel:${+917623916751}`);
  };
  return (
    <footer className="bg-gray-800 text-white p-10 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 gap-1">
          <p className="text-lg flex gap-2 items-center">
            <Mail />
            <span>vishalvirani0770@gmail.com</span>
          </p>
          <p className="flex gap-2 hover:cursor-pointer" onClick={handleCall}>
            <Phone />
            <span>+91 7623916751</span>
          </p>
        </div>
        <div className="flex flex-row md:flex-row gap-4">
          <div className="inline-block rounded-full p-3 transition-all duration-500 bg-gradient-to-r from-pink-500 hover:bg-yellow-500 animate-rotate">
            <a
              href="https://www.instagram.com/im_virani__19/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>

          <div className="inline-block rounded-full p-3 transition-all duration-500 bg-gradient-to-r from-blue-400 hover:bg-blue-500 animate-rotate">
            <a
              href="https://m.facebook.com/profile.php/?id=100010471511020&name=xhp_nt_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>

          <div className="inline-block rounded-full p-3 transition-all duration-500 bg-gradient-to-r from-green-400 hover:bg-green-500 animate-rotate">
            <a href="https://api.whatsapp.com/send?phone=7623916751" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>

          <div className="inline-block rounded-full p-3 transition-all duration-500 bg-gradient-to-r from-blue-600 hover:bg-blue-500 animate-rotate">
            <a
              href="https://www.linkedin.com/in/vishal-virani-80143526a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p>© 2024 Vishal Virani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
