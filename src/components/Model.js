import React, { useRef, useEffect, Suspense } from 'react';
// import virus_object from '../assets/model/model.glb';
import { Vector3 } from 'three';
import {
  SpotLight,
  useGLTF,
  useAnimations,
  PresentationControls,
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
  const { nodes, materials, animations } = useGLTF('./model.glb');
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
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
          <Virus x={props.x} y={props.y} z={props.z} />
        </PresentationControls>
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

export function Corona(props) {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 55, near: 1, far: 20 }}>
      <Scene x={props.x} y={props.y} z={props.z} />
    </Canvas>
  );
}
