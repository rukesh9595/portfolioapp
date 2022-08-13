import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import './header.css';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a target="_blank" href="https://www.linkedin.com/in/rukesh-lingayat-64b743206"><BsLinkedin/></a>
        <a target="_blank" href="https://github.com/rukesh9595"><FaGithub/></a>
        <a target="_blank" href="https://www.instagram.com/rukesh_lingayat/"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials