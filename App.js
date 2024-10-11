import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import ProfilePic from './components/ProfilePic';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <ProfilePic />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
