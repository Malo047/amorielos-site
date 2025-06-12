import React, { useState } from "react";
import "./MobileMenu.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>NAMODAS</h1>
        <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={`menu ${isOpen ? "menu-open" : ""}`}>
        <a href="#">HOME</a>
        <a href="#mainFashion">FASHION</a>
        <a href="#mainAbout">ABOUT</a>
        <a href="#mainContact">CONTACT</a>
        <a href="#"></a>
      </nav>
    </div>
  );
}