import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/placeholder" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://youtube.com/placeholder" target="_blank" rel="noreferrer">
            <BsYoutube />
          </a>
          <a href="https://facebook.com/placeholder" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@gourmethaven.com</span>
          <span>press@gourmethaven.com</span>
          <span>contact@gourmethaven.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;