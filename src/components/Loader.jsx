import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

const letters = "AAVASH BASNET".split("");

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 3,
  duration: Math.random() * 2 + 2,
}));

export default function Loader({ onComplete }) {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const letterInterval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= letters.length) { clearInterval(letterInterval); return prev; }
        return prev + 1;
      });
    }, 100);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(progressInterval); return 100; }
        return prev + 2;
      });
    }, 40);

    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 800);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      clearInterval(glitchInterval);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearInterval(letterInterval);
      clearInterval(progressInterval);
      clearInterval(glitchInterval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.bg}>
        {[...Array(12)].map((_, i) => (
          <div key={i} className={styles.line} style={{ "--i": i }} />
        ))}
      </div>

      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      <div className={styles.center}>
        <div className={styles.tag}>Portfolio</div>

        <h1 className={`${styles.name} ${glitch ? styles.glitch : ""}`}>
          {letters.map((letter, i) => (
            <span
              key={i}
              className={`${styles.letter} ${i < visibleLetters ? styles.visible : ""}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <div className={styles.subtitle}>
          <span>Frontend Developer</span>
          <span className={styles.dot}>·</span>
          <span>Bhaktapur, Nepal</span>
        </div>

        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.progressNum}>{progress}%</span>
        </div>
      </div>

      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />
    </div>
  );
}