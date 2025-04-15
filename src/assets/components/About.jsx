import React from "react";
import "./About.css";
import { FcOk } from "react-icons/fc";
import aboutUsBanner from "../images/aboutus_banner.jpg";
import aboutUsBanner2 from "../images/about_us_banner2.jpg";

function About() {
  return (
    <>
      {/* <img
        // src="src\assets\images\1.png"
        src="src\assets\images\aboutus_banner.jpg"
        alt="Banner"
        className="bannerImage  bannerImage_1"
      /> */}

      {/* About Section */}

      <div class="container_about_us about_img_hide">
        <img
          src={aboutUsBanner}
          alt="Image"
          class="image_about_us  bannerImage_1"
        />

        <div class="text-overlay">About Us</div>
      </div>

      {/* mobile-view*/}

      <div class="container_about_us about_img_hide_on_desktop ">
        <img
          src={aboutUsBanner2}
          alt="Image"
          class="image_about_us  bannerImage_1"
        />
        <div class="text-overlay">About Us</div>
      </div>

      {/* <div class="banner">
        <img
          src="src/assets/images/aboutus_banner.jpg"
          alt="About Us Banner"
          class="banner-image"
        />
        <div class="banner-text">Your Text Here</div>
      </div> */}

      <div className=" Home_container">
        <div className="processSection ">
          <h3>About Us</h3>
          <p>
            Born To Code IT Solutions Private Limited offers a dynamic platform
            where seasoned IT professionals collaborate to deliver cutting-edge
            solutions tailored to your business needs. Specializing in Microsoft
            Dynamics 365 consulting, we provide comprehensive software
            development, implementation, and support to help organizations
            streamline operations and drive growth.
          </p>
          <ul>
            <li className="step-item">
              <FcOk style={{ marginRight: "5px" }} />
              Web Developer
            </li>

            <li className="step-item">
              {" "}
              <FcOk style={{ marginRight: "5px" }} /> Business Analyst
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} /> Technical Consultant
            </li>

            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              Functional Consultant
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} /> Application Developer
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} /> Digital Marketing Team
            </li>
          </ul>
        </div>
        <div className="image Home_image ">
          <img
            src="src\assets\images\professional-programmer-working-late-dark-office.jpg "
            alt="Image"
          />
        </div>
      </div>
      {/* 
      <div className="about-container">
        <h2>About Us</h2>{" "}
        <p>
          <strong>Born To Code IT Solutions Private Limited</strong> is a
          leading technology company specializing in // //{" "}
          <strong> Microsoft Dynamics 365</strong>, custom software development,
          and IT consultancy. We help businesses streamline operations,
          integrate powerful solutions, and drive digital transformation.{" "}
        </p>
        <h3>Our Mission</h3>{" "}
        <p>
          Our mission is to empower businesses with cutting-edge technology
          solutions that enhance efficiency, scalability, and success.{" "}
        </p>
        <h3>Why Choose Us?</h3>{" "}
        <ul>
          <li>Certified **Microsoft Dynamics 365** experts</li>{" "}
          <li>Proven track record in **software development & integration**</li>
          <li>Tailored solutions to meet unique business needs</li>
          <li>Commitment to innovation and customer satisfaction</li>{" "}
        </ul>{" "}
      </div> */}

      {/* Design & Development */}
      <div className=" Home_container">
        <div className="processSection">
          <h3>Design & Development</h3>
          <p>
            We provide application development and website design for all
            business domains. We have domain experts to analyze the business and
            provide a perfect solution to your business management and
            promotion.
          </p>

          <ul>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              Software and Website
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              Dynamics Retail POS Customization
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              Mobile App Design
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              Dynamics Retail Implementation
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              ERP Development
            </li>
            <li className="step-item">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              Dynamics Technical Consultant
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              Dynamics Functional Consultant
            </li>
          </ul>
        </div>
        <div className="image Home_image ">
          <img
            src="src\assets\images\SDLC_IMG-removebg-preview.png "
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}

export default About;
