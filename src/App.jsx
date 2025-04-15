import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Services from "./assets/components/Services";
// import OurTeam from "./assets/components/OurTeam";
// import Clients from "./assets/components/Clients";
import ContactUs from "./assets/components/ContactUs";
import DigitalMarketing from "./assets/components/DigitalMarketing";
import Seo from "./assets/components/Seo";
import WebsiteDesigning from "./assets/components/WebsiteDesigning";
import Webdevelopment from "./assets/components/Webdevelopment";
import Microdynamics from "./assets/components/Microdynamics";
import FAQ from "./assets/components/FAQ";
import Blog from "./assets/components/Blog";
import Tabbyintegration from "./assets/components/Tabbyintegration";
// import amara_integration_page from "./assets/components/Tamara_integration_page";

// import Consultancy from   "./assets/components/"
// ✅ ScrollToTop Component
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import TamaraIntegration from "./assets/components/Tamaraintegration";
// import Tamara_integration_page from "./assets/components/Tamara_integration_page";
import Tamara_integration_page from "./assets/components/Tamara_integration_page"; // adjust the path
// import RetailPosReport from "./assets/components/RetailPosReport";
import RetailPosReport from "./assets/components/RetailPosReport";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Automatically scroll to top on route change */}
      <Header />
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/Tabbyintegration"
          element={<Tabbyintegration />}
        />

        {/* <Route
          path="/services/tamaraintegration"
          element={<Tamara_integration_page />}
        /> */}

        <Route
          path="/services/tamaraintegration"
          element={<Tamara_integration_page />}
        />

        <Route path="/services/retailposreport" element={<RetailPosReport />} />
        <Route path="/Microdynamics" element={<Microdynamics />} />

        {/* <Route path="/ourteam" element={<OurTeam />} /> */}
        {/* <Route path="/clients" element={<Clients />} /> */}
        <Route path="/Microdynamics" element={<Microdynamics />} />
        <Route path="/Webdevelopment" element={<Webdevelopment />} />
        <Route path="/WebsiteDesigning" element={<WebsiteDesigning />} />
        <Route path="/digitalMarketing" element={<DigitalMarketing />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
