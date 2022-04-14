import React from 'react'
import '../components/main.css'
import { BsArrowRight } from "react-icons/bs";

import { BsLinkedin } from "react-icons/bs";

import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const MainPresent = () => {
  return (
      <>
        <div className="main">
        <div className='textSection'>
        <h1 className="titlePage"><h1 className='titlePage2'>The Freedom</h1> to Explore</h1>
        <p className='subtitlePage'>Ready to start</p>
        <p className='subtitlePage2'>Let's to search something</p> 
        <Link to='/searchall' className='nav-links'>
            <button className='buttonMain'>
                Get Started <BsArrowRight />
            </button>                  
        </Link>
        </div>
        <img className='imgMain' src='/img/mainPageimg.svg' alt="Imagen Main"/>
        </div>
        <div className='social'>
            <BsLinkedin className='icon2'/>
            <BsInstagram className='icon1'/>
        </div>
       
      </>
    
  )
}

