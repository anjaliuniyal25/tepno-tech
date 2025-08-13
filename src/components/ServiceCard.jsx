import React from "react";

// Import your service images
import devIcon from "../assets/service1.svg";
import ppcIcon from "../assets/service2.svg";
import hostingIcon from "../assets/service3.svg";
import seoIcon from "../assets/service4.svg";
import digitalIcon from "../assets/service5.svg";
import smmIcon from "../assets/service6.svg";
import leadGenIcon from "../assets/service7.svg";
import brandingIcon from "../assets/service8.svg";

const ServiceCard = () => {
  const services = [
    {
      title: "Web Development",
      image: devIcon,
      description:
        "At TEPNO TECH, our expert web development team creates modern, responsive, and user-friendly websites designed to engage visitors and convert them into customers. Our latest and unique mobile-friendly web designs ensure a seamless experience across all devices, helping your business grow online.",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      image: ppcIcon,
      description:
        "Search engine PPC Ads are one of the most effective digital marketing strategies to instantly drive targeted traffic, generate quality leads, and boost sales. At TEPNO TECH, our expert PPC campaign management ensures your ads reach the right audience at the right time for maximum ROI.",
    },
    {
      title: "Web Hosting",
      image: hostingIcon,
      description:
        "we offers a complete range of web hosting services, including Shared Hosting, VPS Hosting, and Dedicated Servers—ensuring reliable performance and 24/7 support for your website.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      image: seoIcon,
      description:
        "With years of experience in online marketing, we delivers powerful SEO and digital strategies that help businesses expand their visibility and connect with a global audience.",
    },
    {
      title: "Digital Marketing",
      image: digitalIcon,
      description:
        "We craft targeted digital marketing strategies that increase your online visibility, drive quality traffic, and maximize ROI.",
    },
    {
      title: "Social Media Marketing",
      image: smmIcon,
      description:
        "we offers expert Social Media Marketing services to optimize your pages, engage your target audience, drive traffic, generate leads, and boost brand awareness.",
    },
    {
      title: "Lead Generation",
      image: leadGenIcon,
      description:
        "we offers expert Social Media Marketing services to optimize your pages, engage your target audience, drive traffic, generate leads, and boost brand awareness.",
    },
    {
      title: "Business Branding",
      image: brandingIcon,
      description:
        "We specialize in creating unique brand identities that capture your vision, build emotional connections, and set you apart from the competition.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <h2 className="text-5xl font-bold text-center mb-14">
        Our Exclusive <span className="text-blue-600">IT Solution</span>{" "}
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f3edff] p-6 rounded shadow-md text-center hover:shadow-lg transition"
          >
            <h3 className="font-bold text-xl mb-4 p-4">{service.title}</h3>
            <img
              src={service.image}
              alt={service.title}
              className="w-32 h-32  mx-auto mb-12"
            />
            <p className="text-base text-gray-700">{service.description}</p>
            <button className="bg-pink-300 font-bold mt-10 px-5 py-3 text-black rounded-lg ">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
