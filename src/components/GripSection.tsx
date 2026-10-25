import React from 'react';

/**
 * GripSection
 * Demonstrates the micro-textured cork friction properties with an interactive
 * magnification zoom box, friction coefficient readout, and arc steering guide.
 */
export const GripSection: React.FC = () => {
  return (
    <div id="grip" className="section">
      <div className="section__inner o-container">
        {/* Header */}
        <div id="grip-header">
          <div id="grip-tagline" className="sub1">
            Precision Grip, Zero Drama
          </div>
          <h2 id="grip-title">
            Grip-locked Antislip<br />
            technology
          </h2>
          <div id="grip-desc" className="body2">
            Micro-textured cork so grippy your drink files <br />
            a restraining order against gravity. Spills? <br />
            Consider them politely discouraged.
          </div>
        </div>

        {/* Magnification Zoom Box */}
        <div id="grip-zoom-box" className="sub2 prevent-select">
          <div id="grip-zoom-box__inner">
            <div id="grip-zoom-box__image" />
            <div id="grip-zoom-box__content">
              <div id="grip-zoom-box__content-bg" />
              <div id="grip-zoom-box__content-label">Friction coefficient (est):</div>
              <div id="grip-zoom-box__content-coeff">0.80</div>
            </div>
          </div>
        </div>

        {/* Steering Arc & Drag Guide */}
        <div id="grip-instruction">
          <svg id="grip-instruction-wheel" viewBox="0 0 100 15" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="0.25"
              d="M50,12.125c32,0,50,-8.5,50,-10"
              strokeDasharray="1 1"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="0.25"
              d="M50,12.125c-32,0,-50,-8.5,-50,-10"
              strokeDasharray="1 1"
            />
            <circle cx="50" cy="12.125" r="0.8" fill="currentColor" />
            <circle id="grip-instruction-wheel-circle" cx="50" cy="12.125" r="1.8" fill="currentColor" />
          </svg>
          <svg id="grip-instruction-icon" aria-hidden="true">
            <use href="#hand-tmpl" />
          </svg>
        </div>
      </div>
    </div>
  );
};
