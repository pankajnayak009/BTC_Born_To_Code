import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import first from "../images/first.jpg";
import second2 from "../images/second2.jpg";
import third3 from "../images/third.jpg";

import { Link } from "react-router-dom";

// import "slick-carousel/slick/slick.css";
// import "./your-custom-styles.css";

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px", // Adjust position
        zIndex: 1,
        fontSize: "24px",
        color: "black",
      }}
      onClick={onClick}
    ></div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px", // Adjust position
        zIndex: 1,
        fontSize: "24px",
        color: "black",
      }}
      onClick={onClick}
    ></div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="ImageParent carouselfit ">
          <div className="carousal">
            <h1>Microsoft Dynamics 365</h1>
            <p>
              Streamline your CRM and ERP systems effortlessly. Enhance customer
              relationships, optimize operations, and drive business growth with
              a single integrated platform. Experience seamless connectivity and
              efficiency.
            </p>
            <Link to="/contactus">
              <button className="talk-button">Let's Talk</button>
            </Link>
          </div>
          <img
            src={first}
            alt="Slide 1"
            className="carousel-image  image-section "
          />
        </div>

        <div className="ImageParent carouselfit">
          <div className="carousal">
            <h1>Microsoft Dynamics 365</h1>
            <p>
              Streamline your CRM and ERP systems effortlessly. Enhance customer
              relationships, optimize operations, and drive business growth with
              a single integrated platform. Experience seamless connectivity and
              efficiency.
            </p>
            <Link to="/contactus">
              <button className="talk-button">Let's Talk</button>
            </Link>
          </div>
          <img src={second2} alt="Slide 2" className="image-section" />
        </div>

        <div className="ImageParent">
          <div className="carousal">
            <h1>Microsoft Dynamics 365</h1>
            <p>
              Streamline your CRM and ERP systems effortlessly. Enhance customer
              relationships, optimize operations, and drive business growth with
              a single integrated platform. Experience seamless connectivity and
              efficiency.
            </p>
            <Link to="/contactus">
              <button className="talk-button">Let's Talk</button>
            </Link>
          </div>
          <img src={third3} alt="Slide 3" className="image-section" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
