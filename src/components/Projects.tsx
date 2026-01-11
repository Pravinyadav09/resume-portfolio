"use client";

import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { Droplet } from 'lucide-react';

export default function Projects() {
    const techStack = [
        "Flask Backend",
        "MySQL Database",
        "User Authentication",
        "Role-Based Access Control",
        "Automated Billing",
        "Responsive UI",
        "Data Automation"
    ];

    return (
        <section className={styles.section} id="projects">
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Featured Project
            </motion.h2>

            <motion.div
                className={styles.projectCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className={styles.projectTitle}>
                    <Droplet size={32} />
                    Bore Well Management System
                </h3>

                <p className={styles.projectDescription}>
                    Designed and developed an intelligent web-based application to manage bore well records efficiently.
                    The system includes secure user authentication, smart bore well booking management, and role-based access control.
                    Implemented an advanced admin panel to monitor system activities, generate automated billing, and track compliance effectively.
                    Integrated intelligent data handling and automation logic to improve operational efficiency and faster decision-making.
                    The application features a clean, responsive user interface with scalable backend architecture.
                </p>

                <div className={styles.techStack}>
                    {techStack.map((tech, index) => (
                        <motion.span
                            key={index}
                            className={styles.techTag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
