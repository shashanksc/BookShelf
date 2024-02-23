import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer class="footer">
    <section id="contact">
        <p class="section_text_p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
            <div class="contact-info-container">
                <img src=".src\images\email.png" 
                    alt="email icon" 
                    class="icon contact-icon email-icon"/>
                <p><a href="mailto:fvyrtyler@gmail.com">fvyrtyler@gmail.com</a></p>
            </div>
            <div class="contact-info-container">
                <img src="src\images\linkedin.png" alt="linkedin icon" class="icon contact-icon"/>
                <p><a href="https://www.linkedin.com/in/shashank-saurabh-a42816190/" target="_blank">LinkedIn</a></p>
            </div>
        </div>
    </section>
</footer>

  );
}

export default Footer;
