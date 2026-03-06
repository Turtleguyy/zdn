import { Routes, Route } from "react-router-dom";
import { ThemeEffect } from "./ThemeEffect";
import Layout from "./layout/Layout";
import CaseStudies from "./routes/CaseStudies";
import Home from "./routes/Home";
import Projects from "./routes/Projects";

export default function App() {
  return (
    <>
      <ThemeEffect />
      <div className="text-copy mx-auto flex min-h-screen w-[92vw] max-w-[1900px] flex-row p-5 transition-colors duration-200 max-[700px]:w-full max-[700px]:flex-col md:p-6">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Projects />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}
