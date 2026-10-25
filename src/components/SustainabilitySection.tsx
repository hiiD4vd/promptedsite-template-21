import React from 'react';

/**
 * SustainabilitySection
 * Emphasizes eco-conscious plant-based cork materials with:
 * - 25 years average age of first harvest stat
 * - 9-year harvesting interval visualizer (#sustainability-rive-canvas-harvesting)
 * - Zero power draw zero compute gauge (#sustainability-rive-canvas-text)
 */
export const SustainabilitySection: React.FC = () => {
  return (
    <div id="sustainability" className="section">
      <div className="section__inner o-container">
        {/* Hero Tagline & Header */}
        <div id="sustainability-hero">
          <div id="sustainability-hero-inner">
            <div id="sustainability-tagline" className="sub2">
              100% Plant-based
            </div>
            <div id="sustainability-title">
              <h4 id="sustainability-title-pre">Vegan-friendly</h4>
              <h2 id="sustainability-title-main">sustainability</h2>
            </div>
            <div id="sustainability-desc" className="body2">
              Pure cork sourced sustainably. <br />
              Completely vegan - no cows were harmed, <br />
              but it might be full of &ldquo;bull&rdquo;sh*t.
            </div>
          </div>
        </div>

        {/* 3-Column Stats Grid */}
        <div id="sustainability-items" className="o-grid">
          {/* Item 1: First Harvest Age */}
          <div className="sustainability-item">
            <h3 className="sustainability-item-title">
              Average <br />
              age of first <br />
              harvest
            </h3>
            <div className="sustainability-item-desc body2">
              Cork oaks are typically first harvested at around 25 years, once the bark is thick enough to remove safely.
            </div>
            <div className="sustainability-item-num">25</div>
          </div>

          {/* Item 2: Regrowth Interval with Rive Canvas */}
          <div className="sustainability-item">
            <h4 className="sustainability-item-title">
              Harvesting <br />
              interval
            </h4>
            <div className="sustainability-item-desc body2">
              After each harvest, the bark takes about 9 years to regrow, making cork a renewable material.
            </div>
            <canvas
              id="sustainability-rive-canvas-harvesting"
              aria-label="Harvesting Interval Rive Animation"
            />
          </div>

          {/* Item 3: Zero Power Consumption with Rive Canvas */}
          <div className="sustainability-item">
            <h4 className="sustainability-item-title">
              Power draw <br />
              while in use
            </h4>
            <div className="sustainability-item-desc body2">
              No compute. No tokens. So you can say &ldquo;please&rdquo; and &ldquo;thank you&rdquo; as much as you want, guilt free.
            </div>
            <canvas
              id="sustainability-rive-canvas-text"
              aria-label="Power Draw Zero Compute Rive Animation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
