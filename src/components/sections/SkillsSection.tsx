"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/sections/SkillsSection.module.css";

const skillCategories = [
  {
    title: "DevOps & Orchestration",
    color: "primary",
    skills: [
      { name: "Kubernetes / EKS / GKE", level: 97 },
      { name: "ArgoCD / GitOps", level: 94 },
      { name: "Helm / Kustomize", level: 92 },
      { name: "GitHub Actions / Jenkins", level: 90 },
      { name: "Docker / Buildah", level: 96 },
    ],
  },
  {
    title: "AI & Data Engineering",
    color: "tertiary",
    skills: [
      { name: "PyTorch / HuggingFace", level: 77 },
      { name: "Kubeflow / MLflow", level: 70 },
      { name: "LangChain / RAG Systems", level: 75 },
      { name: "Vector DBs (Pinecone/Weaviate)", level: 70 }
    ],
  },
  {
    title: "Containers & Orchestration",
    color: "secondary",
    skills: [
      { name: "Docker / Docker-compose", level: 85 },
      { name: "Kubernetes", level: 82 },
      { name: "ArgoCD / GitOps", level: 88 },
      { name: "Helm / Kustomize / Istio Service Mesh", level: 80 },
      { name: "OpenTelemetry / Grafana Stack", level: 91 },
    ],
  },
  {
    title: "SecOps & Infrastructure",
    color: "primary",
    skills: [
      { name: "Terraform / OpenTofu", level: 95 },
      { name: "Zero Trust / OPA Gatekeeper", level: 88 },
      { name: "SSL-TLS / fail2ban", level: 93 },
      { name: "HashiCorp Vault / PKI", level: 86 },
      { name: "SAST/DAST / Container Scanning", level: 84 },
    ],
  },
  {
    title: "Programming Language",
    color: "tertiary",
    skills: [
      { name: "Python", level: 80 },
      { name: "Java", level: 70 },
      { name: "C/C++", level: 60 },
      { name: "Shell Scripting", level: 85 },
    ],
  },
  {
    title: "Continuous Integration & Delivery",
    color: "secondary",
    skills: [
      { name: "GitHub Actions", level: 85 },
      { name: "Jenkins", level: 82 },
      { name: "Bitbucket Pipelines", level: 88 },
      { name: "GitLab CI/CD", level: 80 },
    ],
  },
];

const secopsItems = ["SIEM/SOAR Integration", "Zero Trust Architecture", "OPA / Policy as Code"];
const infraItems = ["AWS (Core Services)", "GCP", "Azure (DevOps)"];

export default function SkillsSection() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimate(true), 300);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className={`section ${styles.skills}`}>
      <div className="container">
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <p className="section-label">Capabilities Matrix</p>
          <h2 className={styles.heading}>
            Engineering Reliability &{" "}
            <span className={styles.headingAccent}>AI Infrastructure</span>.
          </h2>
          <p className={styles.subheading}>
            Specializing in production-grade orchestration, automated security pipelines, and
            high-performance inference clusters.
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`${styles.catCard} glass-card-${cat.color === "primary" ? "" : cat.color}`}
              style={{ animationDelay: `${ci * 0.15}s` }}
            >
              <div className={styles.catHeader}>
                <div className={`${styles.catDot} ${styles[`catDot_${cat.color}`]}`} />
                <h3 className={styles.catTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={`${styles.skillLevel} ${styles[`skillLevel_${cat.color}`]}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`${styles.progressFill} ${styles[`progressFill_${cat.color}`]}`}
                        style={{
                          width: animate ? `${skill.level}%` : "0%",
                          transitionDelay: `${si * 0.1 + ci * 0.2}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: Sub-skill groups + Observability */}
        <div className={styles.bottomRow}>
          <div className={`${styles.subSkillGroup} glass-card`}>
            <p className={styles.subSkillTitle}>SecOps</p>
            <ul className={styles.subSkillList}>
              {secopsItems.map((item) => (
                <li key={item} className={styles.subSkillItem}>
                  <span className={styles.bullet}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.subSkillGroup} glass-card`}>
            <p className={styles.subSkillTitle}>Infrastructure</p>
            <ul className={styles.subSkillList}>
              {infraItems.map((item) => (
                <li key={item} className={styles.subSkillItem}>
                  <span className={styles.bullet}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.obsCard} glass-card-secondary`}>
            <p className={styles.subSkillTitle}>Observability</p>
            <p className={styles.obsDesc}>
              Grafana, Prometheus, ELK Stack, and OpenTelemetry implementation for{" "}
              <span className={styles.obsHighlight}>99.99% uptime</span> monitoring.
            </p>
            <div className={styles.obsTags}>
              {["Grafana", "Prometheus", "ELK", "OpenTelemetry", "Jaeger"].map((t) => (
                <span key={t} className="tag tag-secondary">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
