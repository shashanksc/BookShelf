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
                <img src={emailImg}
                    alt="email icon" 
                    class="icon contact-icon email-icon"/>
                <p><a href="mailto:fvyrtyler@gmail.com">fvyrtyler@gmail.com</a></p>
            </div>
            <div class="contact-info-container">
                <img src={linkedinImg} alt="linkedin icon" class="icon contact-icon"/>
                <p><a href="https://www.linkedin.com/in/shashank-saurabh-a42816190/" target="_blank">LinkedIn</a></p>
            </div>
            <div class="contact-info-container">
                <img src={gitImg} alt="github icon" class="icon contact-icon"></img>
                <a href="https://github.com/shashanksc" target="_blank">Github</a>
            </div>
        </div>
   
</footer>

  );
}

export default Footer;
