"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import styles from "./projects.module.css";

const statusColors: Record<string, string> = {
  PRODUCTION: "primary",
  ACTIVE_DEV: "tertiary",
  DEPLOYED: "secondary",
  COMPLETED: "secondary",
  ARCHIVED: "tertiary",
};

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className={styles.page}>
      <div className={styles.bgElements} aria-hidden="true" />
      
      <div className="container">
        <div className={styles.backContainer}>
          <Link href="/" className="btn-ghost" style={{ padding: "0.5rem 1rem" }}>
            <span>←</span>
            <span>BACK TO SYSTEM</span>
          </Link>
        </div>

        <div className={styles.header}>
          <p className="section-label">Complete Archive</p>
          <h1 className={styles.heading}>
            All <span className={styles.headingAccent}>Projects</span>.
          </h1>
          <p className={styles.subheading}>
            An unfiltered look at past and present architectural feats. From monolithic migrations to neural networking research experiments, logged chronologically.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, i) => (
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
                          fontWeight: line.includes("ALERT") || line.includes("RESOLVED") || line.includes("STATUS") ? "600" : "400",
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

                  {/* LIVE LINK INJECTION */}
                  {project.liveLink && project.liveLink !== "#" && (
                    <div style={{ marginTop: "1.5rem" }}>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }} onClick={(e) => e.stopPropagation()}>
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
      </div>
    </main>
  );
}
