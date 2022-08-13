import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
   
    <footer >
      <a href="#" className='footer__logo'>rukesh</a>
      <ul className='permlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a target="_blank" href="https://www.linkedin.com/in/rukesh-lingayat-64b743206"><BsLinkedin/></a>
      <a target="_blank" href="https://github.com/rukesh9595"><FaGithub/></a>
      <a target="_blank" href="https://www.instagram.com/rukesh_lingayat/"><BsInstagram/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Rukesh pvt. ltd. All rights Reserved</small>
      </div>
    </footer>
    
  )
}

export default Footer;