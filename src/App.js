import React, { useState, useRef } from "react";
import "./css/App.css";
import "./LogoLoop.js";
import LogoLoop from "./LogoLoop";
import Threads from "./Threads";
import ProjectCard from "./ProjectCard";
import emailjs from "emailjs-com";


import cSharp from "./Images/TechImages/C-Sharp_Logo.svg";
import cpp from "./Images/TechImages/cpp.svg";
import css from "./Images/TechImages/css.svg";
import gitH from "./Images/TechImages/github.svg";
import htmx from "./Images/TechImages/htmx.svg";
import js from "./Images/TechImages/javascript.svg";
import python from "./Images/TechImages/python.svg";
import meta from "./Images/TechImages/meta.svg";
import node from "./Images/TechImages/nodedotjs.svg";
import sql from "./Images/TechImages/postgresql.svg";
import reactImage from "./Images/TechImages/react.svg";
import unity from "./Images/TechImages/unity.svg";
import ocaml from "./Images/TechImages/ocaml.svg";
import html from "./Images/TechImages/html.svg";
import resumePDF from "./Russi_Connor_Resume.pdf";

const Projects = [
  {
    title: "Panda Express POS Ecosystem",
    images: [
      require("./Images/panda/pandaAI.png"),
      require("./Images/panda/cashier.png"),
      require("./Images/panda/kiosk.png"),
      require("./Images/panda/kitchen.png"),
      require("./Images/panda/man.png"),
      require("./Images/panda/pandaMain.png"),
      require("./Images/panda/pandaLogin.png"),
    ],
    description: "Full-stack restaurant management app. Features include a Kiosk with Gemini-powered assistant, cashier workflow, inventory, menu, and employee management, and real-time charts for branch performance, menu, and kitchen tracking. Feel free to explore globally deployed application using these logins: \n \n Manager: username: testMan, password: password. \n EmployeeLogin: username: testUser, password: password.",
    technologies: "React, Node.js, Express, SQL, JavaScript, HTML, CSS, Gemini API, REST APIs, Agile Development",
    gitHubLink: "https://github.com/CSCE-331-Fall-25/CSCE331_Project_3_Team34",
    deployedLink: "https://csce331-project-3-team34-dueo.onrender.com",
  },
  {
    title: "Saloon Simulator VR Game",
    images: [require("./Images/unityTemp.png")],
    description: "Saloon Simulator is a VR experience for the Oculus Quest, built in Unity with C#. I developed a modular system using classes for interactive objects, enabling new items to be added quickly while maintaining consistent functionality. I applied Human-Computer Interaction principles from *The Design of Everyday Things* by Don Norman to ensure experiences are understandable and intuitive, demonstrating how VR forces designers to carefully consider user experience and interaction. This project is still under development.",
    technologies: "Unity, C#, XR Development, Human-Computer Interaction",
    gitHubLink: "https://github.com/ConnorRussi/Saloon_Simulator",
    // downloadLink: "https://vreducationalgame.example.com",
  },
  {
    title: "Single Core Y-86 Sequential architecture CPU",
    images: [require("./Images/Cpu/cpu1.png"), require("./Images/Cpu/cpu2.png"), require("./Images/Cpu/cpu3.png")],
    description: "Built the Fetch, Execute, and PC update stages of a Y-86 CPU while collaborating on the Memory and Decode stages. Designed test cases by breaking complex operations into simple problems, ensuring correctness and supporting smooth instruction conversion into Y-86. Focused on modular design and clear, maintainable architecture throughout the project.",
    technologies: "Computer Architecture, WaveDrom, Y-86 Instruction Set",
  },
  {
    title: "Cards against time (TX Game Jam)",
    images: [require("./Images/TXGJ/c1.png"), require("./Images/TXGJ/c2.png"), require("./Images/TXGJ/c3.png"), require("./Images/TXGJ/c4.png"), require("./Images/TXGJ/c5.png")],
    description: "Developed a single-player game under a strict 48-hour deadline, requiring clear communication and effective collaboration to deliver a complete, playable experience on time. The team intentionally divided work by subsystem, using a front-end and back-end style separation to enable parallel development while minimizing merge conflicts. Responsibilities were clearly defined early, allowing me and my partner to work independently before integrating components into a cohesive final build within the limited timeframe.",
    technologies: "Unity, C#, Game Development, Agile Development",
    gitHubLink: "https://github.com/1RlyBadDay/TXGJ_repo",
    deployedLink: "https://thecripple1.itch.io/cards-against-times",
  },
  {
    title: "Sherwood",
    images: [require("./Images/sherwood/s1.png"), require("./Images/sherwood/s2.png"), require("./Images/sherwood/s3.png"), require("./Images/sherwood/s4.png")],
    description: "Sherwood started as a high school project to experiment with Unity and C#, eventually growing into a 3D prototype published on itch.io. Leading a small team, I directed the development lifecycle—delegating tasks, designing levels, and setting up bug reporting workflows. This project gave me my first real look at managing 'scope creep' and the importance of a disciplined workflow. To keep our development stable, I implemented Git branching strategies to handle team collaboration and integration as the project scaled.",
    technologies: "Unity, C#, 3D Game Development, Git",
    gitHubLink: "https://github.com/ConnorRussi/RPG-grapple",
    deployedLink: "https://thecripple1.itch.io/sherwood",
  }
];

const Experience = [
 
  {
    title: "Kids Room Lead",
    company: "Grace Bible Church",
    description: "Led and supervised children of varying age groups during church services and events, ensuring a safe, organized, and engaging environment. Coordinated activities with other volunteers, communicated clearly with parents and leadership, and adapted to dynamic situations while maintaining a positive and structured experience for everyone involved.",
    duration: "Sep 2025-Present",
    image: require("./Images/exp/grace.PNG"), // Replace with your image or a placeholder
  },
  {
    title: "Head Fleet Mechanic (Mech Pot)",
    company: "Student Bonfire",
    description: "Led maintenance and repair operations for a fleet of vehicles critical to large-scale construction and logistics efforts. Coordinated repairs to minimize downtime, communicated technical issues to non-technical clients, and vehicles were operational under time-sensitive conditions. Developed strong leadership, problem-solving, and cross-functional communication skills.",
    duration: "Jan 2025-Nov 2025",
    image: require("./Images/exp/bonfire.png"), // Replace with your image or a placeholder
  },
  {
    title: "Male Counselor",
    company: "Sambica",
    description: "Supervised and mentored groups of 10–12 campers ranging from 2nd grade through 12th grade in a fast-paced, dynamic camp environment. Collaborated with fellow counselors to plan and execute daily activities, prioritize safety, and foster a positive, inclusive atmosphere. Built strong relationships with campers while providing mentorship and encouragement focused on personal growth and responsibility.",
    duration: "Summers 2024-2025",
    image: require("./Images/exp/sambica.PNG"), // Replace with your image or a placeholder
  },
  {
    title: "Head Supervisor (Yellow Pot)",
    company: "Off Campus Aggies",
    description: "Oversaw a cross-functional team of 50+ students on an active construction site, ensuring safety, efficiency, and coordination across daily operations. Managed large-scale tasks including cutting and transporting 40+ trees per day, tool maintenance, recruitment, fundraising, and event coordination. Served as a liaison between crews and upper leadership, developing strong organizational and leadership skills in a high pressure environment.",
    duration: "Jan 2024-Jan 2025",
    image: require("./Images/exp/oca.png"), // Replace with your image or a placeholder
  },
  
  {
    title: "Guest Advocate",
    company: "Target",
    description: "Delivered consistent, high-quality customer service in a fast-paced retail environment. Resolved guest concerns efficiently, communicated effectively with team members, and adapted to shifting needs of the store. Developed strong interpersonal communication skills and a customer-focused mindset.",
    duration: "Sep 2021-Dec 2023",
    image: require("./Images/exp/target.png"), // Replace with your image or a placeholder
  },
  {
    title: "Owner",
    company: "Russi Mowers",
    description: "Founded and operated a small lawn care business, managing client relationships, scheduling, pricing, and service execution. Maintained high service quality while balancing operational responsibilities, customer communication, and business growth. Gained early experience in entrepreneurship, accountability, and self-directed problem solving.",
    duration: "Dec 2016-Aug 2023",
    image: require("./Images/exp/rm.png"), // Replace with your image or a placeholder
  }
];
const technologies = [
  {
    name: "C++",
    img: cpp,
  },
  {
    name: "Css",
    img: css,
  },
  {
    name: "HTML",
    img: html,
  },
  {
    name: "C#",
    img: cSharp,
  },
  {
    name: "GitHub",
    img: gitH,
  },
  {
    name: "Htmx",
    img: htmx,
  },
  {
    name: "JavaScript",
    img: js,
  },
  {
    name: "Python",
    img: python,
  },
  {
    name: "Meta",
    img: meta,
  },
  {
    name: "Node.js",
    img: node,
  },
  {
    name: "SQL",
    img: sql,
  },
  {
    name: "React",
    img: reactImage,
  },
  {
    name: "Unity",
    img: unity,
  },
  {
    name: "Ocaml",
    img: ocaml,
  },
  {
    name: "Java",
    img: require("./Images/TechImages/java.png"),
  }
  
];

function App() {
  const techLogos = technologies.map(tech => ({
    src: tech.img,
    alt: tech.name,
  }));

  const serviceID = process.env.REACT_APP_EJ_SERVICE_ID;
  const templateID = process.env.REACT_APP_EJ_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EJ_KEY;
  const sendEmail = (e) => {
    e.preventDefault();
    if(!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are not set properly.");
      alert("Email service is currently unavailable. Please try again later.");
      console.log(serviceID, templateID, publicKey);
      return;
    }
    emailjs.sendForm(
      serviceID, // Replace with your EmailJS service ID
      templateID, // Replace with your EmailJS template ID
      e.target,
      publicKey// Replace with your EmailJS user/public key
    )
    .then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        alert("Your message has been sent successfully!");
      },
      (error) => {
        console.error("Error sending email:", error.text);
        alert("There was an error sending your message. Please try again later.");
      }
    );

    e.target.reset();
  };

  return (
    <div className="App">
        <Threads color={[1, 1, 1]} amplitude={3} distance={0} enableMouseInteraction={true} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

      <section className="App-Navbar">
        <nav>
          <ul className="Nav-Links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact Me</a></li>
            <li><a href={resumePDF} target="_blank" rel="noopener noreferrer" className="Resume-Button">Resume</a></li>
          </ul>
        </nav>
      </section>
      {/* main welcome screen */}
      <section className="Section-Heading" id="home">
        <div className="Section-Heading-Content">
          <h1>Connor Russi</h1>
          <p>
            Computer Science student at Texas A&M
            <br />
            Aspiring Software Engineer
          </p>
        </div>
      </section>

      {/* about me */}
      <section className="Section-About AboutMe" id="about">
        <div className="Section-TopHeading"><h2>About Me</h2></div>
        <div className="About-Content">
          <p>
            I’m a Computer Science student at Texas A&M pursuing a minor in Business.
            I enjoy building full-stack applications and learning technologies by applying them to real problems.
            Recently, I’ve been experimenting with AI techniques like LoRA fine-tuning to better understand how modern AI systems are trained and integrated into software.
            I’m currently seeking Software Engineering internship opportunities for Summer 2026.
          </p>
        </div>
        <LogoLoop logos={techLogos} speed={50} direction="left" />

      </section>

      {/* Projects */}
      
      <section className="Section-Projects" id="projects">
        <div className="Section-TopHeading"><h2>Projects</h2></div>
        <div className = "Projects">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
     
      </section>

      {/* experience */}
      <section className="Section-Experience " id="experience">
        <div className="Section-TopHeading"><h2>Experience & Leadership</h2></div>
        <div className = "Experience">
          {Experience.map((exp, idx) => (
            <div className="Experience-Card" key={idx}>
              <img
                src={exp.image}
                alt={exp.title}
                className="Experience-Image"
              />
              <div className="Experience-Content">
                <div className="Experience-Header">
                  <div className="Experience-TitleGroup">
                    <span className="Experience-Title">{exp.title}</span>
                    <span className="Experience-Company">{exp.company}</span>
                  </div>
                  <span className="Experience-Duration">{exp.duration}</span>
                </div>
                <div className="Experience-Description">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact me */}
      <section className="Section-Contact" id="contact">
        <div className="Section-TopHeading"><h2>Contact Me</h2></div>
        <form className="Contact-Form" onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>

          <button type="submit" className="Contact-Button">Send Message</button>
        </form>
      </section>

    </div>
  );
}

export default App;