import React from 'react';
import { Box } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import { useState } from 'react';
import {HiArrowCircleLeft} from 'react-icons/hi';
import {GiWhiteBook} from 'react-icons/gi';
import {HiArrowCircleRight} from 'react-icons/hi';
import "react-alice-carousel/lib/alice-carousel.css";
import './education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    AOS.init();
    const datalist = [{
        path :'edu_img/jnv.jpg',
        place : '◇ Jawahar Navodaya Vidyalaya, Chandrapur',
        year :  '(2011-2016)',


    },
    {     path : 'edu_img/janata.jpg',
          place: '◇ Janata Mahavidyalaya Chandrapur' ,
          year : '(2016-2018)',

    },
    {
        path : 'edu_img/nac_2.jpg',
        place : '◇ Indian Institute of Technology Madras',
        year : '(2019-2023)',
    }
   ];
  return (
    <section   id='education'>
      
        <h5>All about Study</h5>
        <h2>Education</h2>
        
        <div  data-aos="fade-up" data-aos-duration="3000"  className='img__slider' >
        <Box  sx={{width:'100vw',maxWidth:'100%'}} >
                   <AliceCarousel  playButtonEnabled fadeOutAnimation  mouseDragEnabled DisableButtonsControls
                   keyboardNavigation={true}
                   renderPrevButton={() => {
                     return <p className="p-4 absolute left-0 top-0"><HiArrowCircleLeft style={{color:'#5180ed',fontSize:40}}/></p>
                   }}
                   renderNextButton={() => {
                     return <p className="p-4 absolute right-0 top-0"><HiArrowCircleRight style={{color:'#5180ed',fontSize:40}}/></p>
                   }}
                    >
        {datalist.map((item)=>{
            const {path,place,year}=item;
            return(
               <div className="img__data">
                  <img className='school__img'   src={path} alt='image' id="slider__img"/>
                  <div  className='place__name' >{place}</div>
                  <div  className='year__name'  >{year}</div>
               </div>
            );
            })}

        </AliceCarousel>
      </Box>
        </div>

    </section>
  )
}

export default Education;