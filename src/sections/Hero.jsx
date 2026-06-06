import styles from "./Hero.module.css";
import { ArrowDown, Mail, Code, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.content}>
          <span className={styles.badge}>Available for work</span>

          <h1 className={styles.heading}>
            Hi, I am{" "}
            <span className={styles.accent}>Your Name</span>
            <br />
            Frontend Developer
          </h1>

          <p className={styles.sub}>
            I build clean, fast, and beautiful web experiences.
            Focused on React, modern UI, and bringing designs to life.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Code size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <ExternalLink size={20} />
            </a>
            <a href="mailto:you@email.com">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>
            <span>YN</span>
          </div>
          <div className={styles.ring} />
          <div className={styles.ring2} />
        </div>

      </div>

      <a href="#about" className={styles.scroll}>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}