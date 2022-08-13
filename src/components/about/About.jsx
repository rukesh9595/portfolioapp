import React from 'react'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import './about.css';
import { useState } from 'react';
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {TbCircleCheck} from 'react-icons/tb';

const About = () => {
  AOS.init();
  const [meinfohead,setMeinfoHead] = useState('');
  const [meinfopara,setMeinfoPara] = useState('');
  const [boxclr_a,setboxClr_a] = useState('green');
  const [boxclr_b,setboxClr_b] = useState('');
  
  return (
    <section  id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom" data-aos-duration="3000" className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src="edu_img/website.png" alt="about me" />
        </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
        <article className="about__card" 
        style={{borderWidth:'2px',borderColor:boxclr_a,}}
        onClick={()=>{setMeinfoHead('Software Engineer Intern at Untouched (15 May - 15 July 2022)'); setboxClr_a('green');setboxClr_b('');
                          setMeinfoPara('◇ Made an Website from scratch using React and CSS')}}
        onMouseEnter={()=>{setMeinfoHead('Software Engineer Intern at Untouched (15 May - 15 July 2022)'); setboxClr_a('green');setboxClr_b('');
                          setMeinfoPara('◇ Made an Website from scratch using React and CSS')}}
                          
                          onMouseLeave={()=>{setMeinfoHead(''); setboxClr_b('');setboxClr_a('');
                          setMeinfoPara('')}}>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>Internship</small>
          
        </article>
        <article className="about__card" 
        style={{borderWidth:'2px',borderColor:boxclr_b,}}
        onClick={()=>{setMeinfoHead('Event Coordinator at Chemical Engineering Society'); setboxClr_b('green');setboxClr_a('');
                          setMeinfoPara("◇ Organized suitable arrangement for workshop, cleared doubts of the participants during workshop.In Chemplus Event Coordinated workshop of 100+ participants.")}}
        onMouseEnter={()=>{setMeinfoHead('Event Coordinator at Chemical Engineering Society'); setboxClr_b('green');setboxClr_a('');
                          setMeinfoPara("◇ Organized suitable arrangement for workshop, cleared doubts of the participants during workshop.In Chemplus Event Coordinated workshop of 100+ participants.")}}
                          onMouseLeave={()=>{setMeinfoHead(''); setboxClr_b('');setboxClr_a('');
                          setMeinfoPara('')}}
                         >
        
          <FiUsers className='about__icon'/>
          <h5>Positions of Responsibility</h5>
          <small>Ches</small>
          
        </article>
        </div>
        <div className='about__head'>{meinfohead}</div>
        <div className='about__info'>{meinfopara}</div>
          
         
        <a style={{marginTop:'3%'}} href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>


    </section>
  )
}

export default About;