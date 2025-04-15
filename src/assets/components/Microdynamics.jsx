import React from "react";
import "./Microdynamics.css";
import microDynamicsBanner from "../images/micro_dynamics.jpg";
import microDynamicsMobile from "../images/microdynamics_mobile_view.jpg";

import dynamicImg1 from "../images/dynamic_img_1.webp";
import dynamicImg2 from "../images/dynamics_img_2.webp";
import dynamicImg3 from "../images/dynamics_img_3.webp";
import dynamicImg4 from "../images/dynamics_img_4.webp";
import dynamicImg5 from "../images/dynamics_img_5.webp";
import dynamicImg6 from "../images/dynamics_img_6.webp";
import dynamicImg7 from "../images/dynamics_img_7.webp";
import dynamicImg8 from "../images/dynamics_img_8.webp";
import dynamicImg9 from "../images/dynamics_img_9.webp";
import dynamicImg10 from "../images/dynamics_img_10.webp";
import dynamicImg11 from "../images/dynamics_img_11.webp";
import dynamicImg12 from "../images/dynamics_img_12.webp";

const Microdynamics = () => {
  return (
    <>
      <img
        // src="src\assets\images\1.png"
        src={microDynamicsBanner}
        alt="Banner"
        className="bannerImage  bannerImage_1  about_img_hide"
      />

      <div class="container_about_us about_img_hide_on_desktop ">
        <img
          src={microDynamicsMobile}
          alt="Image"
          class="image_about_us  bannerImage_1"
        />

        <div class="text-overlay">Microsoft Dynamics 365</div>
      </div>

      <div className="content1  container">
        <h2 className="title">Microsoft Dynamics 365 </h2>

        <p className="paragrab_align_center">
          Did you know that it’s possible to integrate all your company’s
          business processes without the need of a large investment? Microsoft
          Dynamics 365, which encompasses a set of intelligent business-oriented
          applications, goes beyond traditional CRM and ERP. It connects
          internal teams, customers and partners, and automates processes
          ranging from digital marketing and demand generation, going through
          sales, financial management, production, and customer service
          activities.
        </p>
      </div>
      {/* <div className="Microdynamics_cards">
        <div className="Microd_img">
          <img src="src\assets\images\dynamic_img_1.webp" alt="" />
        </div>

        <div className="micro_card_content">
          <h1 class="image-heading">Marketing </h1>
          <p>
            drive bolder strategies and campaigns with Microsoft's cloud-fueled
            marketing technology
          </p>
        </div>
      </div> */}
      {/* Grid gererator template */}
      <div class="parent">
        <div class="div1">
          <div className="image-container ">
            <img src={dynamicImg1} alt="Sample Image" />
            <h1 className="image-heading">Marketing</h1>
            <p className="image-para">
              drive bolder strategies and campaigns with Microsoft's
              cloud-fueled marketing technology
            </p>
          </div>
        </div>
        <div class="div2">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg2} alt="Sample Image" />
            <h1 className="image-heading">Sales</h1>
            <p className="image-para">
              Imporove your company's sales team performance
            </p>
          </div>
        </div>
        <div class="div1">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg3} alt="Sample Image" />
            <h1 className="image-heading ">Project operations</h1>
            <p className="image-para">
              Connect all relevant departments into a single system to deliver
              successful and profitable projects
            </p>
          </div>
        </div>

        {/* div 4 */}
        <div class="div1">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg4} alt="Sample Image" />
            <h1 className="image-heading">customer service </h1>
            <p className="image-para">
              unrivalled digital engagement tools to revolutionize your customer
              service
            </p>
          </div>
        </div>

        {/* div 5 */}
        <div class="div5">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg5} alt="Sample Image" />
            <h1 className="image-heading">Field service</h1>
            <p className="image-para">
              Be more than just reactive: provide your customers with proactive
              and predictive services
            </p>
          </div>
        </div>
        <div class="div6">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg6} alt="Sample Image" />
            <h1 className="image-heading">Finanace</h1>
            <p className="image-para">
              Streamline and integrate finance abd operations with excellence
            </p>
          </div>
        </div>
        <div class="div7">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg7} alt="Sample Image" />
            <h1 className="image-heading">Commerrce</h1>
            <p className="image-para">
              Transform how you serve your customers across difference channels
            </p>
          </div>
        </div>

        {/* div8 */}
        <div class="div1">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg8} alt="Sample Image" />
            <h1 className="image-heading"> Suppply Management </h1>
            <p className="image-para">
              Build resillent, agile and sustainable supply chain with microsoft
              Dynamics 365 Supply chain Management
            </p>
          </div>
        </div>

        {/* div 9  */}

        <div class="div1">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg9} alt="Sample Image" />
            <h1 className="image-heading">Business Central</h1>
            <p className="image-para">
              Make it easy and fast foryour or medium-sized business sized
              business to grow
            </p>
          </div>
        </div>

        {/* div10 */}

        <div class="div1">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg10} alt="Sample Image" />
            <h1 className="image-heading"> Human Resources </h1>
            <p className="image-para">
              Lock down industry-leading candidates- Reap big' returns onyour HR
              investment:
            </p>
          </div>
        </div>

        {/* div11 */}
        <div class="div1">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg11} alt="Sample Image" />
            <h1 className="image-heading">Customer Insights</h1>
            <p className="image-para">
              Get to know your customers in depth with Microsoft Dynamics-365
              Customer Insights-I
            </p>
          </div>
        </div>

        {/* div12 */}
        <div class="div1">
          {" "}
          <div className="image-container ">
            <img src={dynamicImg12} alt="Sample Image" />
            <h1 className="image-heading">Contact Center</h1>
            <p className="image-para">
              Transform your contact center withNAl-powered, omnichannelGutions
              that deliverP?eamless engagenient and efficienCy.
            </p>
          </div>
        </div>
      </div>
      {/* 
  <div class="image-container">
    <img src="your-image.jpg" alt="Sample Image"> 
    <h1 class="image-heading">Your Heading Here</h1>
  </div> */}
      <div className="dynamics_helps">
        <h1 className="dh1">How can Dynamics 365 help your organization?</h1>
      </div>
      <div className="content1  container Dynamics_p ">
        <h2 className="title">Integration </h2>

        <p className="">
          Microsoft Dynamics 365 integrates operational, financial, and customer
          data into a single system, reducing data and information silos, as
          well as potential errors. In this way, it accelerates processes and
          consequently generates more efficiency.
        </p>

        <h2 className="title">Scalability and Intelligence</h2>

        <p className="">
          With Microsoft Dynamics 365, your operation becomes hyperconnected,
          smooth, assertive, efficient, and productive, thus generating scale
          and more value for the business, as well as for customers and
          employees. The data managed by the applications provide predictive and
          AI-driven insights to help with quick decision-making.
        </p>

        <h2 className="title">Agility</h2>

        <p className="">
          With all processes integrated, your operation becomes faster. The
          exchange of information becomes fully automated, unified on a single
          screen, with more transparency in communication and data control,
          enabling a 360º view of the demands and their respective status.
        </p>
      </div>
    </>
  );
};

export default Microdynamics;
