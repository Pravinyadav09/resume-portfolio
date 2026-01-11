"use client";

import { useEffect, useState } from 'react';
import styles from './Loader.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className={styles.loader}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.loaderContent}>
                        <motion.div
                            className={styles.loaderLogo}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            RP
                        </motion.div>
                        <div className={styles.loaderBar}>
                            <div className={styles.loaderProgress}></div>
                        </div>
                        <motion.p
                            className={styles.loaderText}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Loading Portfolio...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
