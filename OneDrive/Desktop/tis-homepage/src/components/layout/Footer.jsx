import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-brand">

          <a href="#" className="footer-logo">
            TULAS
            <span>INTERNATIONAL SCHOOL</span>
          </a>

          <p>
            Inspiring purpose and creating possibilities
            for future-ready students.
          </p>

        </div>

        <div className="footer-column">

          <h3>Explore</h3>

          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus Life</a>
          <a href="#sports">Sports</a>

        </div>

        <div className="footer-column">

          <h3>Admissions</h3>

          <a href="#admissions">
            Apply Now
            <ArrowUpRight size={15} />
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Tulas International School. All rights reserved.
        </p>

        <p>
          Homepage Redesign
        </p>

      </div>

    </footer>
  );
};

export default Footer;