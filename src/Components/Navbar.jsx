import React, {useState } from "react";
import menuIcon from "../assets/menu.png";
import crossIcon from "../assets/close.png";
import logo from "../assets/cas_logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const whatsAppLink =
      "https://chat.whatsapp.com/BhEtOii34mF9rCl8vwqAf9";
    window.open(whatsAppLink, "_blank");
  };

  return (
    <div className="fixed w-full bg-white shadow-xl md:p-5 p-2 z-50">
      <div className="flex items-center justify-between md:grid md:grid-cols-2 md:gap-3">
        <div className="flex items-center md:gap-2 gap-0">
          <img className="md:h-15 md:w-15 h-10 w-10" src={logo} alt="logo" />
          <h1 className="font-bold text-center md:text-xl lg:text-3xl text-blue-800 text-base">
          Computer Application Society
          </h1>
        </div>

        <ul className="hidden md:flex md:gap-2 lg:gap-8 md:justify-between lg:justify-center items-center">
          <a
            href="#Home"
            className="hover:font-semibold hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#Events"
            className="hover:font-semibold hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            Events
          </a>
          <a
            href="#About"
            className="hover:font-semibold hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            About
          </a>
          <a
            href="#Contact"
            className="hover:font-semibold hover:underline transform transition-transform duration-300 hover:scale-105"
          >
            Contact
          </a>
          <button
            className="border rounded-sm p-2 lg:p-3 font-semibold my-auto bg-amber-400 hover:bg-amber-500 ml-10 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={handleClick}
          >
            Join Socity
          </button>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <img
            src={isOpen ? crossIcon : menuIcon}
            alt="menu"
            className="w-6 h-6"
          />
        </button>
      </div>


      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 p-5">
          <a href="#Home" className="hover:font-semibold hover:underline">
            Home
          </a>
          <a href="#Events" className="hover:font-semibold hover:underline">
            Events
          </a>
          <a href="#About" className="hover:font-semibold hover:underline">
            About
          </a>
          <a href="#Contact" className="hover:font-semibold hover:underline">
            Contact
          </a>
          <button
            className="border rounded-sm p-2 bg-amber-400 hover:bg-amber-500"
            onClick={handleClick}
          >
            Join Society
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
