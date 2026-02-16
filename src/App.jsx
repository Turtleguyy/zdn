import { Routes, Route } from "react-router-dom";
import { ThemeEffect } from "./ThemeEffect";
import Layout from "./layout/Layout";
import Home from "./routes/Home";
import Css from "./routes/Css";
import Projects from "./routes/Projects";
import CaseStudies from "./routes/CaseStudies";

export default function App() {
  return (
    <>
      <ThemeEffect />
      <div className="text-copy flex min-h-screen flex-row p-5 transition-colors duration-200 max-[700px]:flex-col md:p-6">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/css" element={<Css />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}
