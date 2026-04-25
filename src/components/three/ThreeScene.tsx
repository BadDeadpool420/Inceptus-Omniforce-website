"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ---------- Pre-generate particle positions at module level ---------- */
const PARTICLE_COUNT = 2000;
const PARTICLE_POSITIONS = (() => {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const radius = (i / PARTICLE_COUNT) * 14 + 4;
    const theta = (i * 2.399963) % (Math.PI * 2);
    const phi = Math.acos(1 - (2 * i) / PARTICLE_COUNT);
    arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = radius * Math.cos(phi);
  }
  return arr;
})();
const PARTICLE_GEOMETRY = new THREE.BufferGeometry();
PARTICLE_GEOMETRY.setAttribute(
  "position",
  new THREE.BufferAttribute(PARTICLE_POSITIONS, 3)
);

/* ---------- Rotating torus knot (hero centerpiece) ---------- */
function OmniforceCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.35;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.8, 0.55, 200, 32]} />
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0}
          metalness={0.9}
          emissive="#0ea5e9"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

/* ---------- Orbiting particles ---------- */
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={pointsRef} geometry={PARTICLE_GEOMETRY}>
      <pointsMaterial
        size={0.06}
        color="#a855f7"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

/* ---------- Floating icosahedra orbiters ---------- */
function Orbiter({ offset, speed, color }: { offset: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    const radius = 4.5;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.7) * 1.5;
      ref.current.rotation.x += 0.02;
      ref.current.rotation.y += 0.03;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.22, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

/* ---------- Energy ring ---------- */
function EnergyRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.2, 0.03, 16, 120]} />
      <meshStandardMaterial
        color="#f59e0b"
        emissive="#f59e0b"
        emissiveIntensity={1.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

/* ---------- Main canvas export ---------- */
export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
      <pointLight position={[0, 5, -8]} intensity={0.8} color="#f59e0b" />

      <Stars
        radius={80}
        depth={60}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <ParticleField />
      <OmniforceCore />
      <EnergyRing />

      <Orbiter offset={0} speed={0.4} color="#06b6d4" />
      <Orbiter offset={2.09} speed={0.4} color="#a855f7" />
      <Orbiter offset={4.19} speed={0.4} color="#f59e0b" />
    </Canvas>
  );
}
