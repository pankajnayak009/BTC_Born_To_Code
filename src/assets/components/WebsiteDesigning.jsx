import React from "react";
import "./WebsiteDesigning";
import websiteDesigning from "../images/webside_designing.png";
import webDesigningMobile from "../images/webdesigning_img.jpg";
import webImage from "../images/web-2.png"; // Adjust path based on your file location
import webImage1 from "../images/web-1.png";

const WebsiteDesigning = () => {
  return (
    <>
      {/* Banner Image */}
      {/* <div className="banner">   
        <img    
          src="src\assets\images\digital  banner.jpg"    
          alt="Banner"       
          className="banner-image"        
        />
      </div> */}

      {/* <div className="banner">   */}

      {/* <img
        // src="src\assets\images\1.png"
        src="src\assets\images\wbdeveloper.png"
        alt="Banner"
        className="bannerImage  bannerImage_1"
      /> */}

      {/* </div> */}

      <div class="container_about_us  about_img_hide">
        <img
          src={websiteDesigning}
          alt="Image"
          class="image_about_us bannerImage_1"
        />

        <div class="text-overlay">Website Designing</div>
      </div>

      {/* Mobile view */}
      <div class="container_about_us  about_img_hide_on_desktop ">
        <img
          src={webDesigningMobile}
          alt="Image"
          class="image_about_us bannerImage_1"
        />

        <div class="text-overlay">Website Designing</div>
      </div>

      <div className="content1  container">
        <h2 className="title">
          Elevate Your Business with White Label Web Design & Development
          Services from BTC
        </h2>

        <p>
          In today’s digital landscape, having a captivating online presence is
          essential for any business. Whether you’re catering to the Education,
          Food Industry, Home Remodeling, Law Firms, or Medical Services, a
          professionally designed and developed website can be a game-changer.
          Born To Code offers you the opportunity to white label web design and
          development services that can transform your clients’ online
          experiences while boosting your revenue.
        </p>

        <h2 className="title">
          Understanding white label Web Design & Development
        </h2>

        <p>
          Reselling web design and development services is a strategic approach
          to enhance your clients’ digital footprints without the need to invest
          in an in-house web design team. This practice enables you to outsource
          these vital services to a specialised partner, such as Born To Code,
          which possesses a wealth of experience in creating innovative,
          user-friendly websites tailored to your clients’ specific needs.
        </p>

        {/* third container in first big container */}
      </div>

      <div className="container">
        <div className="image">
          <img src={webImage} alt="Image" />
        </div>
        <div className="processSection">
          <h3>
            The Benefits of White Label Web Design & Development with Born To
            Code
          </h3>
          <ul>
            <li>
              <strong>1. Expertise in Diverse Industries:</strong> Born To Code
              specializes in web design and development across industries like
              Education, Food, Home Remodeling, Law Firms, and Medical Services.
              Our team’s industry-specific expertise ensures websites that
              resonate with your clients’ target audiences, boosting their
              online presence.
            </li>
            <li>
              <strong> 2. Time and Resource Savings:</strong> Developing and
              maintaining an in-house web design and development team can be a
              resource-intensive process. By choosing to resell web design and
              development with Born To Code, you can free up valuable time and
              resources to focus on what you do best while we take care of the
              technical intricacies.
            </li>
            <li>
              <strong>3. Increased Revenue Stream:</strong> Increased Revenue
              White Label web design and development can become a lucrative
              addition to your service offerings. Born To Code will enable you
              to provide high-quality web solutions to your clients, ultimately
              increasing your profitability and client satisfaction.
            </li>
            <li>
              <strong>4. Stronger Client Relationships:</strong>
              Enhancing your clients’ online presence is a powerful way to
              foster stronger relationships. When you offer web design and
              development services through a reputable partner like Born To
              Code, your clients will appreciate the added value, which can lead
              to increased client loyalty and retention
            </li>
            <li>
              <strong>Tailored Strategies:</strong> Our custom strategies are
              designed to yield maximum ROI based on your business goals and
              audience.
            </li>
          </ul>
        </div>
      </div>
      <div className=" container  container_seo_2 ">
        <div className="processSection">
          <h3>
            Why Choose Born To Code for White Label Web Design & Development?
          </h3>

          <ul>
            <li>
              <strong>1. Customised Solutions:</strong> Every business is
              unique, and their websites should reflect that. Born To Code takes
              a tailored approach to web design and development, creating
              bespoke solutions that align perfectly with your clients’
              objectives and industry needs.
            </li>
            <li>
              <strong> 2. User-Focused Design:</strong> Our design philosophy
              places the user at the core. We ensure that websites we create are
              intuitive, engaging, and user-friendly, providing a memorable
              online experience for your clients’ visitors.
            </li>
            <li>
              <strong>3. Advanced Technology:</strong> Born To Code stays at the
              forefront of technological advancements. We use the latest tools
              and techniques to create websites that are not only visually
              appealing but also technically robust and responsive.
            </li>
            <li>
              <strong>4. Transparent Reporting:</strong>
              Transparency is key to trust-building. We provide detailed
              performance reports that allow you and your clients to monitor the
              effectiveness of the web design and development strategies we
              employ.
            </li>
            <li>
              <strong>Tailored Strategies:</strong> Our custom strategies are
              designed to yield maximum ROI based on your business goals and
              audience.
            </li>
          </ul>
        </div>

        <div className="image">
          <img src={webImage1} alt="Image" />
        </div>
      </div>

      <div className="content1  container ">
        <h2 className="title">
          Elevate Your Business with White Label Web Design & Development
          Services from BTC
        </h2>

        <h3 className="title">Customised Solutions</h3>

        <p>
          Every business is unique, and their websites should reflect that. Born
          To Code takes a tailored approach to web design and development,
          creating bespoke solutions that align perfectly with your clients’
          objectives and industry needs.
        </p>
        <h3 className="title"> Proposal</h3>
        <p>
          EWe present you with a detailed proposal that outlines the services,
          pricing, and deliverables, allowing you to select the package that
          aligns best with your business objectives.
        </p>
        <h3 className="title">Customised Development</h3>
        <p>
          Our team works diligently to bring the web design and development
          strategy to life, creating websites that not only look stunning but
          also function seamlessly.
        </p>
        <h3 className="title">Testing and Launch</h3>
        <p>
          Prior to launch, we conduct thorough testing to ensure everything
          functions perfectly. Once approved, we assist with the website’s
          launch, ensuring a smooth transition.
        </p>
        <h3 className="title">Ongoing Collaboration</h3>
        <p>
          Our partnership is not a one-time transaction but a continuous
          collaboration. We provide ongoing support, updates, and maintenance to
          keep your clients’ websites running at their best.
        </p>
      </div>

      <div className="content1  container">
        <h3 className="title">
          White Label Web Design & Development with Born To Code and Propel Your
          Business Forward
        </h3>

        <p>
          By white label web design and development services with Born To Code,
          you’re not just offering your clients a website; you’re delivering a
          powerful online presence. This enhances your brand’s reputation,
          fosters client loyalty, and creates new revenue streams. With our
          expertise, dedication, and commitment to your success, you can
          confidently enter the realm of web design and development reselling.
        </p>

        <p>
          If you’re ready to explore the exciting world of reselling web design
          and development with Born To Code, reach out to us today. Our team is
          eager to answer your questions, provide more information, and help you
          embark on a mutually beneficial partnership that promises to elevate
          your clients’ digital experiences. Born To Code is your trusted
          partner in the resell web design and development journey, working
          together to create an impactful and compelling online presence for
          your clients.
        </p>
      </div>

      <div className="content1  container">
        <h2 className="title">
          Elevate Your Business with White Label Web Design & Development
          Services from BTC
        </h2>

        <p>
          In today’s digital landscape, having a captivating online presence is
          essential for any business. Whether you’re catering to the Education,
          Food Industry, Home Remodeling, Law Firms, or Medical Services, a
          professionally designed and developed website can be a game-changer.
          Born To Code offers you the opportunity to white label web design and
          development services that can transform your clients’ online
          experiences while boosting your revenue.
        </p>
      </div>
    </>
  );
};

export default WebsiteDesigning;
