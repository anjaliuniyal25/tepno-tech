import React from "react";
import i1 from "../assets/corporate-photographer1.webp";
import i2 from "../assets/CEO-vs-Managing-Director.webp";

const PortfolioContent = () => {
  return (
    <>
    
      <section className="bg-gray-200 py-12 px-6 md:px-40">
        {/* WHO WE ARE Section */}
        <div className="py-12 px-6 lg:px-20">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black">WHO WE ARE</h2>
            <div className="flex justify-center items-center mt-2">
              <span className="w-20 h-[2px] bg-black mx-2"></span>
              <span className="text-xl text-red-600">▼</span>
              <span className="w-20 h-[2px] bg-black mx-2"></span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2">
              <img src={i1} alt="About us" className="rounded-lg shadow-lg" />
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2 text-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-black">
                About Our Company
              </h3>
              <p className="mb-4">
                Welcome to SARC Technology, your trusted partner for comprehensive
                digital marketing and web development solutions. At SARC, we
                understand the ever-evolving landscape of online business and the
                importance of staying ahead of the competition. With our expertise
                and cutting-edge strategies, we empower businesses to thrive in the
                digital realm.
              </p>
              <p className="mb-4">
                Our digital marketing services encompass a wide range of
                solutions, including search engine optimization (SEO),
                pay-per-click advertising (PPC), social media marketing, content
                creation, and more. We tailor our strategies to your unique
                business goals, ensuring maximum online visibility, increased
                website traffic, and enhanced brand recognition.
              </p>
              <p>
                When it comes to web development, we craft visually stunning and
                user-friendly websites that captivate your audience and drive
                conversions. Our team of experienced developers utilizes the
                latest technologies and industry best practices to create websites
                that are responsive, scalable, and optimized for superior
                performance across all devices.
              </p>
            </div>
          </div>
        </div>

        {/* Our Director & CEO Section */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Director & CEO
              </h2>
              <p className="mb-4">
                Welcome to our company! At SARC Technology, we pride ourselves on
                delivering exceptional digital marketing and web development
                services. Our success is driven by the visionary leadership of our{" "}
                <strong>Founder and Director, Mr. Raj Kamal.</strong>
              </p>
              <p className="mb-4">
                With a wealth of experience and a passion for innovation,{" "}
                <strong>Mr. Raj Kamal</strong> has led our company to new heights.
                His strategic thinking and deep understanding of the industry have
                shaped our growth and positioned us as a trusted partner for
                businesses seeking online success.
              </p>
              <p className="mb-4">
                Under <strong>Mr. Raj Kamal’s</strong> guidance, our team of experts
                thrives in creating tailored solutions that empower our clients to
                achieve their digital goals. His commitment to excellence and
                dedication to customer satisfaction are the driving forces behind
                our company’s success.
              </p>
              <p className="mb-8">
                We invite you to explore our services and witness firsthand the
                impact of Raj Kamal’s visionary leadership. Join us on this exciting
                journey and let us help you navigate the digital landscape with
                confidence.
              </p>
            </div>

            {/* Right Image & Buttons Below */}
            <div className="flex flex-col items-center">
              <img
                src={i2}
                alt="CEO Managing Director"
                className="w-full rounded shadow-lg mb-6"
              />
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioContent;
