import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MeshDistortMaterial, Float, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({ color, size, position, speed, factor }: { color: string, size: number, position: [number, number, number], speed: number, factor: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={mesh} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function Scene3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <AnimatedSphere 
          color="#3b82f6" 
          size={1.2} 
          position={[0, 0, 0]} 
          speed={2} 
          factor={1.5} 
        />
        
        <AnimatedSphere 
          color="#8b5cf6" 
          size={0.6} 
          position={[2, 1, -1]} 
          speed={3} 
          factor={2} 
        />
        
        <AnimatedSphere 
          color="#ec4899" 
          size={0.4} 
          position={[-2, -1, 1]} 
          speed={4} 
          factor={2.5} 
        />
      </Canvas>
    </div>
  );
}

export default Scene3D;
