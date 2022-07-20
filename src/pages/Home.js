import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Date from '../components/Date';
import { motion } from 'framer-motion';

import { Vector3 } from 'three'
import { useRef } from 'react'
import {Html, SpotLight, useDepthBuffer, useGLTF} from '@react-three/drei';
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


function Scene() {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  const depthBuffer = useDepthBuffer({ frames: 1 })
  const { nodes, materials } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf')
  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[3, 3, 2]} />
      <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 3, 0]} />
      <mesh position={[0, -1.03, 0]} castShadow receiveShadow geometry={nodes.dragon.geometry} material={materials['Default OBJ.001']} dispose={null} />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
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
       <Canvas camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}>
      <HTMLContent />
      <Scene />
      </Canvas> 
      </div>
      <Date />
    </motion.div>
  );
}
