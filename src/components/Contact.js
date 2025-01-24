import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after submission (you can add form submission logic here)
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      
      {/* Contact Information */}
      <div className="contact-info">
        <p>
          <strong>Email:</strong>
          <a href="mailto:divyanagaraj2211@gmail.com">divyanagaraj2211@gmail.com</a>
        </p>
        <br></br>
        <p>
          <strong>Phone:</strong> +91-7845952214
        </p>
        <br></br>
        <p>
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/divya-nagaraj-38b5a128b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/divya-nagaraj
          </a>
        </p>
      </div>

      {/* Form Section */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {isSubmitted && <p className="thank-you-message">Thank you for reaching out!</p>}
    </section>
  );
};

export default Contact;
