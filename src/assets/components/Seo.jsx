import React from "react";
import seoBanner from "../images/seonewbanner.jpg";
import seoMobileImg from "../images/Seo_mobile_view.jpg";
import freeSeoImg from "../images/freeseoimg.jpg";
import seoImg4 from "../images/seo-4.jpg";
import { Link } from "react-router-dom";

import "./Seo.css";
// import "./Footer.css";

function Seo() {
  return (
    <>
      <div className="banner-seo  about_img_hide">
        <img src={seoBanner} alt="Banner" className="bannerImage" />
        <div class="banner-text">
          Search Engine Optimization (SEO)
          <p>
            Unlock the power of SEO to rank higher, attract more traffic, and
            grow your business. Optimize your website with proven strategies for
            long-term success.
          </p>
          <Link to="/contactus">
            <button className="talk-button ">Let's Talk</button>
          </Link>
        </div>
      </div>

      {/* mobile-view*/}
      <div class="container_about_us about_img_hide_on_desktop ">
        <img
          src={seoMobileImg}
          alt="Image"
          class="image_about_us  bannerImage_1"
        />
        <div class="text-overlay">Search Engine Optimization</div>
      </div>

      <div className="content1  container">
        <h2 className="title">Search Engine Optimization (SEO)</h2>

        <p>
          In the vast digital landscape, standing out from the crowd is crucial
          for the success of any business. A solid online presence has become
          non-negotiable as more consumers turn to search engines to find
          products and services. This is where search engine optimization (SEO)
          comes into play, and when it comes to optimizing your website for
          search engines, Born To Code IT Solutions offers top-notch white-label
          SEO services tailored to elevate your brand.
        </p>

        <div className="container container_seo_1">
          <div className="image">
            <img src={freeSeoImg} alt="Image" />
          </div>

          <div className="processSection">
            <ul>
              <li>
                <strong>What is white-label SEO,</strong> and how can it benefit
                your business? White-label SEO is a service provided by Born To
                Code IT Solutions, where we handle all the intricacies of SEO
                for your agency or brand. Whether you're an agency looking to
                expand your service offerings or a business seeking to enhance
                your online visibility, our white-label SEO services are
                designed to meet your needs seamlessly.
              </li>

              <li>
                With <strong>Born To Code IT Solutions</strong> as your
                white-label SEO partner, you can expect a comprehensive approach
                to improving your website's search engine rankings. Our seasoned
                SEO experts will thoroughly analyse your website, identifying
                areas for improvement and developing a customized strategy to
                boost your online presence.
              </li>

              <li>
                From <strong>keyword research and on-page optimization</strong>{" "}
                to link building and content creation, we employ industry best
                practices to ensure that your website ranks higher in search
                results and attracts quality traffic that converts. By
                leveraging our white-label SEO services, you can focus on what
                you do best – running your business – while we handle the
                technicalities of SEO behind the scenes.
              </li>
            </ul>
          </div>
        </div>

        <div className="container  container_seo_2 ">
          <div className="processSection ">
            {/* <h3>
            Why Choose Born To Code IT Solutions as Your Trusted Digital
            Marketing Agency?
          </h3> */}
            <ul>
              <li>
                One of the critical benefits of{" "}
                <strong> white-label SEO</strong> is the ability to offer
                seamless integration with your existing brand. With Born To Code
                IT Solutions working as your silent partner, your clients will
                never know you've outsourced your SEO efforts. Instead, they'll
                see the tangible results of improved search engine rankings and
                increased organic traffic while associating these successes with
                your brand.
              </li>
              <li>
                Furthermore, our <strong>white-label SEO services</strong> are
                fully customizable, allowing you to tailor the level of service
                to meet your client's unique needs. Whether you're targeting
                local markets or aiming for global visibility, we have the
                expertise and resources to deliver results that exceed
                expectations.
              </li>
              <li>
                In today's competitive online landscape, investing in{" "}
                <strong>
                  white-label SEO services from Born To Code IT Solutions
                </strong>{" "}
                is a strategic move to stay ahead of the curve. With our proven
                track record of success and commitment to excellence, we're not
                just your SEO provider—we're your partner in growth.
              </li>

              <li>
                Learn more about our white-label SEO services and schedule a
                consultation with our team. Together, let's unlock the full
                potential of your digital presence and propel your brand to
                success.
              </li>
            </ul>
          </div>

          <div className="image ">
            <img src={seoImg4} alt="Image" />
          </div>
        </div>
      </div>
    </>

    // <div>Seo</div>
  );
}

export default Seo;
