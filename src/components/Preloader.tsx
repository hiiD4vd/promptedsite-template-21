import React from 'react';

/**
 * Preloader
 * Renders the circular canvas loader while 3D buffers, textures, and Rive modules load.
 * Automatically dismissed by the engine once asset readiness is reached.
 */
export const Preloader: React.FC = () => {
  return (
    <div id="preloader" aria-live="polite">
      <canvas id="preloader-canvas" />
    </div>
  );
};
