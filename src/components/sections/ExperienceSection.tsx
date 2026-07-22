"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/sections/ExperienceSection.module.css";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Mobzway Technologies LLP",
    period: "November-2025 – Present",
    stack: ["AWS", "EKS", "ArgoCD", "Kubeflow", "Bitbucket-pipelines", "Docker", "Jenkins", "Helm"],
    achievements: [
      "Led migration of monolith services to a multi-region EKS mesh, reducing end-to-end latency by 120ms across all production workloads.",
      "Implemented shift-left security across 100+ microservices with automated SAST/DAST scanning integrated directly into Bitbucket pipelines.",
      "Designed and maintained Helm chart library of 40+ reusable templates, standardizing deployment configs across all engineering squads.",
      "Configured Jenkins-based CI/CD pipelines with parallel stage execution, cutting average build time from 18 minutes to 6 minutes.",
      "Optimized Docker image build strategy using multi-stage builds and layer caching, reducing average image size by 65%.",
      "Established GitOps-driven release workflows with ArgoCD, enabling fully auditable, rollback-capable deployments with zero downtime."
    ],
    color: "primary",
  },
  {
    role: "DevOps Engineer",
    company: "Welldone Healthcare Pvt. Ltd.",
    period: "September-2025 – November-2025",
    stack: ["Terraform", "OpenTofu", "OpenTelemetry", "AWS", "GCP", "Docker", "Jenkins", "Helm", "Bitbucket-pipelines", "ArgoCD", "Kubeflow", "EKS", "PyTorch"],
    achievements: [
      "Built a custom IaC framework using Terraform and OpenTofu for rapid environment provisioning with a target deploy time of under 10 minutes.",
      "Designed a multi-cloud failover architecture across AWS and GCP serving 20k+ daily active users with 99.99% SLA compliance.",
      "Managed multi-environment Helm releases via ArgoCD App-of-Apps pattern, enabling teams to self-serve deployments with guardrails.",
      "Reduced infrastructure drift to zero by enforcing Terraform state locking and automated plan reviews on every pull request in Bitbucket.",
      "Containerized 30+ legacy services with Docker, establishing base image standards and vulnerability scanning with automated CVE gating.",

    ],
    color: "secondary",
  },
  {
    role: "DevOps Engineer",
    company: "Quibble AI Pvt. Lts.",
    period: "July-2024 – December-2024",
    stack: ["Vault", "OPA", "Istio", "Zero Trust", "SPIFFE"],
    achievements: [
      "Architected a zero-trust network access system for a financial services provider covering 500+ endpoints with microsegmentation policies.",
      "Implemented automated certificate rotation via HashiCorp Vault, achieving 100% PKI coverage with zero manual renewal interventions.",
      "Achieved SOC2 Type II and FedRAMP compliance with automated OPA policy enforcement applied at the admission controller level.",
      "Deployed SPIFFE/SPIRE for workload identity federation, enabling cryptographically verified service-to-service authentication across all clusters.",
      "Configured Istio service mesh with mTLS enforced across 100% of east-west traffic, eliminating plaintext inter-service communication.",
      "Authored OPA Rego policies for Kubernetes admission control, blocking non-compliant resources before they reached any environment."
    ],
    color: "tertiary",
  },
  {
    role: "Java Developer Intern",
    company: "Learn and Build edutech",
    period: "Jan-2024 – April-2023",
    stack: ["Kubernetes", "ArgoCD", "Kubeflow", "EKS", "PyTorch"],
    achievements: [
     "Assisted in the migration of legacy monolith services to a microservices architecture deployed on a multi-region EKS cluster.",
     "Supported MLOps pipeline development using Kubeflow and ArgoCD for a fraud detection proof-of-concept project.",
     "Wrote and maintained Kubernetes manifests for Java-based backend services, including deployments, services, and ConfigMaps.",
     "Integrated PyTorch model serving endpoints with Java REST APIs, enabling real-time inference from backend service layers.",
     "Contributed to shift-left security practices by running SAST scans on Java codebases during CI pipeline execution."
    ],
    color: "primary",
  },
  {
    role: "DevOps Engineer Intern",
    company: "Learn and Build edutech",
    period: "June-2023 – November-2023",
    stack: ["Terraform", "OpenTofu", "OpenTelemetry", "AWS", "GCP"],
    achievements: [
      "Contributed to building a custom IaC framework using Terraform and OpenTofu to automate environment provisioning workflows.",
      "Assisted in implementing an OpenTelemetry-based observability pipeline to collect distributed traces from key microservices.",
      "Provisioned and managed AWS resources including EC2, RDS, S3, and IAM roles using Terraform modules under senior guidance.",
      "Explored multi-cloud networking between AWS and GCP as part of a research initiative for failover architecture design.",
      "Wrote reusable Terraform modules for VPC, subnets, and security group configurations used across dev, staging, and prod environments."
    ],
    color: "secondary",
  },
  {
    role: "Backend Developer Intern",
    company: "Learn and Build edutech",
    period: "March-2023 – May-2023",
    stack: ["Vault", "OPA", "Istio", "Zero Trust", "SPIFFE"],
    achievements: [
      "Assisted in the initial deployment and configuration of HashiCorp Vault for centralized secrets management across dev environments.",
      "Learned and applied OPA Rego policy authoring to enforce basic access control rules on internal APIs.",
      "Supported the setup of Istio service mesh in a staging environment, configuring VirtualServices and DestinationRules for traffic routing.",
      "Studied and documented zero-trust principles, contributing to internal wiki pages that onboarded 15+ team members.",
      "Helped configure SPIFFE workload identity for two pilot microservices as part of an experimental identity federation initiative.",
      "Wrote backend API endpoints in support of security policy dashboards, consuming Vault and OPA APIs for real-time policy status."
    ],
    color: "tertiary",
  },
];

export default function ExperienceSection() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const exp = experiences[active];

  return (
    <section id="experience" ref={ref} className={`section ${styles.experience} ${styles.exp}`}>
      <div className="container">
        <div className={`${styles.header} ${visible ? styles.visible : ""}`}>
          <p className="section-label">Production Timeline</p>
          <h2 className={styles.heading}>
            Professional <span className={styles.headingAccent}>History</span>.
          </h2>
        </div>

        <div className={styles.layout}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            {experiences.map((e, i) => (
              <button
                key={`${e.company}-${i}`}
                className={`${styles.tab} ${active === i ? styles.tabActive : ""} ${styles[`tab_${e.color}`]}`}
                onClick={() => setActive(i)}
                id={`exp-tab-${i}`}
              >
                <span className={styles.tabRole}>{e.role}</span>
                <span className={styles.tabCompany}>{e.company}</span>
                <span className={styles.tabPeriod}>{e.period}</span>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className={`${styles.detail} glass-card`} key={active}>
            <div className="terminal-bar">
              <span className="terminal-dot" style={{ background: "#28c840" }} />
              <span style={{ marginLeft: "0.5rem", flex: 1, fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}>
                {exp.role.toLowerCase().replace(/ /g, "_")}.sh | {exp.company}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", opacity: 0.5 }}>{exp.period}</span>
            </div>
            <div className={styles.detailBody}>
              <div className={styles.achievements}>
                {exp.achievements.map((a, i) => (
                  <div key={i} className={styles.achievement}>
                    <span className={`${styles.achieveIcon} ${styles[`achieveIcon_${exp.color}`]}`}>✓</span>
                    <p className={styles.achieveText}>{a}</p>
                  </div>
                ))}
              </div>

              <div className={styles.techStack}>
                <p className={styles.stackLabel}>TECH STACK</p>
                <div className={styles.stackTags}>
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className={`tag tag-${exp.color}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy row */}
        <div className={styles.philosophyRow}>
          <div className={`${styles.philCard} glass-card`}>
            <div className={styles.philIcon}>📊</div>
            <div>
              <h3 className={styles.philTitle}>Data-Driven Scale</h3>
              <p className={styles.philDesc}>
                Every architectural decision is backed by telemetry. We don't scale until the metrics
                prove a bottleneck, ensuring maximum cost efficiency.
              </p>
            </div>
          </div>
          <div className={`${styles.philCard} glass-card-secondary`}>
            <div className={`${styles.philIcon} ${styles.philIconSecondary}`}>🔐</div>
            <div>
              <h3 className={`${styles.philTitle} ${styles.philTitleSecondary}`}>Security as Code</h3>
              <p className={styles.philDesc}>
                Security is not a gated process; it is a CI/CD requirement. Policy as Code (OPA) ensures
                compliance is baked into the infrastructure from the first line of HCL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
