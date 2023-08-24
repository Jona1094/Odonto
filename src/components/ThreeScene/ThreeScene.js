import React, { useEffect } from 'react';
import * as THREE from 'three';

import dentaduraTexture from '../assets/dentadura.jpeg'; // Ruta a la imagen

const ThreeScene = () => {
    useEffect(() => {
        // Escena
        const scene = new THREE.Scene();

        // Cámara
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        // Renderizador
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Dentadura
        const dentadura = new THREE.Group();

        // Material de la textura
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(dentaduraTexture);
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Mandíbula superior
        const mandibulaSuperior = new THREE.Mesh(
            new THREE.BoxGeometry(5, 2, 3),
            material
        );
        mandibulaSuperior.position.set(0, 1, 0);
        dentadura.add(mandibulaSuperior);

        // Mandíbula inferior
        const mandibulaInferior = new THREE.Mesh(
            new THREE.BoxGeometry(5, 2, 3),
            material
        );
        mandibulaInferior.position.set(0, -1, 0);
        dentadura.add(mandibulaInferior);

        scene.add(dentadura);

        // Animación
        const animate = () => {
            requestAnimationFrame(animate);

            dentadura.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Limpieza
        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return null;
};

export default ThreeScene;
