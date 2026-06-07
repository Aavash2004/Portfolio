import { useEffect, useState } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dotX = 0;
    let dotY = 0;
    let animFrame;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const animateDot = () => {
      dotX += (pos.x - dotX) * 0.12;
      dotY += (pos.y - dotY) * 0.12;
      setDotPos({ x: dotX, y: dotY });
      animFrame = requestAnimationFrame(animateDot);
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onHoverStart = () => setHovering(true);
    const onHoverEnd = () => setHovering(false);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onHoverStart);
        el.addEventListener("mouseleave", onHoverEnd);
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animFrame = requestAnimationFrame(animateDot);
    addHoverListeners();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animFrame);
    };
  }, [pos.x, pos.y, visible]);

  return (
    <>
      {/* Outer ring */}
      <div
        className={`${styles.ring} ${clicking ? styles.clicking : ""} ${hovering ? styles.hovering : ""} ${visible ? styles.visible : ""}`}
        style={{ left: dotPos.x, top: dotPos.y }}
      />
      {/* Inner dot */}
      <div
        className={`${styles.dot} ${visible ? styles.visible : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}