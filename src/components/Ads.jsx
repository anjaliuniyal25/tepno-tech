import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Section = ({ title, items = [], description }) => (
  <div className="mb-8 px-4 md:px-20">
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    {description && (
      <p className=" text-lg mb-3 text-gray-600">{description}</p>
    )}
    {items.length > 0 && (
      <ul className="space-y-1 mb-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-black">
            <CheckCircleIcon className="h-5 w-5 text-blue-600" />
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Ads = () => {
  return (
    <>
      <Header
        showBreadcrumb={false}
        title={
          <span className="text-3xl md:text-5xl font-bold leading-9 px-3">
            SARC Technology – India's Leading Google & Meta <br />
            Ads Management Agency!
          </span>
        }
      />

      <div className="w-full p-6 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-800 text-center p-4">
          Ads Management Services to Grow Your Business Online
        </h1>
        <p className="text-base text-center text-gray-600 px-10">
          Accelerate Your Revenue with SARC Technology – Your Ads Management
          Partner.
        </p>
        <p className="text-center text-gray-600 mb-10 px-10">
          At <span className="font-bold">SARC Technology</span>, we help you
          generate more leads, traffic, and conversions through expertly managed
          ad campaigns across platforms like{" "}
          <span className="font-bold">
            Google, Meta (Facebook & Instagram), and YouTube.
          </span>{" "}
          Whether you're running an eCommerce store or a service-based business,
          our customized ads strategies are built to deliver measurable ROI.
        </p>

        <h2 className="text-xl md:text-3xl text-black font-bold px-20 mb-10">
          Our Ads Management Services Include:
        </h2>

        <Section
          title="1. Google Ads Management"
          description="Run laser-targeted Search, Display, Shopping, and YouTube ads."
          items={[
            "Keyword Research",
            "Ad Copywriting",
            "Bidding Strategy",
            "Conversion Tracking",
            "Landing Page Optimization",
          ]}
        />
        <Section
          title="2. Meta Ads Management (Facebook & Instagram)"
          description="Reach the right audience with creative and conversion-focused social ads."
          items={[
            "Audience Targeting",
            "A/B Testing",
            "Retargeting Campaigns",
            "Lookalike Audiences",
            "Ad Creatives Design",
          ]}
        />
        <Section
          title="3. YouTube Ads Management"
          description="Engage your audience with video ads that convert."
          items={[
            "Skippable & Non-skippable Ads",
            "Placement Strategy",
            "Performance Tracking",
          ]}
        />
        <Section
          title="4. Remarketing & Retargeting"
          description="Bring back lost customers through smart remarketing funnels across platforms."
        />
        <div className="px-20">
          <h2 className="text-3xl font-bold mt-10 mb-4">
            Why Choose SARC Technology for Ads Management?
          </h2>
          <ul className="list-none list-inside text-base text-gray-900">
            <li>Certified Google & Meta Ads Experts</li>
            <li>Proven Track Record of ROI-Focused Campaigns</li>
            <li>Custom Strategy for Every Business</li>
            <li>Transparent Reporting & Weekly Insights</li>
            <li>Industry-Specific Campaign Experience</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            How We Manage Your Ad Campaigns
          </h2>
          <ol className="list-decimal font-bold list-inside text-gray-900 space-y-1">
            <li>Free Audit & Strategy Call</li>
            <li>Campaign Setup & Creative Design</li>
            <li>Performance Optimization</li>
            <li>Weekly Reporting & ROI Tracking</li>
          </ol>
          <p className="text-base">
            We don’t just run ads—we build long-term growth systems.
          </p>
        </div>

        <p className="text-3xl font-bold mt-10 mb-4 px-20">
          Ready to Scale with Paid Ads?
        </p>
        <p className="text-gray-800 text-lg mt-1 px-20">
          Let’s build your growth engine with the right Ads Management strategy.
          Whether you're targeting local leads or global customers, our expert
          team will drive the performance you need.
          <p className="font-bold">
            Contact SARC Technology today for a free ads consultation!
          </p>
        </p>
       
      </div>

      <Contact
        bgMain="#0A0B0C"
        bgIcon="#161718"
        bgPage="#ffffff"
        textColor="#ffffff"
        focusColor="#6C4DF7"
        buttonBg="#6C4DF7"
        buttonHover="#5A3FE0"
        buttonText="#ffffff"
      />
      <Footer sarcColor = "text-blue-700"/>
    </>
  );
};

export default Ads;
