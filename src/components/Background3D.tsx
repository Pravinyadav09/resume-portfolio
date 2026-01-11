"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera, Environment, Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, geometryType }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    const renderGeometry = () => {
        switch (geometryType) {
            case 'icosahedron':
                return <icosahedronGeometry args={[1, 0]} />;
            case 'octahedron':
                return <octahedronGeometry args={[1, 0]} />;
            case 'dodecahedron':
                return <dodecahedronGeometry args={[1, 0]} />;
            case 'tetrahedron':
                return <tetrahedronGeometry args={[1, 0]} />;
            default:
                return <boxGeometry args={[1, 1, 1]} />;
        }
    };

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh
                ref={meshRef}
                position={position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.2 : 1}
            >
                {renderGeometry()}
                <meshStandardMaterial
                    color={hovered ? "#00ffff" : color}
                    roughness={0.1}
                    metalness={0.8}
                    emissive={hovered ? "#00ffff" : "#000000"}
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    );
}

function FloatingTorus({ position, color }: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x -= delta * 0.1;
            meshRef.current.rotation.y -= delta * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position}>
                <torusGeometry args={[0.8, 0.2, 16, 50]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={1}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

// Interactive Particles Component
function InteractiveParticles({ mousePosition }: any) {
    const pointsRef = useRef<THREE.Points>(null);
    const particleCount = 1000;

    // Generate random particle positions
    const [positions, originalPositions] = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const original = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10 - 5;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            original[i * 3] = x;
            original[i * 3 + 1] = y;
            original[i * 3 + 2] = z;
        }

        return [positions, original];
    }, []);

    useFrame(() => {
        if (pointsRef.current) {
            const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;

                // Get original position
                const originalX = originalPositions[i3];
                const originalY = originalPositions[i3 + 1];
                const originalZ = originalPositions[i3 + 2];

                // Calculate distance from mouse
                const dx = positions[i3] - mousePosition.x;
                const dy = positions[i3 + 1] - mousePosition.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Repulsion effect
                if (distance < 4) {
                    const force = (4 - distance) / 4;
                    const angle = Math.atan2(dy, dx);

                    positions[i3] += Math.cos(angle) * force * 0.2;
                    positions[i3 + 1] += Math.sin(angle) * force * 0.2;
                } else {
                    // Return to original position
                    positions[i3] += (originalX - positions[i3]) * 0.05;
                    positions[i3 + 1] += (originalY - positions[i3 + 1]) * 0.05;
                }
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00ffff"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.8}
            />
        </Points>
    );
}

function Scene({ mousePosition }: any) {
    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bd00ff" />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Interactive Particles */}
            <InteractiveParticles mousePosition={mousePosition} />

            {/* Static Floating Elements - "Anti-Gravity" */}
            <FloatingShape position={[-3, 2, -2]} color="#4444ff" geometryType="icosahedron" />
            <FloatingShape position={[3, -1, -4]} color="#ff00ff" geometryType="octahedron" />
            <FloatingTorus position={[0, 0, -5]} color="#00ffff" />
            <FloatingShape position={[-2, -3, -1]} color="#00ffff" geometryType="dodecahedron" />
            <FloatingShape position={[4, 3, -3]} color="#ffffff" geometryType="tetrahedron" />
        </>
    );
}

export default function Background3D() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Convert mouse position to normalized device coordinates (-1 to +1)
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Scale to 3D space
            setMousePosition({ x: x * 10, y: y * 10 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            background: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #050510 100%)',
            pointerEvents: 'none'
        }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Scene mousePosition={mousePosition} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
