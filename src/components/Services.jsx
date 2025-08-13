import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ServiceCard from "./ServiceCard";
import Faqs from "./Faqs";

const Services = () => {
  return (
    <>
      <Header title="Services" breadcrumb="Services" />
      <ServiceCard />
       <Faqs/>
      <Footer sarcColor="text-blue-700" />
     
    </>
  );
};

export default Services;
