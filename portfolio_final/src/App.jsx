import React from 'react';
import { Navbar, Home, Main, Projects, Resume, Contact, Footer } from './components';

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
