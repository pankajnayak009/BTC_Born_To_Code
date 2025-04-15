import React from "react";
import "./Services.css";
import {
  FcApproval,
  FcAutomatic,
  FcAssistant,
  FcBusinessman,
  FcOnlineSupport,
  FcBiohazard,
  FcServices,
} from "react-icons/fc";

import { Link } from "react-router-dom";
// import services_banner_1 from "../images/services_banner.png";
// import services_banner_2 from "../images/sevices_on_mobile.jpg";
// public/images/services_banner.png
// public/images/sevices_on_mobile.jpg

export default function Services() {
  const services = [
    {
      title: "365 Commerce",
      description:
        "365 Commerce delivers end-to-end e-commerce solutions integrated with Microsoft Dynamics 365. It streamlines operations like inventory, sales, and customer service while offering personalized shopping experiences across all channels — ideal for both B2C and B2B businesses.",
    },
    {
      title: "Software Development",
      description:
        "Software development is the structured process of creating applications that meet specific business or user needs. It combines design, coding, and testing to build scalable and efficient solutions, supporting everything from websites to complex enterprise systems.",
    },
    {
      title: "Technical Consultancy",
      description:
        "Technical consultancy provides expert guidance to help businesses implement and optimize technology solutions. Consultants analyze systems, identify challenges, and deliver strategies that improve performance, efficiency, and innovation across digital platforms.",
    },
    {
      title: "Functional Consultancy",
      description:
        "Functional consultancy bridges the gap between business needs and technology solutions. Consultants work closely with stakeholders to gather requirements, streamline processes, and ensure systems like ERP or CRM align with organizational goals for maximum efficiency.",
    },
    {
      title: "Application Support",
      description:
        "Application support ensures the smooth operation of software systems by providing maintenance, troubleshooting, and user assistance. It helps resolve issues quickly, minimizes downtime, and keeps applications running efficiently to support daily business operations.",
    },
    {
      title: "Resource Outsourcing",
      description:
        "Resource outsourcing provides skilled professionals to support business operations without the need for full-time hiring. It offers flexibility, cost-efficiency, and access to specialized talent, helping organizations scale quickly and meet project demands effectively.",
    },
  ];

  return (
    <>
      {/* <img
        src="src\assets\images\services_banner.png"
        alt="Banner"
        className="bannerImage"
      /> */}
      <div class="container_about_us about_img_hide">
        <img
          src="/images/services_banner.png"
          alt="Image"
          class="image_about_us image_services_us bannerImage_1"
        />
      </div>
      <div class="container_about_us about_img_hide_on_desktop">
        <img
          src="/images/sevices_on_mobile.jpg"
          alt="Image"
          class="image_about_us bannerImage_1"
        />
        <div class="text-overlay">Services</div>
      </div>
      <div className="services-container ">
        {/* <h2 className="serviceHeader">Our Services</h2> */}
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p className="consultant_paragrap">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="team-container Consultancy">
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
    </>
  );
}
