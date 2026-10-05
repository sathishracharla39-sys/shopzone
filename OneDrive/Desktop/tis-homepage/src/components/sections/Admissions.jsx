import { ArrowRight } from "lucide-react";
import "./Admissions.css";

const Admissions = () => {
  return (
    <section className="admissions-section" id="admissions">

      <div className="admissions-container">

        <div>
          <p className="admissions-label">
            ADMISSIONS
          </p>

          <h2>
            Be Part of a
            <span> Brighter Tomorrow.</span>
          </h2>

          <p>
            Discover an environment where students are
            encouraged to learn, explore and grow.
          </p>
        </div>

        <a href="#contact" className="admissions-button">
          Apply Now
          <ArrowRight size={19} />
        </a>

      </div>

    </section>
  );
};

export default Admissions;