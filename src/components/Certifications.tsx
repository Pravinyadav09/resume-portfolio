"use client";

import styles from './Certifications.module.css';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificationsData = [
    {
        title: "AI & Machine Learning",
        issuer: "Online Platform",
        date: "2024"
    },
    {
        title: "Advanced Python Programming",
        issuer: "Certification Authority",
        date: "2023"
    },
    {
        title: "Database Management",
        issuer: "Technical Institute",
        date: "2023"
    },
    {
        title: "Web Development",
        issuer: "Online Academy",
        date: "2022"
    }
];

export default function Certifications() {
    return (
        <section className={styles.section} id="certifications">
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Certifications
            </motion.h2>

            <div className={styles.certsGrid}>
                {certificationsData.map((cert, index) => (
                    <motion.div
                        key={index}
                        className={styles.certCard}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.certHeader}>
                            <div className={styles.certIcon}>
                                <Award size={28} color="#000" />
                            </div>
                            <h3 className={styles.certTitle}>{cert.title}</h3>
                        </div>
                        <p className={styles.certIssuer}>{cert.issuer}</p>
                        <p className={styles.certDate}>{cert.date}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
