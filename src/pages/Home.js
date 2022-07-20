import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Date from '../components/Date';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const transition = {
    delay: 0.3,
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <motion.div className="container mx-auto px-4 bg-[#BCFFCE] flex flex-col justify-between h-screen overflow-hidden">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -3000 }}
          exit={{ x: 0 }}
          transition={transition}
          className="z-30 fixed top-0 right-0 h-screen w-screen bg-teal-900"></motion.div>
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Header progress={true} />
      </AnimatePresence>
      <Content />
      <Date />
    </motion.div>
  );
}
