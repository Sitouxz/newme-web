import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function ModelComponent(props) {
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
