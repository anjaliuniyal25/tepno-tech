import React from "react";
import { Link } from "react-router-dom";
import i1 from "../assets/blue&beyound.webp";
import i2 from "../assets/client 4.webp";
import i3 from "../assets/client 6.webp";
import i4 from "../assets/client 8.webp";
import i5 from "../assets/client 9.webp";
import i6 from "../assets/client 10.webp";
import i7 from "../assets/client 13.webp";
import i8 from "../assets/client 17.webp";
import i9 from "../assets/client 22.webp";
import i10 from "../assets/super market.webp";
import i11 from "../assets/la angel may  content.webp";
import i12 from "../assets/mount doon academy.webp";
import man from "../assets/man.webp";
import whitearrow from "../assets/whitearrow.webp";
import star from "../assets/star.webp";
import a1 from "../assets/a1.webp";
import a2 from "../assets/a2.webp";
import a3 from "../assets/a3.webp";
import aboutimg5 from "../assets/about-img5.webp";
import aboutimg6 from "../assets/about-img6.webp";
import aboutimg3 from "../assets/about-img3.webp";
import caseimage from "../assets/case-img8.webp";
import ScrollAnimate from "./ScrollAnimate";
const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12];

const Clients = () => {
  return (
    <>
      <section className="bg-white w-full overflow-hidden py-10">
        <h1 className=" font-bold text-3xl md:text-5xl  text-black text-center">
          We've Have Worked With Over <br />
          <span className="text-green-950">2000+ Clients</span>
        </h1>
        <div className="mx-16 my-6  overflow-hidden">
          <div className="w-full whitespace-nowrap">
            <div className="inline-flex animate-stepMarquee gap-14 px-4 py-6">
              {[...images, ...images].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`client-${idx}`}
                  className="w-48 h-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
        {/* <h2 className="font-bold text-3xl md:text-5xl  text-green-900 text-center">
          <span className="text-black">Over</span> 14 years{" "}
          <span className="text-black">of experience</span> in Website
          Development <span className="text-black">&</span> <br />
          Digital Marketing | Social Media Marketing{" "}
          <span className="text-black">&</span> SEO
        </h2> */}
        <ScrollAnimate animation="slideleft">
          <div className="text-center my-20 bg-[#7659AE] p-6 md:p-10 rounded-lg mx-auto max-w-7xl [animation-delay:0.2s] ">
            <div className="flex flex-col md:flex-row items-center gap-10 text-left ">
              {/* Text Content */}
              <div className="flex-1 ">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                  What Do Clients Look for in a Good Digital Marketing Company?
                </h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  When searching for a reliable and result-driven digital
                  marketing company in India, most businesses ask important
                  questions such as:
                </p>
                <ul className="space-y-3">
                  {[
                    "Which is the best digital marketing company in India?",
                    "Who offers the best digital marketing services in India?",
                    "Which agency provides top SEO and social media marketing services?",
                    "Who is the best digital marketing agency in India for long-term growth?",
                  ].map((q, i) => (
                    <li
                      key={i}
                      className="text-white border-2 p-1 rounded-full w-fit font-normal inline-block hover:bg-pink-600"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 mt-4 text-base font-semibold">
                  The answer is clear: TEPNO TECH .
                </p>
              </div>

              {/* Illustration */}
              <div className="flex-1 relative max-w-md mx-auto">
                <img src={man} alt="Illustration" className="w-full" />
                <img
                  src={whitearrow}
                  alt="Arrow"
                  className="absolute top-5 left-5 w-16 sm:w-20 animate-float"
                />
                <img
                  src={star}
                  alt="Star"
                  className="absolute bottom-1 w-20 sm:w-30 animate-spin"
                />
              </div>
            </div>
          </div>
        </ScrollAnimate>

        {/* Why choose SARC */}
        <ScrollAnimate animation="slideright">
          <div className="text-center my-20 bg-[#7659AE] p-6 md:p-10 rounded-lg mx-auto max-w-7xl  [animation-delay:0.2s]">
            <div className="flex flex-col md:flex-row items-center gap-10 text-left">
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                  Why TEPNO TECH Is the Best Choice for Digital Marketing
                  and Web Development
                </h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Business owners prefer working with experienced companies that
                  deliver proven results.TEPNO TECH stands out with its
                  extensive experience in:
                </p>
                <ul className="space-y-3 space-x-2">
                  {[
                    "Digital Marketing services in Delhi",
                    "Professional website designing",
                    "Search Engine Optimization(SEO)",
                    "Social media marketing services in Delhi",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-white border-2 p-1 rounded-full w-fit font-normal inline-block hover:bg-pink-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 mt-4 text-base font-semibold">
                  Our team understands the digital landscape and crafts
                  strategies tailored to your business needs. That’s why we’re
                  known as the best digital marketing and website designing
                  company in India.
                </p>
              </div>

              {/* Illustration */}
              <div className="flex-1 relative">
                <img
                  src={man}
                  alt="Illustration"
                  className="w-full max-w-sm mx-auto"
                />
                <img
                  src={whitearrow}
                  alt="Arrow"
                  className="absolute top-5 left-5 w-20 animate-float"
                />
                <img
                  src={star}
                  alt="Star"
                  className="absolute bottom-1 w-20 sm:w-30 animate-spin"
                />
              </div>
            </div>
          </div>
        </ScrollAnimate>
        {/* <div className="w-full h-fit bg-gray-100 p-10">
          <h2 className="font-bold text-3xl md:text-5xl  text-black text-center">
            Best{" "}
            <span className="text-green-950">
              SEO & Digital Marketing Company
            </span>{" "}
            in Delhi,India -
            <span className="text-green-950">TECNO TECH</span>
          </h2>
          <ScrollAnimate animation="slidetop"></ScrollAnimate>
          <p className="text-green-950 font-normal text-base mt-10 animate-slideleft [animation-delay:1s]">
            <span className="font-bold">TECNO TECH</span> is recognized as
            the{" "}
            <span className="font-bold">
              best digital marketing company in Delhi, India,
            </span>{" "}
            with over{" "}
            <span className="font-bold">14 years of industry experience.</span>
            We have helped hundreds of businesses grow by boosting their online
            presence, increasing leads, and maximizing conversions through
            powerful <span className="font-bold">SEO</span> and{" "}
            <span className="font-bold">digital marketing strategies.</span>
          </p>
        </div> */}
        <section className="py-12 px-6 md:px-20 bg-white">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* Left: Image Grid */}
            <div className="flex flex-col gap-4 lg:w-1/2">
              <div className="flex gap-4">
                <img
                  src={a1}
                  alt="SEO Strategy"
                  className=" rounded-lg shadow-md h-64 w-64"
                />
                <img
                  src={a2}
                  alt="Digital Team"
                  className="h-64 w-64 rounded-lg shadow-md"
                />
              </div>
              <img
                src={a3}
                alt="Business Meeting"
                className="h-64 w-64 rounded-lg shadow-md"
              />
            </div>

            {/* Right: Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Why Your Business Needs{" "}
                <span className="text-green-950">SEO & Digital Marketing</span>
              </h2>
              <ScrollAnimate animation="slideleft">
                <p className="text-gray-700 mb-4 [animation-delay:0.4s]">
                  In today’s digital-first world, traditional marketing no
                  longer delivers the desired results. Most users ignore generic
                  ads and engage only with content that aligns with their
                  interests.
                </p>
              </ScrollAnimate>
              <ScrollAnimate animation="slideleft">
                <p className="text-gray-700 mb-4  [animation-delay:0.6s]">
                  That’s why businesses are turning to{" "}
                  <strong>SEO services</strong> and{" "}
                  <strong>digital marketing companies in Delhi</strong>{" "}
                  for growth.
                </p>
              </ScrollAnimate>
              <ScrollAnimate animation="slideleft">
                <p className="text-gray-700 mb-4  [animation-delay:0.6s]">
                  With professional{" "}
                  <strong>
                    search engine optimization (SEO) services in Delhi
                  </strong>{" "}
                  and expert
                  <strong> digital marketing strategies</strong>, you can:
                </p>
              </ScrollAnimate>
              <ScrollAnimate animation="slideleft">
                <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg  [animation-delay:1s]">
                  <li>Build fast, secure, and user-friendly websites</li>
                  <li>Achieve top rankings on search engines</li>
                  <li>Attract targeted, qualified traffic to your site</li>
                  <li>
                    Improve your conversion rates and generate high-quality
                    leads
                  </li>
                </ul>
              </ScrollAnimate>
            </div>
          </div>
          <section className="bg-gray-100 py-16 px-4 w-full">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
              {/* Left Content */}
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                  Get Instant Results with <br />
                  Targeted{" "}
                  <span className="text-teal-800">Online Marketing</span>
                </h1>
                <ScrollAnimate animation="slidetop">
                  <p className="text-gray-700 mb-6  [animation-delay:0.4s]">
                    Unlike outdated advertising methods, digital marketing and
                    SEO services help you connect with potential customers who
                    are actively searching for your products or services. With
                    the right strategy and minimal investment, your business can
                    experience:
                  </p>
                </ScrollAnimate>
                <ScrollAnimate animation="slideleft">
                  <ul className="list-none list-inside text-gray-800 space-y-1  [animation-delay:1s]">
                    <li>✔️ Increased brand visibility</li>
                    <li>✔️Improved online credibility</li>
                    <li>✔️ Faster growth with measurable results</li>
                  </ul>
                </ScrollAnimate>
                <ScrollAnimate animation="slidetop">
                  <p className="mt-6 text-gray-700  [animation-delay:0.4s]">
                    If you're seeking immediate results, our digital marketing
                    company in Delhi is here to deliver
                    solutions that drive real outcomes.
                  </p>
                </ScrollAnimate>
              </div>
             

              {/* Right Image */}
              <div className="flex-1">
                <img
                  src={caseimage}
                  alt="Team working"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              {/* Left images */}
              <div className="flex-1 flex justify-center gap-10">
                <img
                  src={aboutimg5}
                  alt="Man thinking"
                  className="w-52  object-cover mb-10"
                />
                <img
                  src={aboutimg6}
                  alt="Support person"
                  className="  w-52 object-cover mt-10"
                />
                {/* <img
            src={element12}
            alt=""
            className="top-10 left-40"
          />
          <img
            src={element13}
            alt=""
            className="bottom-10 left-40"
          /> */}
              </div>

              {/* Right content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Why Choose{" "}
                  <span className="text-teal-800">TEPNO TECH</span>
                </h2>
                <ScrollAnimate animation="slidetop">
                  <p className="text-gray-600 mb-4 [animation-delay:0.4s]">
                    As a leading digital marketing company in India, we
                    deliver proven results with:
                  </p>
                </ScrollAnimate>
                <ScrollAnimate animation="slideleft">
                  <ul className="space-y-2 text-gray-700 [animation-delay:1s]">
                    <li>✔️ 14+ years of industry experience</li>
                    <li>
                      ✔️ Trusted by 2,000+ businesses across Delhi,
                      and pan-India
                    </li>
                    <li>
                      ✔️ Expertise in SEO, social media marketing, and web
                      development
                    </li>
                    <li>✔️ Data-driven strategies focused on ROI</li>
                    <li>✔️ 100% client satisfaction with scalable solutions</li>
                  </ul>
                </ScrollAnimate>
              </div>
            </div>
          </section>
        </section>
        <section className="bg-[#144a4a] p-10 text-white">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-5xl font-semibold text-center mt-10">
              Contact Us Today
            </h2>
            <ScrollAnimate animation="slidetop">
              <p className="text-base font-normal text-center mt-10  [animation-delay:0.4s]">
                Looking for reliable digital marketing and SEO services in
                Delhi? Trust TEPNO to deliver
                growth-driven strategies <br />
                tailoredto your business goals. <br /> Contact us today for
                professional website development, SEO, and digital marketing
                services in India.
              </p>
            </ScrollAnimate>
            <ScrollAnimate animation="slidetop">
              <button className=" relative overflow-hidden z-0 group px-6 py-3 text-lg font-semibold text-black bg-[#ADFF1C] border border-[#ADFF1C] rounded transition duration-300  [animation-delay:0.4s]  hover:-translate-y-2 mt-10">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  <Link to="contact" >Call Now </Link>
                </span>
              </button>
            </ScrollAnimate>
          </div>
        </section>

        <section className="bg-white py-12 px-4 md:px-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Grow Your Business with the Top SEO Company in India
            </h1>
          </div>

          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 animate-slideright [animation-delay:0.4s]">
            {/* Left Image */}
            <div className="w-full md:w-2/5">
              <img
                src={aboutimg3}
                alt="Grow Your Business"
                className="w-60  max-w-md mx-auto mt-10"
              />
            </div>

            {/* Right Text */}
            <div className="w-full text-center md:text-left">
              <ScrollAnimate animation="slideright">
                <p className="text-gray-700 mt-6  [animation-delay:1s]">
                  At TEPNO TECH, we believe that no business can succeed
                  today without a solid digital presence. With our expert SEO
                  services in Delhi, and across India, we
                  ensure your business stands out in search engine results and
                  reaches the customers that matter most.
                </p>
              </ScrollAnimate>
              <ScrollAnimate animation="slideright">
                <p className="text-gray-700 mt-4  [animation-delay:2s]">
                  Whether you need help with SEO, Google Ads, social media
                  campaigns, or website design, our experienced team is here to
                  grow your business online.
                </p>
              </ScrollAnimate>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Clients;
