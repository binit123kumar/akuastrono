import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import HomeButton from "./components/HomeButton";
import Footer from "./components/Footer";

import Contact from "./pages/Contact";
import Faculty from "./pages/Faculty";
import AimAndObjective from "./pages/AimAndObjective";
import Event from "./pages/Event";

function App() {
  return (
    <>
      <HeroSection />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Faculty" element={<Faculty />} />
        <Route path="/AimAndObjective" element={<AimAndObjective />} />
        <Route path="/Event" element={<Event />} />
      </Routes>

      <HomeButton />
      <Footer />
    </>
  );
}

export default App;
