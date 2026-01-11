"use client";

import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Sparkles } from 'lucide-react';

const skillsData = [
    {
        icon: Brain,
        title: "Artificial Intelligence",
        skills: [
            "Generative AI Solutions",
            "Advanced Prompt Engineering",
            "AI-Driven Process Automation",
            "Physics-Inspired AI Architectures"
        ]
    },
    {
        icon: Sparkles,
        title: "Intelligent Systems",
        skills: [
            "Anti-Gravity Based Simulation",
            "Behavioral Modeling",
            "Data Processing & Analysis",
            "System Design & Optimization"
        ]
    },
    {
        icon: Code,
        title: "Development",
        skills: [
            "Python Programming",
            "Backend Development (Flask)",
            "Responsive Web Interfaces",
            "Visual Studio Code"
        ]
    },
    {
        icon: Database,
        title: "Data Management",
        skills: [
            "MySQL Database",
            "SQL Query Language",
            "Relational Database Design",
            "Data Optimization"
        ]
    }
];

export default function Skills() {
    return (
        <section className={styles.section} id="skills">
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Core Skills
            </motion.h2>

            <div className={styles.skillsGrid}>
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        className={styles.skillCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className={styles.skillIcon}>
                            <category.icon size={32} color="#000" />
                        </div>
                        <h3 className={styles.skillTitle}>{category.title}</h3>
                        <ul className={styles.skillList}>
                            {category.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
