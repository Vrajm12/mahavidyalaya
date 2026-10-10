import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Atom, Sparkles } from "lucide-react";

interface ScienceCanvas3DProps {
  className?: string;
  interactive?: boolean;
}

export function ScienceCanvas3D({ className = "", interactive = true }: ScienceCanvas3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
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
    scene.fog = new THREE.FogExp2(0x030712, 0.04);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0.6, 2.0, 5.6);
    camera.lookAt(0, 0.2, 0);

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
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. LIGHTING (Laser spectroscopy / Quantum Luminescence)
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.2);
    scene.add(ambientLight);

    // Electric Cyan Primary Light
    const cyanLight = new THREE.PointLight(0x06b6d4, 4.2, 14);
    cyanLight.position.set(3.2, 4.0, 3.0);
    cyanLight.castShadow = true;
    scene.add(cyanLight);

    // Ultraviolet Deep Rim Light
    const uvLight = new THREE.PointLight(0x8b5cf6, 4.0, 12);
    uvLight.position.set(-3.5, 1.8, -2.5);
    scene.add(uvLight);

    // Pulsing Nucleus Light
    const coreLight = new THREE.PointLight(0x38bdf8, 2.5, 6);
    coreLight.position.set(0, 0.4, 0);
    scene.add(coreLight);

    // 4. OBJECT GROUP
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- LABORATORY OPTICAL BENCH SURFACE ---
    const benchGeo = new THREE.PlaneGeometry(18, 18);
    const benchMat = new THREE.MeshStandardMaterial({
      color: 0x050b14,
      roughness: 0.8,
      metalness: 0.2,
    });
    const bench = new THREE.Mesh(benchGeo, benchMat);
    bench.rotation.x = -Math.PI / 2;
    bench.position.y = -0.65;
    bench.receiveShadow = true;
    masterGroup.add(bench);

    // Subtle laser optical grid lines
    const laserGrid = new THREE.GridHelper(16, 32, 0x0ea5e9, 0x1e1b4b);
    laserGrid.position.y = -0.64;
    masterGroup.add(laserGrid);

    // --- 1. QUANTUM ATOMIC ORBITAL SYSTEM ---
    const atomGroup = new THREE.Group();
    atomGroup.position.set(-0.2, 0.45, 0.2);
    masterGroup.add(atomGroup);

    // Multi-Sphere Nucleus Cluster (Protons & Neutrons)
    const nucleusGroup = new THREE.Group();
    atomGroup.add(nucleusGroup);

    const protonMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });

    const neutronMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x6d28d9,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });

    // Generate tightly clustered nucleons
    const nucleonCount = 14;
    const nucleonSpheres: THREE.Mesh[] = [];
    for (let i = 0; i < nucleonCount; i++) {
      const radius = 0.085;
      const geo = new THREE.SphereGeometry(radius, 20, 20);
      const isProton = i % 2 === 0;
      const sphere = new THREE.Mesh(geo, isProton ? protonMat : neutronMat);

      const phi = Math.acos(-1 + (2 * i) / nucleonCount);
      const theta = Math.sqrt(nucleonCount * Math.PI) * phi;
      const dist = 0.16;
      sphere.position.set(
        dist * Math.cos(theta) * Math.sin(phi),
        dist * Math.sin(theta) * Math.sin(phi),
        dist * Math.cos(phi)
      );
      sphere.castShadow = true;
      nucleusGroup.add(sphere);
      nucleonSpheres.push(sphere);
    }

    // Elliptical Bohr Orbital Rings with Orbiting Electrons
    const orbitalPlanes: {
      group: THREE.Group;
      electron: THREE.Mesh;
      radiusX: number;
      radiusY: number;
      speed: number;
      angle: number;
    }[] = [];

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });

    const electronMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x38bdf8,
      emissiveIntensity: 1.5,
      roughness: 0.1,
    });

    const orbitalConfigs = [
      { rx: 1.5, ry: 1.1, rotX: 1.1, rotY: 0.2, rotZ: 0.4, speed: 1.8 },
      { rx: 1.7, ry: 1.25, rotX: -0.8, rotY: 0.9, rotZ: -0.6, speed: 2.2 },
      { rx: 1.9, ry: 1.4, rotX: 0.3, rotY: -1.2, rotZ: 0.9, speed: 1.5 },
    ];

    orbitalConfigs.forEach((cfg) => {
      const orbGroup = new THREE.Group();
      orbGroup.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
      atomGroup.add(orbGroup);

      // Orbital Path Torus/Ring
      const pathCurve = new THREE.EllipseCurve(0, 0, cfg.rx, cfg.ry, 0, 2 * Math.PI, false, 0);
      const points = pathCurve.getPoints(64);
      const ringGeo = new THREE.BufferGeometry().setFromPoints(points);
      const ringLine = new THREE.LineLoop(ringGeo, ringMat);
      orbGroup.add(ringLine);

      // Glowing Electron Particle
      const electronGeo = new THREE.SphereGeometry(0.065, 16, 16);
      const electronMesh = new THREE.Mesh(electronGeo, electronMat);
      orbGroup.add(electronMesh);

      orbitalPlanes.push({
        group: orbGroup,
        electron: electronMesh,
        radiusX: cfg.rx,
        radiusY: cfg.ry,
        speed: cfg.speed,
        angle: Math.random() * Math.PI * 2,
      });
    });

    // --- 2. MOLECULAR CRYSTAL LATTICE ---
    const latticeGroup = new THREE.Group();
    latticeGroup.position.set(-1.8, 0.8, -0.6);
    latticeGroup.scale.set(0.7, 0.7, 0.7);
    masterGroup.add(latticeGroup);

    const latticeAtomMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.4,
      metalness: 0.85,
      roughness: 0.2,
    });

    const bondMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.3,
    });

    // Create an Icosahedron-based Fullerene/Carbon Nano Cluster
    const icoGeo = new THREE.IcosahedronGeometry(1.0, 0);
    const icoVertices = icoGeo.attributes.position;
    const vertexMap: THREE.Vector3[] = [];

    for (let v = 0; v < icoVertices.count; v++) {
      const vec = new THREE.Vector3(
        icoVertices.getX(v),
        icoVertices.getY(v),
        icoVertices.getZ(v)
      );
      // Avoid duplicates
      if (!vertexMap.some((existing) => existing.distanceTo(vec) < 0.05)) {
        vertexMap.push(vec);
        const atomMesh = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), latticeAtomMat);
        atomMesh.position.copy(vec);
        atomMesh.castShadow = true;
        latticeGroup.add(atomMesh);
      }
    }

    // Connect vertices with chemical bond cylinders
    for (let a = 0; a < vertexMap.length; a++) {
      for (let b = a + 1; b < vertexMap.length; b++) {
        const dist = vertexMap[a].distanceTo(vertexMap[b]);
        if (dist > 0.8 && dist < 1.25) {
          const midPoint = new THREE.Vector3().addVectors(vertexMap[a], vertexMap[b]).multiplyScalar(0.5);
          const bondGeo = new THREE.CylinderGeometry(0.02, 0.02, dist, 8);
          const bondMesh = new THREE.Mesh(bondGeo, bondMat);
          bondMesh.position.copy(midPoint);
          bondMesh.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3().subVectors(vertexMap[b], vertexMap[a]).normalize()
          );
          bondMesh.castShadow = true;
          latticeGroup.add(bondMesh);
        }
      }
    }

    // --- 3. LABORATORY CONICAL FLASK WITH LUMINESCENT FLUID ---
    const flaskGroup = new THREE.Group();
    flaskGroup.position.set(1.9, -0.15, -0.2);
    flaskGroup.scale.set(0.9, 0.9, 0.9);
    masterGroup.add(flaskGroup);

    // Refractive Glass Material
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.88,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      ior: 1.52,
      thickness: 0.4,
      specularIntensity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });

    // Conical base of flask
    const flaskBaseGeo = new THREE.ConeGeometry(0.72, 1.1, 32, 1, true);
    const flaskBase = new THREE.Mesh(flaskBaseGeo, glassMat);
    flaskBase.position.y = 0.55;
    flaskBase.castShadow = true;
    flaskGroup.add(flaskBase);

    // Bottom plate
    const flaskBottom = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.04, 32), glassMat);
    flaskBottom.position.y = 0.02;
    flaskGroup.add(flaskBottom);

    // Flask Neck
    const flaskNeckGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.65, 32, 1, true);
    const flaskNeck = new THREE.Mesh(flaskNeckGeo, glassMat);
    flaskNeck.position.y = 1.25;
    flaskGroup.add(flaskNeck);

    // Lip Rim
    const flaskRim = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 12, 32), glassMat);
    flaskRim.rotation.x = Math.PI / 2;
    flaskRim.position.y = 1.58;
    flaskGroup.add(flaskRim);

    // Fluid inside flask (Bioluminescent turquoise solution)
    const fluidMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.7,
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.88,
    });
    const fluidGeo = new THREE.ConeGeometry(0.62, 0.7, 24);
    const fluidMesh = new THREE.Mesh(fluidGeo, fluidMat);
    fluidMesh.position.y = 0.35;
    flaskGroup.add(fluidMesh);

    // Ascending effervescent micro-bubbles inside fluid
    const bubbleCount = 28;
    const bubbleGeo = new THREE.SphereGeometry(0.025, 12, 12);
    const bubbleMat = new THREE.MeshStandardMaterial({
      color: 0xa5f3fc,
      emissive: 0x67e8f9,
      emissiveIntensity: 0.9,
      roughness: 0.1,
    });
    const bubbles: { mesh: THREE.Mesh; speed: number; startY: number }[] = [];

    for (let b = 0; b < bubbleCount; b++) {
      const bMesh = new THREE.Mesh(bubbleGeo, bubbleMat);
      bMesh.position.set(
        (Math.random() - 0.5) * 0.4,
        Math.random() * 0.55 + 0.1,
        (Math.random() - 0.5) * 0.4
      );
      flaskGroup.add(bMesh);
      bubbles.push({
        mesh: bMesh,
        speed: Math.random() * 0.008 + 0.004,
        startY: 0.1,
      });
    }

    // --- 4. QUANTUM SPECTRAL ENERGY PARTICLES ---
    const qCount = 160;
    const qGeo = new THREE.BufferGeometry();
    const qPos = new Float32Array(qCount * 3);
    const qSpeeds = new Float32Array(qCount);

    for (let q = 0; q < qCount; q++) {
      const idx = q * 3;
      qPos[idx] = (Math.random() - 0.5) * 7.5;
      qPos[idx + 1] = Math.random() * 4.0 - 0.5;
      qPos[idx + 2] = (Math.random() - 0.5) * 5.0;
      qSpeeds[q] = Math.random() * 0.01 + 0.004;
    }

    qGeo.setAttribute("position", new THREE.BufferAttribute(qPos, 3));
    const qMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const qSystem = new THREE.Points(qGeo, qMat);
    scene.add(qSystem);

    // 5. PARALLAX & TACTILE INTERACTIONS
    const targetRot = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRot.y = nx * 0.28;
      targetRot.x = -ny * 0.16;

      if (!hasInteracted) setHasInteracted(true);
    };

    const handleClick = () => {
      // Quantum excitation burst
      orbitalPlanes.forEach((orb) => {
        orb.speed *= 2.8;
      });
      // Nucleus light burst
      coreLight.intensity = 6.0;
      setTimeout(() => {
        coreLight.intensity = 2.5;
      }, 700);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleClick);

    // 6. ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Camera parallax interpolation
      currentRot.x += (targetRot.x - currentRot.x) * 0.05;
      currentRot.y += (targetRot.y - currentRot.y) * 0.05;
      masterGroup.rotation.y = currentRot.y;
      masterGroup.rotation.x = currentRot.x;

      if (isPlayingRef.current) {
        // Orbiting electrons
        orbitalPlanes.forEach((orb) => {
          orb.angle += orb.speed * 0.015;
          if (orb.speed > 2.5) orb.speed *= 0.98; // gentle decay from click burst
          orb.electron.position.x = Math.cos(orb.angle) * orb.radiusX;
          orb.electron.position.y = Math.sin(orb.angle) * orb.radiusY;
        });

        // Rotating nucleus cluster
        nucleusGroup.rotation.y = elapsedTime * 0.4;
        nucleusGroup.rotation.x = elapsedTime * 0.25;

        // Rotating fullerene molecular lattice
        latticeGroup.rotation.y = elapsedTime * 0.35;
        latticeGroup.rotation.x = elapsedTime * 0.2;
        latticeGroup.position.y = 0.8 + Math.sin(elapsedTime * 1.2) * 0.06;

        // Rising micro-bubbles in flask
        bubbles.forEach((b) => {
          b.mesh.position.y += b.speed;
          if (b.mesh.position.y > 0.65) {
            b.mesh.position.y = b.startY;
          }
        });

        // Core light subtle pulsation
        coreLight.intensity = 2.4 + Math.sin(elapsedTime * 4) * 0.4;

        // Quantum particles drift
        const posAttr = qGeo.attributes.position;
        for (let q = 0; q < qCount; q++) {
          let y = posAttr.getY(q) + qSpeeds[q];
          if (y > 3.8) y = -0.5;
          posAttr.setY(q, y);
        }
        qGeo.attributes.position.needsUpdate = true;
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
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
      aria-label="Interactive 3D Quantum Atom, Molecular Lattice and Scientific Lab Environment"
    >
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none transition-opacity duration-300 opacity-60 hover:opacity-100 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-cyan-500/20 text-[10px] text-cyan-200/80 font-mono">
        <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
        <span>Pivot view • Click to excite orbitals</span>
      </div>
    </div>
  );
}
