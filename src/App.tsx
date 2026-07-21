import { Routes, Route } from "react-router-dom";
import Home from "./routes/index";
import AboutUs from "./routes/about-us";
import Features from "./routes/features";
import Team from "./routes/team";
import AwardsAccolades from "./routes/awardsaccolades";
import Testimonial from "./routes/testimonial";
import Blog from "./routes/blog";
import BlogPost from "./routes/blog.$slug";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/team" element={<Team />} />
      <Route path="/awardsaccolades" element={<AwardsAccolades />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* Add a catch-all route if needed */}
    </Routes>
  );
}
