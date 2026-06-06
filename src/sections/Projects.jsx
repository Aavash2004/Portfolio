import styles from "./Projects.module.css";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A minimal, interactive personal portfolio built with React and CSS Modules. Features dark mode, smooth animations, and responsive design.",
    tags: ["React", "CSS Modules", "Vite"],
    live: "#",
    code: "#",
    color: "#6c63ff",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A clean weather application that fetches real-time data from an API. Displays temperature, humidity, and forecasts with a beautiful UI.",
    tags: ["React", "API", "CSS"],
    live: "#",
    code: "#",
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "Todo List App",
    description: "A fully functional task manager with add, delete, and complete features. Built with React hooks and local storage persistence.",
    tags: ["React", "LocalStorage", "Hooks"],
    live: "#",
    code: "#",
    color: "#10b981",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>My Work</span>
          <h2 className={styles.heading}>Featured <span className={styles.accent}>Projects</span></h2>
          <p className={styles.sub}>A selection of projects I have built while learning and growing as a frontend developer.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardTop} style={{ background: project.color + "15" }}>
                <div className={styles.cardDot} style={{ background: project.color }} />
                <span className={styles.cardNum} style={{ color: project.color }}>0{project.id}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <a href={project.live} className={styles.linkBtn} target="_blank" rel="noreferrer">
                  <ExternalLink size={15} /> Live Demo
                </a>
                <a href={project.code} className={styles.linkBtn} target="_blank" rel="noreferrer">
                  <Code size={15} /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}