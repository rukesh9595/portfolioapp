import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Education from './components/education/Education';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Tabpanel from './components/tabpanel/Tabpanel';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import MenuBox from './components/menubox/MenuBox';
import './app.css';


const App = () => {
  return (
    <div className="app-container">
    <Header/>
    <Education/>
    <About/>
    <MenuBox/>
    <Experience/>
    <Tabpanel/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App