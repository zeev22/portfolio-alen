import React from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="project-card">
      <img src={imgUrl} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
