import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Project from './components/project/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Skills/>
<Experience />
<Project />
<Contact />
<Footer />
    </>
  )
}

export default App
