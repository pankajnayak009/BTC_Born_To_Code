import React from "react";
// import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // example icon
import { FcOk } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  FcApproval,
  FcAutomatic,
  FcAssistant,
  FcBusinessman,
  FcOnlineSupport,
  FcBiohazard,
  FcServices,
} from "react-icons/fc";

import SDLCImage from "../images/SDLC_IMG-removebg-preview.png";

// import programmerImage from "../images/professional-programmer-working-late-dark-office.jpg";
import programmerImage from "../images/professional-programmer-working-late-dark-office.jpg";
import appreciationImage from "../images/employee-showing-appreciation-each-other (1).jpg";
import SDLC_IMG from "../images/SDLC_IMG-removebg-preview.png";

import "./Home.css";
// import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Carousel />
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
            src={programmerImage}
            alt="Professional Programmer Working Late"
          />
        </div>
      </div>
      {/* requirement and gathering  */}
      <div className="container">
        <div className="image">
          <img
            src={appreciationImage}
            alt="Employee showing appreciation to each other"
          />
        </div>
        <div className="processSection">
          <div className="process-section">
            <div className="process-steps">
              <div>
                {" "}
                <h2 className="section-title">
                  Requirement Gathering & Understanding
                </h2>
              </div>
              {/* <h2>Our Development Process</h2> */}
              <div className="step-item_1 ">
                <h2>Feasibility & Solutioning</h2>
              </div>
              <div className="step-item_1">
                <h2>Feasibility & Solutioning</h2>
              </div>
              <div className="step-item_1">
                <h2>Estimation & Approvals</h2>
              </div>
              <div className="step-item_1">
                <h2>Develop & Deliver</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Design & Development */}
      <div className=" Home_container">
        <div className="processSection ">
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
              ERP Development
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
              Dynamics Technical Consultant
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} />
              Dynamics Functional Consultant
            </li>
            <li className="step-item ">
              {" "}
              <FcOk style={{ marginRight: "5px" }} /> Dynamics Retail POS
              Customization
            </li>
          </ul>
        </div>
        <div className="image Home_image ">
          {/* <img
            src="src\assets\images\SDLC_IMG-removebg-preview.png"
            alt="Image"
          /> */}

          <img src={SDLC_IMG} alt="SDLC_IMG-removebg-preview" />
        </div>
      </div>
      <div className="team-container">
        <h2 className="heading-1">Are you Looking for a Consultant ? ? ?</h2>
        <p className="consultant_paragrap">
          We provide consulting in D365. We provide retail customization
          consulting. We have an expert group of technical and functional
          experts for dynamic implementation and customization.
        </p>
        <div className="team-grid">
          {/* 1st */}
          <div class="card  ">
            <div class="card-icon">
              <i class="fas fa-star"></i>
              <FcAutomatic size={40} />
            </div>
            <h3>Functional Consultant</h3>
            <ul class="card-list">
              <li>5-10 years experience</li>
              <li>Domain Expert</li>
              <li>Highly Qualified</li>
              <li>Analytical Skills</li>
              <li>Communication Skills</li>
              <li>Presentation Skills</li>
            </ul>
            <Link to="/contactus">
              <button class="card-button ">Get Started</button>
            </Link>
          </div>

          {/* 2nd  */}

          <div class="card">
            <div class="card-icon">
              <i class="fas fa-star"></i>
              <FcServices />
            </div>
            <h3>Technical Consultant</h3>
            <ul class="card-list">
              <li>5-10 years experience</li>
              <li>Domain Expert</li>
              <li>Highly Qualified</li>
              <li>Analytical Skills</li>
              <li>Communication Skills</li>
              <li>Presentation Skills</li>
            </ul>
            <Link to="/contactus">
              <button class="card-button ">Get Started</button>
            </Link>
          </div>

          {/* 3rd */}
          <div class="card">
            <div class="card-icon">
              <i class="fas fa-star"></i>
              <FcBusinessman size={40} />
            </div>
            <h3> Retail Commerce Technical</h3>
            <ul class="card-list">
              <li>5-10 years experience</li>
              <li>Domain Expert</li>
              <li>Highly Qualified</li>
              <li>Analytical Skills</li>
              <li>Communication Skills</li>
              <li>Presentation Skills</li>
            </ul>
            <Link to="/contactus">
              <button class="card-button ">Get Started</button>
            </Link>
          </div>

          {/* 4rd */}

          <div class="card">
            <div class="card-icon">
              <i class="fas fa-star"></i>
              <FcOnlineSupport size={40} />
            </div>

            <h3> Other Consultants </h3>
            <ul class="card-list">
              <li>5-10 years experience</li>
              <li>Domain Expert</li>
              <li>Highly Qualified</li>
              <li>Analytical Skills</li>
              <li>Communication Skills</li>
              <li>Presentation Skills</li>
            </ul>

            <Link to="/contactus">
              <button class="card-button ">Get Started</button>
            </Link>
          </div>
        </div>{" "}
      </div>{" "}
      {/* cards section  */}
    </div>
  );
};

export default Home;

{
  /* <div className="team-container">

        <h2 className='heading-1'>Start your    Digital transformation  journey
        <br />with these Microsoft Solutions</h2>
        <div className="team-grid">
            <div className="team-card">
                <img src="src/assets/images/user2.jpg" alt="Ds Dharmendra Singh"/>
                <h3>Ds Dharmendra Singh</h3>
                <p>Techno functional</p>
            </div>
            <div className="team-card">
                <img src="src/assets/images/user1.jpg" alt="Bhupender" />
                <h3>Bhupender</h3>
                <p>Technical Consultant</p>
            </div>
            <div className="team-card">
                <img src="src/assets/images/user1.jpg" alt="Harsh" />
                <h3>Harsh</h3>
                <p>Functional Consultant</p>
            </div>
            <div className="team-card">
                <img src="src/assets/images/user1.jpg" alt="Aaksh"/>
                <h3>Aaksh</h3>
                <p>Functional Consultant</p>
            </div>
            <div className="team-card">
                <img src="src/assets/images/user1.jpg" alt="Pankaj Nayak"/>
                <h3>Pankaj Nayak</h3>
                <p>Web Developer</p>
            </div>
        </div>
    </div> */
}
