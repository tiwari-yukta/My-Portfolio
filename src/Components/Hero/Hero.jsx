import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} />
      <h1>
        <span>I'm Yukta Tiwari</span> Frontend Developer.
      </h1>
      <p>
        I am Yukta Tiwari, a B.Tech student in Electronics and Communication
        Engineering at NIT Manipur, with a strong foundation in web development,
        data structures, algorithms, and relevant frameworks.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1BFJ83nEOhGU1AS2UsCZACUb0lybV-m7f/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
