import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import project2 from '../assets/projects/project2.jpg';

import project4 from '../assets/projects/project4.png';
import project5 from '../assets/projects/project5.png';
import work1 from '../assets/projects/work1.png';
import work2 from '../assets/projects/work2.png';
import work3 from '../assets/projects/work3.png';
import work4 from '../assets/projects/work4.png';
import '../index.css';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "AquaSnap Application",
      role: ["Frontend Developer/QA"],
      category: "Development Projects",
      image: project2,
      website: "https://portfolio-website.example.com",
      github: "https://github.com/vincentalvarez418/aquasnap",
    },

    {
      title: "Scientific Calculator",
      role: ["Frontend Developer"],
      category: "Development Projects",
      image: project4,
      website: "https://portfolio-website.example.com",
      github: "https://github.com/zeev22/Scientific-Calculator-Dumalagan-Francisco.git",
    },
    {
      title: "Pokemon Battle",
      role: ["Frontend Developer"],
      category: "Development Projects",
      image: project5,
      website: "https://portfolio-website.example.com",
      github: "https://github.com/JomariFrancisco/Server.git",
    },
    {
      title: "Typoraphy Art",
      role: ["Adobe Photoshop"],
      category: "Creative Works",
      image: work1,
    },
    {
      title: "Sports Poster",
      role: ["Adobe Photoshop"],
      category: "Creative Works",
      image: work2,
    },
    {
      title: "Flyer Design & Layout",
      role: ["Adobe Photoshop"],
      category: "Creative Works",
      image: work3,
    },
    {
      title: "Logo Design",
      role: ["Adobe Photoshop"],
      category: "Creative Works",
      image: work4,
    },
  ];

  const allCategories = [
    { label: "All", value: "All" },
    { label: "Creative Works", value: "Creative Works" },
    { label: "Development Projects", value: "Development Projects" },
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(project => project.category === activeTab);

  const handleCreativeWorkClick = (image, title) => {
    navigate('/full-image', { state: { image, title } });
  };

  return (
    <section className="projects-container relative">
      <div className="project-topBlur" />
      <div className="intro-container">
        <h2 className="intro-title">My Projects</h2>
        <p className="intro-description">
          Explore a selection of my projects that highlight my skills in UI/UX design, frontend development, and creative problem-solving.
        </p>
      </div>

      <div className="projects-grid-container">
        <h3 className="section-title">Featured Projects</h3>
        <div className="custom-tabs">
          {allCategories.map((category, index) => (
            <button
              key={index}
              className={`custom-tab ${activeTab === category.value ? 'active' : ''}`}
              onClick={() => setActiveTab(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              project.category === "Development Projects" && project.website ? (
                <div key={index} className="project-card">
                  <NavLink
                    to={project.website}
                    className="proj-imgbx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="proj-txtx">
                      <h4>{project.title}</h4>
                      <span>{project.role.join(', ')}</span>
                    </div>
                  </NavLink>
                  {project.github && (
                    <a
                      href={project.github}
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              ) : (
                <div
                  key={index}
                  className={`project-card ${project.category === "Creative Works" ? 'cursor-pointer' : ''}`}
                  onClick={() => project.category === "Creative Works" && handleCreativeWorkClick(project.image, project.title)}
                >
                  <div className="proj-imgbx">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="proj-txtx">
                      <h4>{project.title}</h4>
                      <span>{project.role.join(', ')}</span>
                    </div>
                  </div>
                </div>
              )
            ))
          ) : (
            <p className="no-projects">No projects found in this category.</p>
          )}
        </div>
      </div>
      <div className="projects-bottomBlur" />
    </section>
  );
};

export const FullImagePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { image, title } = state || {};

  if (!image || !title) {
    return (
      <div className="full-image-container">
        <p className="no-image-message">No image selected.</p>
      </div>
    );
  }

  return (
    <div className="full-image-container">
      <div className="full-image-content">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Back to Projects
        </button>
        <h2 className="image-title">{title}</h2>
        <img
          src={image}
          alt={title}
          className="full-image"
        />
      </div>
    </div>
  );
};

export default Projects;
