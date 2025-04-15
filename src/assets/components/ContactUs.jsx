import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

import contactUsDesktopImg from "../images/business-people-communication-colleagues-working-concept.jpg";
import contactUsMobileImg from "../images/contact_us_mobile_view.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send form data to the backend
  const sendMail = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.message ||
      !formData.name ||
      !formData.phone
    ) {
      alert("All fields are required");
      return;
    }

    setStatusMessage("Sending...");

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      {" "}
      <div class="container_about_us about_img_hide">
        <img
          src={contactUsDesktopImg}
          alt="Image"
          class="image_Contact_Us  bannerImage_1"
        />

        <div class="text-overlay">Contact Us</div>
      </div>
      {/* Mobile-view */}
      <div class="container_about_us  about_img_hide_on_desktop ">
        <img
          src={contactUsMobileImg}
          alt="Image"
          class="image_about_us bannerImage_1"
        />

        <div class="text-overlay">Contact Us</div>
      </div>
      <div className="CONTACT_US_container">
        {/* <h2 className="title">Contact Us</h2> */}
        <div className="content">
          {/* Contact Form */}
          <div className="form-container">
            <h3 className="heading3">Send us a message</h3>
            <form onSubmit={sendMail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="input"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="input"
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="button">
                Submit
              </button>
            </form>
            {statusMessage && <p className="status">{statusMessage}</p>}
          </div>
          {/* Office Details and Map */}
          <div className="details">
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400569451!2d77.04417031591136!3d28.527252735015885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1739226635650!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="office-info">
              <h3>Our Office</h3>
              <p>
                <strong>Phone:</strong> +91 939585 3427
              </p>
              <p>
                <strong>Address:</strong> 123 Business St, Tech City, TX 45678
              </p>
              <p>
                <strong>Email:</strong> info@borntocodeitsolutions.com
              </p>
            </div>
            {/* Google Map */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
