// components/Hero3DNetwork.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const Node = ({ position, color, speed }) => {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.y += Math.sin(Date.now() * 0.001 * speed) * 0.002;
    }
  });
  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
    </mesh>
  );
};

const Edge = ({ start, end }) => {
  const [x1, y1, z1] = start;
  const [x2, y2, z2] = end;
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array([x1, y1, z1, x2, y2, z2])}
          count={2}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#8b5cf6" linewidth={2} />
    </line>
  );
};

const Hero3DNetwork = () => {
  const nodes = [
    [0, 0, 0],
    [1, 0.5, -1],
    [-1, 0.8, 1],
    [0.5, -0.7, 1],
    [-0.8, -0.4, -1],
  ];

  const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 2],
    [2, 3],
    [3, 4],
  ];

  return (
    <Canvas
      className="absolute inset-0 -z-10"
      camera={{ position: [0, 0, 3] }}
    >
      <color attach="background" args={["#1e1e2f"]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1} />

      {nodes.map((pos, i) => (
        <Node key={i} position={pos} color="#6366f1" speed={i + 1} />
      ))}

      {edges.map(([startIdx, endIdx], i) => (
        <Edge key={i} start={nodes[startIdx]} end={nodes[endIdx]} />
      ))}

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
};

export default Hero3DNetwork;