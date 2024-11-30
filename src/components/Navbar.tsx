"use client";
import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  


  return (
    <div>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 py-4 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold">Shahrukh Portfolio</h1>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
          <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row gap-6">
             <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-blue-400"
                >
                Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("/project")}
                  className="hover:text-blue-400"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("/contact")}
                  className="hover:text-blue-400"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("/links")}
                  className="hover:text-blue-400"
                >
                  Social Links
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="flex flex-col justify-center items-center h-screen px-6"
        id="home"
      >
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <Image
            src="/shah pic.jpeg"
            alt="Shahrukh Ishtiaq"
            width={500} height={500}
            
          />
        </div>
        <h2 className="text-3xl md:text-5xl mt-6 font-bold">
          Shahrukh Ishtiaq
        </h2>
        <p className="text-xl text-blue-300 mt-2">Software Engineer</p>
      </section>

            {/* Projects Section */}
            <section className="py-16" id="/project" >
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
    
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Project 1</h3>
            <a href="https://milestones5-dusky.vercel.app/" target="_blank">
              <p className="mt-2 text-gray-300">Resume builder.</p>
              <Image src="/projectpic1.jpg" alt="img1"  width={500} height={500}/>
            </a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Project 2</h3>
            <a href="https://milestone1-phi-eight.vercel.app/" target="_blank">
              <p className="mt-2 text-gray-300">Resume</p>
              <Image src="/projectpic2.jpg" alt="img2"   width={500} height={500}/>
            </a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Project 3</h3>
            <a href="/" target="_blank">
              <p className="mt-2 text-gray-300">Portfolio</p>
              <Image src="/projectpic3.jpg" alt="img3"  width={500} height={500} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div className="py-7">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 text-gray-300">
          {[
            "React",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Git",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-md transition-shadow"
            >
              <span className="text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    
{/* contact */}

  <div className="min-h-screen flex items-center justify-center " id="/contact">
    <div className="bg-gray-700 text-center hover:shadow-md transition-shadow shadow-lg rounded-lg p-8 max-w-md w-full">
      <h1 className="text-3xl font-bold text-white text-center mb-6">Contact Us</h1>
      <p className="text-white text-center mb-6">
        Have any questions or concerns? We did love to hear from you!
      </p>
    
      <form action="https://formspree.io/f/manypbbk" method="POST" >
        {/* <!-- Name --> */}
        <div className="mb-5">
          <label about="name" className="block text-sm font-medium text-white">Name</label>
          <input className="text-black text" id="name" name="name" placeholder=" Your Name" required/>
         
        </div>
        
        {/* <!-- Email --> */}
        <div className="mb-5">
          <label about="email" className="block text-sm font-medium text-white">Email</label>
          <input className="text-black email" id="email" name="email" placeholder=" Your Email" required
          />
        </div>
        
        {/* <!-- Message --> */}
        <div className="mb-5">
          <label about ="message" className="block text-sm font-medium text-white">Message</label>
          <textarea id="message" name="message"  placeholder="Your Message" required
            className="text-black mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        
        {/* <!-- Submit Button --> */}
        <button className= "w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
          Send Message
        </button>
      </form>
    </div>
  </div>
</div> 

);
}; 
export default Navbar; 

