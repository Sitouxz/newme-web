import React, { useRef, useEffect, Suspense } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Date from '../components/Date';
import { motion } from 'framer-motion';

import { Vector3 } from 'three'
import {Html, SpotLight, useDepthBuffer, useGLTF, useAnimations} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {Section} from '../components/section';

const HTMLContent = () => {
  return (
    <Section factor={0.5} offset={1}>
      <group possition={[0, 250,0]}>
      {/* <Model/> */}
        <Html fullscreen>
          <div>
            <h1 className='font-bold text-9xl width-h-100 bg-white-900'>Hello</h1>
          </div>
        </Html>
      </group>
    </Section>
  )
};

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
    light.current.target.updateMatrixWorld()
  })
  return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />
}

const Light = () => {
  return (
    <>
      <SpotLight intensity={1} position={[-2,8,0]} anglePower={4} distance={100} color="#ff0000"/>
      <SpotLight intensity={1} position={[-2,-8,0]} anglePower={4} distance={100} color="#BCFFCE"/>
    </>
  )
}

function Virus(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('virus.glb');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
      actions.virusAction.play();
  });
  useFrame(() => (group.current.rotation.y += 0.0008))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow geometry={nodes.Virus.geometry} material={materials['Material.001']}/>
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2} >
        {/* <planeGeometry color="white" opacity={0.5} args={[90, 50]} transparant/> */}
        <meshPhongMaterial />
      </mesh>
    </group>
  )
}

function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 })
  return (
    <>
      <Suspense fallback={null}>
        <Virus />
      </Suspense>
      <Light />
      {/* <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[3, 3, 2]} />
      <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 3, 0]} /> */}
    </>
  )
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto bg-[#BCFFCE]">
      <Header progress={true} />
      <div className='h-screen w-screen'>
       <Canvas camera={{ position: [0, 0, 6], fov: 50, near: 1, far: 20 }}>
      <HTMLContent />
      <Scene />
      
      </Canvas> 
      </div>
      <Date />
    </motion.div>
  );
}
