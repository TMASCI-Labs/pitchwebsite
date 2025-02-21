// main.js

// Import the CSS file (ensure your bundler is configured to process CSS)
import './style.css';

// Import Three.js
import * as THREE from 'three';

// Create a new scene
const scene = new THREE.Scene();

// Set up a perspective camera with a 75° field of view,
// an aspect ratio based on the window dimensions, and near/far clipping planes.
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Select the canvas element from your HTML where the scene will be rendered
const canvas = document.querySelector('#bg');
if (!canvas) {
  throw new Error("Canvas element with id 'bg' not found. Please add <canvas id='bg'></canvas> to your HTML.");
}

// Create a WebGL renderer and attach it to the canvas element
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Set the renderer's pixel ratio and size to match the window dimensions
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Position the camera so it is set back on the Z-axis
camera.position.setZ(30);

// Render the scene from the perspective of the camera
renderer.render(scene, camera);
