"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import styles from "@/styles/sections/ContactSection.module.css";

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        console.error("Form submission failed");
        setStatus("idle");
        alert("Failed to send message. Please try again or email directly.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("idle");
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" ref={ref} className={`section ${styles.contact}`}>
      <div className="container">
        <div className={`${styles.inner} ${visible ? styles.visible : ""}`}>
          <div className={styles.left}>
            <p className="section-label">Initialize Connection</p>
            <h2 className={styles.heading}>
              Let&apos;s build something{" "}
              <span className={styles.headingAccent}>robust</span>.
            </h2>
            <p className={styles.desc}>
              Interested in discussing infrastructure scalability, AI integration, or new
              opportunities? Drop a line and let&apos;s build something robust.
            </p>

            <div className={styles.contactLinks}>
              <a
                href="https://github.com/rinkush45"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                id="contact-github"
              >
                <div className={styles.linkIcon}>⌥</div>
                <div>
                  <p className={styles.linkLabel}>GitHub</p>
                  <p className={styles.linkValue}>github.com/rinkush45</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/rinkush45"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                id="contact-linkedin"
              >
                <div className={styles.linkIcon}>⌗</div>
                <div>
                  <p className={styles.linkLabel}>LinkedIn</p>
                  <p className={styles.linkValue}>linkedin.com/in/rinkush45</p>
                </div>
              </a>
              <a
                href="mailto:rinkush45@gmail.com"
                className={styles.contactLink}
                id="contact-email"
              >
                <div className={styles.linkIcon}>@</div>
                <div>
                  <p className={styles.linkLabel}>Direct Line</p>
                  <p className={styles.linkValue}>rinkush45@gmail.com</p>
                </div>
              </a>
            </div>

            {/* System status info */}
            <div className={styles.statusCard}>
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: "#28c840" }} />
                <span style={{ marginLeft: "0.5rem" }}>system_status.sh</span>
              </div>
              <div className={styles.statusBody}>
                <div className={styles.statusRow}>
                  <span className={styles.statusLabel}>AVAILABILITY</span>
                  <span className={styles.statusValue}>Open to Consulting</span>
                </div>
                <div className={styles.statusRow}>
                  <span className={styles.statusLabel}>RESPONSE TIME</span>
                  <span className={styles.statusValue}>&lt; 24h</span>
                </div>
                <div className={styles.statusRow}>
                  <span className={styles.statusLabel}>TIMEZONE</span>
                  <span className={styles.statusValue}>UTC+5:30 (IST)</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={`glass-card ${styles.formCard}`}>
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                <span className="terminal-dot" style={{ background: "#febc2e" }} />
                <span className="terminal-dot" style={{ background: "#28c840" }} />
                <span style={{ marginLeft: "0.5rem" }}>POST /api/initialize-connection</span>
              </div>

              {status === "sent" ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>✓</div>
                  <p className={styles.successTitle}>Connection Initialized</p>
                  <p className={styles.successDesc}>
                    Message received. I&apos;ll get back to you within 24 hours.
                  </p>
                  <div className={styles.successCode}>
                    <span className={styles.codeText}>Status: 200 OK</span>
                    <br />
                    <span className={styles.codeText}>Connection established successfully.</span>
                  </div>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
                  <div className={styles.formGroup}>
                    <label htmlFor="name">IDENTIFIER // YOUR NAME</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="input-field"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">CHANNEL // EMAIL ADDRESS</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="input-field"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">OPERATION // SUBJECT</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="input-field"
                      placeholder="Infrastructure Consulting"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">PAYLOAD // YOUR MESSAGE</label>
                    <textarea
                      id="message"
                      name="message"
                      className={`input-field ${styles.textarea}`}
                      placeholder="Describe your infrastructure challenge or project requirements..."
                      rows={5}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={`btn-primary ${styles.submitBtn}`}
                    disabled={status === "sending"}
                    id="contact-submit"
                  >
                    {status === "sending" ? (
                      <>
                        <span className={styles.spinner} />
                        INITIALIZING...
                      </>
                    ) : (
                      <>SEND MESSAGE →</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
