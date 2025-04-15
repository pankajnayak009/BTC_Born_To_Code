import React from "react";
import "./RetailPOSReportPage.css";
import Reatail_pos_banner_1 from "../images/beautiful-family-standing-cash-counter.jpg";
import Reatail_pos_banner_2 from "../images/beautiful-family-standing-cash-counter-formobile.jpg";
import { Link } from "react-router-dom";

const RetailPOSReport = () => {
  return (
    <>
      {/* Desktop Banner */}
      <div className="container_about_us about_img_hide">
        <img
          src={Reatail_pos_banner_1}
          alt="About Us Banner"
          className="image_about_us bannerImage_1 "
        />
        <div className="text-overlay">Retail POS Reports in PDF</div>
      </div>

      {/* Mobile Banner */}
      <div className="container_about_us about_img_hide_on_desktop">
        <img
          src={Reatail_pos_banner_2}
          alt="About Us Banner Mobile"
          className="image_about_us bannerImage_1"
        />
        <div className="text-overlay">Retail POS Reports in PD</div>
      </div>
      <div className="retail-pos-page-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Retail POS Reports in PDF</h1>
          <p>
            Generate, view, and export professional Point of Sale reports
            directly into PDF format from your retail systems powered by
            Microsoft Dynamics 365.
          </p>
        </section>

        {/* About Section */}
        <section className="about-section">
          <h2>Overview</h2>
          <p>
            Retail POS (Point of Sale) reporting in PDF format allows businesses
            to analyze performance, track sales, monitor inventory, and gain
            deep insights across retail operations. The integration with
            Microsoft Dynamics 365 ensures seamless data fetching, formatting,
            and exporting to well-structured PDF files.
          </p>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="feature-box">
            <h3>One-Click PDF Export</h3>
            <p>
              Generate reports instantly with export-to-PDF functionality for
              daily, weekly, or custom date ranges.
            </p>
          </div>
          <div className="feature-box">
            <h3>Customizable Templates</h3>
            <p>
              Choose from pre-designed templates or create your own format with
              headers, tables, charts, and branding.
            </p>
          </div>
          <div className="feature-box">
            <h3>Detailed Sales Insights</h3>
            <p>
              Access transaction-level data, itemized sales, payment summaries,
              and cashier performance.
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
              src="https://www.youtube.com/embed/XKHHO7MRsCY?si=5eG8GBOyoukTcGAp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Improve Your Retail Reporting?</h2>
          <p>
            Contact us today to implement Retail POS PDF Reporting tailored to
            your business needs.
          </p>
          {/* <a href="mailto:contact@yourcompany.com" className="cta-button">
            Get in Touch
          </a> */}
          <Link to="/contactus">
            <button className="cta-button">Get in Touch</button>
          </Link>
        </section>

        {/* Footer comes from the layout */}
      </div>
    </>
  );
};

export default RetailPOSReport;
