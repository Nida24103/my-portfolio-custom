import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../app/styles/hero.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand">Nida</div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li className="menuLink">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="menuLink">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="menuLink">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="menuLink">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
