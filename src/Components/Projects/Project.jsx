import React from "react";
import "./Project.css";
import Card from "../Card/Card";
import theme from "../../assets/theme_pattern.svg";
import projects_data from "../../assets/projects_data";
const Project = () => {
  return (
    <div>
      <div id="projects" className="projects">
        <div className="projects-title">
          <h1>My Projects</h1>
          <img src={theme} />
        </div>
        <div className="projects-container">
          {projects_data.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
