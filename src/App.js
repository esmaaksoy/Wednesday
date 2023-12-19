import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import NotFound from './components/Error/NotFound'
import {Routes, Route} from "react-router-dom"
import "./scss/main.scss"
import { useLocation } from 'react-router-dom'
function App() {
  const location = useLocation();
  const getPagesStyles = () => {
    if (location.pathname === "/") {
      return "home-bgImg-container";
    } else if (location.pathname === "/about") {
      return "about-bgImg-container";
    } else if (location.pathname === "/projects") {
      return "project-bgImg-container";
    } else if (location.pathname === "/contact") {
      return "contact-bgImg-container";
    } 
  };
  return (
    <div className={getPagesStyles()}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
