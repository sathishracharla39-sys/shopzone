import { ArrowRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./Sports.css";

const sports = [
  {
    name: "Cricket",
    image: "/cricket.jpg",
  },
  {
    name: "Football",
    image: "/football.jpg",
  },
  {
    name: "Swimming",
    image: "/swimming.jpg",
  },
  {
    name: "Basketball",
    image: "/basketball.jpg",
  },
];

const Sports = () => {
  return (
    <section className="sports-section" id="sports">

      <div className="sports-header">

        <div>
          <p className="section-label">SPORTS</p>

          <h2>
            Play Today.
            <br />
            <span>Lead Tomorrow.</span>
          </h2>
        </div>

        <a href="#admissions" className="sports-button">
          Explore TIS
          <ArrowRight size={17} />
        </a>

      </div>

      <div className="sports-grid">
  {sports.map((sport, index) => (
    <Reveal
      key={sport.name}
      delay={index * 0.1}
    >
      <article className="sport-card">

        <img
          src={sport.image}
          alt={sport.name}
        />

        <div className="sport-overlay">
          <h3>{sport.name}</h3>
        </div>

      </article>
    </Reveal>
  ))}
</div>

    </section>
  );
};

export default Sports;