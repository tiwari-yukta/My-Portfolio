import React from "react";
import "./Contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import linkedin from "../../assets/linkedin.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="mail" />
              <p>yuktatiwari738@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="linkedin" />
              <a
                href="https://www.linkedin.com/in/yukta-tiwari-93972022b"
                className="linkedin"
              >
                Linkedin
              </a>
            </div>
            <div className="contact-detail">
              <img src={call} alt="call" />
              <p>8839061098</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
