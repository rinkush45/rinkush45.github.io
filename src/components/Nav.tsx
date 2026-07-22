"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";
import Image from "next/image";

const navItems = [
  { href: "/#home", label: "Home.sh" },
  { href: "/#about", label: "About.md" },
  { href: "/#education", label: "Education.edu" },
  { href: "/#skills", label: "Skills.py" },
  { href: "/#experience", label: "Experience.sh" },
  { href: "/#projects", label: "Projects.go" },
  { href: "/#contact", label: "Contact.rs" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image 
              src="/logo.png" 
              alt="Rinku Sharma Logo" 
              width={32} 
              height={32} 
              priority
              className={styles.logoImg}
            />
          </div>
          <span className={styles.logoAccent}>&gt;</span>
          <span className={styles.logoText}>RINKU_SHARMA</span>
          <span className={styles.logoVersion}>v2.0.4</span>
          <span className={styles.cursor}>_</span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className={styles.rightSide}>
          <div className={styles.systemStatus}>
            <span className={styles.statusDot} />
            <span className={styles.statusText} suppressHydrationWarning>
              {time}
            </span>
          </div>
          <Link href="/#contact" className={styles.ctaLink}>
            INITIALIZE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          <span className={`${styles.menuLine} ${menuOpen ? styles.open1 : ""}`} />
          <span className={`${styles.menuLine} ${menuOpen ? styles.open2 : ""}`} />
          <span className={`${styles.menuLine} ${menuOpen ? styles.open3 : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
