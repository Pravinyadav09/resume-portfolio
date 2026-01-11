"use client";

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Achievements', id: 'stats' },
        { label: 'Education', id: 'education' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <>
            <motion.nav
                className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.navContent}>
                    <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        RP
                    </div>

                    <ul className={styles.navLinks}>
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.id}
                                className={styles.navLink}
                                onClick={() => scrollToSection(item.id)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item.label}
                            </motion.li>
                        ))}
                    </ul>

                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className={styles.mobileNavLinks}>
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={styles.mobileNavLink}
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
