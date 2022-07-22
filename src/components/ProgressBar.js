import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ProgressBar = ({ bgcolor, progress, height }) => {
  const { scrollYProgress } = useScroll();
  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: '#061109',
    borderRadius: 40,
    margin: '0 12px',
  };

  const Childdiv = {
    float: 'left',
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    scaleX: scrollYProgress,
    transformOrigin: 'left',
  };

  return (
    <div style={Parentdiv}>
      <motion.div style={Childdiv}>
        <span></span>
      </motion.div>
    </div>
  );
};

export default ProgressBar;
