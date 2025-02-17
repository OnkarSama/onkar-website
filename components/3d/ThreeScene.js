'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const CoolThreeJSScene = () => {
  const mountRef = useRef(null);
  let scene, camera, renderer, orbitControls;
  let torus, spheres = [];
  let particleSystem, helloWorldText;
  let clock = new THREE.Clock();

  useEffect(() => {
    init();
    return () => {
      cleanup();
    };
  }, []);

  const init = () => {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 5);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // OrbitControls setup
    orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.dampingFactor = 0.25;
    orbitControls.screenSpacePanning = false;

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Ambient light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 10, 0);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    // Torus Geometry
    const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xFF6347, emissive: 0xFF6347, emissiveIntensity: 0.8 });
    torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    // Glowing spheres
    for (let i = 0; i < 5; i++) {
      const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const sphereMaterial = new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff, emissive: Math.random() * 0xffffff, emissiveIntensity: 0.5 });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(Math.random() * 4 - 2, Math.random() * 2 + 1, Math.random() * 4 - 2);
      scene.add(sphere);
      spheres.push(sphere);
    }

    // Particle system
    const particlesCount = 5000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({ color: 0x8B5CF6, size: 0.1, blending: THREE.AdditiveBlending, transparent: true });
    
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = Math.random() * 10 - 5;
      positions[i * 3 + 1] = Math.random() * 10 - 5;
      positions[i * 3 + 2] = Math.random() * 10 - 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Add 3D "Hello World" text
    const fontLoader = new FontLoader();
    fontLoader.load('/droid_sans_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('Hello World!', {
        font: font,
        size: 1,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelOffset: 0,
        bevelSegments: 5
      });

      const textMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00, emissiveIntensity: 0.5 });
      helloWorldText = new THREE.Mesh(textGeometry, textMaterial);
      helloWorldText.position.set(0, 2, 0); // Adjusted to center
      scene.add(helloWorldText);
    });

    // Resize handling
    window.addEventListener('resize', onWindowResize, false);

    // Start the animation loop
    animate();
  };

  const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the torus
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    // Update particle system position (simulate floating particles)
    particleSystem.rotation.y += 0.001;

    // Move spheres randomly to add more dynamics
    spheres.forEach(sphere => {
      sphere.position.x += (Math.random() - 0.5) * 0.05;
      sphere.position.y += (Math.random() - 0.5) * 0.05;
      sphere.position.z += (Math.random() - 0.5) * 0.05;
    });

    // Rotate the "Hello World" text for added effect
    if (helloWorldText) {
      helloWorldText.rotation.y += 0.01;
    }

    // Update the controls
    orbitControls.update();

    // Render the scene
    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const cleanup = () => {
    window.removeEventListener('resize', onWindowResize);
    if (mountRef.current) {
      mountRef.current.removeChild(renderer.domElement);
    }
  };

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
    />
  );
};

export default CoolThreeJSScene;
