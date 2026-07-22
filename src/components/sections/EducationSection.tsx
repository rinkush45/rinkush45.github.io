"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/sections/EducationSection.module.css";

const educationData = [
  {
    degree: "Bachelor of Technology - Computer Science & Engineering",
    institution: "Rajasthan Technical University - Jaipur Engineering College",
    period: "2021 - 2025",
    location: "Jaipur, IN",
    score: "8.5 / 10",
    scoreLabel: "CGPA",
    terminalTitle: "B.tech.edu",
  },
  {
    degree: "Senior Secondary School - PCM",
    institution: "Board of Secondary Education, Rajasthan",
    period: "2020 - 2021",
    location: "Alwar, IN",
    score: "89%",
    scoreLabel: "Percentage",
    terminalTitle: "12th.edu",
  },
  {
    degree: "Secondary School - All Subjects",
    institution: "Board of Secondary Education, Rajasthan",
    period: "2018 - 2019",
    location: "Alwar, IN",
    score: "71%",
    scoreLabel: "Percentage",
    terminalTitle: "10th.edu",
  },
];

export default function EducationSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className={`section ${styles.education}`}>
      <div className="container">
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <p className="section-label">Academic Path</p>
          <h2 className={styles.heading}>
            Education <span className={styles.headingAccent}>Portfolio</span>.
          </h2>
        </div>

        <div className={styles.grid}>
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.card} glass-card`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="terminal-bar">
                <div className="terminal-dot" style={{ background: "#ff5f56" }} />
                <div className="terminal-dot" style={{ background: "#ffbd2e" }} />
                <div className="terminal-dot" style={{ background: "#27c93f" }} />
                <span style={{ marginLeft: "0.5rem", flex: 1, fontFamily: "var(--font-mono)", fontSize: "0.7rem", opacity: 0.5 }}>
                  {item.terminalTitle}
                </span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.institution}>{item.institution}</h3>
                <p className={styles.degree}>{item.degree}</p>
                
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaIcon}>📅</span>
                    <span>{item.period}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaIcon}>📍</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className={styles.score}>
                  <p className={styles.scoreLabel}>{item.scoreLabel}</p>
                  <p className={styles.scoreValue}>
                    {item.score}
                    {item.scoreLabel === "CGPA" && <span className={styles.scoreTotal}> / 10.0</span>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
