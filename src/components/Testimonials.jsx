import { useState } from "react";
import { FaQuoteLeft, FaGoogle } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ScrollAnimate from "./ScrollAnimate";

const testimonials = [
  {
    name: "Amit Sharma",
    text: "Impressed with the professional SEO work by TECNO TECH. They are truly the best SEO company in Delhi for businesses looking to rank higher on Google.",
    rating: 5,
  },
  {
    name: "Manoj Mishra",
    text: "We’ve tried many agencies, but TEPNO stands out as the top social media marketing company in Delhi. Our engagement and customer response improved within weeks.",
    rating: 5,
  },
  {
    name: "Rahul Bansal",
    text: "Looking for digital marketing services in Delhi? Go with TECNO TECH. Their marketing strategies are modern, effective, and ROI-focused. Great team!",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    text: "Impressed with the professional SEO work by TECNO TECH. They are truly the best SEO company in Delhi for businesses looking to rank higher on Google.",
    rating: 5,
  },
  {
    name: "Manoj Mishra",
    text: "We’ve tried many agencies, but TECNO stands out as the top social media marketing company in Delhi. Our engagement and customer response improved within weeks.",
    rating: 5,
  },
  {
    name: "Rahul Bansal",
    text: "Looking for digital marketing services in Delhi? Go with TECNO TECH. Their marketing strategies are modern, effective, and ROI-focused. Great team!",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    text: "Impressed with the professional SEO work by TECNO TECH. They are truly the best SEO company in Delhi for businesses looking to rank higher on Google.",
    rating: 5,
  },
  {
    name: "Manoj Mishra",
    text: "We’ve tried many agencies, but TECNO stands out as the top social media marketing company in Delhi. Our engagement and customer response improved within weeks.",
    rating: 5,
  },
  {
    name: "Rahul Bansal",
    text: "Looking for digital marketing services in Dehradun? Go with TECNO TECH. Their marketing strategies are modern, effective, and ROI-focused. Great team!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  const nextSlide = () =>
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);

  return (
    <div className="relative bg-[#f7f9fb] py-16 px-4 sm:px-2 lg:px-4">
      <ScrollAnimate animation="slidetop">
        <h2 className="text-5xl font-bold text-center mb-10  [animation-delay:0.4s]">
          Testimonials
        </h2>
      </ScrollAnimate>
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevSlide}
          className="text-blue-600 text-4xl border-2 rounded-full hover:bg-blue-400"
        >
          <IoIosArrowBack />
        </button>

        <div className="flex-1 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(index, index + 3).map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 lg:p-14 space-y-4 transition duration-500 "
            >
              <FaQuoteLeft className="text-blue-600 text-4xl" />
              <p className="text-gray-700 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">{item.name}</p>
                  <div className="text-yellow-400 text-xl">
                    {"★".repeat(item.rating)}
                  </div>
                </div>
                <FaGoogle className="text-3xl text-[#4285F4]" />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-blue-600 text-4xl border-2 rounded-full hover:bg-blue-400"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
