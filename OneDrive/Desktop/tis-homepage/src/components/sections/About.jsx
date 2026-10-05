import { Check, ArrowRight } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <Reveal>
          <div className="about-image">
            <img
              src="/campus.jpg"
              alt="Tulas International School campus"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="about-content">
            <span className="section-label">WHY TIS</span>

            <h2>
              A Nurturing Environment
              <span> for Future Leaders.</span>
            </h2>

            <p>
              At Tulas International School, students are encouraged to
              discover their potential, develop confidence and grow into
              responsible global citizens.
            </p>

            <div className="about-benefits">
              <div className="about-benefit">
                <span>01</span>
                <div>
                  <h3>Holistic Development</h3>
                  <p>
                    Academics, sports, arts and activities support
                    well-rounded growth.
                  </p>
                </div>
              </div>

              <div className="about-benefit">
                <span>02</span>
                <div>
                  <h3>Student Wellbeing</h3>
                  <p>
                    A supportive environment where students feel
                    confident, safe and valued.
                  </p>
                </div>
              </div>

              <div className="about-benefit">
                <span>03</span>
                <div>
                  <h3>Global Perspective</h3>
                  <p>
                    Students develop curiosity, independence and
                    awareness of the wider world.
                  </p>
                </div>
              </div>

              <div className="about-benefit">
                <span>04</span>
                <div>
                  <h3>Personalized Attention</h3>
                  <p>
                    A learning environment focused on individual
                    strengths and aspirations.
                  </p>
                </div>
              </div>
            </div>

            <a href="#academics" className="about-link">
              Explore TIS →
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default About;