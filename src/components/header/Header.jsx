import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/rukesh.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import {FcReadingEbook} from 'react-icons/fc';
import useEffect from 'react';


const Header = () => {
  AOS.init();
  const {text} = useTypewriter({
    words: ['React Frontend Developer', 'Python Enthusiast'],
    loop:10,
    delaySpeed:500,
    onLoopDone: () => console.log(`loop completed after 10 runs.`),
  })
  
  // useEffect (()=> {
  //   AOS.init({duration:2000});
  // },[]);
  return (
    <section  id='header'>
      <div className="container header__container">
        <h5>Hello It's Me</h5>
        <h1 data-aos="flip-left" data-aos-duration='3000'>Rukesh Lingayat</h1>
        <h4 className='text-light'>
          I'm {text} 
        </h4>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img  data-aos-duration="2000" data-aos='zoom-in' id="rukesh" style={{borderRadius:500}} src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Header