import { Routes, Route } from "react-router-dom";
import { ThemeEffect } from "./ThemeEffect";
import Layout from "./layout/Layout";
import CaseStudies from "./routes/CaseStudies";
import Css from "./routes/CSS";
import Home from "./routes/Home";
import Projects from "./routes/Projects";

export default function App() {
  return (
    <>
      <ThemeEffect />
      <div className="text-copy flex min-h-screen flex-row p-5 transition-colors duration-200 max-[700px]:flex-col md:p-6">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/css" element={<CSS />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}
