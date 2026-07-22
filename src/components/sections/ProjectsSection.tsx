"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/sections/ProjectsSection.module.css";

import { projectsData } from "@/data/projects";

const statusColors: Record<string, string> = {
  PRODUCTION: "primary",
  ACTIVE_DEV: "tertiary",
  DEPLOYED: "secondary",
  COMPLETED: "secondary",
};

export default function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className={`section ${styles.projects}`}>
      <div className="container">
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <p className="section-label">Engineered Impact</p>
          <h2 className={styles.heading}>
            Strategic <span className={styles.headingAccent}>Projects</span>.
          </h2>
          <p className={styles.subheading}>
            Exploring the intersection of scalable infrastructure, proactive security, and autonomous AI
            systems. These case studies highlight technical solutions designed for enterprise-grade resilience.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.filter(p => p.isFavourite).map((project, i) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className={`${styles.projectCard} glass-card`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setSelected(selected === project.id ? null : project.id)}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardMeta}>
                  <span className={`tag tag-${statusColors[project.status] || "primary"}`}>
                    {project.status.replace("_", " ")}
                  </span>
                  <span className={styles.category}>{project.category}</span>
                </div>
                <span className={`${styles.expandIcon} ${selected === project.id ? styles.expanded : ""}`}>
                  ▸
                </span>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>

              {/* Tags */}
              <div className={styles.tagRow}>
                {project.tags.map((t) => (
                  <span key={t} className={`tag tag-${project.tagColor}`}>{t}</span>
                ))}
              </div>

              {/* Expanded detail */}
              {selected === project.id && (
                <div className={styles.details}>
                  <div className={styles.detailBlock}>
                    <p className={styles.detailLabel}>PROBLEM</p>
                    <p className={styles.detailText}>{project.problem}</p>
                  </div>
                  <div className={styles.detailBlock}>
                    <p className={styles.detailLabel}>SOLUTION</p>
                    <p className={styles.detailText}>{project.solution}</p>
                  </div>

                  {project.terminalOutput && (
                    <div className="code-block" style={{ marginBottom: "1rem" }}>
                      {project.terminalOutput.map((line, i) => (
                        <div key={i} style={{ 
                          color: line.includes("ALERT") ? "var(--error)" : (line.startsWith(">") ? "var(--primary)" : "var(--on-surface-variant)"),
                          fontWeight: line.includes("ALERT") ? "600" : "400",
                        } as React.CSSProperties}>
                          {line}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={styles.detailBlock}>
                    <p className={styles.detailLabel}>IMPACT</p>
                    <ul className={styles.impactList}>
                      {project.impact.map((imp) => (
                        <li key={imp} className={styles.impactItem}>
                          <span className={styles.impactCheck}>✓</span>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.liveLink && project.liveLink !== "#" && (
                    <div style={{ marginTop: "1.5rem" }}>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                        <span>LIVE REPOSITORY</span>
                        <span>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaText}>Ready to architect the future?</p>
          <p className={styles.ctaDesc}>
            I am currently open to consulting for high-complexity infrastructure projects and
            AI-driven security implementations.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/#contact" className="btn-primary" id="projects-cta">
              INITIALIZE CONNECTION →
            </a>
            <a href="/projects" className="btn-ghost">
              VIEW FULL PROJECTS ARCHIVE (20+)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
