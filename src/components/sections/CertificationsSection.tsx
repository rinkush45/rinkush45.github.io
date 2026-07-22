"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/sections/CertificationsSection.module.css";

const certs = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Professional Grade Architecture & Design Patterns",
    level: "PROFESSIONAL",
    icon: "☁",
    color: "primary",
  },
  {
    title: "CKA – Certified Kubernetes Administrator",
    subtitle: "Linux Foundation Certified Kubernetes Expert",
    level: "EXPERT",
    icon: "⬡",
    color: "secondary",
  },
  {
    title: "CompTIA Security+",
    subtitle: "SY0-601 Infrastructure Security",
    level: "CERTIFIED",
    icon: "🛡",
    color: "tertiary",
  },
  {
    title: "Azure AI Engineer",
    subtitle: "Associate AI-102 – AI Solutions Design",
    level: "ASSOCIATE",
    icon: "🧠",
    color: "secondary",
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    subtitle: "Infrastructure as Code (IaC) Mastery",
    level: "CERTIFIED",
    icon: "⊞",
    color: "primary",
  },
];

const articles = [
  {
    title: "Zero-Trust Networking in Multi-Cloud EKS Environments",
    desc: "An architectural deep-dive into implementing Istio service mesh with SPIFFE/SPIRE for identity-based security across AWS and GCP nodes.",
    tags: ["Istio", "SPIFFE", "EKS", "GCP"],
  },
  {
    title: "Scaling Vector Databases for Production RAG Pipelines",
    desc: "Latency benchmarking of Pinecone vs. Weaviate when handling 100M+ embeddings in a distributed LangChain application.",
    tags: ["RAG", "Pinecone", "LangChain", "Embeddings"],
  },
  {
    title: "Optimizing GitHub Actions for Large-Scale Monorepos",
    desc: "Reducing build times by 65% through custom ephemeral self-hosted runners and intelligent cache-keying strategies.",
    tags: ["GitHub Actions", "CI/CD", "Monorepo", "Caching"],
  },
];

export default function CertificationsSection() {
  const [visible, setVisible] = useState(false);
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
    <section id="credentials" ref={ref} className={`section ${styles.certs}`}>
      <div className="container">
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <p className="section-label">Credentials & Connectivity</p>
          <h2 className={styles.heading}>
            Verified <span className={styles.headingAccent}>Certifications</span>.
          </h2>
          <p className={styles.subheading}>
            Validation of technical expertise through industry-standard certifications.
          </p>
        </div>

        <div className={styles.certsGrid}>
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className={`${styles.certCard} glass-card`}
              style={{ animationDelay: `${i * 0.08}s` }}
              id={`cert-${i}`}
            >
              <div className={`${styles.certIcon} ${styles[`certIcon_${cert.color}`]}`}>
                {cert.icon}
              </div>
              <div className={styles.certContent}>
                <div className={styles.certHeader}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <span className={`tag tag-${cert.color}`}>{cert.level}</span>
                </div>
                <p className={styles.certSubtitle}>{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Articles/Insights */}
        <div className={styles.insightsSection}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>Technical Insights</p>
          <div className={styles.articlesGrid}>
            {articles.map((article, i) => (
              <div key={i} className={`${styles.articleCard} glass-card-secondary`} id={`article-${i}`}>
                <div className="terminal-bar">
                  <span className="terminal-dot" style={{ background: "#28c840" }} />
                  <span style={{ marginLeft: "0.5rem" }}>insight_{i + 1}.md</span>
                </div>
                <div className={styles.articleBody}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleDesc}>{article.desc}</p>
                  <div className={styles.articleTags}>
                    {article.tags.map((t) => (
                      <span key={t} className="tag tag-secondary">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
