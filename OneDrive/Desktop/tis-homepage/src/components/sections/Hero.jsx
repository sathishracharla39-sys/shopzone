import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-label">
          TULAS INTERNATIONAL SCHOOL
        </p>

        <h1>
          Inspiring Purpose.
          <br />
          Creating Possibilities.
        </h1>

        <p className="hero-description">
          A nurturing environment where students discover
          their potential, develop confidence and prepare
          for a changing world.
        </p>

        <div className="hero-buttons">

          <a href="#about" className="hero-primary">
            Explore TIS
            <ArrowRight size={18} />
          </a>

          <a href="#admissions" className="hero-secondary">
            <Play size={16} />
            Admissions
          </a>

        </div>

      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
};

export default Hero;