"use client";

import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

export default function HeartScene() {
  // Create a 2D heart shape
  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();

    // Start at bottom center
    shape.moveTo(0, -0.9);

    // Left lobe
    shape.bezierCurveTo(-1.4, -1.3, -1.6, -0.2, -0.6, 0.45);
    shape.bezierCurveTo(-0.3, 0.8, 0.0, 1.05, 0.0, 0.95);

    // Right lobe
    shape.bezierCurveTo(0.0, 1.05, 0.3, 0.8, 0.6, 0.45);
    shape.bezierCurveTo(1.6, -0.2, 1.4, -1.3, 0, -0.9);

    return shape;
  }, []);

  // Extrude options for smooth 3D heart
  const extrudeSettings = useMemo(
    () => ({
      depth: 0.45,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.08,
      bevelOffset: 0,
      bevelSegments: 8,
      steps: 2,
    }),
    []
  );

  return (
    <div className="w-full h-[420px] rounded-2xl overflow-hidden mt-10">
      <Canvas camera={{ position: [0, 0, 3.6], fov: 50 }}>
        <color attach="background" args={["#fff"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} />

        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
          <mesh scale={0.8} rotation={[Math.PI, 0, 0]}>
            <extrudeGeometry args={[heartShape, extrudeSettings]} />
            <meshStandardMaterial
              metalness={0.2}
              roughness={0.25}
              color="#ff5c8a"
              emissive="#2b0018"
              emissiveIntensity={0.02}
              side={THREE.DoubleSide}
            />
          </mesh>
        </Float>

        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
