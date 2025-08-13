import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

const WebsiteDevelopment = () => {
  return (
    <>
      <Header
        showBreadcrumb={false}
        title={
          <span className="text-3xl md:text-5xl font-bold leading-9 px-3 ">
            Best Website Development company in Dehradun <br /> Haridwar
            Uttarakhand Trusted by Thousands <br /> Business Owners !
          </span>
        }
      />
      <div className="m-20 ">
        <h2 className=" text-center text-3xl md:text-5xl text-blue-900 font-semibold mb-10">
          Web Development Company India - Your Vision, Our Expertise
        </h2>
        <p className="text-base text-center text-gray-600">
          With over 15 years of experience, SARC Technology is the best web
          development company in Dehradun, known for transforming your vision
          into powerful digital solutions. We have 
          <br />  <p className="mb-4">successfully delivered hundreds of projects across various
          industries for clients locally and internationally. Our strong
          portfolio and 92% client retention rate demonstrate our
          <br /> commitment to high-quality work and customer satisfaction.{" "}
          <br /></p>
          <p>As a leading website designing company and web development company in
          Dehradun, we utilize the latest technologies such as React, Angular,
          Vue.js, Node.js, Progressive Web
          <br /> Apps (PWAs), and headless CMS to build websites that are fast,
          scalable, and secure. Our responsive designs ensure seamless
          performance across all devices, integrating features
          <br /> like AI tools, automation, and easy third-party integrations to
          enhance user engagement and boost conversions.</p>
          <br />
          <p >Our comprehensive web development services help your business stand
          out and strengthen your brand identity. We create visually appealing,
          user-friendly websites equipped with
          <br /> modern functionalities like voice search, chatbots, and API
          connections to deliver an exceptional user experience.</p>
          <br />
          <p> Whether you require an eCommerce platform, blog, or corporate website,
          SARC Technology as the best website development company in Dehradun
          has the expertise to bring your ideas to life. Partner with us to
          build an effective online presence that supports your
          <br /> growth, no matter your industry or business size.</p>
          <br />
          <p>In addition, we offer full website maintenance services, including
          regular backups, security updates, and performance monitoring,
          providing a complete web development package to
          <br /> keep your digital presence competitive and up-to-date.</p>
          <br />
        </p>
      </div>

      <Contact
        bgMain="#0A0B0C" // dark background for left section
        bgIcon="#161718" // slightly lighter icon circle
        bgPage="#ffffff" // white page background
        textColor="#ffffff" // white text
        focusColor="#6C4DF7" // purple focus ring
        buttonBg="#6C4DF7" // purple button
        buttonHover="#5A3FE0" // darker purple hover
        buttonText="#ffffff" // white button text
      />
      <Footer sarcColor = "text-blue-700"/>
    </>
  );
};

export default WebsiteDevelopment;
