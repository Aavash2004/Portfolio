import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { Mail, MapPin, Send } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_hl1mjmm",
        "template_6emateh",
        formRef.current,
        "ne45MwqPeux424JnD"
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>Get In Touch</span>
            <h2 className={styles.heading}>Let's <span className={styles.accent}>Work Together</span></h2>
            <p className={styles.sub}>Have a project in mind or just want to say hi? My inbox is always open.</p>
          </div>
        </ScrollReveal>

        <div className={styles.inner}>
          <ScrollReveal direction="right" delay={0.1}>
            <div className={styles.info}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><Mail size={20} /></div>
                <div>
                  <h4 className={styles.infoTitle}>Email</h4>
                  <p className={styles.infoText}>you@email.com</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><MapPin size={20} /></div>
                <div>
                  <h4 className={styles.infoTitle}>Location</h4>
                  <p className={styles.infoText}>Bhaktapur, Nepal</p>
                </div>
              </div>
              <div className={styles.available}>
                <div className={styles.dot} />
                <span>Available for freelance & internship</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className={styles.formWrap}>
              {status === "success" && (
                <div className={styles.success}>Message sent! I will get back to you soon.</div>
              )}
              {status === "error" && (
                <div className={styles.error}>Something went wrong. Please try again.</div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Name</label>
                  <input className={styles.input} type="text" name="user_name" placeholder="Your name" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input className={styles.input} type="email" name="user_email" placeholder="your@email.com" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Message</label>
                  <textarea className={styles.textarea} name="message" placeholder="Tell me about your project..." rows={5} required />
                </div>
                <button className={styles.btn} type="submit" disabled={status === "sending"}>
                  <Send size={16} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}