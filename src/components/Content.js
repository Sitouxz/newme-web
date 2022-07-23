import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useFrame } from '@react-three/fiber'

// import lerp from "lerp";
// import state from "./state";
// import { useBlock } from "./blocks";

// function Card({ title, desc, addToRefs, index }) {
//   if (!title) {
//     title = 'UPDATE Covid-19 Indonesia';
//   }
//   if (!desc) {
//     desc =
//       'Melansir data Satgas Covid-19, hingga Kamis (21/7) ada tambahan 5.410 kasus baru corona. Sehingga total menjadi 6.154.494 kasus positif Corona.';
//   }

//   return (
//     <div
//       // ref={addToRefs}
//       className="flex flex-row items-center bg-white rounded-lg border shadow-md h-80 w-96">
//       <div>
//         <img
//           className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
//           src="https://wonogirikab.go.id/wp-content/uploads/2020/09/Peduli.png"
//           alt=""
//         />
//       </div>
//       <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
//           {title}
//         </h5>
//         <p className="mb-3 font-normal text-gray-700 ">{desc}</p>
//       </div>
//     </div>
//   );
// }

function Content({date,title,desc}) {
  return (
    <div
      className="flex justify-center items-center flex-col gap-10 overflow-hidden"
      // style={{ top: '50%' }}
    >
      {/* {[...Array(10)].map((_, index) => ( */}
      <div
        // key={index}
        className="relative rounded-[50px] border-[6px] border-white flex h-[35vh] w-[80vh] bg-[url('https://img.beritasatu.com/cache/beritasatu/910x580-2/1629780150.jpg')] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full rounded-[50px] bg-gradient-to-t from-black to-transparent z-0"></div>
        <div className="flex flex-col justify-end p-4 leading-normal z-10">
          <h5 className="text-lg tracking-tight text-white">{date}</h5> 
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-white ">
            {desc}
          </p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Content;
