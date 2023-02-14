import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
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
            <Link>
              <FiGithub className="icon" />
            </Link>
          </div>
          <div className="header__icon">
            <Link>
              <FiLinkedin className="icon" />
            </Link>
          </div>
          <div className="header__icon">
            <Link>
              <FiFacebook className="icon" />
            </Link>
          </div>
        </div>
        <div className="hero__content">
          <h2>Talal Mahmud</h2>
          <h6>________JavaScript developer________</h6>
          <p>
            I am JavaScript devloper. I like to code with JavaScript. JavaScript
            full stack is my interested field.
          </p>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="img" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
