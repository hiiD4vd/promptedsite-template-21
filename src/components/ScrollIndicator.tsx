import React from 'react';

/**
 * ScrollIndicator
 * Fixed vertical progress bar tracking page depth,
 * complete with moving dot and "PROMPTED-1 MODEL" telemetry label.
 */
export const ScrollIndicator: React.FC = () => {
  return (
    <div id="scroll-indicator" aria-hidden="true">
      <div id="scroll-indicator__bar" className="prevent-select">
        <div id="scroll-indicator__bar-inner">
          <div id="scroll-indicator__bar-dot" />
          <div id="scroll-indicator__bar-text">PROMPTED-1 MODEL</div>
        </div>
      </div>
    </div>
  );
};
