// ProjectCard component for rotating images on hover
import React, { useState, useRef, useEffect } from "react";
import "./css/App.css";
function ProjectCard({ project }, cycleInterval = 5000, slideDuration = 1000) {
    const [imgIdx, setImgIdx] = useState(0);
    const [animating, setAnimating] = useState(false);
    const intervalRef = useRef(null);

    const startRotation = () => {
        if (intervalRef.current) return; // Prevent multiple intervals
        intervalRef.current = setInterval(() => {
            setAnimating(true);

            setTimeout(() => {
                setAnimating(false);
                setImgIdx((prev) => (prev + 1) % project.images.length);
            }, slideDuration);
        }, cycleInterval);
    };

    const stopRotation = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setAnimating(false);
    };

    const handleMouseEnter = () => {
        if (!intervalRef.current) {
            startRotation();
        }
    };

    const handleMouseLeave = () => {
        stopRotation();
    };

    const handleCardClick = (e) => {
        // Prevent navigation if a link inside the card is clicked
        if (e.target.tagName === "A") return;

        // Open GitHub link in a new tab if it exists
        if (project.gitHubLink) {
            window.open(project.gitHubLink, "_blank");
        }
    };

    const bottomImage = project.images[imgIdx];
    const topImage = project.images[(imgIdx + 1) % project.images.length];

    return (
        <div
            className="Project-Card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick} // Added click handler for the card
        >
            <div
                className={`Image-Wrapper slide ${animating ? "animating" : ""}`}
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    minHeight: "400px",
                }}
            >
                <img
                    key={bottomImage}
                    src={bottomImage}
                    alt={project.title}
                    className="bottom"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: `transform ${slideDuration}ms ease-in-out`,
                        transform: animating ? "translateX(-100%)" : "translateX(0)",
                    }}
                />
                <img
                    key={topImage}
                    src={topImage}
                    alt={project.title}
                    className="top"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: `transform ${slideDuration}ms ease-in-out`,
                        transform: animating ? "translateX(0)" : "translateX(100%)",
                    }}
                />
            </div>
            <div className="Project-Content">
                <h3>{project.title}</h3>
                <p className="Project-Description">
                    {project.description.split("\n").map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
                <div className="Project-Tech">
                    {project.technologies.split(",").map((tech, idx) => (
                        <span key={idx} className="Tech-Tag">{tech.trim()}</span>
                    ))}
                </div>
                <div className="Project-Links">
                    {project.gitHubLink && (
                        <a
                            href={project.gitHubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Project-Button"
                        >
                            GitHub
                        </a>
                    )}
                    {project.deployedLink && (
                        <a
                            href={project.deployedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Project-Button"
                        >
                            Deployed Site
                        </a>
                    )}
                    {project.downloadLink && (
                        <a
                            href={project.downloadLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Project-Button"
                        >
                            Download Here
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;