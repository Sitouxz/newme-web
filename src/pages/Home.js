import React, { useRef, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Vector3 } from 'three';
import {
  Html,
  SpotLight,
  // useDepthBuffer,
  useGLTF,
  useAnimations,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Header from '../components/Header';
// import Content from '../components/Content';
import Date from '../components/Date';
import { Section } from '../components/section';


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
  const { nodes, materials, animations } = useGLTF('virus.glb');
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
        {/* <Fireflies count={50}/> */}
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
function Card(){
  return(
    <Section factor={0.5} offset={1}>
      <group possition={[0, 250, 0]}>
        {/* <Model/> */}
        <Html fullscreen>
          <div className='place-content-center'>
            <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
          </div>
        </Html>
      </group>
    </Section>
  )
}
export default function Home() {
  // const transition = {
  //   delay: 0.3,
  //   duration: 1,
  //   ease: [0.43, 0.13, 0.23, 0.96],
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto bg-[#BCFFCE] h-screen flex flex-col justify-between overflow-hidden">
      <Header progress={true} />
      <div className="absolute h-screen w-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Canvas camera={{ position: [0, 0, 3], fov: 55, near: 1, far: 20 }}>
          <Scene />
          <Card />
        </Canvas>
      </div>
      <Date />
    </motion.div>
  );
}
