import { Quote } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./Testimonials.css";

const testimonials = [
  {
    text: "A supportive environment that encourages students to learn, grow and become confident individuals.",
    name: "Parent",
    role: "TIS Community",
  },
  {
    text: "The combination of academics, activities and student development creates a well-rounded learning experience.",
    name: "Parent",
    role: "TIS Community",
  },
  {
    text: "The school provides students with opportunities to explore their interests and develop their potential.",
    name: "Parent",
    role: "TIS Community",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">

      <div className="testimonials-header">
        <p className="section-label">TESTIMONIALS</p>

        <h2>
          Trusted by Parents.
          <br />
          <span>Loved by Students.</span>
        </h2>
      </div>

      <div className="testimonials-grid">

        {testimonials.map((testimonial, index) => (
  <Reveal
    key={testimonial.text}
    delay={index * 0.1}
  >
    <article className="testimonial-card">

      <Quote
        className="quote-icon"
        size={32}
      />

      <p className="testimonial-text">
        "{testimonial.text}"
      </p>

      <div className="testimonial-author">

        <div className="author-avatar">
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.role}</p>
        </div>

      </div>

    </article>
  </Reveal>
))}

      </div>

    </section>
  );
};

export default Testimonials;