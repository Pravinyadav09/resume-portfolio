"use client";

import { useEffect, useState } from 'react';
import styles from './CursorTrail.module.css';

export default function CursorTrail() {
    const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let trailId = 0;

        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });

            const newTrail = {
                x: e.clientX,
                y: e.clientY,
                id: trailId++
            };

            setTrails(prev => [...prev, newTrail]);

            setTimeout(() => {
                setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
            }, 500);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {trails.map(trail => (
                <div
                    key={trail.id}
                    className={styles.cursorTrail}
                    style={{
                        left: `${trail.x}px`,
                        top: `${trail.y}px`,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            ))}
            <div
                className={styles.cursorGlow}
                style={{
                    left: `${cursorPos.x}px`,
                    top: `${cursorPos.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    );
}
