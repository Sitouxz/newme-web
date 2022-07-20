import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Date from '../components/Date';
import { motion } from 'framer-motion';


import {Html} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
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

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 bg-[#BCFFCE]">
      <Header progress={true} />
      <Canvas>
      <HTMLContent />
      </Canvas>
      <Date />
    </motion.div>
  );
}
