"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function ProductObject() {
  const objectRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!objectRef.current) {
      return;
    }

    const time = state.clock.getElapsedTime();

    objectRef.current.rotation.y += delta * 0.14;
    objectRef.current.position.y = Math.sin(time * 0.9) * 0.06;
    objectRef.current.rotation.x = Math.sin(time * 0.45) * 0.03;
  });

  return (
    <group ref={objectRef} position={[0, 0.08, 0]}>
      <mesh position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.5, 0.34, 1.75, 56]} />
        <meshPhysicalMaterial color="#090b11" metalness={0.55} roughness={0.25} clearcoat={1} clearcoatRoughness={0.2} />
      </mesh>

      <mesh position={[0, 1.04, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.14, 40]} />
        <meshStandardMaterial color="#141822" metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[0, -0.83, 0.03]}>
        <cylinderGeometry args={[0.22, 0.22, 0.3, 28]} />
        <meshStandardMaterial color="#0f1118" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.16, 0.37]}>
        <planeGeometry args={[0.44, 0.9]} />
        <meshBasicMaterial color="#f5f5f5" transparent opacity={0.84} />
      </mesh>

      <mesh position={[0, 0.03, 0.385]}>
        <planeGeometry args={[0.28, 0.18]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="h-[390px] w-full sm:h-[460px] lg:h-[520px]">
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 4, 10]} />

        <ambientLight intensity={0.38} />
        <directionalLight position={[2.2, 2.8, 3.5]} intensity={1.15} color="#ffffff" />
        <directionalLight position={[-2.2, 1.4, -2.1]} intensity={0.62} color="#00ff88" />
        <pointLight position={[0, 1.5, 1.4]} intensity={0.9} color="#ffffff" />
        <spotLight position={[0, 2.8, 0.5]} angle={0.52} penumbra={0.8} intensity={2.1} color="#00ff88" />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.06, 0]}>
          <circleGeometry args={[2.4, 64]} />
          <meshStandardMaterial color="#020202" roughness={0.92} metalness={0.15} />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.03, 0]}>
          <ringGeometry args={[0.8, 1.8, 64]} />
          <meshBasicMaterial color="#00ff88" transparent opacity={0.09} />
        </mesh>

        <ProductObject />
      </Canvas>
    </div>
  );
}
