
"use client";

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const scrollToSection = (id:any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-11">
      <div className="max-w-7xl mx-auto px-5">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-5 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-medium">Shahrukh's Portfolio</h2>
            <p className="text-gray-400 mt-2">
              Creating meaningful digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-gray-400 text-sm">
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-500">Home</button>
            <button onClick={() => scrollToSection("/project")} className="hover:text-blue-500">Projects</button>
            <button onClick={() => scrollToSection("/contact")} className="hover:text-blue-500">Contact</button>
            <button onClick={() => scrollToSection("/links")} className="hover:text-blue-500">Social Links</button>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-5 md:mt-0" id='/links'>
            <a href='mailto:shahrukhishtiaq29@gmail.com' target="_blank" rel="noopener noreferrer">
              <SiGmail className="text-xl hover:text-red-500" />
            </a>
            <a href="https://facebook.com/shahrukh.ishtiaq.90?mibextid=zbwkwl" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/shahrukh_khan_229" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com/in/shahrukh-ishtiaq-2534a524b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © 2024 Shahrukh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;