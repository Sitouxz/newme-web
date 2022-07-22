// import React, { useRef, useEffect, Suspense } from 'react';
import {
  motion,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from 'framer-motion';
// import virus_object from '../assets/model/model.glb';
// import { Vector3 } from 'three';
// import { Html, SpotLight, useGLTF, useAnimations } from '@react-three/drei';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Header from '../components/Header';
import Date from '../components/Date';
import { Corona } from '../components/Model';
import Content from '../components/Content';
import ColouredClouds from '../components/ColouredClouds';
// import SmokeElement from 'smoke-effect-react';

// function Light({ vec = new Vector3(), ...props }) {
//   const light = useRef();
//   const viewport = useThree((state) => state.viewport);
//   useFrame((state) => {
//     light.current.target.position.lerp(
//       vec.set(state.mouse.y / 8, (state.mouse.x * viewport.height) / 1, 0),
//       0.1
//     );
//     light.current.target.updateMatrixWorld();
//   });
//   return (
//     <>
//       <SpotLight
//         castShadow
//         ref={light}
//         penumbra={1}
//         distance={80}
//         angle={0.15}
//         anglePower={4}
//         {...props}
//       />
//     </>
//   );
// }

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
      className="container mx-auto px-4 bg-[#BCFFCE] h-screen flex flex-col justify-between text-black"
      style={{ minHeight: '350vh' }}>
      <Header progress={true} sticky={true} />
      {/* <div className="absolute top-0 left-0 z-0" style={{ minHeight: '300vh' }}>
        <SmokeElement
          src=""
          opacity="0"
          smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
          smokeOpacity="0.3"
        />
      </div> */}
      <div className="h-screen w-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Corona x={0} y={0} z={0} />
      </div>
      <div className="">
        <Content />
      </div>
      <Date />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -10000 }}
          exit={{ x: 0 }}
          transition={transition}
          style={{ transAnim }}
          className="z-50 fixed top-0 right-0 h-screen w-screen bg-teal-900"></motion.div>
      </AnimatePresence>
      <ColouredClouds
        backLight="#ff9aee"
        frontLight="#494b7f"
        ambientLight="#494b7f"
        smokeType="cloud"
      />
    </motion.div>
  );
}
