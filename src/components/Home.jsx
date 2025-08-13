import React from "react";
import Navbar from "./Navbar"
import Card from "./Card";
import ServiceSection from "./ServiceSection";
import Clients from "./Clients";
import Footer from "./Footer";
import Homecontent from "./Homecontent";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import OurBlogs from "./OurBlogs"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Homecontent />
      <Card />
      <ServiceSection />
      <Clients />
      <Testimonials/>
      {/* <OurBlogs/> */}
      <Contact/>
      <Footer />
    </>
  );
};
export default Home;
