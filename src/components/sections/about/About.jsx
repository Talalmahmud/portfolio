import React from 'react'
import './about.css'
import aboutImg from '../../../assets/talal.jpg'
import { Link } from 'react-router-dom'
import cv from '../../../assets/resume.pdf'
import { Button } from 'reactstrap'


const About = () => {
  return (
    <>
      <section id='about' className='about__section  d-flex-coloumn '>
                <div className="about__title text-center">
                    <h2>About Me</h2>
                    <p>My Self</p>
                </div>
                <div className="about__details">
                    <div className="about__img">
                        <img src={aboutImg} alt="img"/>
                    </div>
                    <div className="about__card">

                    </div>
                    <div className="about__content ">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, asperiores? Natus facilis esse et rem, labore in consequuntur ullam suscipit, ab, minus aliquid voluptatibus sed fugiat itaque enim asperiores. Fuga.
                    </p>
                        <Link to={cv} target='_blank' download  >
                            <Button className='btn__download'>Download CV</Button>
                    </Link>
                    </div>
                </div>
            </section>
    </>
  )
}

export default About
