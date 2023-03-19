import React from "react";
import "./about.css";
import aboutImg from "../../../assets/talal.jpg";
import { Link } from "react-router-dom";
import cv from "../../../assets/resume.pdf";
import { Button } from "reactstrap";

const About = () => {
  return (
    <>
      <section id="about" className="about__section  d-flex-coloumn ">
        <div className="about__title text-center">
          <h2>About Me</h2>
          <p>My Self</p>
        </div>
        <div className="about__details">
          <div className="about__img">
            <img src={aboutImg} alt="img" />
          </div>
          <div className="about__card"></div>
          <div className="about__content ">
            <p>
              I have completed my BSc in CSE from Dhaka Unversity of Engineering
              & Technology, Gazipur. I have good knowledge in HTML, CSS,
              JavaScript, React JS, Node JS, MongoDB etc.My career objective is
              to achive a successful carrer through devoton, commitment and hard
              work.
            </p>
            <Link to={cv} target="_blank" download>
              <Button className="btn__download">My Resume</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
