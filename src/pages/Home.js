import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  motion,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from 'framer-motion';
// import { ScrollControls, Scroll } from '@react-three/drei';
// import virus_object from '../assets/model/model.glb';
// import { Vector3 } from 'three';
// import { Html, SpotLight, useGLTF, useAnimations } from '@react-three/drei';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Header from '../components/Header';
import Date from '../components/Date';
import { Corona } from '../components/Model';
import Content from '../components/Content';
// import { useBlock } from '../components/blocks';
// import Cube from '../components/cube';
import SmokeElement from 'smoke-effect-react';

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

  const boxRef = useRef([]);
  const scrollDown2 = useRef();
  boxRef.current = [];
  scrollDown2.current = [];

  const addToRefs = (el) => {
    if (el && !boxRef.current.includes(el)) {
      boxRef.current.push(el);
    }
  };
  const scrollDown = (el2) => {
    if (el2 && !scrollDown2.current.includes(el2)) {
      scrollDown2.current.push(el2);
    }
  };

  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);
  }
  let posmid = 50;
    gsap.to(scrollDown.current, { opacity: posmid+"vh" });
  useEffect(() => {
    const size = 1;
    boxRef.current.forEach((el, index) => {
      const size = 1;
      let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          // start: "bot top",
          end: 'top',
          trigger: el,
          scrub: 0.1,
        },
      });
      tl.to(el, {
        x: posmid - 10 + 'vh',
        // scale: 0.8 * size,
        // opacity: 0.3,
        // rotationY: 200,
        duration: 1,
      })
        .to(el, {
          x: posmid - 15 + 'vh',
          // scale: 0.8 * size,
          // opacity: 0.3,
          // rotationY: 200,

          duration: 1,
        })
        .to(el, {
          x: posmid - 30 + 'vh',
          // scale: 0.8 * size,
          // opacity: 0.3,
          // rotationY: 200,

          duration: 1,
        })
        .to(el, {
          x: posmid - 50 + 'vh',
          // scale: 1.5 * size,
          // opacity: 0.5,
          // rotationY: 40,

          duration: 1,
        })
        .to(el, {
          x: posmid - 30 + 'vh',
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid - 15 + 'vh',
          // scale: 0.8 * size,
          // opacity: 0.3,
          // rotationY: 200,

          duration: 1,
        })
        .to(el, {
          x: posmid + 'vh',
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid + 30 + 'vh',
          z: 50,
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid + 50 + 'vh',
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid + 30 + 'vh',
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid + 'vh',
          // scale: 0.3 * size,
          // opacity: 1,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid - 30 + 'vh',
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid - 50 + 'vh',
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid - 30 + 'vh',
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        })
        .to(el, {
          x: posmid + 'vh',
          // scale: 0.3 * size,
          // opacity: 0.3,
          // rotationY: -170,

          duration: 1,
        });
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 h-screen flex flex-col justify-between text-white"
      style={{ minHeight: '500vh' }}>
      <Header progress={true} sticky={true} />
      <div className="fixed top-0 left-0 z-0" style={{ minHeight: '300vh' }}>
        <SmokeElement
          src=""
          opacity="0"
          smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
          smokeOpacity="0.3"
        />
      </div>
      <div className="h-screen w-screen fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <Corona x={0} y={0} z={0} />
      </div>
      <div className=" absolute flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 overflow-hidden">
        <h1 className="text-7xl md:text-9xl font-bold text-white text-center">
          Start Scrolling
        </h1>
        <span className="animate-bounce text-5xl lg:text-7xl mr-1">Down</span>
      </div>
      <div className="absolute top-60 md:top-[100vh] -left-[60vh] md:-left-[50vh] lg:-left-[10vh] 2xl:left-[30vh] xl:left-[20vh]">
        <div className="flex flex-col gap-40 ">
        <div ref={addToRefs}>
            <Content 
            date="28 February 2020"
            title="Governor Anies Baswedan Asks All Provincial Government Officers to Increase Risk Awareness of Coronavirus Transmission" 
            desc="The Governor of Jakarta, Anies Baswedan, instructed the entire ranks of the Provincial Government to start taking steps to prevent the transmission of coronavirus infection which has now been officially named as Coronavirus Disease 2019 (COVID-19). The instructions given are also listed in Governor's Instruction No. 16 of 2020."
            />
          </div>
          <div ref={addToRefs}>
            <Content 
            date="2 March 2020"
            title="Government of Jakarta Formed COVID-19 Response Team" 
            desc="To improve monitoring and supervision, Governor Anies Baswedan formed Jakarta's COVID-19 Response Team based at the Health Office in Central Jakarta. On the same occasion, Anies also committed to the openness of the government in every step to prevent corona outbreaks."
            />
          </div>
          <div ref={addToRefs}>
            <Content 
            date="3 March 2020"
            title="
            Re-evaluation of Crowd Permits" 
            desc="With the risk of coronavirus transmission that can occur in a crowd, the Government of Jakarta has stopped issuing crowd gathering permits in the capital. The provincial government is also reviewing permits that have already been issued."
            />
          </div>
          <div ref={addToRefs}>
            <Content 
            date="6 March 2020"
            title="corona.jakarta.go.id Website Goes Live" 
            desc="Responding to requests from the public for up-to-date and reliable information about the development of the COVID-19 case in Jakarta, the Provincial Government together with the COVID-19 Response Team launched its official channel in the form of the microsite at corona.jakarta.go.id."
            />
          </div>
          <div ref={addToRefs}>
            <Content 
            date="15 March 2020"
            title="Modification of Jakarta Public Transportation Services" 
            desc="Jakarta as the economic center of Indonesia attracts large numbers of workers from satellite cities. Therefore, to prevent transmission in tight public spaces such as the inside of buses and trains, the Government of Jakarta has modified its public transportation services, including MRT, LRT, and Transjakarta. Changes include limiting routes as well as passenger capacity to enable the application of social distancing rules."
            />
          </div>
          <div ref={addToRefs}>
            <Content 
            date="9 April 2020"
            title="First Period of Large-Scale Social Restriction (PSBB)" 
            desc="asdasdasdasdagsdgsdfg"
            />
          </div>
          <div ref={addToRefs}>
            <Content 
            date="30 April 2020"
            title="Government of Jakarta Launches Large-Scale Social Collaboration (KSBB)" 
            desc="During the holy month of Ramadan, the Government of Jakarta officially launches the Large-scale Social Collaboration (KSBB) program as a medium for residents to help others. In the KSBB, the government only acts as a liaison for people who want to give aid to vulnerable citizens affected by the coronavirus outbreak and certain other locations."
            />
          </div>
          <div ref={addToRefs}>
            <Content 
            date="5 May 2020"
            title="Government Collaborates with Citizens Through the JDCN" 
            desc="The spirit of cooperation which has become the culture of the people of Jakarta was revived when the COVID-19 pandemic hit the capital. The government also invites the participation of citizens through the Corona Response Collaboration program managed by the JDCN network. Here, residents can contribute as volunteers or provide the equipment needed by medical personnel to fight the coronavirus outbreak."
            />
          </div>
        </div>
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
      {/* <ColouredClouds
        backLight="#ff9aee"
        frontLight="#494b7f"
        ambientLight="#494b7f"
        smokeType="cloud"
      /> */}
    </motion.div>
  );
}
