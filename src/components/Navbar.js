'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">Blush Consulting</span>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#header" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="navbar-link">
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className="navbar-link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
