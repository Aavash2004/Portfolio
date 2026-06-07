import styles from "./Hero.module.css";
import { ArrowDown, Mail, Code, ExternalLink } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const typed = useTypewriter(
    ["Frontend Developer", "React Enthusiast", "UI/UX Lover", "Problem Solver"],
    100,
    2000
  );

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.content}>
          <span className={styles.badge}>Available for work</span>

          <h1 className={styles.heading}>
            Hi, I am{" "}
            <span className={styles.accent}>Aavash Basnet</span>
          </h1>

          <h2 className={styles.typewriter}>
            <span className={styles.typed}>{typed}</span>
            <span className={styles.cursor}>|</span>
          </h2>

          <p className={styles.sub}>
            I build clean, fast, and beautiful web experiences.
            Focused on React, modern UI, and bringing designs to life.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/Aavash2004" target="_blank" rel="noreferrer">
              <Code size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <ExternalLink size={20} />
            </a>
            <a href="mailto:aavashbasnet.079@kathford.edu.np">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className={styles.avatarWrap}>
          <div className={styles.avatar}>
            <img src="/me.jpeg" alt="Aavash Basnet" />
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