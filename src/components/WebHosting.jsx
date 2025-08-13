import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const WebHosting = () => {
  // Styles
  const cardStyle = {
    background: "#f5f0ff",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const priceStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const perMonthStyle = {
    fontSize: "1rem",
    fontWeight: "normal",
  };

  const serviceBox = {
    background: "#e7d9ff",
    padding: "1rem",
    borderRadius: "6px",
    marginTop: "1rem",
  };

  const serviceBoxDark = {
    background: "#4b1b9b",
    padding: "1rem",
    borderRadius: "6px",
    marginTop: "1rem",
  };

  const serviceTitle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const serviceList = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: "1.6",
  };
  const plans = [
    {
      title: "Managed WordPress Basic",
      subtitle: "Best for hosting simple websites.",
      price: "₹329.00",
      period: "/monthly",
      features: ["10 GB NVMe storage", "Weekly backups"],
      highlight: false,
    },
    {
      title: "Managed WordPress Deluxe",
      subtitle: "Ideal as you grow, with upgraded resources.",
      price: "₹499.00",
      period: "/monthly",
      features: [
        "20 GB NVMe storage",
        "Daily automatic backups",
        "Staging site",
        "Up to 2x faster performance with CDN",
        "SEO Optimizer",
        "TrustedSite - get up to 30% more conversions",
      ],
      highlight: true,
    },
    {
      title: "Managed WordPress Ultimate",
      subtitle: "Our best multi-site plan. Plus, sell online.",
      price: "₹849.00",
      period: "/monthly",
      features: [
        "30 GB NVMe storage",
        "Smart WordPress plugin manager",
        "Sell online with WooCommerce",
        "PHP version control",
        "Priority Support",
        "Object Cache Pro",
        "TrustedSite - get up to 30% more conversions",
      ],
      highlight: false,
    },
  ];

  return (
    <>
      <Header
        showBreadcrumb={false}
        title={
          <span className="text-3xl md:text-5xl font-bold leading-9 px-3 ">
            Best Web Hosting in Dehradun Haridwar <br />
            Uttarakhand Trusted by Thousands Business <br /> Owners !
          </span>
        }
      />
      <div
        style={{
          padding: "2rem",
          fontFamily: "Arial, sans-serif",
          margin: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            textAlign: "center",
            color: "#5a00cc",
            marginBottom: "2rem",
            font: "Bold",
          }}
        >
          Web Hosting <span style={{ color: "black" }}>Price Plans</span>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3.5rem",
          }}
        >
          {/* Starter */}
          <div style={cardStyle}>
            <h2 className="font-bold text-xl mb-4">Web Hosting Starter</h2>
            <p className="text-md mb-2">
              With a 3-yr term. You pay ₹ 3,204.00 today. Renews at ₹ 8,964.00.
            </p>
            <h3 style={priceStyle}>
              ₹89.00 <span style={perMonthStyle}>/monthly</span>
            </h3>
            <div style={serviceBox}>
              <p style={serviceTitle}>Service Include:</p>
              <ul style={serviceList}>
                <li>✔ 1 website</li>
                <li>✔ 10 GB NVMe storage</li>
                <li>✔ cPanel</li>
              </ul>
            </div>
          </div>

          {/* Economy */}
          <div style={{ ...cardStyle, background: "#6c2bd9", color: "white" }}>
            <h2 className="font-bold text-xl mb-4">Web Hosting Economy</h2>
            <p className="text-md mb-2">
              With a 3-yr term. You pay ₹ 7,884.00 today. Renews at ₹ 17,964.00.
            </p>
            <h3 style={priceStyle}>
              ₹219.00 <span style={perMonthStyle}>/monthly</span>
            </h3>
            <div style={serviceBoxDark}>
              <p style={serviceTitle}>Service Include:</p>
              <ul style={serviceList}>
                <li>✔ 25 GB NVMe storage</li>
                <li>✔ Free domain*</li>
                <li>✔ Free SSL Certificate - 1 year</li>
              </ul>
            </div>
          </div>

          {/* Deluxe */}
          <div style={cardStyle}>
            <h2 className="font-bold text-xl mb-4">Web Hosting Deluxe</h2>
            <p className="text-md mb-2">
              With a 3-yr term. You pay ₹ 11,844.00 today. Renews at ₹
              25,164.00.
            </p>
            <h3 style={priceStyle}>
              ₹329.00 <span style={perMonthStyle}>/monthly</span>
            </h3>
            <div style={serviceBox}>
              <p style={serviceTitle}>Service Include:</p>
              <ul style={serviceList}>
                <li>✔ 10 websites</li>
                <li>✔ Free domain</li>
                <li>✔ Free, unlimited SSL for all your websites</li>
              </ul>
            </div>
          </div>

          {/* Ultimate */}
          <div style={{ ...cardStyle, background: "#6c2bd9", color: "white" }}>
            <h2 className="font-bold text-xl mb-4">Web Hosting Ultimate</h2>
            <p className="text-md mb-2">
              With a 3-yr term. You pay ₹ 14,364.00 today. Renews at ₹
              35,964.00.
            </p>
            <h3 style={priceStyle}>
              ₹399.00 <span style={perMonthStyle}>/monthly</span>
            </h3>
            <div style={serviceBoxDark}>
              <p style={serviceTitle}>Service Include:</p>
              <ul style={serviceList}>
                <li>✔ 25 websites</li>
                <li>✔ 75 GB NVMe storage</li>
                <li>✔ Free, unlimited SSL for all your websites</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-10">
        <h1 className=" text-5xl font-bold">
          Choose your Managed{" "}
          <span className="text-blue-600">WordPress Hosting</span> plan
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`w-80 rounded-xl p-6 text-left shadow-lg ${
                plan.highlight
                  ? "bg-blue-800 text-white"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              <h2 className="text-lg font-semibold">{plan.title}</h2>
              <p
                className={`text-sm mt-1 ${
                  plan.highlight ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>
              <hr className="my-4 border-gray-300 opacity-50" />
              <div className="text-2xl font-bold">
                {plan.price}
                <span className="text-base font-normal">{plan.period}</span>
              </div>
              <div
                className={`mt-4 rounded-lg p-4 ${
                  plan.highlight
                    ? "bg-blue-700 bg-opacity-30"
                    : "bg-white border border-gray-200"
                }`}
              >
                <h3 className="font-medium mb-2">Service Include:</h3>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon
                        className={`w-5 h-5 mr-2 flex-shrink-0 ${
                          plan.highlight ? "text-white" : "text-blue-500"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
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

      <Footer sarcColor="text-blue-700" />
    </>
  );
};

export default WebHosting;
