import styles from "./About.module.css";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <ScrollReveal direction="right">
          <div className={styles.left}>
            <div className={styles.imageWrap}>
              <div className={styles.imagePlaceholder}>
  <img src="/me.jpeg" alt="Aavash Basnet" />
</div>
              <div className={styles.blob} />
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.right}>
          <ScrollReveal delay={0.1}>
            <span className={styles.label}>About Me</span>
            <h2 className={styles.heading}>
              A developer who loves<br />
              <span className={styles.accent}>clean code</span> & great UI
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className={styles.text}>
              I am a frontend developer student passionate about building
              beautiful, functional web experiences. I love turning ideas
              into reality using React, modern CSS, and a keen eye for design.
            </p>
            <p className={styles.text}>
              When I am not coding, I am exploring new technologies, UI trends,
              and finding ways to make the web a better place one component at a time.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
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
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <a href="#contact" className={styles.btn}>
              Let's Work Together
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}