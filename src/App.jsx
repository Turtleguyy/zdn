import { Routes, Route } from "react-router-dom";
import { ThemeEffect } from "./ThemeEffect";
import { Layout } from "./layout/Layout";
import { Home } from "./routes/Home";
import { Css } from "./routes/Css";
import { Projects } from "./routes/Projects";
import { CaseStudies } from "./routes/CaseStudies";

export default function App() {
  return (
    <>
      <ThemeEffect />
      <div className="p-5 md:p-6 flex flex-row max-[700px]:flex-col text-copy transition-colors duration-200 min-h-screen">
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
