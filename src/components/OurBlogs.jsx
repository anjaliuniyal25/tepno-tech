import { FaUser, FaCalendarAlt } from "react-icons/fa";
import blog1 from "../assets/blog-22.webp";
import blog2 from "../assets/blog-23.webp";
import blog3 from "../assets/blog-24.webp";
import ScrollAnimate from "./ScrollAnimate";

const blogData = [
  {
    img: blog1,
    date: "1 August 2025",
    title: "Digital Marketing Strategies for Local Businesses in Dehradun",
    desc: "Still posting on Instagram and hoping customers will find you? That’s not a strategy...",
  },
  {
    img: blog2,
    date: "30 July 2025",
    title: "Local SEO Checklist for Dehradun Businesses in 2025",
    desc: "If your business isn’t showing up on Google Maps, you’re losing customers to ...",
  },
  {
    img: blog3,
    date: "28 July 2025",
    title: "How to Choose the Right SEO Agency in Dehradun – 7 Proven Tips",
    desc: "Looking for an SEO agency in Dehradun but not sure who to trust? With so...",
  },
];

const OurBlogs = () => {
  return (
    <ScrollAnimate animation="slidetop">
      <section className="py-16 px-5 md:px-20 bg-white text-gray-800 [animation-delay:0.4s] ">
        <h2 className="text-5xl font-bold text-center mb-12 ">Our Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <div className="flex gap-5 text-sm text-gray-600 items-center mb-2">
                  <span className="flex items-center gap-2">
                    <FaUser /> Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-3">{blog.desc}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimate>
  );
};

export default OurBlogs;
