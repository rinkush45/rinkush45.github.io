"use client";

import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";

export default function Sidebar() {
  const [cpu, setCpu] = useState(24);
  const [ram, setRam] = useState(4.2);
  const [net, setNet] = useState(120);
  const [users, setUsers] = useState(14);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        `${now.getHours().toString().padStart(2, "0")}:${now
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
    };
    updateTime();

    const interval = setInterval(() => {
      setCpu((prev) =>
        Math.max(12, Math.min(98, prev + Math.floor((Math.random() - 0.5) * 20)))
      );
      setRam((prev) => {
        const val = prev + (Math.random() - 0.5) * 0.4;
        return parseFloat(Math.max(2.1, Math.min(15.8, val)).toFixed(1));
      });
      setNet((prev) =>
        Math.max(10, Math.min(950, prev + Math.floor((Math.random() - 0.5) * 250)))
      );
      setUsers((prev) =>
        Math.max(1, Math.min(120, prev + Math.floor((Math.random() - 0.5) * 5)))
      );
      updateTime();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        {/* ROOT USER */}
        <div className={styles.itemRoot}>
          <div className={styles.iconWrapperRoot}>
            <div className={styles.icon}>
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={20} 
                height={20} 
                className={styles.sidebarLogoImg}
              />
            </div>
          </div>
          <span className={styles.labelRoot}>ROOT_USER</span>
        </div>

        <div className={styles.menuItems}>
          {/* CPU */}
          <div className={`${styles.item} ${styles.active}`}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3" />
                <path d="M15 1v3" />
                <path d="M9 20v3" />
                <path d="M15 20v3" />
                <path d="M20 9h3" />
                <path d="M20 14h3" />
                <path d="M1 9h3" />
                <path d="M1 14h3" />
              </svg>
            </div>
            <span className={styles.label}>CPU: {cpu}%</span>
          </div>
          
          {/* RAM */}
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="9" width="20" height="6" rx="1"></rect>
                <path d="M4 15v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2"></path>
                <path d="M4 9V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path>
                <path d="M6 15v1"></path>
                <path d="M10 15v1"></path>
                <path d="M14 15v1"></path>
                <path d="M18 15v1"></path>
                <path d="M6 8v1"></path>
                <path d="M10 8v1"></path>
                <path d="M14 8v1"></path>
                <path d="M18 8v1"></path>
              </svg>
            </div>
            <span className={styles.label}>RAM: {ram}GB</span>
          </div>

          {/* NET */}
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M3 12h5.5l2.5-4 4 8 2.5-4h3.5" />
              </svg>
            </div>
            <span className={styles.label}>NET: {net}kb/s</span>
          </div>

          {/* USERS */}
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span className={styles.label}>USERS: {users}</span>
          </div>

          {/* TIME */}
          <div className={styles.item}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <span className={styles.label}>{time}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
