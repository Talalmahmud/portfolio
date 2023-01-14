import React from 'react'
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './herosection.css'
import heroImg from '../../../assets/talal.jpg'


const HeroSection = () => {
  return (
    <>
      <section id='home' className='hero__section d-flex justify-contet-between align-items-center gap-4'>
                <div className="hero__media ">
                    <Link><FiGithub /></Link>
                    <Link><FiLinkedin /></Link>
                    <Link><FiFacebook/></Link>
                </div>
                <div className="hero__content">
                    <h2>Talal Mahmud</h2>
                    <h6>________MERN developer________</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, cupiditate ab! Iusto provident 
                    </p>
                </div>
                <div className="hero__img">
                    <img src={heroImg} alt="img" />
                </div>
            </section>
    </>
  )
}

export default HeroSection
