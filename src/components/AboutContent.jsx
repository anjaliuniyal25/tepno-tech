import React from "react";
import team1 from "../assets/about11.webp";
import team2 from "../assets/about2.webp";
import devImg from "../assets/works-icons7.svg";
import marketingImg from "../assets/works-icons8.svg";
import image1 from "../assets/about3.webp";
import image2 from "../assets/about4.webp";
import tick from "../assets/check14.svg";
const AboutContent = () => {
  return (
    <>
      {/* <section className="px-4 md:px-10 lg:px-20 py-10">
       
        <h2 className="text-3xl md:text-5xl font-bold text-center leading-snug mb-10">
          Delivering Excellence in{" "}
          <span className="text-blue-700">Digital Marketing</span> &{" "}
          <br className="hidden md:block" />
          <span className="text-blue-700">Website Development</span> for Over{" "}
          <span className="text-blue-700">14 Years</span>
        </h2>

      
        <div className="bg-purple-300 p-6 md:p-10 rounded-2xl text-center shadow-md mx-20">
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            As a leading Digital Marketing Company in Delhi, TEPNO TECH
            has been delivering trusted digital solutions for over 14 years. Our
            expertise spans SEO services, social media marketing, and website
            development for clients across Delhi,
            India.
            <br className="my-4" />
            We pride ourselves on being more than just a service provider—we're
            your strategic partner in success. Whether you need a{" "}
            <span className="text-gray-900 font-semibold">
              Website Development Company in Delhi
            </span>{" "}
            or expert SEO Services in India, our team works closely with
            you to ensure tangible results and long-term growth.
          </p>
        </div>
      </section> */}

      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Images */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={team1}
              alt="Team Working"
              className="rounded-xl shadow-lg w-96 h-96"
            />
            <img
              src={team2}
              alt="Team Discussion"
              className="absolute bottom-[-50px] left-1/3 transform -translate-x-1/2 lg:translate-x-0 lg:left-[300px] w-72 h-72 rounded-xl shadow-xl "
            />
          </div>

          {/* Middle Divider (Bar) */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-4 h-8 bg-black mb-2 rounded "></div>
            <div className="w-4 h-20 bg-purple-600 rounded"></div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-5xl font-bold mb-6 text-gray-900 leading-snug">
              Your Success is Our <br className="hidden sm:block" /> Achievement
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At TEPNO TECH, a trusted digital marketing agency in Delhi, we
              believe that true partnership goes beyond contracts. We work as an
              extension of your team—raising red flags when necessary, offering
              expert guidance, and maintaining a transparent, collaborative
              process to deliver meaningful results.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our strength lies in our talented people. Each member of our
              team—whether they specialize in SEO, social media marketing, or
              website development—takes full ownership of their work. This
              culture of responsibility and innovation sets us apart as a
              leading digital marketing company in India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a results-driven mindset, our team ensures that every project
              we handle is delivered on time, meets your goals, and maintains
              the highest standards of quality. Whether you're looking for a
              website development company in Delhi or complete digital marketing
              solutions in Delhi we are committed to your success.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-20 bg-white">
        {/* Heading */}
        <h2 className="text-center text-5xl font-extrabold text-blue-700 mb-12">
          Our Expertise
        </h2>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Website Development */}
          <div className="group flex items-start gap-6 p-6 rounded-xl border shadow-sm hover:shadow-md transition hover:bg-blue-700">
            <div className="bg-purple-100 p-4 rounded-full transition duration-300 group-hover:bg-white">
              <img
                src={devImg}
                alt="Website Icon"
                className="w-full h-fit object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white">
                Website Development
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 group-hover:text-white">
                As a best Website Development Company in Delhi, we craft
                stunning, responsive, and SEO-friendly websites designed to your
                business needs. Whether you're a growing startup or a
                well-established enterprise, TEPNO TECH delivers secure,
                scalable, and performance-optimized platforms that help you
                stand out online.
              </p>
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div className="group flex items-start gap-6 p-6 rounded-xl border shadow-sm hover:shadow-md transition hover:bg-blue-700">
            <div className="bg-purple-100 p-4 rounded-full transition duration-300 group-hover:bg-white">
              <img
                src={marketingImg} // ← replace with your actual image variable
                alt="Marketing Icon"
                className="w-full h-fit object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-black group-hover:text-white">
                Digital Marketing
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 group-hover:text-white">
                Grow your business online with our result-driven digital
                marketing services. From SEO to social media and paid ads, we
                help increase your brand visibility, drive traffic, and generate
                more leads and conversions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 py-16 bg-white text-[#0b0c0f]">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Technology-Driven, Business-Focused
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At TEPNO TECH, a trusted digital marketing company in Delhi, we
              leverage the latest frameworks, tools, and rapid prototyping
              methodologies to deliver scalable and cost-effective digital
              solutions. Our focus is to empower businesses through simplified
              technology that is easy to use, future-ready, and aligned with
              your goals. Whether you need custom website development in India
              or full-service digital marketing, we provide solutions built for
              growth.
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold mt-8 mb-4">
              Our Quality Assurance Approach
            </h3>
            <p className="text-gray-700 mb-6">
              As a top website development and digital marketing company in
              Delhi, we ensure quality through proven QA practices:
            </p>

            <ul className="space-y-2 text-lg font-normal">
              <li className="flex items-start gap-3">
                <img src={tick} alt="check" className="w-6 h-6 mt-1" />
                <span className="text-gray-800">
                  Internal Reviews and Regular Audits
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img src={tick} alt="check" className="w-6 h-6 mt-1" />
                <span className="text-gray-800">
                  Clearly Defined Task Criteria (Entry & Exit)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img src={tick} alt="check" className="w-6 h-6 mt-1" />
                <span className="text-gray-800">
                  Custom Methodologies Based on Client Needs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img src={tick} alt="check" className="w-6 h-6 mt-1" />
                <span className="text-gray-800">
                  Standardized Guidelines Across Projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img src={tick} alt="check" className="w-6 h-6 mt-1" />
                <span className="text-gray-800">
                  Helpdesk & Post-Deployment Support Planning
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img src={tick} alt="check" className="w-6 h-6 mt-1" />
                <span className="text-gray-800">
                  Continuous Communication & Feedback Loops
                </span>
              </li>
              <li className="flex items-start gap-3">
                <img src={tick} alt="check" className="w-6 h-6 mt-1" />
                <span className="text-gray-800">
                  Timely Status Reports for Full Transparency
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image Section */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
  <img
    src={image1}
    alt="Technology Driven"
    className="rounded-xl w-64 h-80 object-cover shadow-md"
  />
  <img
    src={image2}
    alt="Quality Assurance"
    className="rounded-xl w-64 h-64 object-cover shadow-md"
  />
</div>

        </div>
      </section>
    </>
  );
};

export default AboutContent;
