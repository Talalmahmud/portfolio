import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import "./herosection.css";
import heroImg from "../../../assets/talal.jpg";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="hero__section d-flex justify-contet-between align-items-center gap-4"
      >
        <div className="hero__media ">
          <div className="header_icon">
            <a href={"https://github.com/Talalmahmud/Talalmahmud"}>
              <FiGithub className="icon" />
            </a>
          </div>
          <div className="header__icon">
            <a href={"https://www.linkedin.com/in/talal-mahmud2"}>
              <FiLinkedin className="icon" />
            </a>
          </div>
          <div className="header__icon">
            <a href={"https://www.facebook.com"}>
              <FiFacebook className="icon" />
            </a>
          </div>
        </div>
        <div className="hero__content" data-aos="fade-right">
          <h2 data-aos="fade-up">Talal Mahmud</h2>
          <h6 data-aos="fade-down">________JavaScript developer________</h6>
          <p data-aos="fade-down">
            I am <b>JavaScript devloper.</b> I like to code with JavaScript.
            JavaScript front-end and backend is my interested field.
          </p>
        </div>
        <div className="hero__img" data-aos="fade-left">
          <img src={heroImg} alt="img" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
