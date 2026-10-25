import { useEffect, useRef, useState } from 'react';

/**
 * useOryzoEngine
 * Custom React hook that mounts and connects the 3D WebGL coaster physics,
 * Three.js shaders, Rive WASM animations, and interactive scroll triggers
 * once all DOM component elements are fully mounted into the document.
 */
export const useOryzoEngine = () => {
  const [isReady, setIsReady] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Dynamically load the hoisted WebGL / Rive engine script once DOM is mounted
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/_astro/hoisted.CRsATKbF.js';
    script.async = true;

    script.onload = () => {
      setIsReady(true);
    };

    script.onerror = (e) => {
      console.error('[PROMPTED SITE Engine] Failed to load engine script:', e);
    };

    document.body.appendChild(script);

    return () => {
      // Optional cleanup if component unmounts
    };
  }, []);

  return { isReady };
};
