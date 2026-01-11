"use client";

import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
    const [showInfo, setShowInfo] = useState(false);

    const contactInfo = [
        {
            icon: Phone,
            label: "Phone",
            value: "9926147939"
        },
        {
            icon: Mail,
            label: "Email",
            value: "rishitaparashar931@gmail.com"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Indore, India"
        },
        {
            icon: Briefcase,
            label: "Status",
            value: "Available for Hire"
        }
    ];

    return (
        <section className={styles.heroSection}>
            <motion.div
                className={styles.glassCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div
                    className={styles.nameWrapper}
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                >
                    <motion.h1
                        className={styles.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Rishita Parashar
                    </motion.h1>

                    <AnimatePresence>
                        {showInfo && (
                            <motion.div
                                className={styles.infoCard}
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.infoItem}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <div className={styles.infoIcon}>
                                            <item.icon size={20} color="#000" />
                                        </div>
                                        <div className={styles.infoText}>
                                            <p className={styles.infoLabel}>{item.label}</p>
                                            <p className={styles.infoValue}>{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    AI Developer
                </motion.h2>

                <motion.p
                    className={styles.tagline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    Building smart, efficient systems with physics-inspired intelligent modeling.
                    <br />
                    Experience in Anti-Gravity Simulation & Generative AI.
                </motion.p>

                <motion.div
                    className={styles.buttonGroup}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <a href="#contact" className={styles.primaryButton}>
                        <MousePointer2 size={20} />
                        Hire Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
