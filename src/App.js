// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";  // Assuming you have other components like Skills, About, etc.
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import backgroundImage from './assets/back.png';

const App = () => {
  return (
    <div 
      className="App" 
      style={{ 
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: "cover",
        minHeight: "100vh"
      }}
    >
      <Navbar />
      <Introduction />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
