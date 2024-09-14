import React from "react";
import "./Card.css";

const Card = ({ project }) => {
  return (
    <div className="card">
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>
        <strong>Technologies:</strong> {project.technologies}
      </p>
      <p>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project
      </a>
    </div>
  );
};

export default Card;
