import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Eye, RotateCcw } from "lucide-react";

interface ArtsCanvas3DProps {
  className?: string;
  interactive?: boolean;
}

export function ArtsCanvas3D({ className = "", interactive = true }: ArtsCanvas3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isPlayingRef = useRef(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      isPlayingRef.current = false;
    }

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x130509, 0.05);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0.6, 2.2, 5.2);
    camera.lookAt(0, 0.1, 0);

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. LIGHTING (Chiaroscuro library lighting: warm candlelight, antique amber & deep crimson edge fill)
    const ambientLight = new THREE.AmbientLight(0xfff1e0, 1.4);
    scene.add(ambientLight);

    // Key candlelight
    const candleLight = new THREE.PointLight(0xffa143, 3.8, 14);
    candleLight.position.set(2.2, 2.8, 2.0);
    candleLight.castShadow = true;
    candleLight.shadow.mapSize.width = 1024;
    candleLight.shadow.mapSize.height = 1024;
    candleLight.shadow.bias = -0.001;
    scene.add(candleLight);

    // Secondary soft fill
    const fillLight = new THREE.DirectionalLight(0xffdfba, 1.2);
    fillLight.position.set(-3, 4, 3);
    scene.add(fillLight);

    // Dramatic crimson/rose rim light
    const rimLight = new THREE.PointLight(0xd946ef, 1.8, 10);
    rimLight.position.set(-2.5, -0.5, -2);
    scene.add(rimLight);

    // Gilded golden highlight
    const goldHighlight = new THREE.PointLight(0xfcd34d, 2.2, 6);
    goldHighlight.position.set(0, 1.2, 0.8);
    scene.add(goldHighlight);

    // 4. OBJECT GROUPS
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Base Study Desk Surface (Dark walnut polished grain)
    const deskGeo = new THREE.PlaneGeometry(16, 16);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x18090f,
      roughness: 0.65,
      metalness: 0.15,
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.rotation.x = -Math.PI / 2;
    desk.position.y = -0.52;
    desk.receiveShadow = true;
    masterGroup.add(desk);

    // --- PROCEDURAL OPEN MANUSCRIPT ---
    const bookGroup = new THREE.Group();
    bookGroup.position.set(0.1, -0.15, 0.2);
    bookGroup.rotation.y = -0.15;
    masterGroup.add(bookGroup);

    // Leather Book Spine & Covers
    const coverMat = new THREE.MeshStandardMaterial({
      color: 0x4a0e1c,
      roughness: 0.45,
      metalness: 0.25,
    });

    const goldLeafMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.3,
      metalness: 0.85,
    });

    // Left Cover
    const leftCover = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.04, 2.2), coverMat);
    leftCover.position.set(-0.84, -0.12, 0);
    leftCover.rotation.z = 0.08;
    leftCover.castShadow = true;
    leftCover.receiveShadow = true;
    bookGroup.add(leftCover);

    // Right Cover
    const rightCover = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.04, 2.2), coverMat);
    rightCover.position.set(0.84, -0.12, 0);
    rightCover.rotation.z = -0.08;
    rightCover.castShadow = true;
    rightCover.receiveShadow = true;
    bookGroup.add(rightCover);

    // Spine
    const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 16), coverMat);
    spine.rotation.x = Math.PI / 2;
    spine.position.set(0, -0.15, 0);
    bookGroup.add(spine);

    // Gold gilded rim trims on covers
    const leftTrim = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.045, 2.16), goldLeafMat);
    leftTrim.position.set(-1.64, -0.09, 0);
    leftTrim.rotation.z = 0.08;
    bookGroup.add(leftTrim);

    const rightTrim = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.045, 2.16), goldLeafMat);
    rightTrim.position.set(1.64, -0.09, 0);
    rightTrim.rotation.z = -0.08;
    bookGroup.add(rightTrim);

    // Parchment Pages Block Material
    const pageMat = new THREE.MeshStandardMaterial({
      color: 0xfbf6e8,
      roughness: 0.8,
      metalness: 0.02,
    });

    // Left stacked block
    const leftStack = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.16, 2.05), pageMat);
    leftStack.position.set(-0.76, -0.03, 0);
    leftStack.rotation.z = 0.06;
    leftStack.castShadow = true;
    leftStack.receiveShadow = true;
    bookGroup.add(leftStack);

    // Right stacked block
    const rightStack = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.16, 2.05), pageMat);
    rightStack.position.set(0.76, -0.03, 0);
    rightStack.rotation.z = -0.06;
    rightStack.castShadow = true;
    rightStack.receiveShadow = true;
    bookGroup.add(rightStack);

    // Animated Fluttering Open Page Sheets (Curved Bezier meshes)
    const flutteringLeaves: { mesh: THREE.Mesh; baseAngle: number; speed: number; amp: number }[] = [];
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0xfffaed,
      roughness: 0.75,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });

    // Create 4 slightly open pages on each side with subtle curve
    for (let i = 0; i < 4; i++) {
      const pageGeo = new THREE.PlaneGeometry(1.48, 2.0, 12, 1);
      // Curve the geometry along X to simulate curled paper
      const pos = pageGeo.attributes.position;
      for (let j = 0; j < pos.count; j++) {
        const x = pos.getX(j);
        const curve = Math.sin((x / 1.48 + 0.5) * Math.PI) * 0.06;
        pos.setZ(j, curve);
      }
      pageGeo.computeVertexNormals();

      // Right turning page
      const leafMeshRight = new THREE.Mesh(pageGeo, leafMat);
      leafMeshRight.position.set(0.04, 0.06 + i * 0.015, 0);
      leafMeshRight.rotation.z = -0.04 - i * 0.06;
      leafMeshRight.castShadow = true;
      bookGroup.add(leafMeshRight);
      flutteringLeaves.push({
        mesh: leafMeshRight,
        baseAngle: leafMeshRight.rotation.z,
        speed: 1.2 + i * 0.4,
        amp: 0.02 + i * 0.012,
      });

      // Left turning page
      const leafMeshLeft = new THREE.Mesh(pageGeo, leafMat);
      leafMeshLeft.position.set(-0.04, 0.06 + i * 0.015, 0);
      leafMeshLeft.rotation.z = 0.04 + i * 0.06;
      leafMeshLeft.castShadow = true;
      bookGroup.add(leafMeshLeft);
      flutteringLeaves.push({
        mesh: leafMeshLeft,
        baseAngle: leafMeshLeft.rotation.z,
        speed: 1.0 + i * 0.35,
        amp: -0.02 - i * 0.012,
      });
    }

    // --- ANCIENT ROLLED SCROLL ---
    const scrollGroup = new THREE.Group();
    scrollGroup.position.set(-1.8, -0.32, -0.6);
    scrollGroup.rotation.y = 0.5;
    masterGroup.add(scrollGroup);

    const parchmentScrollMat = new THREE.MeshStandardMaterial({
      color: 0xecdcb9,
      roughness: 0.7,
      metalness: 0.05,
    });

    const scrollCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.8, 24), parchmentScrollMat);
    scrollCylinder.rotation.z = Math.PI / 2;
    scrollCylinder.castShadow = true;
    scrollGroup.add(scrollCylinder);

    // Wax seal ribbon around scroll
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b,
      roughness: 0.4,
      metalness: 0.2,
    });
    const ribbon = new THREE.Mesh(new THREE.CylinderGeometry(0.148, 0.148, 0.08, 24), ribbonMat);
    ribbon.rotation.z = Math.PI / 2;
    scrollGroup.add(ribbon);

    const waxSeal = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.03, 16), ribbonMat);
    waxSeal.position.set(0, 0.14, 0);
    scrollGroup.add(waxSeal);

    // --- ORNATE INKWELL & FEATHER QUILL ---
    const inkGroup = new THREE.Group();
    inkGroup.position.set(1.9, -0.32, -0.4);
    masterGroup.add(inkGroup);

    // Inkwell Body (Dark glazed ceramic/obsidian)
    const inkwellMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      roughness: 0.2,
      metalness: 0.8,
    });
    const inkwellBody = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.32, 24), inkwellMat);
    inkwellBody.castShadow = true;
    inkGroup.add(inkwellBody);

    const inkwellNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.14, 0.1, 24), inkwellMat);
    inkwellNeck.position.y = 0.2;
    inkGroup.add(inkwellNeck);

    const goldNeckBand = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.015, 12, 24), goldLeafMat);
    goldNeckBand.rotation.x = Math.PI / 2;
    goldNeckBand.position.y = 0.2;
    inkGroup.add(goldNeckBand);

    // Liquid ink inside
    const inkLiquidMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.05,
      metalness: 0.9,
    });
    const inkLiquid = new THREE.Mesh(new THREE.CircleGeometry(0.09, 16), inkLiquidMat);
    inkLiquid.rotation.x = -Math.PI / 2;
    inkLiquid.position.y = 0.23;
    inkGroup.add(inkLiquid);

    // Feather Quill
    const quillGroup = new THREE.Group();
    quillGroup.position.set(0, 0.22, 0);
    quillGroup.rotation.z = -0.35;
    quillGroup.rotation.x = 0.2;
    inkGroup.add(quillGroup);

    // Shaft
    const shaftMat = new THREE.MeshStandardMaterial({
      color: 0xf5eedb,
      roughness: 0.5,
      metalness: 0.1,
    });
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.02, 1.4, 12), shaftMat);
    shaft.position.y = 0.65;
    shaft.castShadow = true;
    quillGroup.add(shaft);

    // Nib (Gold tipped)
    const nib = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.08, 8), goldLeafMat);
    nib.rotation.x = Math.PI;
    nib.position.y = -0.02;
    quillGroup.add(nib);

    // Feather Vanes (Graceful curved leaf)
    const featherMat = new THREE.MeshStandardMaterial({
      color: 0xfdfbf7,
      roughness: 0.9,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });
    const featherGeo = new THREE.BufferGeometry();
    const featherVertices = new Float32Array([
      0, 0.3, 0,    0.14, 0.7, 0.04,   0, 0.8, 0,
      0, 0.8, 0,    0.16, 1.1, 0.03,   0, 1.25, 0,
      0, 0.3, 0,   -0.12, 0.7, -0.03,  0, 0.8, 0,
      0, 0.8, 0,   -0.14, 1.1, -0.02,  0, 1.25, 0,
    ]);
    featherGeo.setAttribute("position", new THREE.BufferAttribute(featherVertices, 3));
    featherGeo.computeVertexNormals();
    const featherMesh = new THREE.Mesh(featherGeo, featherMat);
    quillGroup.add(featherMesh);

    // --- GOLDEN LITERARY SCRIPT PARTICLES ---
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);

    for (let p = 0; p < particleCount; p++) {
      const idx = p * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 7.0;
      particlePositions[idx + 1] = Math.random() * 4.2 - 0.5;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 5.0;
      particleSizes[p] = Math.random() * 0.06 + 0.02;
      particleSpeeds[p] = Math.random() * 0.4 + 0.2;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xfcd34d,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 5. MOUSE & PARALLAX STATE
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };
    const mousePos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.x = nx;
      mousePos.y = ny;

      targetRotation.y = nx * 0.25;
      targetRotation.x = -ny * 0.15;

      if (!hasInteracted) setHasInteracted(true);
    };

    const handleClick = () => {
      // Gentle page flip impulse
      flutteringLeaves.forEach((leaf) => {
        leaf.mesh.rotation.z += (Math.random() - 0.5) * 0.15;
      });
      // Quill gentle tilt
      quillGroup.rotation.z += 0.08;
      setTimeout(() => {
        quillGroup.rotation.z = -0.35;
      }, 600);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleClick);

    // 6. ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      masterGroup.rotation.y = currentRotation.y;
      masterGroup.rotation.x = currentRotation.x;

      // Candlelight subtle flicker
      candleLight.intensity = 3.6 + Math.sin(elapsedTime * 6) * 0.25 + Math.cos(elapsedTime * 11) * 0.15;

      // Animated fluttering pages in ambient breeze
      if (isPlayingRef.current) {
        flutteringLeaves.forEach((leaf, idx) => {
          const wave = Math.sin(elapsedTime * leaf.speed + idx * 0.5) * leaf.amp;
          leaf.mesh.rotation.z = leaf.baseAngle + wave;
        });

        // Drift literary dust particles
        const posAttr = particleGeo.attributes.position;
        for (let p = 0; p < particleCount; p++) {
          const yIdx = p * 3 + 1;
          let y = posAttr.getY(p) - particleSpeeds[p] * 0.005;
          if (y < -0.6) y = 3.8;
          posAttr.setY(p, y);

          // Gentle lateral swirl
          const xIdx = p * 3;
          posAttr.setX(p, posAttr.getX(p) + Math.sin(elapsedTime + p) * 0.001);
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. RESIZE OBSERVER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [hasInteracted]);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
      aria-label="Interactive 3D Literary Manuscript and Artifacts"
    >
      {/* Subtle interaction cue in corner */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none transition-opacity duration-300 opacity-60 hover:opacity-100 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-amber-500/20 text-[10px] text-amber-200/80 font-mono">
        <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
        <span>Hover to pivot • Click to turn pages</span>
      </div>
    </div>
  );
}
