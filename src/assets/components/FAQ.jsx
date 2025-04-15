import React, { useState } from "react";
import styles from "./FAQ.module.css";
import microDynamicsBanner from "../images/micro_dynamics.jpg";
import microDynamicsMobile from "../images/microdynamics_mobile_view.jpg";

// import FAQ_banneer from "../images/micro_dynamics.jpg";
// import microDynamicsBanner from "../images/micro_dynamics.jpg";
// import dynamicImg1 from "../images/dynamic_img_1.webp";

const faqData = [
  {
    question: "What is Microsoft Dynamics 365?",
    answer:
      "Dynamics 365 is a suite of intelligent business applications that helps manage your customer relationships, operations, and business processes.",
  },
  {
    question: "What modules are available in Dynamics 365?",
    answer:
      "Dynamics 365 includes modules such as Sales, Customer Service, Field Service, Finance, Supply Chain Management, and Marketing.",
  },
  {
    question: "Is Dynamics 365 cloud-based?",
    answer:
      "Yes, Dynamics 365 is primarily a cloud-based platform, offering flexibility, scalability, and secure access from anywhere.",
  },
  {
    question: "Can Dynamics 365 integrate with other Microsoft products?",
    answer:
      "Absolutely. Dynamics 365 integrates seamlessly with Microsoft 365, Power BI, Azure, and Teams to enhance productivity.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/*      
        <img
             
              src={microDynamicsBanner}
              alt="Banner"
              className=""
            />
      
            <div class="">
              <img
                src={microDynamicsMobile}
                alt="Image"
                class=""
              /> */}

      <div className={styles.container}>
        {/* 🔻 Title */}
        <h1 className={styles.title}>Frequently Asked Questions</h1>

        {/* 🔄 FAQs */}
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={`${styles.question} ${
                openIndex === index ? styles.open : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
            </div>
            <div
              className={`${styles.answer} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
