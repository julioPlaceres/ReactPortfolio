import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="ReactPortfolio/" element={<Home />} />
        <Route path="ReactPortfolio/project" element={<Projects />} />
        <Route path="ReactPortfolio/about" element={<About />} />
        <Route path="ReactPortfolio/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
