import { Play } from "lucide-react";
import "./VirtualTour.css";

const VirtualTour = () => {
  return (
    <section className="virtual-tour">

      <div className="virtual-tour-image">

        <div className="virtual-tour-overlay"></div>

        <div className="virtual-tour-content">

          <p className="section-label">
            VIRTUAL TOUR
          </p>

          <h2>
            Take a Virtual
            <span> Tour</span>
          </h2>

          <p>
            Explore the campus, learning spaces and
            student environment.
          </p>

          <button className="tour-button">
            <span className="play-icon">
              <Play size={18} fill="currentColor" />
            </span>

            Watch Virtual Tour
          </button>

        </div>

      </div>

    </section>
  );
};

export default VirtualTour;