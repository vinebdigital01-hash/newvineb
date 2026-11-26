import React, { useRef, useMemo, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

// ============================================================================
// Types
// ============================================================================

export interface GlobeMarker {
  lat: number;
  lng: number;
  src?: string;
  label?: string;
  size?: number;
}

export interface Globe3DConfig {
  radius?: number;
  globeColor?: string;
  textureUrl?: string;
  bumpMapUrl?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  atmosphereBlur?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
  enableZoom?: boolean;
  enablePan?: boolean;
  minDistance?: number;
  maxDistance?: number;
  initialRotation?: { x: number; y: number };
  markerSize?: number;
  showWireframe?: boolean;
  wireframeColor?: string;
  ambientIntensity?: number;
  pointLightIntensity?: number;
  backgroundColor?: string | null;
}

interface Globe3DProps {
  markers?: GlobeMarker[];
  config?: Globe3DConfig;
  className?: string;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

// Reverting to the beautiful realistic earth map with matte lighting
const DEFAULT_EARTH_TEXTURE = "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg";
const DEFAULT_BUMP_TEXTURE = "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png";

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  // Standard spherical coordinates
  const theta = lng * (Math.PI / 180);

  const x = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.cos(theta);

  return new THREE.Vector3(x, y, z);
}

// ============================================================================
// Marker Component (Crisp HTML Pin with WebGL Raycasting)
// ============================================================================

interface MarkerProps {
  marker: GlobeMarker;
  radius: number;
  defaultSize: number;
  onClick?: (marker: GlobeMarker) => void;
  onHover?: (marker: GlobeMarker | null) => void;
}

function Marker({ marker, radius, defaultSize, onClick, onHover }: MarkerProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(true);
  const { camera } = useThree();
  const worldPos = useMemo(() => new THREE.Vector3(), []);
  const markerDir = useMemo(() => new THREE.Vector3(), []);
  const cameraDir = useMemo(() => new THREE.Vector3(), []);

  const surfacePosition = useMemo(() => {
    return latLngToVector3(marker.lat, marker.lng, radius);
  }, [marker.lat, marker.lng, radius]);

  useFrame(() => {
    if (!groupRef.current || !pinRef.current) return;
    groupRef.current.getWorldPosition(worldPos);
    markerDir.copy(worldPos).normalize();
    cameraDir.copy(camera.position).normalize();
    const nextVisible = markerDir.dot(cameraDir) > 0.1;
    if (nextVisible !== visibleRef.current) {
      visibleRef.current = nextVisible;
      pinRef.current.style.opacity = nextVisible ? "1" : "0";
      pinRef.current.style.pointerEvents = nextVisible ? "auto" : "none";
    }
  });

  const handlePointerEnter = useCallback((e: any) => {
    if (!visibleRef.current) return;
    e.stopPropagation();
    document.body.style.cursor = "pointer";
    setHovered(true);
    onHover?.(marker);
  }, [marker, onHover]);

  const handlePointerLeave = useCallback((e: any) => {
    e.stopPropagation();
    document.body.style.cursor = "auto";
    setHovered(false);
    onHover?.(null);
  }, [onHover]);

  const handleClick = useCallback((e: any) => {
    if (!visibleRef.current) return;
    e.stopPropagation();
    onClick?.(marker);
  }, [marker, onClick]);

  return (
    <group ref={groupRef} position={surfacePosition}>
      <Html center zIndexRange={[100, 0]}>
        <div
          ref={pinRef}
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full border transition-[transform,background-color,border-color,box-shadow] duration-300 cursor-pointer",
            hovered
              ? "bg-blue-500/30 border-blue-400 scale-125 shadow-[0_0_15px_rgba(96,165,250,0.6)]"
              : "bg-slate-900/60 border-slate-500/50"
          )}
          style={{ opacity: 1, pointerEvents: "auto" }}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onClick={handleClick}
        >
          <MapPin
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              hovered ? "text-blue-300" : "text-slate-300"
            )}
          />
        </div>
      </Html>
    </group>
  );
}

// ============================================================================
// Rotating Globe
// ============================================================================

interface RotatingGlobeProps {
  config: Required<Globe3DConfig>;
  markers: GlobeMarker[];
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function RotatingGlobe({ config, markers, onMarkerClick, onMarkerHover }: RotatingGlobeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [earthTexture, bumpTexture] = useTexture([config.textureUrl, config.bumpMapUrl]);

  useMemo(() => {
    if (earthTexture) {
      earthTexture.colorSpace = THREE.SRGBColorSpace;
      earthTexture.anisotropy = 16;
    }
    if (bumpTexture) {
      bumpTexture.anisotropy = 8;
    }
  }, [earthTexture, bumpTexture]);

  const geometry = useMemo(() => new THREE.SphereGeometry(config.radius, 48, 48), [config.radius]);

  return (
    <group ref={groupRef}>
      {/* Rotate the mesh to align the Earth texture's Prime Meridian with standard spherical coordinates */}
      <mesh geometry={geometry} rotation={[0, -Math.PI / 2, 0]}>
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={config.bumpScale * 0.05}
          roughness={1.0} // Fully matte to prevent harsh white glaring highlights
          metalness={0.0} // No metallic reflection
          color="#ffffff"
        />
      </mesh>

      {markers.map((marker, index) => (
        <Marker
          key={`marker-${index}-${marker.lat}-${marker.lng}`}
          marker={marker}
          radius={config.radius}
          defaultSize={config.markerSize}
          onClick={onMarkerClick}
          onHover={onMarkerHover}
        />
      ))}
    </group>
  );
}

// ============================================================================
// Atmosphere
// ============================================================================

interface AtmosphereProps {
  radius: number;
  color: string;
  intensity: number;
  blur: number;
}

function Atmosphere({ radius, color, intensity, blur }: AtmosphereProps) {
  const fresnelPower = Math.max(0.5, 5 - blur);
  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        atmosphereColor: { value: new THREE.Color(color) },
        intensity: { value: intensity },
        fresnelPower: { value: fresnelPower },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 atmosphereColor;
        uniform float intensity;
        uniform float fresnelPower;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, normalize(-vPosition))), fresnelPower);
          gl_FragColor = vec4(atmosphereColor, fresnel * intensity);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
  }, [color, intensity, fresnelPower]);

  return (
    <mesh scale={[1.15, 1.15, 1.15]}>
      <sphereGeometry args={[radius, 64, 32]} />
      <primitive object={atmosphereMaterial} attach="material" />
    </mesh>
  );
}

// ============================================================================
// Scene Component
// ============================================================================

interface SceneProps {
  markers: GlobeMarker[];
  config: Required<Globe3DConfig>;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function Scene({ markers, config, onMarkerClick, onMarkerHover }: SceneProps) {
  const { camera } = useThree();

  React.useEffect(() => {
    camera.position.set(0, 0, config.radius * 3.5);
    camera.lookAt(0, 0, 0);
  }, [camera, config.radius]);

  return (
    <>
      <ambientLight intensity={config.ambientIntensity} />
      <directionalLight
        position={[config.radius * 5, config.radius * 2, config.radius * 5]}
        intensity={config.pointLightIntensity}
        color="#ffffff"
      />
      <directionalLight
        position={[-config.radius * 3, config.radius, -config.radius * 2]}
        intensity={config.pointLightIntensity * 0.5}
        color="#3b82f6"
      />

      <RotatingGlobe
        config={config}
        markers={markers}
        onMarkerClick={onMarkerClick}
        onMarkerHover={onMarkerHover}
      />

      {config.showAtmosphere && (
        <Atmosphere
          radius={config.radius}
          color={config.atmosphereColor}
          intensity={config.atmosphereIntensity}
          blur={config.atmosphereBlur}
        />
      )}

      <OrbitControls
        makeDefault
        enablePan={config.enablePan}
        enableZoom={config.enableZoom}
        minDistance={config.minDistance}
        maxDistance={config.maxDistance}
        rotateSpeed={0.4}
        autoRotate={config.autoRotateSpeed > 0}
        autoRotateSpeed={config.autoRotateSpeed}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  );
}

// ============================================================================
// Loading Fallback
// ============================================================================

function LoadingFallback() {
  return (
    <Html center>
      <div className="flex shrink-0 flex-col items-center gap-3">
        <span className="inline-block shrink-0 text-sm text-slate-500 animate-pulse">
          Initializing Global Network...
        </span>
      </div>
    </Html>
  );
}

// ============================================================================
// Main Globe3D Component
// ============================================================================

const defaultConfig: Required<Globe3DConfig> = {
  radius: 2,
  globeColor: "#1a1a2e",
  textureUrl: DEFAULT_EARTH_TEXTURE,
  bumpMapUrl: DEFAULT_BUMP_TEXTURE,
  showAtmosphere: true,
  atmosphereColor: "#3b82f6",
  atmosphereIntensity: 0.3,
  atmosphereBlur: 3,
  bumpScale: 1,
  autoRotateSpeed: 0.3,
  enableZoom: false,
  enablePan: false,
  minDistance: 5,
  maxDistance: 15,
  initialRotation: { x: 0, y: 0 },
  markerSize: 0.06,
  showWireframe: false,
  wireframeColor: "#4a9eff",
  ambientIntensity: 1.2, // Increased significantly so the whole globe is visible
  pointLightIntensity: 0.8, // Reduced to prevent harsh shadows on the "dark side"
  backgroundColor: null,
};

export function Globe3D({
  markers = [],
  config = {},
  className,
  onMarkerClick,
  onMarkerHover,
}: Globe3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mergedConfig = useMemo(() => ({ ...defaultConfig, ...config }), [config]);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        if (visible) setHasMounted(true);
      },
      { rootMargin: "160px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative h-full w-full", className)}>
      {hasMounted && (
        <Canvas
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          dpr={[1, 1.5]}
          frameloop={isVisible ? "always" : "never"}
          camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, mergedConfig.radius * 3.5] }}
        >
          <Suspense fallback={<LoadingFallback />}>
            <Scene
              markers={markers}
              config={mergedConfig}
              onMarkerClick={onMarkerClick}
              onMarkerHover={onMarkerHover}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export default Globe3D;
