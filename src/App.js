import React, { useState } from "react";
import "./css/App.css";
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
import cl from "./Images/TechImages/CL.png";
import html from "./Images/TechImages/html.svg";
import claude from "./Images/TechImages/claude-icon.svg";
import fastApi from "./Images/TechImages/fastapi-icon.svg";
import gitLab from "./Images/TechImages/gitlab-icon.svg";
import huggingFace from "./Images/TechImages/hugging-face-icon.svg";
import mcp from "./Images/TechImages/MCP.svg";
import vercel from "./Images/TechImages/vercel-mono.svg";
import awsBedrock from "./Images/TechImages/bedrock-aws.svg";
import githubCopilot from "./Images/TechImages/github-copilot-mono.svg";
import langChain from "./Images/TechImages/langchain-corporate.svg";
import langSmith from "./Images/TechImages/langsmith-langchain.svg";
import ollama from "./Images/TechImages/ollama-mono.svg";
import openAI from "./Images/TechImages/openai-light.svg";
import render from "./Images/TechImages/render.svg";
import halliburtonLogo from "./Images/exp/halliburton.svg";
import resumePDF from "./Russi_Connor_Resume.pdf";

const Projects = [
  {
    title: "AI-Powered Job Application Tracker",
    eyebrow: "Applied AI / Full Stack",
    images: [require("./Images/lora/loraAI.png"), require("./Images/lora/loraAI2.png")],
    technologies: "React, Node.js, Express, JavaScript, HTML, CSS, Gmail API, FastAPI, Cloudflare, Uvicorn, LoRA Fine-Tuning",
    description: "A job tracker that reads application emails and keeps the hiring pipeline up to date. I fine-tuned a LLaMA model with LoRA to extract structured data from messy inbox content, then connected it to a React and Node.js application through FastAPI.",
    gitHubLink: "https://github.com/ConnorRussi/LoraAI",
    deployedLink: "https://loraai.onrender.com",
  },
  {
    title: "Panda Express POS Ecosystem",
    eyebrow: "Full Stack / Team Project",
    images: [
      require("./Images/panda/pandaAI.png"),
      require("./Images/panda/cashier.png"),
      require("./Images/panda/kiosk.png"),
      require("./Images/panda/kitchen.png"),
      require("./Images/panda/man.png"),
      require("./Images/panda/pandaMain.png"),
      require("./Images/panda/pandaLogin.png"),
    ],
    description: "A restaurant operations platform spanning customer kiosks, cashier tools, kitchen queues, inventory, and branch reporting. I helped connect the React interface to the Node and SQL backend and added a Gemini-assisted ordering flow.",
    note: "Demo accounts: manager — testMan / password; employee — testUser / password.",
    technologies: "React, Node.js, Express, SQL, JavaScript, HTML, CSS, Gemini API, REST APIs, Agile Development",
    gitHubLink: "https://github.com/CSCE-331-Fall-25/CSCE331_Project_3_Team34",
    deployedLink: "https://csce331-project-3-team34-dueo.onrender.com",
  },
  {
    title: "Saloon Simulator VR Game",
    eyebrow: "VR / Interaction Design",
    images: [require("./Images/Saloon/VRG1.png"), require("./Images/Saloon/VRG2.png"), require("./Images/Saloon/VRG3.png")],
    description: "An in-progress Oculus Quest game built in Unity and C#. I designed reusable interaction classes so new objects behave consistently, with an emphasis on clear affordances and intuitive VR controls.",
    technologies: "Unity, C#, XR Development, Human-Computer Interaction",
    gitHubLink: "https://github.com/ConnorRussi/Saloon_Simulator",
    // downloadLink: "https://vreducationalgame.example.com",
  },
  {
    title: "Cards Against Time",
    eyebrow: "48-Hour Game Jam",
    images: [require("./Images/TXGJ/c1.png"), require("./Images/TXGJ/c2.png"), require("./Images/TXGJ/c3.png"), require("./Images/TXGJ/c4.png"), require("./Images/TXGJ/c5.png")],
    description: "A complete single-player game made with one teammate during the 48-hour Texas Game Jam. We split the work by system, worked in parallel, and integrated the pieces into a playable build before the deadline.",
    technologies: "Unity, C#, Game Development, Agile Development",
    gitHubLink: "https://github.com/1RlyBadDay/TXGJ_repo",
    deployedLink: "https://thecripple1.itch.io/cards-against-times",
  },
  {
    title: "Single-Core Y86 CPU",
    eyebrow: "Computer Architecture",
    images: [require("./Images/Cpu/cpu1.png"), require("./Images/Cpu/cpu2.png"), require("./Images/Cpu/cpu3.png")],
    description: "A sequential Y86 processor built from the instruction set up. I owned the fetch, execute, and program-counter stages, collaborated on memory and decode, and wrote focused tests for each instruction path.",
    technologies: "Computer Architecture, WaveDrom, Y-86 Instruction Set",
  },
  {
    title: "Sherwood",
    eyebrow: "Unity / Early Team Project",
    images: [require("./Images/sherwood/s1.png"), require("./Images/sherwood/s2.png"), require("./Images/sherwood/s3.png"), require("./Images/sherwood/s4.png")],
    description: "My first substantial Unity project: a 3D prototype that grew from an experiment into a small team release. I designed levels, divided work, introduced a Git branching workflow, and learned firsthand how quickly scope can outrun a project.",
    technologies: "Unity, C#, 3D Game Development, Git",
    gitHubLink: "https://github.com/ConnorRussi/RPG-grapple",
    deployedLink: "https://thecripple1.itch.io/sherwood",
  }
];

const professionalExperience = {
  title: "Gen-AI Platform Engineer Intern",
  company: "Halliburton",
  duration: "May 2026 — August 2026",
  logo: halliburtonLogo,
  summary:
    "I worked on Halliburton's internal Gen-AI platform, focusing on the less flashy parts that make agents useful in practice: reliable retrieval, measured quality, efficient context, and safe code execution.",
  highlights: [
    {
      title: "Agent Architecture",
      detail:
        "Designed graph-based flows for planning, context retrieval, tool calls, and grounded technical answers across internal engineering use cases.",
    },
    {
      title: "Evaluation",
      detail:
        "Built regression tests around accuracy, retrieval quality, latency, and token cost so each iteration had a measurable result.",
    },
    {
      title: "Code Safety",
      detail:
        "Added sanitization and sandboxed validation before AI-generated code could be executed or returned to developers.",
    },
  ],
  metrics: [
    { value: "78%", label: "lower token usage" },
    { value: "50%", label: "faster responses" },
    { value: "23.5%", label: "higher evaluated quality" },
  ],
  technologies: ["LangChain", "LangGraph", "MCP", "RAG", "LangSmith", "AI Agents", "Code Validation"],
};

const leadershipActivities = [
 
  {
    title: "Kids Room Lead",
    company: "Grace Bible Church",
    description: "Coordinate volunteers and lead a safe, welcoming kids room during services and church events.",
    duration: "Sep 2025 — Present",
    image: require("./Images/exp/grace.PNG"), // Replace with your image or a placeholder
  },
  {
    title: "Head Fleet Mechanic (Mech Pot)",
    company: "Student Bonfire",
    description: "Led repairs and preventative maintenance for the vehicle fleet supporting Student Bonfire construction and logistics.",
    duration: "Jan 2025 — Nov 2025",
    image: require("./Images/exp/bonfire.png"),
  },
  {
    title: "Male Counselor",
    company: "Sambica",
    description: "Mentored groups of 10–12 campers, ran daily activities, and worked with the counseling team to keep camp safe and inclusive.",
    duration: "Summers 2024 — 2025",
    image: require("./Images/exp/sambica.PNG"),
  },
  {
    title: "Head Supervisor (Yellow Pot)",
    company: "Off Campus Aggies",
    description: "Supervised 50+ students on an active construction site and coordinated safety, tools, recruitment, fundraising, and daily work.",
    duration: "Jan 2024 — Jan 2025",
    image: require("./Images/exp/oca.png"), // Replace with your image or a placeholder
  },
  
  {
    title: "Guest Advocate",
    company: "Target",
    description: "Handled guest issues, front-of-store operations, and shifting priorities in a high-volume retail environment.",
    duration: "Sep 2021 — Dec 2023",
    image: require("./Images/exp/target.png"), // Replace with your image or a placeholder
  },
  {
    title: "Owner",
    company: "Russi Mowers",
    description: "Started and ran a lawn-care business, including scheduling, pricing, client communication, and the work itself.",
    duration: "Dec 2016 — Aug 2023",
    image: require("./Images/exp/rm.png"), // Replace with your image or a placeholder
  }
];
const technologies = [
  {
    name: "React",
    img: reactImage,
  },
  {
    name: "OpenAI",
    img: openAI,
  },
  {
    name: "JavaScript",
    img: js,
  },
  {
    name: "SQL",
    img: sql,
  },
  {
    name: "LangChain",
    img: langChain,
  },
  {
    name: "Python",
    img: python,
  },
  {
    name: "GitHub",
    img: gitH,
  },
  {
    name: "Claude",
    img: claude,
  },
  {
    name: "Node.js",
    img: node,
  },
  {
    name: "C++",
    img: cpp,
  },
  {
    name: "FastAPI",
    img: fastApi,
  },
  {
    name: "Unity",
    img: unity,
  },
  {
    name: "Model Context Protocol (MCP)",
    img: mcp,
  },
  {
    name: "HTML",
    img: html,
  },
  {
    name: "AWS Bedrock",
    img: awsBedrock,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "Java",
    img: require("./Images/TechImages/java.png"),
  },
  {
    name: "Hugging Face",
    img: huggingFace,
  },
  {
    name: "C#",
    img: cSharp,
  },
  {
    name: "Vercel",
    img: vercel,
  },
  {
    name: "Ollama",
    img: ollama,
  },
  {
    name: "Cloudflare",
    img: cl,
  },
  {
    name: "GitLab",
    img: gitLab,
  },
  {
    name: "Meta",
    img: meta,
  },
  {
    name: "GitHub Copilot",
    img: githubCopilot,
  },
  {
    name: "OCaml",
    img: ocaml,
  },
  {
    name: "LangSmith",
    img: langSmith,
  },
  {
    name: "HTMX",
    img: htmx,
  },
  {
    name: "Render",
    img: render,
  }
  
];

function App() {
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const serviceID = process.env.REACT_APP_EJ_SERVICE_ID;
  const templateID = process.env.REACT_APP_EJ_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EJ_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are not set properly.");
      setFormStatus("The email form is unavailable right now. Please try again later.");
      return;
    }

    const form = e.currentTarget;
    setIsSending(true);
    setFormStatus("");

    try {
      await emailjs.sendForm(serviceID, templateID, form, publicKey);
      form.reset();
      setFormStatus("Thanks — your message has been sent.");
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("Your message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="App">
      <a className="Skip-Link" href="#main-content">Skip to content</a>
      <header className="App-Navbar">
        <nav className="Navbar-Inner" aria-label="Primary navigation">
          <a className="Nav-Mark" href="#home" aria-label="Connor Russi, home">CR</a>
          <ul className="Nav-Links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href={resumePDF} target="_blank" rel="noopener noreferrer">Résumé ↗</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section className="Section-Heading" id="home">
          <div className="Page-Shell Hero-Layout">
            <div className="Hero-Copy">
              <p className="Eyebrow">Computer Science · Applied AI · Full Stack</p>
              <h1>Connor Russi</h1>
              <p className="Hero-Statement">
                Gen-AI platform engineer and Texas A&amp;M student building practical software across AI, full-stack systems, and interactive experiences.
              </p>
              <div className="Hero-Actions">
                <a className="Primary-Link" href="#projects">See My Work</a>
                <a className="Text-Link" href="https://github.com/ConnorRussi" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </div>
            <aside className="Hero-Aside" aria-label="Education and recent experience">
              <p className="Hero-Aside-Heading">At a Glance</p>
              <dl className="Recruiter-Snapshot">
                <div>
                  <dt>Degree</dt>
                  <dd>B.S. Computer Science</dd>
                </div>
                <div>
                  <dt>School</dt>
                  <dd>Texas A&amp;M University</dd>
                </div>
                <div>
                  <dt>Minor</dt>
                  <dd>Business</dd>
                </div>
                <div>
                  <dt>Recent Role</dt>
                  <dd>Gen-AI Platform Engineer Intern</dd>
                </div>
                <div>
                  <dt>Company</dt>
                  <dd>Halliburton · Summer 2026</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="Content-Section" id="about">
          <div className="Page-Shell">
            <div className="Section-Intro">
              <span className="Section-Number">01</span>
              <h2>About</h2>
            </div>
            <div className="About-Grid">
              <p className="About-Lead">
                I’m a Computer Science student at Texas A&amp;M with a minor in Business. I like projects where the engineering has a visible effect: less waiting, fewer manual steps, or a better interaction.
              </p>
              <p>
                My recent work spans internal AI platforms, full-stack applications, model fine-tuning, and Unity. I care about understanding the system beneath the demo and measuring whether it actually improved.
              </p>
            </div>
            <div className="Technology-Heading">
              <h3>Technical Toolkit</h3>
              <p>Languages, frameworks, platforms, and AI tooling I’ve used in real projects.</p>
            </div>
            <ul className="Technology-Strip" aria-label="Technologies I work with">
              {technologies.map((technology) => (
                <li key={technology.name}>
                  <img src={technology.img} alt="" width="32" height="32" loading="lazy" />
                  <span>{technology.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="Content-Section" id="experience">
          <div className="Page-Shell">
            <div className="Section-Intro">
              <span className="Section-Number">02</span>
              <h2>Experience</h2>
            </div>
            <article className="Professional-Experience-Card">
              <header className="Professional-Experience-Header">
                <img
                  src={professionalExperience.logo}
                  alt={`${professionalExperience.company} logo`}
                  className="Professional-Experience-Logo"
                  width="176"
                  height="52"
                />
                <div className="Experience-TitleGroup">
                  <h3>{professionalExperience.title}</h3>
                  <p className="Experience-Company">{professionalExperience.company}</p>
                </div>
                <p className="Experience-Duration">{professionalExperience.duration}</p>
              </header>

              <div className="Experience-Body">
                <p className="Professional-Experience-Summary">{professionalExperience.summary}</p>
                <dl className="Professional-Experience-Metrics">
                  {professionalExperience.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.value}</dt>
                      <dd>{metric.label}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="Professional-Experience-Highlights">
                  {professionalExperience.highlights.map((highlight) => (
                    <li key={highlight.title}>
                      <h4>{highlight.title}</h4>
                      <p>{highlight.detail}</p>
                    </li>
                  ))}
                </ul>
                <ul className="Inline-Technologies" aria-label="Technologies used">
                  {professionalExperience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="Content-Section" id="projects">
          <div className="Page-Shell">
            <div className="Section-Intro Section-Intro-WithCopy">
              <div>
                <span className="Section-Number">03</span>
                <h2>Selected Work</h2>
              </div>
              <p>A mix of production-minded software, class projects, and experiments that taught me something worth keeping.</p>
            </div>
            <div className="Projects">
              {Projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="Content-Section" id="leadership">
          <div className="Page-Shell">
            <div className="Section-Intro">
              <span className="Section-Number">04</span>
              <h2>Leadership &amp; Activities</h2>
            </div>
            <div className="Experience">
              {leadershipActivities.map((experience) => (
                <article className="Experience-Row" key={`${experience.company}-${experience.title}`}>
                  <img
                    src={experience.image}
                    alt=""
                    className="Experience-Image"
                    width="96"
                    height="64"
                    loading="lazy"
                  />
                  <div className="Experience-Role">
                    <h3>{experience.title}</h3>
                    <p className="Experience-Company">{experience.company}</p>
                  </div>
                  <p className="Experience-Description">{experience.description}</p>
                  <p className="Experience-Duration">{experience.duration}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="Content-Section Contact-Section" id="contact">
          <div className="Page-Shell Contact-Layout">
            <div>
              <div className="Section-Intro">
                <span className="Section-Number">05</span>
                <h2>Let’s Talk</h2>
              </div>
              <p className="Contact-Intro">Have a role, project, or interesting technical problem in mind? Send me a note.</p>
            </div>
            <form className="Contact-Form" onSubmit={sendEmail}>
              <div className="Form-Field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" autoComplete="name" placeholder="Your name…" required />
              </div>
              <div className="Form-Field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete="email" spellCheck="false" placeholder="you@example.com…" required />
              </div>
              <div className="Form-Field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" autoComplete="off" placeholder="What would you like to discuss?…" required></textarea>
              </div>
              <div className="Form-Actions">
                <button type="submit" className="Contact-Button" disabled={isSending}>
                  {isSending ? "Sending…" : "Send Message"}
                </button>
                <p className="Form-Status" aria-live="polite">{formStatus}</p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="Site-Footer">
        <div className="Page-Shell">
          <p>Connor Russi · Software Engineer</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
