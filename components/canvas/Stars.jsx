import {useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';;
import { Random } from 'random-js';


const random = new Random();

const generateRandomSpherePoints = (count, radius) => {
  const points = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    const index = i * 3;
    points[index] = x;
    points[index + 1] = y;
    points[index + 2] = z;
  }
  
  return points;
};

const Stars = (props) => {
  const ref = useRef();
  const spherePoints = generateRandomSpherePoints(5000, 1.2);
  



  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={spherePoints} stride={3} frustumCulled {...props}>
      <PointMaterial 
        transparent
        color="#f1f1f1"
        size={0.004}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas