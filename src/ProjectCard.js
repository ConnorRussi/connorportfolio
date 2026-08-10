import React, { useState } from "react";

function ProjectCard({ project }) {
  const [imageIndex, setImageIndex] = useState(0);
  const imageCount = project.images.length;

  const showPreviousImage = () => {
    setImageIndex((currentIndex) => (currentIndex - 1 + imageCount) % imageCount);
  };

  const showNextImage = () => {
    setImageIndex((currentIndex) => (currentIndex + 1) % imageCount);
  };

  return (
    <article className="Project-Card">
      <figure className="Project-Media">
        <img
          src={project.images[imageIndex]}
          alt={`${project.title} screenshot ${imageIndex + 1} of ${imageCount}`}
          width="960"
          height="600"
          loading="lazy"
        />
        {imageCount > 1 ? (
          <div className="Project-Gallery-Controls">
            <button type="button" onClick={showPreviousImage} aria-label={`Show previous ${project.title} screenshot`}>
              ←
            </button>
            <span aria-live="polite">{imageIndex + 1} / {imageCount}</span>
            <button type="button" onClick={showNextImage} aria-label={`Show next ${project.title} screenshot`}>
              →
            </button>
          </div>
        ) : null}
      </figure>

      <div className="Project-Content">
        <p className="Project-Eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="Project-Description">{project.description}</p>
        {project.note ? <p className="Project-Note">{project.note}</p> : null}

        <ul className="Project-Tech" aria-label={`${project.title} technologies`}>
          {project.technologies.split(",").map((technology) => {
            const name = technology.trim();
            return <li key={name}>{name}</li>;
          })}
        </ul>

        <div className="Project-Links">
          {project.gitHubLink ? (
            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">View Code ↗</a>
          ) : null}
          {project.deployedLink ? (
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live Site ↗</a>
          ) : null}
          {project.downloadLink ? (
            <a href={project.downloadLink} target="_blank" rel="noopener noreferrer">Download ↗</a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
