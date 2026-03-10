import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FloatingSphere({ position }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.position.y =
      position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.3;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />

        <FloatingSphere position={[-2, 0, 0]} />
        <FloatingSphere position={[2, 1, 0]} />
        <FloatingSphere position={[0, -1, 0]} />
        <FloatingSphere position={[1.5, -0.5, 0]} />
        <FloatingSphere position={[-1.5, 1, 0]} />
      </Canvas>
    </div>
  );
}