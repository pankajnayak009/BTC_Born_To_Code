import React from "react";
import "./Webdevelopment.css";
import codeLogo from "../images/codeLogo.png";
import bannerWebDevelopment from "../images/banner-web-development.jpg";
import webDevelopmentMobile from "../images/web_development_mobile_img.jpg";
import { Link } from "react-router-dom";

// import Cardlogo from "../images/clogo.png";
// import "./Services.css";
const Webdevelopment = () => {
  return (
    <>
      <img
        // src="src\assets\images\1.png"
        src={bannerWebDevelopment}
        alt="Banner"
        className="bannerImage  bannerImage_1 about_img_hide"
      />

      {/* mobile-view*/}

      <div class="container_about_us about_img_hide_on_desktop ">
        <img
          src={webDevelopmentMobile}
          alt="Image"
          class="image_about_us  bannerImage_1"
        />
        <div class="text-overlay">Web Development</div>
      </div>

      <div className="content1  container">
        <h2 className="title">👨‍💻 Web Development </h2>

        <p className="paragrab_align_center">
          <strong>Web Development</strong> Web development is the process of
          creating and maintaining websites or web applications that run on the
          internet. It involves several tasks, including designing the layout of
          web pages, writing code, and ensuring that websites are responsive,
          fast, and user-friendly. Web development is divided into two main
          areas: front-end development, which focuses on what users see and
          interact with (using HTML, CSS, JavaScript, etc.), and back-end
          development, which handles server-side operations, databases, and
          application logic.Full-stack developers work on both front-end and
          back-end. Web development plays a vital role in today’s digital world,
          powering everything from simple personal blogs to complex e-commerce
          platforms and enterprise-level applications.
        </p>
      </div>

      <div className=" content1 team-container">
        <h2 className="webdev_containe_h2"> What We Do </h2>
        <p className="consultant_paragrap">
          Welcome to our Web Development hub — where creativity meets
          functionality! We are a dedicated team of skilled developers committed
          to building modern, responsive, and high-performance websites tailored
          to meet your needs.
        </p>

        {/* 1st card  */}
        <div className="webDevCard">
          <div className="cardInner">
            <div className="imageSection">
              <img src={codeLogo} alt="logo" />
            </div>
            <div className="textSection">
              <h3>FRONT END</h3>
              {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              </p> */}

              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
              <Link to="/contactus">
                <button class="card-button ">Get Started</button>
              </Link>
            </div>
          </div>
        </div>

        {/* 2nd card */}
        <div className="webDevCard  webDevCard2">
          <div className="cardInner">
            <div className="imageSection">
              <img src={codeLogo} alt="logo" />
            </div>
            <div className="textSection">
              <h3>BACK END</h3>
              {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              </p> */}

              <ul>
                <li>C#</li>
                <li>Java</li>
                <li>ASP.NET</li>
                <li>SQL / MySQL</li>
                <li>Node.js</li>
                <li>RESTful APIs</li>
              </ul>
              <Link to="/contactus">
                <button class="card-button ">Get Started</button>
              </Link>
            </div>
          </div>
        </div>

        {/* 3rd card  */}

        <div className="webDevCard webDevCard3 ">
          <div className="cardInner">
            <div className="imageSection">
              <img src={codeLogo} alt="logo" />
            </div>
            <div className="textSection">
              <h3>DATABASE</h3>
              {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              </p> */}

              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Microsoft SQL Server</li>
                <li>Redis</li>
                <li>Firebase Realtime Database</li>
              </ul>
              <Link to="/contactus">
                <button class="card-button ">Get Started</button>
              </Link>
            </div>
          </div>
        </div>

        {/* 4th card */}

        <div className="webDevCard webDevCard4">
          <div className="cardInner">
            <div className="imageSection">
              <img src={codeLogo} alt="logo" />
            </div>
            <div className="textSection">
              <h3>Version Control</h3>
              {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              </p> */}

              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>Version Control Concepts</li>
                <li>Bitbucket</li>
                <li>Commit & Pull Request </li>
              </ul>
              <Link to="/contactus">
                <button class="card-button ">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us section */}

      <section class="whychoosewrapper">
        <h1 class="whychoosetitle">Why Choose Us</h1>

        <div class="featuresgrid">
          <div class="featurecard">
            <h3 class="featuretitle">Experienced & Passionate Team</h3>
            <p class="featuredescription">
              Our developers, designers, and strategists work together to
              deliver high-quality, tailored web solutions.
            </p>
          </div>

          <div class="featurecard">
            <h3 class="featuretitle">Client-Centric Approach</h3>
            <p class="featuredescription">
              We take time to understand your goals and build custom solutions
              that meet your needs and vision.
            </p>
          </div>

          <div class="featurecard">
            <h3 class="featuretitle">Modern Technologies</h3>
            <p class="featuredescription">
              We build fast, secure, and scalable websites using modern tools
              like React, ASP.NET, and MySQL.
            </p>
          </div>

          <div class="featurecard">
            <h3 class="featuretitle">Fully Responsive Design</h3>
            <p class="featuredescription">
              Your site will look perfect on desktops, tablets, and phones with
              our mobile-first design approach.
            </p>
          </div>

          <div class="featurecard">
            <h3 class="featuretitle">SEO & Performance Optimized</h3>
            <p class="featuredescription">
              We ensure your website is optimized for search engines, fast
              loading, and easy to navigate.
            </p>
          </div>

          <div class="featurecard">
            <h3 class="featuretitle">On-Time Delivery</h3>
            <p class="featuredescription">
              We follow agile processes and strict timelines to deliver every
              project when you need it.
            </p>
          </div>

          <div class="featurecard">
            <h3 class="featuretitle">Post-Launch Support</h3>
            <p class="featuredescription">
              We provide maintenance, updates, and support to keep your site
              secure and up-to-date.
            </p>
          </div>

          <div class="featurecard">
            <h3 class="featuretitle">Transparent Communication</h3>
            <p class="featuredescription">
              We keep you informed at every step with clear, open, and timely
              communication.
            </p>
          </div>
        </div>
      </section>

      {/* our process section  */}

      <section class="processcontainer">
        <h2 class="processtitle">Our Process</h2>
        <div class="processsteps">
          <div class="processcard">
            <h3 class="processstep">1. Discovery & Consultation</h3>
            <p class="processdesc">
              We begin by understanding your vision, goals, and audience. We
              listen, research, and strategize to align with your business
              objectives.
            </p>
          </div>

          <div class="processcard">
            <h3 class="processstep">2. Planning & Strategy</h3>
            <p class="processdesc">
              We create a detailed project plan including structure, features,
              tech stack, and timelines to ensure an efficient workflow.
            </p>
          </div>

          <div class="processcard">
            <h3 class="processstep">3. Design & Prototyping</h3>
            <p class="processdesc">
              We craft a stunning, user-friendly UI/UX design and share
              interactive wireframes to help you visualize your future website.
            </p>
          </div>

          <div class="processcard">
            <h3 class="processstep">4. Development</h3>
            <p class="processdesc">
              We convert designs into a live site using modern tools like HTML,
              CSS, JavaScript, React, ASP.NET, and databases like MySQL.
            </p>
          </div>

          <div class="processcard">
            <h3 class="processstep">5. Testing & QA</h3>
            <p class="processdesc">
              Every page and feature is tested for responsiveness,
              functionality, performance, and browser compatibility.
            </p>
          </div>

          {/* <div class="processcard">
            <h3 class="processstep">6. Launch</h3>
            <p class="processdesc">
              We deploy the final website, ensuring smooth deployment and server
              configuration so your website is ready for users.
            </p>
          </div> */}

          <div class="processcard">
            <h3 class="processstep">6. Support & Maintenance</h3>
            <p class="processdesc">
              We offer long-term support, regular updates, and optimization
              services to keep your website fast, secure, and scalable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webdevelopment;
