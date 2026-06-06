import styles from "./Skills.module.css";

const skills = [
  { name: "HTML", level: 90, color: "#e34f26" },
  { name: "CSS", level: 85, color: "#264de4" },
  { name: "JavaScript", level: 75, color: "#f7df1e" },
  { name: "React", level: 70, color: "#61dafb" },
  { name: "Git", level: 65, color: "#f05032" },
  { name: "Figma", level: 60, color: "#a259ff" },
];

const tools = [
  "VS Code", "GitHub", "Chrome DevTools",
  "Figma", "Vite", "npm"
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">

        <div className={styles.header}>
          <span className={styles.label}>What I Know</span>
          <h2 className={styles.heading}>
            My <span className={styles.accent}>Skills</span> & Tools
          </h2>
          <p className={styles.sub}>
            Technologies I work with to build modern web experiences.
          </p>
        </div>

        <div className={styles.grid}>

          {/* Skill Bars */}
          <div className={styles.bars}>
            <h3 className={styles.colTitle}>Technologies</h3>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillTop}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{
                      width: `${skill.level}%`,
                      background: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className={styles.toolsWrap}>
            <h3 className={styles.colTitle}>Tools I Use</h3>
            <div className={styles.tools}>
              {tools.map((tool) => (
                <span key={tool} className={styles.tool}>{tool}</span>
              ))}
            </div>

            <div className={styles.currently}>
              <h3 className={styles.colTitle}>Currently Learning</h3>
             <div className={styles.tools}>
                <span className={styles.tool}>TypeScript</span>
                <span className={styles.tool}>Next.js</span>
                <span className={styles.tool}>Tailwind CSS</span>
                <span className={styles.tool}>Framer Motion</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}