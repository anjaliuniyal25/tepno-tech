import seoImg1 from "../assets/seo1.webp";
import seoImg2 from "../assets/seo2.webp";
import cross from "../assets/cross.webp";
import starr from "../assets/starr.webp";
import ppc1 from "../assets/ppc1.webp";
import ppc2 from "../assets/ppc2.webp";
import em1 from "../assets/em1.webp";
import em2 from "../assets/em2.webp";

const MarketingContent = () => {
  return (
    <>
      <section className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold text-blue-700 mb-6 text-center">
          Digital Marketing Services in India
        </h1>

        {/* Intro Paragraph */}
        <p className="text-base text-gray-700 mb-10">
          Looking for the{" "}
          <strong>best digital marketing company in DEHRADUN</strong> to boost
          your brand’s online visibility and accelerate business growth? As{" "}
          <strong>one of the best companies in Dehradun</strong> specializing in
          digital marketing, we design customized strategies that increase
          website traffic, generate quality leads, and maximize conversions.
        </p>

        {/* Subheading */}
        <h2 className="text-xl md:text-3xl font-bold text-black mb-4">
          Why Choose Us as Your Digital Marketing Agency in DEHRADUN?
        </h2>

        {/* Supporting Text */}
        <p className="text-base text-gray-700 mb-16">
          Recognized as one of the{" "}
          <strong>best digital marketing agencies in India</strong> and a top{" "}
          <strong>SEO company in Dehradun</strong>, we combine creative
          campaigns with advanced SEO techniques to improve your search engine
          rankings and expand your reach. Whether you want to target local
          markets or a global audience, our comprehensive{" "}
          <strong>digital marketing services in India</strong> are tailored to
          fit your unique business needs.
        </p>

        {/* Section Title */}
        <h3 className="text-xl md:text-3xl font-bold text-black mb-2 text-center">
          Our Full Range of Digital Marketing Solutions
        </h3>

        <h4 className="text-lg md:text-2xl font-bold text-black text-center">
          Our expertise includes:
        </h4>
      </section>

      <section className="w-full bg-white py-16 px-6 md:px-20">
        {/* 1st Service Row */}
        <div className="mb-20 flex flex-col lg:flex-row items-center gap-10">
          {/* Images */}
          <div className="relative flex justify-center gap-6">
            <div className="relative">
              <img
                src={seoImg1}
                alt="SEO graphic"
                className="w-52 sm:w-64 md:w-72 rounded-[30%]"
              />
            </div>
            <div className="relative -top-10 md:-top-20">
              <img
                src={seoImg2}
                alt="SEO audit"
                className="w-52 sm:w-64 md:w-72 rounded-[30%]"
              />
            </div>

            {/* Decorative Icons */}
            <img
              src={cross}
              alt="Cross"
              className="absolute -top-4  w-6 sm:w-8 md:w-12 animate-pulse"
            />
            <img
              src={starr}
              alt="Star"
             className="absolute -bottom-4  -translate-x-1/2 w-6 sm:w-8 md:w-12 animate-pulse"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              SEO Services in India
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As the best SEO company in Dehradun, we provide in-depth keyword
              research, on-page and technical SEO, content optimization, link
              building, and competitor analysis to boost your organic traffic
              and search visibility.
            </p>

            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Social Media Marketing Services in India
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ranked among the top social media marketing companies in Dehradun,
              we create engaging campaigns across platforms like Facebook,
              Instagram, LinkedIn, and Twitter to grow your brand awareness and
              customer engagement.
            </p>
          </div>
        </div>

        {/* 2nd Service Row */}
        <div className="flex flex-col md:flex-row items-center gap-10 py-16">
          {/* TEXT CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              Pay-Per-Click (PPC) Advertising
            </h2>
            <p className="text-gray-600 mb-6">
              Get instant traffic and measurable ROI with targeted PPC campaigns.
            </p>

            <h2 className="text-xl md:text-3xl font-bold mb-2">
              Content Marketing
            </h2>
            <p className="text-gray-600">
              Develop compelling content strategies that attract and retain your ideal audience.
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex-1 flex justify-center gap-6">
            <div className="relative">
              <img
                src={em1}
                alt="Email Marketing"
                className="w-52 sm:w-64 md:w-72 rounded-[30%]"
              />
              <img
                src={cross}
                alt="Cross"
                className="absolute -top-4 -right-4 w-6 sm:w-8 md:w-12 animate-pulse"
              />
            </div>

            <div className="relative -top-6 md:-top-10">
              <img
                src={em2}
                alt="Automation"
                className="w-52 sm:w-64 md:w-72 rounded-[30%]"
              />
              <img
                src={starr}
                alt="Star"
                className="absolute -bottom-4  -translate-x-1/2 w-6 sm:w-8 md:w-12 animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* 3rd Service Row */}
        <div className="mt-20 flex flex-col lg:flex-row items-center gap-10">
          {/* Images */}
          <div className="relative flex justify-center gap-6">
            <div className="relative">
              <img
                src={ppc1}
                alt="PPC Graphic"
                className="w-52 sm:w-64 md:w-72 rounded-[30%]"
              />
            </div>
            <div className="relative -top-10 md:-top-20">
              <img
                src={ppc2}
                alt="PPC Audit"
                className="w-52 sm:w-64 md:w-72 rounded-[30%]"
              />
            </div>

            {/* Decorative Icons */}
            <img
              src={cross}
              alt="Cross"
              className="absolute -top-4  w-6 sm:w-8 md:w-12 animate-pulse"
            />
            <img
              src={starr}
              alt="Star"
              className="absolute -bottom-4  -translate-x-1/2 w-6 sm:w-8 md:w-12 animate-pulse"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Email Marketing & Automation
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nurture leads and build long-term relationships through personalized email campaigns.
            </p>

            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Combined Digital Marketing and Website Designing Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              As the best digital marketing and website designing company in
              Dehradun, we build visually stunning, user-friendly websites optimized for search
              engines and conversions. This integrated approach ensures your online
              presence is powerful, cohesive, and effective.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Why Partner With Us?
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            • Proven success as{" "}
            <strong>one of the best companies in Dehradun</strong> offering
            digital marketing services across industries
          </li>
          <li>
            • A skilled team of SEO experts, content creators, social media
            strategists, and PPC professionals
          </li>
          <li>
            • Data-driven, customized marketing solutions aligned with your
            business goals
          </li>
          <li>
            • Transparent reporting and continuous optimization for the best
            results
          </li>
          <li>
            • Dedicated support throughout your digital growth journey
          </li>
        </ul>
        <p className="mt-6 text-gray-700">
          <strong>
            Grow your business with one of the best digital marketing companies
            in Dehradun and India.
          </strong>{" "}
          Contact us today to explore our full range of{" "}
          <strong>digital marketing services in India</strong> and elevate your
          online presence!
        </p>
      </div>
    </section>
    </>
  );
};

export default MarketingContent;
