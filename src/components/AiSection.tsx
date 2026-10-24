import React from 'react';

/**
 * AiSection
 * Showcases the PROMPTED-1 AI breakthrough narrative,
 * the interactive 3D 6-fingered hand hover zone, and satirical disclaimers.
 */
export const AiSection: React.FC = () => {
  return (
    <div id="ai" className="section">
      <div className="section__inner o-container">
        {/* Pre-headline */}
        <div id="ai-pre">
          <h2>
            isn’t just <br />
            a coaster.
          </h2>
          <div className="body1">
            <span>Prompted Site isn’t just a </span>
            <span>coaster. It’s the result </span>
            <span>of unprecedented AI* </span>
            <span>breakthroughs.</span>
          </div>
        </div>

        {/* Brand Headline & Model Title */}
        <div id="ai-header">
          <h1 id="ai-title">
            Prompted Site<sup>*</sup>
          </h1>
          <h4 id="ai-tagline">PROMPTED-1</h4>
        </div>

        {/* Hand Interaction Hover Guide */}
        <div id="ai-instruction" className="sub2 desktop-only">
          <svg id="ai-instruction-icon" aria-hidden="true">
            <use href="#hand-tmpl" />
          </svg>
          <div className="o-dashline" />
          <div id="ai-instruction-text">Try to hover hand</div>
        </div>

        {/* Narrative Description */}
        <div id="ai-desc" className="sub1">
          <span>AI fills in the gaps.</span>
          <span> We said high five.</span>
          <span> It heard six.</span>
        </div>

        {/* Disclaimer Footer */}
        <div id="ai-disclaimer-wrapper">
          <div className="o-dashline" />
          <div id="ai-disclaimer" className="sub2">
            <span>* Adobe</span>
            <span> Illustrator & Prompted AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};
