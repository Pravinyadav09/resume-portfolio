"use client";

import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    const contactItems = [
        {
            icon: Phone,
            label: "Phone",
            value: "9926147939",
            href: "tel:9926147939"
        },
        {
            icon: Mail,
            label: "Email",
            value: "rishitaparashar931@gmail.com",
            href: "mailto:rishitaparashar931@gmail.com"
        }
    ];

    return (
        <section className={styles.section} id="contact">
            <motion.h2
                className={styles.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Get In Touch
            </motion.h2>

            <motion.div
                className={styles.contactCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className={styles.contactInfo}>
                    {contactItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            className={styles.contactItem}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={styles.iconWrapper}>
                                <item.icon size={24} color="#000" />
                            </div>
                            <div className={styles.contactText}>
                                <p className={styles.contactLabel}>{item.label}</p>
                                <p className={styles.contactValue}>{item.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className={styles.socialLinks}>
                    <motion.a
                        href="https://linkedin.com/in/rishitaparashar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Linkedin size={28} color="#00ffff" />
                    </motion.a>

                    <motion.a
                        href="https://github.com/rishitaparashar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Github size={28} color="#00ffff" />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
