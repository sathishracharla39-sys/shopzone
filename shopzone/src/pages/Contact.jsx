function Contact() {
  return (
    <div className="page-container">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Send us a message.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;