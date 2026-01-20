import React from "react";
import ScrollReveal from "./Animations/ScrollReveal";

function Main() {
    return (
        <ScrollReveal
        baseRotation={2}
        blurStrength={3}
        >
        <div>
            {/* main welcome screen */}
            <div>
                <h1> Howdy, I am Connor Russi</h1>
            </div>
            {/* about me, graduation, school work, skills, extra curriculars */}
            <div>
                <h2> About Me</h2>
            </div>

            {/* each project gets a slideshow to display images and information, links to github and deployed site
            will also disaply tech stack used/ technology used */}
            <div>
                <h2> Projects</h2>
            </div>
            
            {/* contact me with a form that sends an email to my email address */}
            <div>
                <h2> Contact Me</h2>
            </div>
        </div>
        </ScrollReveal>


    );
}   