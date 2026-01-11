"use client";

import styles from './About.module.css';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className={styles.section} id="about">
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h2>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <p>
                    I am an <span className={styles.highlight}>AI Developer</span> with hands-on experience in Artificial Intelligence tools, skilled in building smart, efficient, and practical applications using intelligent systems.
                    I am capable of effectively handling AI tools to automate tasks, analyze data, and deliver faster results.
                </p>
                <br />
                <p>
                    My expertise extends to <span className={styles.highlight}>advanced AI logic</span>, including physics-inspired concepts such as <span className={styles.highlight}>anti-gravity based simulation</span> and intelligent modeling for complex systems.
                    With a strong foundation in Computer Applications (MCA), I aim to bridge the gap between theoretical AI concepts and real-world utility.
                </p>
            </motion.div>
        </section>
    );
}
