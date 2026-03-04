import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'       
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Contacts from '../components/Contact'
import Footer from '../components/Footer'



const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-950">
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contacts />
        <Footer />
    </div>
  )
};

export default Portfolio;


