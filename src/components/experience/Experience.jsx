import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import './experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  AOS.init()
  return (
    <section id='skills' >
      <h5>what Skills I Have</h5>
      <h2>My Competency</h2>

      <div  data-aos="flip-up"   data-aos-duration="2000" className='container experience__container'>
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div  className="experience__content">
          <article className="experience__details">
            <img id='skill' className='experience__details-icon' src="/edu_img/skills/html.png" alt="" />
            
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Advanced</small>
            </div>
             
          </article>
          <article className="experience__details">
            <img id='skill' className='experience__details-icon' src="/edu_img/skills/css-3.png" alt="" />
           
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
             
          </article>
          <article className="experience__details">
          <img id='skill' className='experience__details-icon' src="/edu_img/skills/js.png" alt="" />
           
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
             
          </article>
          <article className="experience__details">
          <img id='skill' className='experience__details-icon' src="/edu_img/skills/python.png" alt="" />
           
            <div>
            <h4>Python</h4>
            <small className='text-light'>Advanced</small>
            </div>
             
          </article>
          <article className="experience__details">
          <img id='skill' className='experience__details-icon' src="/edu_img/skills/atom.png" alt="" />
           
           <div>
           <h4>React</h4>
            <small className='text-light'>Intermediate</small>
           </div>
             
          </article>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience