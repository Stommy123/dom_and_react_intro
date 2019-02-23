import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = _ => [
  <Navbar key="nav" />,
  <Home key="home" />,
  <Main key="main" />,
  <Projects key="projects" />,
  <Resume key="resume" />,
  <Contact key="contact" />,
  <Footer key="footer" />
];

export default App;
