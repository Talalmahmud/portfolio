import React from "react";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2 data-aos="fade-up">Talal</h2>
      <div className="media__icons">
        <div className="footer_icon">
          <a href={"https://github.com/Talalmahmud/Talalmahmud"}>
            <FiGithub className="icon" />
          </a>
        </div>
        <div className="footer__icon">
          <a href={"https://www.linkedin.com/in/talal-mahmud2"}>
            <FiLinkedin className="icon" />
          </a>
        </div>
        <div className="footer__icon">
          <a href={"https://www.facebook.com"}>
            <FiFacebook className="icon" />
          </a>
        </div>
      </div>
      <p>@ Copyrighter 2023. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
