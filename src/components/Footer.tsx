import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.dividerLine} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.logoGrp}>
              <div className={styles.logoIcon}>
                <Image 
                  src="/logo.png" 
                  alt="Rinku Sharma Logo" 
                  width={24} 
                  height={24} 
                  className={styles.logoImg}
                />
              </div>
              <span className={styles.logo}>
                <span className={styles.logoAccent}>&gt;</span> RINKU_SHARMA
              </span>
            </div>
            <p className={styles.copy}>
              © {year} SystemsArchitect. All systems operational.
            </p>
          </div>

          <div className={styles.center}>
            <div className={styles.systemInfo}>
              <span className={styles.infoItem}>
                <span className={styles.dot} />
                PROD-CLUSTER-01: ONLINE
              </span>
              <span className={styles.infoItem}>
                <span className={styles.dotSecondary} />
                UPTIME: 99.99%
              </span>
              <span className={styles.infoItem}>
                <span className={styles.dotTertiary} />
                SECURITY: HARDENED
              </span>
            </div>
          </div>

          <div className={styles.right}>
            <a href="https://github.com" className={styles.footerLink} id="footer-github" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" className={styles.footerLink} id="footer-linkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://stackoverflow.com" className={styles.footerLink} id="footer-stackoverflow" target="_blank" rel="noopener noreferrer">
              StackOverflow
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
