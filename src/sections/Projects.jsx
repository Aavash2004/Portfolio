import styles from "./Projects.module.css";
import { ExternalLink, Code, Home, MapPin, Search } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const project = {
  title: "Nepal GharJagga",
  subtitle: "Real Estate Platform for Nepal",
  description:
    "A full-featured real estate web platform designed for the Nepali market. Browse, search, and explore properties across Nepal — from homes and apartments to land and commercial spaces. Built with a focus on clean UI and smooth user experience.",
  tags: ["React", "CSS", "JavaScript", "Real Estate", "Nepal"],
  github: "https://github.com/Aavash2004/gharjagga-nepal",
  live: null,
  features: [
    "Property listings with search & filter",
    "Location-based browsing across Nepal",
    "Clean and responsive UI",
    "Property detail pages",
  ],
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>My Work</span>
            <h2 className={styles.heading}>
              Featured <span className={styles.accent}>Project</span>
            </h2>
            <p className={styles.sub}>
              A real-world project I built — currently in development.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className={styles.card}>

            <div className={styles.cardLeft}>
              <div className={styles.iconWrap}>
                <Home size={40} color="#0066ff" />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>Real Estate · Nepal</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
                <p className={styles.cardDesc}>{project.description}</p>

                <ul className={styles.features}>
                  {project.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <span className={styles.featureDot} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

               <div className={styles.buttons}>
                  <a href={project.github} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                    <Code size={16} /> View on GitHub
                  </a>
                  <span className={styles.btnDisabled}>
                    <ExternalLink size={16} /> Live Demo Coming Soon
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.cardRight}>
              <div className={styles.mockup}>
                <div className={styles.mockupBar}>
                  <span /><span /><span />
                </div>
                <div className={styles.mockupBody}>
                  <div className={styles.mockupHeader}>
                    <Home size={20} color="#0066ff" />
                    <span>Nepal GharJagga</span>
                  </div>
                  <div className={styles.mockupSearch}>
                    <Search size={14} color="#888" />
                    <span>Search properties in Nepal...</span>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={styles.mockupCard}>
                      <div className={styles.mockupImg} />
                      <div className={styles.mockupText}>
                        <div className={styles.mockupLine} />
                        <div className={styles.mockupLineShort} />
                        <div className={styles.mockupPrice}>
                          <MapPin size={10} color="#0066ff" />
                          <span>Kathmandu, Nepal</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}