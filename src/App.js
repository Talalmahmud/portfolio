import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import About from "./components/sections/about/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
