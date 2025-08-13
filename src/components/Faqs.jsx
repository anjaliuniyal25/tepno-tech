import { useState } from "react";
import faqImage from "../assets/blog-img.webp"; // Update to your actual image path

const faqs = [
  {
    question: "How can we help your business?",
    answer:
      "We have so many of options that help your business to grow up such as Digital Marketing Solutions & SEO Website Designing For Global Reach Lead Generation All these services definitely help you to increase your sales.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The average wait for a website is 3 week, its all depend upon the type, requirement and expectation of a customer.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <h2 className="text-5xl font-bold text-center">Frequently Asked Questions</h2>
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
      {/* FAQ Left Section */}
      <div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer transition hover:shadow"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold ">{faq.question}</h3>
                <span className="text-3xl">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Right Section */}
      <div>
        <img
          src={faqImage}
          alt="FAQ"
          className="w-full h-96 rounded-xl shadow-md object-cover"
        />
      </div>
    </div>
    </>
  );
};

export default FaqSection;
