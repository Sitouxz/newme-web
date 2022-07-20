import React, { useRef, useEffect, Suspense } from 'react';
import Header from '../components/Header';
// import Content from '../components/Content';
import Date from '../components/Date';
import { motion } from 'framer-motion';
import object from '../assets/virus.glb';
import { Vector3 } from 'three';
import {
  // Html,
  SpotLight,
  // useDepthBuffer,
  useGLTF,
  useAnimations,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { Section } from '../components/section';

// const HTMLContent = () => {
//   return (
//     <Section factor={0.5} offset={1}>
//       <group possition={[0, 250, 0]}>
//         {/* <Model/> */}
//         <Html fullscreen>
//           <div>
//             <h1 className="font-bold text-9xl width-h-100 bg-white-900">
//               Hello
//             </h1>
//           </div>
//         </Html>
//       </group>
//     </Section>
//   );
// };

// function MovingSpot() {

//   })
//   return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />
// }

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

function Virus(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(object);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.virusAction.play();
  });
  useFrame(() => (group.current.rotation.y += 0.0008));
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Virus.geometry}
        material={materials['Material.001']}
      />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <Virus />
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
  // const transition = {
  //   delay: 0.3,
  //   duration: 1,
  //   ease: [0.43, 0.13, 0.23, 0.96],
  // };

  console.log(window.location.pathname);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 bg-[#BCFFCE] h-screen flex flex-col justify-between">
      <Header progress={true} />
      <div className="h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Canvas camera={{ position: [0, 0, 3], fov: 50, near: 1, far: 20 }}>
          {/* <HTMLContent /> */}
          <Scene />
        </Canvas>
      </div>
      <Date />
    </motion.div>
  );
}
