import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import SmokeElement from 'smoke-effect-react';
import { Corona } from '../components/Model';

export default function CovidCount() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      'https://api.allorigins.win/get?url=https://newme-api.herokuapp.com/data'
    )
      .then((res) => res.json())
      .then((data) => {
        setData(JSON.parse(data.contents));
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, []);

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
      className="container mx-auto px-4 h-screen overflow-hidden flex flex-col justify-between text-white">
      <Header />
      <div className="absolute top-0 left-0 h-full w-full z-0">
        <SmokeElement
          src=""
          opacity="0"
          smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
          smokeOpacity="0.3"
        />
      </div>
      <div className="h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Corona x={0} y={0.5} z={0} />
      </div>
      {!loading ? (
        <div className="flex flex-col justify-center items-center mb-40 z-20">
          <h1 className="text-8xl font-bold mb-10">Today Covid Count</h1>
          <div className="mb-10">
            <h1 className="text-2xl font-bold">{data.Date}</h1>
          </div>
          <div className="flex flex-col xl:flex-row justify-between w-full">
            <div className="flex flex-col items-start">
              <p className="text-3xl">Confirmed</p>
              <h1 className="text-6xl font-bold">
                {data.Confirmed.Total}{' '}
                <span className="text-3xl font-medium text-green-500">
                  {data.Confirmed.New} New
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-3xl">Recovered</p>
              <h1 className="text-6xl font-bold">
                {data.Recovered.Total}{' '}
                <span className="text-3xl font-medium text-green-500">
                  {data.Recovered.New} New
                </span>
              </h1>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-3xl">Deaths</p>
              <h1 className="text-6xl font-bold">
                {data.Deaths.Total}{' '}
                <span className="text-3xl font-medium text-green-500">
                  {data.Deaths.New} New
                </span>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

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
