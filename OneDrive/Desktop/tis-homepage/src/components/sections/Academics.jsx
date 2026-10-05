import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./Academics.css";

const programs = [
  {
    title: "Primary School",
    description:
      "Building strong foundations through curiosity, creativity and discovery.",
    image: "/primary.jpg",
  },
  {
    title: "Middle School",
    description:
      "Developing independent thinking, confidence and a deeper understanding of the world.",
    image: "/middle.jpg",
  },
  {
    title: "Senior School",
    description:
      "Preparing students for higher education, leadership and future opportunities.",
    image: "/senior.jpg",
  },
];

const Academics = () => {
  return (
    <section className="academics-section" id="academics">

      <div className="academics-header">

        <div>
          <p className="section-label">
            ACADEMICS
          </p>

          <h2>
            A Strong Foundation
            <span> for a Brighter Tomorrow</span>
          </h2>
        </div>

        <p>
          Our academic programs encourage curiosity,
          independent thinking and lifelong learning.
        </p>

      </div>

      <div className="programs-grid">

  {programs.map((program, index) => (
    <Reveal
      key={program.title}
      delay={index * 0.1}
    >
      <article className="program-card">

        <div className="program-image">
          <img
            src={program.image}
            alt={program.title}
          />
        </div>

        <div className="program-content">

          <div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>

          <button
            className="program-arrow"
            aria-label={`Learn more about ${program.title}`}
          >
            <ArrowUpRight size={20} />
          </button>

        </div>

      </article>
    </Reveal>
  ))}

</div>

    </section>
  );
};

export default Academics;