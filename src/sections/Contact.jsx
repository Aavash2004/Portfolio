import { useState } from "react";
import styles from "./Contact.module.css";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Get In Touch</span>
          <h2 className={styles.heading}>Let's <span className={styles.accent}>Work Together</span></h2>
          <p className={styles.sub}>Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>

        <div className={styles.inner}>
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
                <p className={styles.infoText}>Your City, Country</p>
              </div>
            </div>
            <div className={styles.available}>
              <div className={styles.dot} />
              <span>Available for freelance & internship</span>
            </div>
          </div>

          <div className={styles.formWrap}>
            {sent && (
              <div className={styles.success}>
                Message sent! I will get back to you soon.
              </div>
            )}
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Name</label>
              <input className={styles.input} type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <input className={styles.input} type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <textarea className={styles.textarea} name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange} />
            </div>
            <button className={styles.btn} onClick={handleSubmit}>
              <Send size={16} /> Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}