import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Interests from './components/Interests';
import WorkExperience from './components/WorkExperience';
import Certification from './components/Certification';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <AboutMe />
        <Skills />
        <Interests />
        <WorkExperience />
        <Certification />
        <Form />
        <Footer />
      </>
    </div>
  );
}

export default App;
