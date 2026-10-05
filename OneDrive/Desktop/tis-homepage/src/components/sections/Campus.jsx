import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./Campus.css";

const campusItems = [
  {
    title: "Boarding Life",
    description: "A supportive residential environment that feels like home.",
    image: "/boarding.jpg",
  },
  {
    title: "Arts & Culture",
    description: "Creative experiences that encourage expression and confidence.",
    image: "/arts.jpg",
  },
  {
    title: "Clubs & Activities",
    description: "Opportunities to explore interests beyond the classroom.",
    image: "/clubs.jpg",
  },
  {
    title: "Student Community",
    description: "A welcoming environment where students learn and grow together.",
    image: "/community.jpg",
  },
];

const Campus = () => {
  return (
    <section className="campus-section" id="campus">

      <div className="campus-header">
        <div>
          <p className="section-label">CAMPUS LIFE</p>

          <h2>
            Discover.
            <br />
            Grow.
            <br />
            <span>Belong.</span>
          </h2>
        </div>

        <p>
          From modern residential facilities to student
          communities, TIS provides an environment where
          students can explore, connect and grow.
        </p>
      </div>

      <div className="campus-grid">
  {campusItems.map((item, index) => (
    <Reveal
      key={item.title}
      delay={index * 0.1}
    >
      <article className="campus-card">

        <img
          src={item.image}
          alt={item.title}
        />

        <div className="campus-card-overlay">
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>

          <button
            className="campus-arrow"
            aria-label={`Learn more about ${item.title}`}
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

export default Campus;