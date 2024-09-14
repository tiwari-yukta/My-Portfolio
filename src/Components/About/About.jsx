import React from "react";
import "./About.css";
import theme from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} />
        </div>
        <div className="about-right ">
          <div className="about-para">
            <p>
              As a B.Tech student in Electronics and Communication Engineering
              at NIT Manipur, I bring a strong technical foundation to front-end
              development. My proficiency in web technologies, data structures,
              and algorithms makes me well-suited for collaborating on ReactJS
              projects and participating in the full software development
              lifecycle.
            </p>
            <p>
              I'm passionate about creating intuitive and efficient user
              interfaces. My technical aptitude, enthusiasm for front-end
              development, and eagerness to grow drive me to consistently
              deliver high-quality work. I enjoy tackling complex problems and
              turning innovative ideas into functional, user-friendly web
              applications.
            </p>
            <p>
              Staying current with industry trends and continuously expanding my
              skill set is a priority for me. This drive, combined with my
              academic background and practical experience, positions me to
              contribute effectively to any development team. I'm always excited
              about new opportunities to apply my skills, learn from experienced
              professionals, and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
