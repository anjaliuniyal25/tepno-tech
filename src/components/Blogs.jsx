import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import OurBlogs from "./OurBlogs";

const Blogs = () => {
  return (
    <>
     <Header title="Blogs" breadcrumb="Blogs" />

      <OurBlogs/>
      <Footer sarcColor="text-blue-700" />
    </>
  );
};

export default Blogs;
