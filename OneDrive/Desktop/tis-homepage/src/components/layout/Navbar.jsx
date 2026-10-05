import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#" className="logo">
          TULAS
          <span>INTERNATIONAL SCHOOL</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#academics" onClick={() => setMenuOpen(false)}>
            Academics
          </a>

          <a href="#campus" onClick={() => setMenuOpen(false)}>
            Campus Life
          </a>

          <a href="#sports" onClick={() => setMenuOpen(false)}>
            Sports
          </a>

          <a href="#admissions" onClick={() => setMenuOpen(false)}>
            Admissions
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <a href="#admissions" className="navbar-button">
          Apply Now
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;