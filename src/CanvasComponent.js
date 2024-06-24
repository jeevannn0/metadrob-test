import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Torus, Cone } from '@react-three/drei';

const RotatingObject = ({ speed, visible, children, position, castShadow, receiveShadow }) => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += speed;
      ref.current.rotation.y += speed;
    }
  });
  return visible ? (
    <group ref={ref} position={position} castShadow={castShadow} receiveShadow={receiveShadow}>
      {children}
    </group>
  ) : null;
};

const CanvasComponent = ({
  cubeSpeed,
  donutSpeed,
  coneSpeed,
  cubeVisible,
  donutVisible,
  coneVisible
}) => {
  const objectScale = [1.5, 1.5, 1.5]; // Scale of the objects

  return (
    <Canvas
      shadowMap
    >
      
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.001}
      />
      <RotatingObject speed={cubeSpeed} visible={cubeVisible} position={[-5, 0, 0]} >
        <Box scale={objectScale}>
          <meshStandardMaterial attach="material" color="white" />
        </Box>
      </RotatingObject>
      <RotatingObject speed={donutSpeed} visible={donutVisible} position={[0, 0, -2]} >
        <Torus  scale={objectScale}>
          <meshStandardMaterial attach="material" color="white" />
        </Torus>
      </RotatingObject>
      <RotatingObject speed={coneSpeed} visible={coneVisible} position={[5, 0, 0]} >
        <Cone scale={objectScale}>
          <meshStandardMaterial attach="material" color="white" />
        </Cone>
      </RotatingObject>
    </Canvas>
  );
};

export default CanvasComponent;
