// import React from "react";
// import "./Footer.css";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="footer-top"></div>
//       <hr />
//       <div className="footer-bottom">
//         <div className="footer-bottom-right flex justify-centre">
//           <p>Term of Services</p>
//           <p>Privacy Policies</p>
//           <p>Connect with me</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
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
