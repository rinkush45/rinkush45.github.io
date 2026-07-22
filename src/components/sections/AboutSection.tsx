"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/sections/AboutSection.module.css";

const pillars = [
  {
    icon: "☁",
    title: "Cloud & Infrastructure",
    desc: "Provision AWS infrastructure via Terraform; enable consistent multi-environment deployments.",
    color: "tertiary",
  },
  {
    icon: "⬢",
    title: "Scalability & Reliability",
    desc: "Ensure high availability, load balancing, and fault-tolerant microservices systems.",
    color: "primary",
  },
  {
    icon: "🛡",
    title: "Security & Compliance",
    desc: "Enforce IAM policies, secrets management, and secure system configurations.",
    color: "secondary",
  },
  {
    icon: "🧠",
    title: "AI/ML Enablement",
    desc: "Develop MLOps pipelines for model deployment and API-driven integrations.",
    color: "primary",
  },
  {
    icon: "🔐",
    title: "DevSecOps Practices",
    desc: "Integrate SAST, dependency, and container scanning into CI/CD pipelines.",
    color: "secondary",
  },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className={`section ${styles.about}`}>
      <div className="container">
        <div className={`${styles.inner} ${visible ? styles.visible : ""}`}>
          <div className={styles.left}>
            <p className="section-label">About the Engineer</p>
            <h2 className={styles.heading}>
              Solving at scale.
              <br />
              <span className={styles.headingAccent}>Automating with precision.</span>
            </h2>

            <div className={styles.bioCard}>
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: "#28c840" }} />
                <span style={{ marginLeft: "0.5rem", flex: 1 }}>README.engineer.md</span>
              </div>
              <div className={styles.bioContent}>
                <p>
                  With over <span className={styles.accent}>2 years</span> of professional experience in <span className={styles.accent}>DevOps engineering </span>, I specialize in building, automating, and maintaining secure and scalable infrastructure within cloud-native environments. I am passionate about leveraging cutting-edge technologies to solve complex operational challenges and deliver reliable, high-performance systems. My approach is rooted in the belief that{" "}
                  <span className={styles.accent}>reliability is a feature, not an afterthought.</span>
                </p>  
                <p>
                  Currently, I am focused on the intersection of <span className={styles.accent}>DevOps and Generative AI</span>,
                  developing deployment pipelines that allow machine learning models to scale
                  securely from sandbox to production with{" "}
                  <span className={styles.accent}>zero downtime</span>.
                </p>
              </div>
            </div>

            <div className={styles.socialRow}>
              <a href="https://github.com/rinkush45" target="_blank" rel="noopener noreferrer" className={styles.socialLink} id="github-link">
                <span>⌥</span> GitHub
              </a>
              <a href="https://linkedin.com/in/rinkush45" target="_blank" rel="noopener noreferrer" className={styles.socialLink} id="linkedin-link">
                <span>⌗</span> LinkedIn
              </a>
              <a href="https://leetcode.com/u/rinkush45" target="_blank" rel="noopener noreferrer" className={styles.socialLink} id="leetcode-link">
                <span>⊞</span> LeetCode
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.pillarsGrid}>
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`${styles.pillar} glass-card`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`${styles.pillarIcon} ${styles[`pillarIcon_${p.color}`]}`}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
