import React, { useRef, useEffect, Suspense } from 'react';

import virus_object from '../assets/model/model.glb';
import { Vector3 } from 'three';
import {
  SpotLight,
  // useDepthBuffer,
  useGLTF,
  useAnimations,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

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
  const { nodes, materials, animations } = useGLTF(virus_object);
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.virusAction.play();
  });
  useFrame(() => (group.current.rotation.y += 0.0008));
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        position={[props.x, props.y, props.z]}
        castShadow
        receiveShadow
        geometry={nodes.Virus.geometry}
        material={materials['Material.001']}
      />

      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2} />
    </group>
  );
}

function Scene(props) {
  return (
    <>
      <Suspense fallback={null}>
        <Virus x={props.x} y={props.y} z={props.z} />
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

export default function CovidObject(props) {
  return (
    <div className="h-screen w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Canvas camera={{ position: [0, 0, 3], fov: 55, near: 1, far: 20 }}>
        {/* <HTMLContent /> */}
        <Scene x={props.x} y={props.y} z={props.z} />
        {/* <Card /> */}
      </Canvas>
    </div>
  );
}
