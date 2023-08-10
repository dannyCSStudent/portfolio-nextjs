import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Drones = ( { isMobile } ) => {
  const drone = useGLTF('./drone/scene.gltf');
 
  return (
   <mesh>
    <hemisphereLight intensity={2}
    groundColor='black' />
    <pointLight intensity={3} />
    <spotLight 
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
    <primitive 
      object={drone.scene}
      scale={isMobile ? 1.3 : 2.75}
      position={isMobile ? [0, 0, -1.2] : [0, 0.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
     />
   </mesh>
  )
}

const DronesCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Drones isMobile={isMobile}/>
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default DronesCanvas