import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TrendingUp, Sparkles } from "lucide-react";

interface CommerceCanvas3DProps {
  className?: string;
  interactive?: boolean;
}

export function CommerceCanvas3D({ className = "", interactive = true }: CommerceCanvas3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isPlayingRef = useRef(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      isPlayingRef.current = false;
    }

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040d14, 0.045);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0.8, 2.4, 5.6);
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
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 3. LIGHTING (Architectural Fintech / Executive Ambiance)
    const ambientLight = new THREE.AmbientLight(0xdcfce7, 1.2);
    scene.add(ambientLight);

    // Primary cool emerald key light
    const emeraldKeyLight = new THREE.DirectionalLight(0x34d399, 2.8);
    emeraldKeyLight.position.set(4, 6, 3);
    emeraldKeyLight.castShadow = true;
    emeraldKeyLight.shadow.mapSize.width = 1024;
    emeraldKeyLight.shadow.mapSize.height = 1024;
    scene.add(emeraldKeyLight);

    // Warm champagne gold rim light
    const goldRimLight = new THREE.PointLight(0xf59e0b, 3.2, 12);
    goldRimLight.position.set(-3.5, 2.5, -2);
    scene.add(goldRimLight);

    // Deep cyan architectural fill
    const fillLight = new THREE.PointLight(0x06b6d4, 1.8, 10);
    fillLight.position.set(2, -1, 2);
    scene.add(fillLight);

    // 4. OBJECT GROUP
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Architectural Ground Grid Surface
    const gridGeo = new THREE.PlaneGeometry(18, 18, 36, 36);
    const gridMat = new THREE.MeshStandardMaterial({
      color: 0x05131e,
      roughness: 0.7,
      metalness: 0.3,
      wireframe: false,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    gridMesh.rotation.x = -Math.PI / 2;
    gridMesh.position.y = -0.6;
    gridMesh.receiveShadow = true;
    masterGroup.add(gridMesh);

    // Subtle holographic wire grid overlay
    const wireGeo = new THREE.GridHelper(16, 32, 0x10b981, 0x064e3b);
    wireGeo.position.y = -0.59;
    masterGroup.add(wireGeo);

    // --- PROCEDURAL 3D CANDLESTICK & ECONOMIC DATA TOWERS ---
    const towerGroup = new THREE.Group();
    masterGroup.add(towerGroup);

    const towers: {
      mesh: THREE.Mesh;
      baseHeight: number;
      targetHeight: number;
      speed: number;
      wick: THREE.Mesh;
    }[] = [];

    const towerCount = 7;
    const baseTowerData = [
      { x: -2.0, z: -0.2, h: 1.1, bull: true },
      { x: -1.3, z: 0.3, h: 0.8, bull: false },
      { x: -0.6, z: -0.1, h: 1.5, bull: true },
      { x: 0.1, z: 0.2, h: 1.9, bull: true },
      { x: 0.8, z: -0.3, h: 1.4, bull: false },
      { x: 1.5, z: 0.1, h: 2.3, bull: true },
      { x: 2.2, z: -0.1, h: 2.8, bull: true },
    ];

    baseTowerData.forEach((td, i) => {
      const isBull = td.bull;
      const color = isBull ? 0x10b981 : 0xe11d48;
      const emissive = isBull ? 0x047857 : 0x9f1239;

      const towerMat = new THREE.MeshPhysicalMaterial({
        color,
        emissive,
        emissiveIntensity: 0.25,
        roughness: 0.2,
        metalness: 0.8,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      });

      const towerGeo = new THREE.BoxGeometry(0.38, td.h, 0.38);
      const towerMesh = new THREE.Mesh(towerGeo, towerMat);
      towerMesh.position.set(td.x, td.h / 2 - 0.58, td.z);
      towerMesh.castShadow = true;
      towerMesh.receiveShadow = true;
      towerGroup.add(towerMesh);

      // Candlestick Wick (High/Low needle)
      const wickMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        metalness: 0.9,
        roughness: 0.2,
      });
      const wickGeo = new THREE.CylinderGeometry(0.015, 0.015, td.h * 1.5, 8);
      const wickMesh = new THREE.Mesh(wickGeo, wickMat);
      wickMesh.position.set(td.x, td.h / 2 - 0.58, td.z);
      wickMesh.castShadow = true;
      towerGroup.add(wickMesh);

      towers.push({
        mesh: towerMesh,
        baseHeight: td.h,
        targetHeight: td.h,
        speed: 1.2 + i * 0.2,
        wick: wickMesh,
      });
    });

    // --- REVOLVING GOLDEN MINTED COINS ---
    const coinGroup = new THREE.Group();
    masterGroup.add(coinGroup);

    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.92,
      roughness: 0.22,
    });

    const coinRimMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.95,
      roughness: 0.15,
    });

    const coins: { group: THREE.Group; rotSpeed: number; bobSpeed: number; initialY: number }[] = [];

    const coinCoords = [
      { x: -1.7, y: 1.5, z: 0.6, scale: 0.45 },
      { x: 0.2, y: 2.1, z: -0.8, scale: 0.6 },
      { x: 1.9, y: 1.8, z: 0.8, scale: 0.5 },
    ];

    coinCoords.forEach((cc, i) => {
      const singleCoin = new THREE.Group();
      singleCoin.position.set(cc.x, cc.y, cc.z);
      singleCoin.scale.set(cc.scale, cc.scale, cc.scale);

      // Main Coin Cylinder
      const coinGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.09, 32);
      const coinMesh = new THREE.Mesh(coinGeo, coinMat);
      coinMesh.rotation.x = Math.PI / 2;
      coinMesh.castShadow = true;
      singleCoin.add(coinMesh);

      // Milled Outer Rim
      const rimGeo = new THREE.TorusGeometry(0.55, 0.03, 12, 32);
      const rimMesh = new THREE.Mesh(rimGeo, coinRimMat);
      singleCoin.add(rimMesh);

      // Inner embossed symbol ring
      const innerRingGeo = new THREE.TorusGeometry(0.38, 0.02, 10, 24);
      const innerRing = new THREE.Mesh(innerRingGeo, coinRimMat);
      singleCoin.add(innerRing);

      coinGroup.add(singleCoin);
      coins.push({
        group: singleCoin,
        rotSpeed: 0.6 + i * 0.25,
        bobSpeed: 1.0 + i * 0.3,
        initialY: cc.y,
      });
    });

    // --- TRANSLUCENT FROSTED DIGITAL LEDGER SLABS ---
    const ledgerGroup = new THREE.Group();
    ledgerGroup.position.set(-0.2, 0.7, -0.6);
    ledgerGroup.rotation.y = 0.25;
    masterGroup.add(ledgerGroup);

    const glassLedgerMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.75,
      opacity: 1,
      transparent: true,
      roughness: 0.18,
      ior: 1.5,
      thickness: 0.3,
      specularIntensity: 0.9,
    });

    const ledgerSlab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.5, 0.06), glassLedgerMat);
    ledgerSlab.castShadow = true;
    ledgerGroup.add(ledgerSlab);

    // Decorative Golden Framing Rails on ledger
    const railMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.85,
      roughness: 0.25,
    });
    const topRail = new THREE.Mesh(new THREE.BoxGeometry(2.44, 0.03, 0.08), railMat);
    topRail.position.y = 0.75;
    ledgerGroup.add(topRail);

    const bottomRail = new THREE.Mesh(new THREE.BoxGeometry(2.44, 0.03, 0.08), railMat);
    bottomRail.position.y = -0.75;
    ledgerGroup.add(bottomRail);

    // --- CONTINUOUS MARKET TRAJECTORY VECTOR CURVE ---
    const curvePoints = [
      new THREE.Vector3(-2.2, -0.1, 0.2),
      new THREE.Vector3(-1.4, 0.3, 0.5),
      new THREE.Vector3(-0.5, 0.8, 0.1),
      new THREE.Vector3(0.3, 1.2, 0.4),
      new THREE.Vector3(1.2, 1.5, 0.0),
      new THREE.Vector3(2.1, 2.3, 0.2),
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 48, 0.025, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      emissive: 0x10b981,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.5,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    masterGroup.add(tubeMesh);

    // Glowing Node Marker at top of trend curve
    const markerMat = new THREE.MeshStandardMaterial({
      color: 0xfcd34d,
      emissive: 0xf59e0b,
      emissiveIntensity: 1.0,
      roughness: 0.1,
    });
    const markerSphere = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), markerMat);
    markerSphere.position.copy(curvePoints[curvePoints.length - 1]);
    masterGroup.add(markerSphere);

    // --- FINANCIAL METRIC PARTICLES (Floating numerical data sparks) ---
    const dataParticleCount = 120;
    const dpGeo = new THREE.BufferGeometry();
    const dpPos = new Float32Array(dataParticleCount * 3);
    const dpSpeeds = new Float32Array(dataParticleCount);

    for (let p = 0; p < dataParticleCount; p++) {
      const idx = p * 3;
      dpPos[idx] = (Math.random() - 0.5) * 6.5;
      dpPos[idx + 1] = Math.random() * 3.5 - 0.3;
      dpPos[idx + 2] = (Math.random() - 0.5) * 4.5;
      dpSpeeds[p] = Math.random() * 0.008 + 0.003;
    }

    dpGeo.setAttribute("position", new THREE.BufferAttribute(dpPos, 3));
    const dpMat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const dpSystem = new THREE.Points(dpGeo, dpMat);
    scene.add(dpSystem);

    // 5. PARALLAX & INTERACTION
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
      // Economic surge pulse on towers
      towers.forEach((t) => {
        t.targetHeight = t.baseHeight + (Math.random() * 0.8 - 0.2);
      });
      // Coins spin surge
      coins.forEach((c) => {
        c.rotSpeed += 2.0;
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleClick);

    // 6. ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Damped camera tilt
      currentRot.x += (targetRot.x - currentRot.x) * 0.05;
      currentRot.y += (targetRot.y - currentRot.y) * 0.05;
      masterGroup.rotation.y = currentRot.y;
      masterGroup.rotation.x = currentRot.x;

      if (isPlayingRef.current) {
        // Revolving golden coins
        coins.forEach((c) => {
          c.group.rotation.y += c.rotSpeed * 0.02;
          // Damping any click surge
          if (c.rotSpeed > 1.2) c.rotSpeed *= 0.96;
          c.group.position.y = c.initialY + Math.sin(elapsedTime * c.bobSpeed) * 0.08;
        });

        // Floating glass ledger subtle breathing motion
        ledgerGroup.position.y = 0.7 + Math.sin(elapsedTime * 0.8) * 0.05;

        // Smooth tower fluctuation
        towers.forEach((t) => {
          const currentScaleY = t.mesh.scale.y;
          const targetScale = Math.sin(elapsedTime * t.speed) * 0.15 + 1.0;
          t.mesh.scale.y += (targetScale - currentScaleY) * 0.06;
          t.wick.scale.y = t.mesh.scale.y;
        });

        // Drift data particles
        const posAttr = dpGeo.attributes.position;
        for (let p = 0; p < dataParticleCount; p++) {
          let y = posAttr.getY(p) + dpSpeeds[p];
          if (y > 3.4) y = -0.4;
          posAttr.setY(p, y);
        }
        dpGeo.attributes.position.needsUpdate = true;
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
      aria-label="Interactive 3D Economic and Commerce Data Space"
    >
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none transition-opacity duration-300 opacity-60 hover:opacity-100 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-emerald-500/20 text-[10px] text-emerald-200/80 font-mono">
        <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
        <span>Pivot view • Click to surge market flow</span>
      </div>
    </div>
  );
}
