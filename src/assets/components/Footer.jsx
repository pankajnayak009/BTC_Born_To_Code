import React from "react";
import logo2 from "../images/compny-logo.jpg";
import "./Footer.css";
import {
  FaBeer,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import aboutUsBanner2 from "../images/side-view-adult-paying-with-card.jpg";
import Company_logo from "../images/compny-logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          // src="src\assets\images\compny-logo.jpg"
          src={Company_logo}
          width={100}
          alt="Company Logo"
          className="mobile_view_img"
        />

        <div class="footer-col logo-about">
          <h2 class="footer-logo footer_Desktop_logo_img">
            <img src={Company_logo} width={100} alt="Company Logo" />
          </h2>

          <p>Born To Code IT Solutions Private Limited</p>
          <p>
            Provides Microsoft Dynamics 365 Expert Consultants. We develop
            software and ERP for all kinds of businesses. We integrate hardware
            with business software and ERP.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="footer-section">
          <h3>Helpful Links</h3>
          <ul>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                About Us
              </Link>
            </li>
            <li>
              <Link to="/features">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                Features
              </Link>
            </li>
            <li>
              <Link to="/faqs">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                FAQ’s
              </Link>
            </li>
            <li>
              <Link to="/Blogs">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="/services">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                Services & Consultancy
              </Link>
            </li>
            <li>
              <Link to="/erp-development">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                ERP Development
              </Link>
            </li>
            <li>
              <Link to="/Webdevelopment">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/websitedesigning">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                Website Designing
              </Link>
            </li>
            <li>
              <Link to="/contactus">
                <FontAwesomeIcon icon={faChevronRight} className="icon-space" />{" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <strong>Phone:</strong> +91 939585 3427
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:info@borntocodeitsolutions.com">
                {" "}
                info@borntocodeitsolutions.com
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/borntocode/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtu.be/rVqvT9D-6XQ?si=CyMGRC20g75s8TPf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; 2025 Born To Code IT Solutions Private Limited. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
