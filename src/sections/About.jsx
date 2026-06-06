import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.left}>
          <div className={styles.imageWrap}>
            <div className={styles.imagePlaceholder}>
              <span>YN</span>
            </div>
            <div className={styles.blob} />
          </div>
        </div>

        <div className={styles.right}>
          <span className={styles.label}>About Me</span>
          <h2 className={styles.heading}>
            A developer who loves<br />
            <span className={styles.accent}>clean code</span> & great UI
          </h2>
          <p className={styles.text}>
            I'm a frontend developer student passionate about building
            beautiful, functional web experiences. I love turning ideas
            into reality using React, modern CSS, and a keen eye for design.
          </p>
          <p className={styles.text}>
            When I'm not coding, I'm exploring new technologies, UI trends,
            and finding ways to make the web a better place — one component
            at a time.
          </p>

          <div className={styles.facts}>
            <div className={styles.fact}>
              <span className={styles.factNum}>5+</span>
              <span className={styles.factLabel}>Projects Built</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factNum}>3+</span>
              <span className={styles.factLabel}>Technologies</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factNum}>100%</span>
              <span className={styles.factLabel}>Passion</span>
            </div>
          </div>

          <a href="#contact" className={styles.btn}>
            Let's Work Together
          </a>
        </div>

      </div>
    </section>
  );
}