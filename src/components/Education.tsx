"use client";

import styles from './Education.module.css';
import { motion } from 'framer-motion';

const educationData = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "IPS Academy, Indore",
        year: "2025",
        performance: "7.70 CGPA"
    },
    {
        degree: "Bachelor of Science",
        institution: "SRGBN College, Sanawad",
        year: "2023",
        performance: "68%"
    },
    {
        degree: "12th Standard",
        institution: "Geeta Devi Agrawal Public School, Sanawad",
        year: "2020",
        performance: "71%"
    },
    {
        degree: "10th Standard",
        institution: "Drashti Public School, Sanawad",
        year: "2017",
        performance: "70%"
    }
];

export default function Education() {
    return (
        <section className={styles.section} id="education">
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Education
            </motion.h2>

            <div className={styles.timeline}>
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        className={styles.timelineItem}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.eduCard}>
                            <h3 className={styles.degree}>{edu.degree}</h3>
                            <p className={styles.institution}>{edu.institution}</p>
                            <p className={styles.year}>{edu.year}</p>
                            <p className={styles.performance}>{edu.performance}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
