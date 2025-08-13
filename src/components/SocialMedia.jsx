import React, { useState } from "react";

import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

const WebsiteDevelopment = () => {
  const services = [
    {
      title: "Personalized Campaigns",
      description: "Every plan is custom-built—not one-size-fits-all.",
    },
    {
      title: "Platform Expertise",
      description:
        "We master Facebook, Instagram, LinkedIn, X, YouTube, and Pinterest.",
    },
    {
      title: "Proven Track Record",
      description:
        "Local businesses in Dehradun have benefited from our targeted social strategies.",
    },
    {
      title: "Real Results, No Bots",
      description:
        "Genuine follower growth, meaningful engagement, and improved conversion.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Which platforms should I focus on?",
      answer:
        "We’ll recommend the best platforms based on your industry, goals, and audience.",
    },
    {
      question: "Can you manage ads too?",
      answer:
        "Absolutely—we handle everything from campaign strategy to optimization and budgeting",
    },
    {
      question: "How often do you report results?",
      answer:
        "You'll receive detailed monthly reports, with weekly check-ins available as need.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Header
        showBreadcrumb={false}
        title={
          <span className="text-3xl md:text-5xl font-bold leading-9 px-3 ">
            Social Media Marketing Company in Dehradun & <br /> Uttarakhand!
          </span>
        }
      />
      <div className=" px-20 py-10">
        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold text-center text-blue-700 mb-4">
          Social Media Marketing (SMM)
        </h1>
        <p className="text-center text-gray-600  px-20 mb-10">
          Social media isn't just a buzzword—it's the heartbeat of modern brand
          growth. From local startups to established enterprises, a strategic
          presence on platforms like Facebook, Instagram, LinkedIn, and X
          (Twitter) is essential for visibility, engagement, and sales.
        </p>

        {/* What is SMM */}
        <h2 className="text-3xl font-semibold mb-2 ">
          What Is Social Media Marketing?
        </h2>
        <p className="mb-3 text-gray-700">Social Media Marketing involves:</p>
        <ol className="list-decimal list-inside space-y-1 mb-6 text-gray-700 font-medium">
          <li>Crafting platform-specific strategies</li>
          <li>
            Creating attention-grabbing content (posts, reels, stories, videos)
          </li>
          <li>Running targeted paid ad campaigns</li>
          <li>Monitoring engagement and analyzing performance</li>
        </ol>

        {/* Why businesses need it */}
        <h2 className="text-3xl font-semibold mb-2">
          Why Dehradun Businesses Need It
        </h2>
        <p className="mb-6 text-gray-700">
          Digital consumption in Dehradun and across Uttarakhand is soaring.
          Many businesses struggle to manage consistent posting and community
          interaction without expert support.
        </p>

        {/* Services */}
        <h2 className="text-3xl font-semibold mb-4">
          Our Social Media Marketing Services
        </h2>
        <ul className="space-y-3 mb-8">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mr-2" />
              <span>
                <span className="font-semibold">{service.title}:</span>{" "}
                {service.description}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <h2 className="text-3xl font-semibold mb-2">
          Start Your Social Media Growth Today
        </h2>
        <p className="text-gray-700 text-base">
          Ready to elevate your brand and capture your audience’s attention? As
          a dedicated{" "}
          <span className="font-semibold">
            Social Media Marketing Company in Dehradun & Uttarakhand
          </span>
          , SARC Technology is ready to turn your vision into a powerful digital
          presence.
        </p>
      </div>
      <div className="mx-20 px-4 py-8">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3">
            {activeIndex === index ? (
              <div className="bg-blue-700 text-white p-2 rounded-lg shadow-md flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-purple-100">{faq.answer}</p>
                </div>
                <XMarkIcon
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                />
              </div>
            ) : (
              <div
                onClick={() => toggleFaq(index)}
                className="bg-white border border-purple-200 p-5 rounded-lg flex justify-between items-center cursor-pointer hover:shadow-md transition"
              >
                <h3 className="text-2xl font-semibold">{faq.question}</h3>
                <PlusIcon className="w-6 h-6 text-black" />
              </div>
            )}
          </div>
        ))}
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

export default WebsiteDevelopment;
