import React from "react";
import "./DigitalMarketing.css";
import digitalMarketingBanner from "../images/digital marketing banner.jpg";
import digitalMarketingMobile from "../images/Digital_marketingMobile_img.jpg";
import shrugWomanImg from "../images/woman-shrugging-spread-hands-sideways.jpg";
import businessmanHandshakeImg from "../images/smiling-businessman-welcoming-new-partner-group-meeting-with-handshake.jpg";

const DigitalMarketing = () => {
  return (
    <>
      {/* Banner Image */}

      <img
        src={digitalMarketingBanner}
        alt="Banner"
        className="bannerImage bannerImage_1  about_img_hide"
      />

      {/* mobile-view*/}

      <div class="container_about_us about_img_hide_on_desktop ">
        <img
          src={digitalMarketingMobile}
          alt="Image"
          class="image_about_us  bannerImage_1"
        />
        <div class="text-overlay">Digital Marketing </div>
      </div>

      {/* </div> */}

      <div className="content1  container">
        <h2 className="title">
          Partnering with the Best SEO Agency for Your Digital Marketing Journey
        </h2>

        <p>
          In today's digital landscape, the quest for online visibility and
          success is paramount for businesses of all sizes. Amidst the
          competition, Born To Code IT Solutions emerges as a beacon of
          innovation and expertise, offering tailored solutions to elevate your
          digital presence. As you navigate the intricate realm of online
          marketing, partnering with the best SEO agency becomes imperative.
          Born To Code IT Solutions stands at the forefront, ready to propel
          your brand to new heights.
        </p>
      </div>

      <div className="container">
        <div className="image">
          <img src={shrugWomanImg} alt="Image" />
        </div>
        <div className="processSection">
          <h3>
            Why Choose Born To Code IT Solutions as Your Trusted Digital
            Marketing Agency?
          </h3>
          <ul>
            <li>
              <strong>Unmatched Expertise:</strong> Our team of seasoned
              professionals crafts bespoke strategies tailored to your unique
              needs.
            </li>
            <li>
              <strong>Comprehensive SEO Solutions:</strong> We leverage advanced
              SEO techniques to enhance online visibility and drive organic
              traffic.
            </li>
            <li>
              <strong>Data-Driven Approach:</strong> We use analytics to gain
              insights into consumer behavior and refine strategies for
              measurable results.
            </li>
            <li>
              <strong>Transparent Communication:</strong> We foster open
              communication, keeping you informed at every step.
            </li>
            <li>
              <strong>Tailored Strategies:</strong> Our custom strategies are
              designed to yield maximum ROI based on your business goals and
              audience.
            </li>
          </ul>
        </div>
      </div>

      <div className="container  container_seo_2 ">
        <div className="processSection">
          <h3>
            Partnering with Born To Code IT Solutions: Your Path to Digital
            Dominance
          </h3>

          <ul>
            <li>
              As you embark on your digital marketing journey, entrust your
              brand to the expertise of Born To Code IT Solutions, the best SEO
              agency in the industry. With our unwavering commitment to
              excellence and a proven track record of success, we are poised to
              be your trusted partner in achieving online supremacy.
            </li>
            <li>
              Furthermore, our white-label SEO services are fully customizable,
              allowing you to tailor the level of service to meet your client's
              unique needs. Whether you're targeting local markets or aiming for
              global visibility, we have the expertise and resources to deliver
              results that exceed expectations.
            </li>
          </ul>
        </div>

        <div className="image">
          <img src={businessmanHandshakeImg} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
