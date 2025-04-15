import React, { useState, useEffect } from "react";
import logo2 from "../images/compny-logo.jpg";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleServicesClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      if (!servicesDropdown) {
        setServicesDropdown(true);
      } else {
        navigate("/services");
        setServicesDropdown(false);
        setMenuOpen(false);
      }
    } else {
      setMenuOpen(false);
      setServicesDropdown(false);
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo-container2">
        <img src={logo2} width={150} alt="Company Logo" />
        <p>Born &nbsp; To &nbsp; Code</p>
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`nav-tabs ${menuOpen ? "open" : ""}`}>
        <Link onClick={() => setMenuOpen(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setMenuOpen(false)} to="/about">
          About Us
        </Link>

        <div
          className="dropdown"
          onMouseEnter={() => !isMobile && setServicesDropdown(true)}
          onMouseLeave={() => !isMobile && setServicesDropdown(false)}
        >
          <Link
            to="/services"
            className="dropdown-link"
            onClick={handleServicesClick}
          >
            Services
          </Link>

          {(servicesDropdown || !isMobile) && (
            <div className="dropdown-content">
              <Link
                to="/services/Tabbyintegration"
                onClick={() => {
                  setMenuOpen(false);
                  setServicesDropdown(false);
                }}
              >
                Tabby Integration with D365
              </Link>
              <Link
                to="/services/tamaraintegration"
                onClick={() => {
                  setMenuOpen(false);
                  setServicesDropdown(false);
                }}
              >
                Tamara Integration with D365
              </Link>
              <Link
                to="/services/retailposreport"
                onClick={() => {
                  setMenuOpen(false);
                  setServicesDropdown(false);
                }}
              >
                Retail POS Report in PDF
              </Link>
            </div>
          )}
        </div>

        <Link onClick={() => setMenuOpen(false)} to="/Microdynamics">
          Microsoft Dynamics D365
        </Link>
        <Link onClick={() => setMenuOpen(false)} to="/Webdevelopment">
          Web development
        </Link>
        <Link onClick={() => setMenuOpen(false)} to="/WebsiteDesigning">
          Website Designing
        </Link>
        <Link onClick={() => setMenuOpen(false)} to="/digitalMarketing">
          Digital marketing
        </Link>
        <Link onClick={() => setMenuOpen(false)} to="/SEO">
          SEO
        </Link>
        <Link onClick={() => setMenuOpen(false)} to="/contactus">
          Contact Us
        </Link>
      </nav>

      <div className="social-icons1">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={{ color: "black" }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={{ color: "black" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/borntocode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ color: "black" }} />
        </a>
        <a
          href="https://youtu.be/rVqvT9D-6XQ?si=CyMGRC20g75s8TPf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube style={{ color: "black" }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
