import React from "react";
import "./Tamara_integration_page.css"; // Import the CSS file
import tamara_banner_1 from "../images/smiley-woman-using-her-smartphone-home-with-credit-card.jpg";
import tamara_banner_2 from "../images/smiley-woman-using-her-smartphone-home-with-credit-card-2.jpg";

import { Link } from "react-router-dom";

const Tamara_integration_page = () => {
  return (
    <>
      {/* Desktop Banner */}
      <div className="container_about_us about_img_hide">
        <img
          src={tamara_banner_1}
          alt="About Us Banner"
          className="image_about_us bannerImage_1 "
        />
        <div className="text-overlay">
          Streamline Your Business with Tamara Integration
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="container_about_us about_img_hide_on_desktop">
        <img
          src={tamara_banner_2}
          alt="About Us Banner Mobile"
          className="image_about_us bannerImage_1"
        />
        <div className="text-overlay">
          Streamline Your Business with Tamara Integration
        </div>
      </div>

      <div className="tamara-integration-page-container">
        {/* Hero Section */}
        {/* <section id="hero" className="hero-section">
          <h1>Streamline Your Business with Tamara Integration</h1>
          <p>
            Integrate Tamara with Microsoft Dynamics 365 to enhance payment
            processing, automate workflows, and improve customer experiences.
          </p>
        </section> */}

        {/* Main Content */}
        <section id="main-content" className="main-content">
          <h2>What is Tamara Integration?</h2>
          <p>
            Tamara’s integration with Microsoft Dynamics 365 helps businesses
            automate and simplify their payment processing. This powerful
            solution enhances your financial and customer service operations,
            ensuring efficiency and improved client satisfaction.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section">
          <h2>Key Features of Tamara Integration</h2>
          <div className="feature-item">
            <h3>Seamless Payment Processing</h3>
            <p>
              Automate payment collection and reconciliation in real-time,
              reducing manual intervention and errors.
            </p>
          </div>
          <div className="feature-item">
            <h3>Real-Time Data Sync</h3>
            <p>
              Sync your payment data instantly across all platforms, ensuring
              up-to-date financial records and visibility.
            </p>
          </div>
          <div className="feature-item">
            <h3>Improved Customer Experience</h3>
            <p>
              Deliver smooth, fast, and secure payment options for your
              customers, increasing satisfaction and loyalty.
            </p>
          </div>
        </section>

        {/* Video or Demo */}
        <section className="video-section">
          <h2>Watch How It Works</h2>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HqxPr1ZkADo?si=neRXFGyDCztlfIRu"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="cta-section">
          <h2>Get Started with Tamara Integration Today!</h2>
          <p>
            Start transforming your business workflows and customer experiences
            by integrating Tamara with Microsoft Dynamics 365.
          </p>
          {/* <a href="mailto:contact@yourcompany.com" className="cta-button">
            Contact Us
          </a> */}

          <Link to="/contactus">
            <button className="cta-button">Contact Us</button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Tamara_integration_page;
