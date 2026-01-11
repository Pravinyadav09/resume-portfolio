"use client";

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>
                © 2026 <span>Rishita Parashar</span>. Built with Next.js & Three.js
            </p>
        </footer>
    );
}
