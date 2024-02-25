import React from 'react';
import emailImg from "../../images/email.png"
import linkedinImg from "../../images/linkedin.png"
import gitImg from "../../images/github.png"
import './Footer.css';
function Footer() {
  return (
    <footer class="footer">
        <p class="section_text_p1">Get in Touch</p>
        <div class="contact-info-upper-container">
            <div class="contact-info-container">
                <a href="mailto:fvyrtyler@gmail.com">
                    <img src={emailImg} alt="email icon" style={{width: '2.5rem'}} className="icon contact-icon email-icon" />
                </a>
            </div>
            <div class="contact-info-container">
                <a href="https://www.linkedin.com/in/shashank-saurabh-a42816190/" target="_blank">
                    <img src={linkedinImg} alt="linkedin icon" className="icon contact-icon" />
                </a>
            </div>
            <div class="contact-info-container">
                <a href="https://github.com/shashanksc" target="_blank">
                    <img src={gitImg} alt="github icon" className="icon contact-icon" />
                </a>
            </div>
        </div>
        <p className="section_text_p1">Other Projects</p>
        <div className="contact-info-upper-container">
            <div className="contact-info-container">
                <a href="https://pollapp12.netlify.app/" target="_blank">Poll App</a>
            </div>
            <div className="contact-info-container">
                <a href="https://currency1convapp.netlify.app/" target="_blank">Curreny Converter</a>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
