import React, { useRef, useEffect, Suspense } from 'react';
import {
  motion,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from 'framer-motion';
import { Vector3 } from 'three';
import {
  Html,
  SpotLight,
  useGLTF,
  useAnimations,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Header from '../components/Header';
import Date from '../components/Date';
import {Virus} from '../components/Model';
import Content from '../components/Content';

function Light({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(state.mouse.y / 8, (state.mouse.x * viewport.height) / 1, 0),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <>
      <SpotLight
        castShadow
        ref={light}
        penumbra={1}
        distance={80}
        angle={0.15}
        anglePower={4}
        {...props}
      />
    </>
  );
}


function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <Virus x={0} y={0} z={0} />
      </Suspense>
      <SpotLight
        intensity={1}
        penumbra={1}
        position={[-2, 8, 0]}
        anglePower={4}
        distance={70}
        color="#BCFFCE"
      />
      <SpotLight
        intensity={1}
        penumbra={1}
        position={[-2, -8, 0]}
        anglePower={4}
        distance={80}
        color="#af0000"
      />
      <Light intensity={0.7} position={[6, -7, 0]} color="#BCFFCE" />
    </>
  );
}

export default function Home() {
  const transition = {
    delay: 0.3,
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const x = useMotionValue(0);
  const transAnim = useTransform(x, [0, 3000], [0, 1]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 bg-[#BCFFCE] h-screen flex flex-col justify-between">
      <Header progress={true} />
      <div className="h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Canvas camera={{ position: [0, 0, 3], fov: 55, near: 1, far: 20 }}>
          <Scene />
        </Canvas>
        <Content/>
      </div>
      <Date />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -3000 }}
          exit={{ x: 0 }}
          transition={transition}
          style={{ transAnim }}
          className="z-50 fixed top-0 right-0 h-screen w-screen bg-teal-900"></motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
