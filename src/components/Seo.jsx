import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

const Seo = () => {
  return (
    <>
      <Header
        showBreadcrumb={false}
        title={
          <span className="text-3xl md:text-5xl font-bold leading-9 px-3 ">
            SEO Company in Dehradun Haridwar Uttarakhand
            <br />
            Trusted by Thousands Business Owners !
          </span>
        }
      />
      <div className="bg-white w-full p-20">
        <h2 className="text-3xl text-center md:text-5xl font-semibold text-blue-900 mb-10">
          SEO(Search Engine Optimisation)
        </h2>
        <p className="text-base text-center text-gray-800">
          Looking to boost your website’s visibility and grow your business
          online? As the best SEO company in Dehradun, we provide expert SEO
          services in Dehradun that help your website <br />
          rank higher, attract targeted traffic, and increase conversions.{" "}
          <br /> Did you know that over 70% of clicks go to websites on the
          first page of organic search results? Our SEO company in Dehradun
          specializes in optimizing your site for high-value <br /> keywords to
          ensure you capture maximum relevant traffic and drive sales. <br />{" "}
          With the digital landscape evolving and AI-powered search tools like
          ChatGPT and Gemini changing how users find information, our SEO
          services in Dehradun adapt your content to <br /> appear in
          AI-generated results—keeping your business ahead of the competition.{" "}
          <br /> With 15+ years of experience, we are proud to be recognized as
          one of the best SEO companies in Dehradun. Our customized SEO
          strategies include comprehensive keyword <br /> research, competitor
          analysis, on-page and technical SEO, content creation, link building,
          SEO audits, and ongoing performance tracking tailored to your business
          needs.
        </p>
        <h3 className="text-3xl text-left text-black font-semibold my-10">Why Choose Us as Your SEO Company in Dehradun?</h3>
        <p className="text-base text-left text-gray-800">
          Our team SEO experts delivers proven, results-driven SEO services in
          Dehradun. We have helped thousands of businesses improve their online
          presence and enjoy high client <br />
          satisfaction, reflected in positive reviews and a strong client
          retention rate. <br /> Partner with the best SEO company in Dehradun
          to maximize your website’s potential and achieve sustainable business
          growth.
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
      <Footer />
    </>
  );
};

export default Seo;
