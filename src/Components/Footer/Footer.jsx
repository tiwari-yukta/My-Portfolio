import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top"></div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Yukta Tiwari. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
