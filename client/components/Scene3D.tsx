import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, GradientTexture } from "@react-three/drei";
import * as THREE from "three";

function Shape({ position, color, type }: { position: [number, number, number], color: string, type: "distort" | "wobble" }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position} ref={mesh}>
        {type === "distort" ? (
          <boxGeometry args={[1, 1, 1]} />
        ) : (
          <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
        )}
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          radius={1}
          transparent
          opacity={0.6}
          roughness={0}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
}

function Scene3D() {
  return (
    <div className="w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Shape position={[2, 1, 0]} color="#3b82f6" type="distort" />
        <Shape position={[-2, -1, 1]} color="#ec4899" type="wobble" />
        <Shape position={[0, -2, -1]} color="#8b5cf6" type="distort" />
        
        {/* Background Particles */}
        <Stars count={100} />
      </Canvas>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  const mesh = useRef<THREE.Points>(null!);
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.4} />
    </points>
  );
}

export default Scene3D;
