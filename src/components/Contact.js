import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" value="Yonela" readOnly />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" value="yonimphini@gmail.com" readOnly />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" placeholder="Leave us a message, and we'll get back to you as soon as possible." />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;