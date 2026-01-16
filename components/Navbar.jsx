import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-logo">Divyanshu Bisht</div>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/year1" end onClick={closeMenu}>
            Year 1
          </NavLink>
        </li>

        <li>
          <NavLink to="/year2" onClick={closeMenu}>
            Year 2
          </NavLink>
        </li>

        <li>
          <NavLink to="/year3" onClick={closeMenu}>
            Year 3
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
