import React from "react";
// import styles from "./Blog.module.css"; // Import the CSS Module
import styles from "./Blog.module.css"; // Adjust path if it's in a different folder

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>What is Microsoft Dynamics 365?</h1>

      <img
        className={styles.blogBanner}
        src="https://learn.microsoft.com/en-us/dynamics365/get-started/media/dynamics365-banner.png"
        alt="Microsoft Dynamics 365"
      />

      <p className={styles.blogText}>
        Microsoft Dynamics 365 is a powerful suite of business applications that
        combine customer relationship management (CRM) and enterprise resource
        planning (ERP) with artificial intelligence tools and advanced
        analytics.
      </p>

      <h2 className={styles.subTitle}>Why Choose Dynamics 365?</h2>
      <ul className={styles.list}>
        <li>Modular apps for sales, service, finance, marketing, and more</li>
        <li>Seamless integration with Microsoft 365 and Power Platform</li>
        <li>AI-powered insights and automation</li>
        <li>Cloud flexibility with on-premise options</li>
      </ul>

      <p className={styles.blogFooter}>
        Whether you're a startup or an enterprise, Dynamics 365 helps you
        optimize business operations, enhance customer engagement, and drive
        growth.
      </p>
    </div>
  );
};

export default Blog;
