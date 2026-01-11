"use client";

import styles from './Stats.module.css';
import { motion } from 'framer-motion';
import { Award, Code, Briefcase, GraduationCap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const statsData = [
    {
        icon: Code,
        number: 15,
        suffix: "+",
        label: "AI Tools Mastered"
    },
    {
        icon: Briefcase,
        number: 5,
        suffix: "+",
        label: "Projects Completed"
    },
    {
        icon: GraduationCap,
        number: 7.70,
        suffix: "",
        label: "CGPA (MCA)"
    },
    {
        icon: Award,
        number: 100,
        suffix: "%",
        label: "Client Satisfaction"
    }
];

function CountUp({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const increment = end / (duration * 60);
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(current);
                        }
                    }, 1000 / 60);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return (
        <div ref={ref} className={styles.statNumber}>
            {count % 1 === 0 ? Math.floor(count) : count.toFixed(2)}{suffix}
        </div>
    );
}

export default function Stats() {
    return (
        <section className={styles.section} id="stats">
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Achievements
            </motion.h2>

            <div className={styles.statsGrid}>
                {statsData.map((stat, index) => (
                    <motion.div
                        key={index}
                        className={styles.statCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={styles.statIcon}>
                            <stat.icon size={36} color="#000" />
                        </div>
                        <CountUp end={stat.number} suffix={stat.suffix} />
                        <p className={styles.statLabel}>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
