import React from 'react';

/**
 * Canvas3D
 * Primary Three.js WebGL canvas element where the 3D coaster, hand physics,
 * shaders, and scroll-driven camera transformations are rendered.
 */
export const Canvas3D: React.FC = () => {
  return <canvas id="canvas" aria-label="3D Coaster Interactive Scene" />;
};
