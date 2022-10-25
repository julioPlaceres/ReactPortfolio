// import "./style.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="project" element={<Projects/>} />
          <Route path="about" element={<About/>} />
          <Route path="resume" element={<Resume/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

// Export App Module
export default App;
