import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/ContactUs";
// import Marketing from "./components/Marketing";
// import Portfolio from "./components/Portfolio";
// import Seo from "./components/Seo";
// import WebsiteDevelopment from "./components/WebsiteDevelopment";
// import WebHosting from "./components/WebHosting";
// import Ads from "./components/Ads";
// import SocialMedia from "./components/SocialMedia";
// import Career from "./components/Career";
// import Blogs from "./components/Blogs"
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contact />} />
          {/* <Route path="/bestdigitalmarketingcompany" element={<Marketing />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/websiteDevelopment" element={<WebsiteDevelopment />} />
          <Route path="/web-hosting" element={<WebHosting />} />
          <Route path="/ads-management" element={<Ads />} />
          <Route path="/social-media-marketing" element={<SocialMedia />} /> */}
          {/* <Route path="/career" element={<Career />} />
          <Route path="/blogs" element={<Blogs/>} /> */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
