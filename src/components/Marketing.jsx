import React from "react";
import Header from "./Header";
import MarketingContent from "./MarketingContent";
import Contact from "./Contact";
import Footer from "./Footer";

const Marketing = () => {
  return (
    <>
      <Header
        showBreadcrumb={false}
        title={
          <span className="text-3xl md:text-5xl font-bold leading-9 px-3 ">
            Best Digital Marketing Company in Dehradun,
            <br />
            India.Trusted by Thousands of Business Owners.
            <br />
            Proven results, 5X Growth in 6 months
          </span>
        }
      />
      <MarketingContent />
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
      <Footer sarcColor="text-blue-700" />
    </>
  );
};

export default Marketing;
