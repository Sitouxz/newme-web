import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrame } from '@react-three/fiber'

import lerp from "lerp";
import state from "./state";
import { useBlock } from "./blocks";


function Card({title, desc, addToRefs, index}) {
  if (!title) {
    title = "UPDATE Covid-19 Indonesia";
  }
  if (!desc) {
    desc = "Melansir data Satgas Covid-19, hingga Kamis (21/7) ada tambahan 5.410 kasus baru corona. Sehingga total menjadi 6.154.494 kasus positif Corona.";
  }

  return (
          <div
          // ref={addToRefs}
          className="flex flex-row items-center bg-white rounded-lg border shadow-md h-80 w-96">
            <div>
              <img
                className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="https://wonogirikab.go.id/wp-content/uploads/2020/09/Peduli.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                {desc}
              </p>
            </div>
          </div>
  );
};

function Content( { position = [0, 0, 2] } ) {
  const boxRef = useRef([]);
  boxRef.current = [];

  const addToRefs = (el) => {
    if (el && !boxRef.current.includes(el)) {
      boxRef.current.push(el);
    }
  };

  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);
  }

  useEffect(() => {
    const size = 0.5;
    boxRef.current.forEach((el, index) => {
      let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          // start: "top top",
          // end: "bot bot",
          trigger: el,
          scrub: 1,
        },
      });
      tl.to(el, {
        x: -100,
        scale: 0.8 * size,
        opacity: 0.3,
        rotationY: 200,

        duration: 1.25,
      }) 
        .to(el, {
          x: -300,
          scale: 0.8 * size,
          opacity: 0.3,
          rotationY: 200,

          duration: 1.25,
        })
        .to(el, {
          x: -200,
          scale: 1.5 * size,
          opacity: 0.5,
          rotationY: 40,

          duration: 1,
        })

        .to(el, {
          x: 0,
          scale: 5 * size,
          rotationY: 0,
          opacity: 1,

          duration: 0.5,
        })
        .to(el, {
          x: 200,
          scale: 1.5 * size,
          opacity: 0.5,
          rotationY: -40,

          duration: 1,
        })
        .to(el, {
          x: 300,
          scale: 0.3 * size,
          opacity: 0.3,
          rotationY: -170,

          duration: 1.25,
        });
    });
  });
  return (
      <div
      className="flex justify-center items-center flex-col gap-10"
      // style={{ top: '50%' }}
      id='konten'
      ref={addToRefs}
    >
      {/* {[...Array(10)].map((_, index) => ( */}
        <div
          // key={index}
          // ref={addToRefs}
          className="relative rounded-[50px] border-[6px] border-white flex h-[300px] w-[500px]  bg-[url('https://img.beritasatu.com/cache/beritasatu/910x580-2/1629780150.jpg')]">
          <div className="absolute top-0 left-0 w-full h-full rounded-[50px] bg-gradient-to-t from-black to-transparent z-0"></div>
          <div className="flex flex-col justify-end p-4 leading-normal z-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              UPDATE Covid-19 Indonesia
            </h5>
            <p className="mb-3 font-normal text-white ">
              Melansir data Satgas Covid-19, hingga Kamis (21/7) ada tambahan
              5.410 kasus baru corona. Sehingga total menjadi 6.154.494 kasus
              positif Corona.
            </p>
          </div>
        </div>
      {/* ))} */}
    </div>
  );
}

export default Content;
