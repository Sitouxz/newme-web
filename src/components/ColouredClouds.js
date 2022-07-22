import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Object3D } from 'three';
import cloudImg from './images/cloud.png';
import hazeImg from './images/haze.png';
import { useTextureLoader } from 'drei';
// import './ColouredClouds.css';

function Cloud(props) {
  const tempObject = useMemo(() => new Object3D(), []);
  const ref = useRef();

  let textureType = cloudImg;
  if (props.smokeType === 'haze') {
    textureType = hazeImg;
  }

  const texture = useTextureLoader(textureType);

  console.log(texture);

  const particles = useMemo(() => {
    const cloudParticles = [];
    for (let p = 0; p < 50; p++) {
      const positionX = Math.random() * 800 - 400;
      const positionZ = Math.random() * 500 - 500;
      const rotationZ = Math.random() * 2 * Math.PI;

      cloudParticles.push({
        positionX,
        positionZ,
        rotationZ,
      });
    }
    return cloudParticles;
  }, []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { positionX, positionZ, rotationZ } = particle;
      tempObject.position.set(positionX, 0, positionZ);
      tempObject.rotation.set(0, 0, rotationZ);
      tempObject.updateMatrix();
      ref.current.setMatrixAt(i, tempObject.matrix);
    });
    particles.forEach((particle) => (particle.rotationZ -= 0.0002));
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null, null, 40]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshLambertMaterial
        attach="material"
        map={texture}
        depthWrite={false}
        transparent
        opacity={0.55}
      />
    </instancedMesh>
  );
}

function ColouredClouds(props) {
  return (
    <>
      <Canvas camera={{ fov: 60, position: [0, 0, 250], far: 6000 }}>
        {/* Back light */}
        <pointLight
          color={props.backLight}
          intensity={30}
          position={[100, 0, 200]}
          distance={500}
          decay={1.5}
        />

        {/* Front light */}
        <pointLight
          color={props.frontLight}
          intensity={30}
          position={[-100, 0, -100]}
          distance={500}
          decay={1.5}
        />

        {/* Ambient light */}
        <ambientLight color={props.ambientLight} intensity={0.5} />

        <Suspense fallback={null}>
          <Cloud {...props} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default ColouredClouds;
