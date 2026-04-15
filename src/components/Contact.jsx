import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>Contact Me</h1>
        <div className="contact-icon"
         data-aos="zoom-in"
      data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-kumar-23a350301"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          {/* <div className="items">
            <FaXTwitter className="icons" />
          </div> */}
          <a href="https://github.com/princeKumar7714" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:princerajpit5868@gmail.com"
            target="_blank"
            className="items"
          >
            <CiMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
