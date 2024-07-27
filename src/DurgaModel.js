// src/DurgaModel.js
import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, TransformControls } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  const modelRef = useRef();

  return (
    <group ref={modelRef}>
      <primitive
        object={gltf.scene}
        scale={0.5} // Adjust the scale if necessary
        position={[0, -1, 0]} // Move the model down to the bottom
      />
      <TransformControls object={modelRef.current} mode="translate" />
    </group>
  );
};

const DurgaModel = () => {
  const modelUrl = '/models/DurgaModel.glb'; // Path relative to public directory

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model url={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
};

export default DurgaModel;
