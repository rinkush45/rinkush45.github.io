"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/styles/sections/HeroSection.module.css";

const terminalLines = [
  { text: "$ initializing RINKU_SHARMA v2.0.4...", delay: 0 },
  { text: "$ loading kernel modules [ DevOps, k8s, Docker, Terraform, Nginx, AI, Security ]...", delay: 600 },
  { text: "$ mounting cloud volumes [AWS, GCP, AZURE]...", delay: 1200 },
  { text: "$ neural_threat_engine.start() → ACTIVE", delay: 1800 },
  { text: "$ all systems nominal. uptime: 99.99%", delay: 2400 },
];

const skills = [
  { label: "KUBERNETES", level: "4/5" },
  { label: "TERRAFORM", level: "4/5" },
  { label: "PYTORCH", level: "3/5" },
  { label: "AWS / GCP", level: "4/5" },
];

export default function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [glitching, setGlitching] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter state
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const portfolioTitles = [
    "Building scalable cloud infrastructure",
    "Automating CI/CD pipelines",
    "Securing systems and applications",
    "Deploying containerized workloads",
    "Monitoring & Optimizing performance",
    "Working with AI-driven solutions"
  ];

  // Terminal lines animation
  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), line.delay + 800)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Periodic glitch on headline
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, []);

  // Typewriter animation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = portfolioTitles[titleIndex];

    if (!isDeleting && currentText === currentFullText) {
      // Pause at end of typing
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === "") {
      // Move to next word when done deleting
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % portfolioTitles.length);
    } else {
      // Typing or deleting velocity
      const speed = isDeleting ? 40 : Math.random() * 50 + 70; // natural typing speed
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentFullText.substring(0, currentText.length - 1)
            : currentFullText.substring(0, currentText.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  // Matrix rain canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01अइउऌआॠईएऐओऔअंअः";
    const fontSize = 12;
    let cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 255, 65, 0.15)";
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 60);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className={styles.matrixCanvas} aria-hidden="true" />

      {/* Gradient overlays */}
      <div className={styles.gradientOverlay} aria-hidden="true" />
      <div className={styles.gradientBottom} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* System Status Bar */}
        <div className={styles.statusBar}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>SYSTEM STATUS: OPERATIONAL</span>
          <span className={styles.divider}>|</span>
          <span className={styles.statusText}>NODE: PROD-CLUSTER-01</span>
          <span className={styles.divider}>|</span>
          <span className={styles.statusText}>SECURITY: HARDENED</span>
        </div>

        <div className={styles.heroLayout}>
          {/* Left – Main Content */}
          <div className={styles.heroLeft}>
            <div className={styles.roleLabel}>
              <span className={styles.bracket}>[</span>
              DevOps Engineer | Security Engineer | MLOps Engineer
              <span className={styles.bracket}>]</span>
            </div>

            <h1 className={`${styles.headline} ${glitching && !isDeleting ? styles.glitch : ""}`} style={{ minHeight: "2.2em" }}>
              <span className={styles.headlineAccent}>
                {currentText.indexOf(" ") === -1 ? currentText : currentText.substring(0, currentText.indexOf(" "))}
              </span>
              <br />
              <span className={styles.headlineMain}>
                {currentText.indexOf(" ") === -1 ? "" : currentText.substring(currentText.indexOf(" ") + 1)}
              </span>
              <span className={styles.terminalCursor} style={{ fontSize: "0.8em", verticalAlign: "baseline", marginLeft: "4px" }}>_</span>
            </h1>

            <p className={styles.subheadline}>
              Engineering high-availability architectures that bridge the gap between
              heavy infrastructure and{" "}
              <span className={styles.highlight}>autonomous AI systems</span>.
            </p>

            {/* Metrics Row */}
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>94%</span>
                <span className={styles.metricLabel}>Infra cost reduction</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metric}>
                <span className={styles.metricValue}>100+</span>
                <span className={styles.metricLabel}>Microservices managed</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metric}>
                <span className={styles.metricValue}>99.99%</span>
                <span className={styles.metricLabel}>Uptime SLA</span>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctaRow}>
              <Link href="/#projects" className="btn-primary">
                <span>VIEW PROJECTS</span>
                <span>→</span>
              </Link>
              <Link href="/#contact" className="btn-ghost">
                <span>INITIALIZE CONNECTION</span>
              </Link>
            </div>
          </div>

          {/* Right – Terminal */}
          <div className={styles.heroRight}>
            <div className={`glass-card ${styles.terminalCard}`}>
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: "#ff5f57" }} />
                <span className="terminal-dot" style={{ background: "#febc2e" }} />
                <span className="terminal-dot" style={{ background: "#28c840" }} />
                <span style={{ marginLeft: "auto" }}>
                  USER: ADMIN | ROLE: DEVOPS_ENGINEER
                </span>
              </div>
              <div className={styles.terminalBody}>
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={`${styles.terminalLine} ${
                      visibleLines.includes(i) ? styles.terminalLineVisible : ""
                    }`}
                  >
                    <span className={styles.terminalPrompt} />
                    <span className={styles.terminalText}>{line.text}</span>
                  </div>
                ))}
                {visibleLines.length >= terminalLines.length && (
                  <div className={styles.terminalActive}>
                    <span className={styles.terminalPrompt} />
                    <span className={styles.terminalCursor}>_</span>
                  </div>
                )}
              </div>
            </div>

            {/* Skill badges */}
            <div className={styles.skillBadges}>
              {skills.map((s) => (
                <div key={s.label} className={styles.skillBadge}>
                  <span className={styles.skillLabel}>{s.label}</span>
                  <span className={styles.skillLevel}>{s.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
