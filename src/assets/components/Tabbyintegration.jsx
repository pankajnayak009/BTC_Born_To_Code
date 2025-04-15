import React from "react";
import "./Tabbyintegration.css";
import Tabby_banner_1 from "../images/tabby_integration1.jpg";
import Tabby_banner_2 from "../images/tabby_integration2.jpg";

const Tabbyintegration = () => {
  return (
    <>
      {/* Desktop Banner */}
      <div className="container_about_us about_img_hide">
        <img
          src={Tabby_banner_1}
          alt="About Us Banner"
          className="image_about_us bannerImage_1 "
        />
        <div className="text-overlay">
          Tabby Integration with Microsoft Dynamics 365
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="container_about_us about_img_hide_on_desktop">
        <img
          src={Tabby_banner_2}
          alt="About Us Banner Mobile"
          className="image_about_us bannerImage_1"
        />
        <div className="text-overlay">
          Tabby Integration with Microsoft Dynamics 365
        </div>
      </div>

      <div className="tabby-integration-page">
        <div className="tabby-header">
          <h1>Tabby Integration with Microsoft Dynamics 365</h1>
          <p>
            Empower your business with modern payment solutions. Our Tabby-D365
            integration enables a smooth "Buy Now, Pay Later" experience for
            your customers.
          </p>
        </div>

        <div className="tabby-content">
          <h2>Why Choose This Integration?</h2>
          <p>
            In today’s competitive retail environment, providing flexible
            payment options like Tabby helps boost sales and customer
            satisfaction. With seamless Dynamics 365 integration, businesses can
            offer split payments, enhance conversions, and maintain financial
            visibility all in one platform.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>One-click Tabby activation in D365 environment</li>
            <li>Supports online store and in-store POS systems</li>
            <li>Detailed customer analytics and payment tracking</li>
            <li>100% secure and PCI-compliant transactions</li>
            <li>Automated transaction logs and reporting</li>
          </ul>

          <h2>Benefits for Your Business</h2>
          <ul>
            <li>Increase average order value</li>
            <li>Reduce cart abandonment rate</li>
            <li>Attract Gen-Z and Millennial buyers</li>
            <li>Enhance customer loyalty with smooth payment journeys</li>
          </ul>

          <h2>Our Services Include</h2>
          <ul>
            <li>Consultation and integration strategy planning</li>
            <li>Full-scale implementation with QA</li>
            <li>Custom dashboard integration in D365</li>
            <li>Post-integration monitoring & support</li>
          </ul>

          <h2>Watch Integration in Action</h2>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rVqvT9D-6XQ?si=Vh2-gCXgg-Y0aR8K"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <h2>Get Started</h2>
          <p>
            Ready to transform your checkout experience? Our D365-certified
            developers are here to help you integrate Tabby quickly and
            smoothly.
            <br />
            <strong>Contact us today</strong> to schedule a free consultation
            and demo!
          </p>
        </div>
      </div>
    </>
  );
};

export default Tabbyintegration;
