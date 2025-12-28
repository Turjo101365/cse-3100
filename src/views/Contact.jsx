import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show an alert. Later, connect to backend or email API.
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="contact-container container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="contact-text text-center mb-4">
        Have questions about adoption or want to get in touch? <br />
        We’d love to hear from you!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
