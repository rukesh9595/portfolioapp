import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activebt,setActivebt] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActivebt('#')} className={activebt === '#' ? 'active':''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActivebt('#about')} className={activebt === '#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActivebt('#experience')} className={activebt === '#experience' ? 'active':''}><BiBook/></a>
      <a href="#services" onClick={()=>setActivebt('#services')} className={activebt === '#services' ? 'active':''}><RiServiceLine/></a>
      <a href="#contact"onClick={()=>setActivebt('#contact')} className={activebt === '#contact' ? 'active':''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav