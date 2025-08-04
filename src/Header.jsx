import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo and Title */}
          <div className="header-brand">
            <img
              src="/netstan.png"
              alt="Netstan Technology Logo"
              className="header-logo"
            />
            <h1 className="header-title">Netstan Technology</h1>
          </div>

          {/* Navigation */}
          <nav className="header-nav">
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <svg
                  className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#about" className="dropdown-item">
                    About
                  </a>
                  <a href="#contact" className="dropdown-item">
                    Contact Us
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
