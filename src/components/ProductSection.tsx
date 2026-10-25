import React from 'react';

/**
 * ProductSection
 * Interactive product tier configurator (PROMPTED, PROMPTED Pro, PROMPTED Pro Max)
 * with dynamic 3D stack physics switching and comparative spec table.
 */
export const ProductSection: React.FC = () => {
  return (
    <div id="product" className="section">
      <div className="section__inner o-container">
        {/* Tier Chooser Buttons */}
        <div id="product-hero">
          <div id="product-hero-inner">
            <h4 id="product-hero-caption">Choose you own</h4>
            <div id="product-hero-title-wrapper">
              <svg id="product-hero-title" aria-hidden="true">
                <use href="#logo-tmpl" />
              </svg>
            </div>
            <div id="product-hero-options">
              <button
                type="button"
                data-id="0"
                id="product-hero-option-oryzo"
                className="product-hero-option-item btn is-large is-dark is-active is-flipper"
              >
                PROMPTED
              </button>
              <button
                type="button"
                data-id="1"
                id="product-hero-option-oryzo-pro"
                className="product-hero-option-item btn is-large is-dark is-flipper"
              >
                PROMPTED Pro
              </button>
              <button
                type="button"
                data-id="2"
                id="product-hero-option-oryzo-pro-max"
                className="product-hero-option-item btn is-large is-dark is-flipper"
              >
                PROMPTED Pro Max
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Tier Descriptions */}
        <div id="product-details">
          <div id="product-details-inner">
            <div id="product-details-main">
              <h4 id="product-details-title-wrapper">
                <span>PROMPTED</span>
                <span>PROMPTED Pro</span>
                <span>PROMPTED Pro Max</span>
              </h4>
              <div id="product-details-desc-wrapper" className="body2">
                <div>
                  The original. Refined until it feels inevitable. Lifts just enough, grips just right, and quietly disappears into your day like it was never there.
                </div>
                <div>
                  A little more presence. Double the cork, double the confidence - without losing the plot.
                </div>
                <div>
                  Maximum stack for maximum unnecessary satisfaction. A bold little pedestal for your mug and a quiet flex for the whole desk.
                </div>
              </div>
            </div>

            {/* Spec Feature Bullet Points */}
            <div id="product-details-extra" className="body2">
              <div className="product-details-extra-item">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#product-double-circles" />
                </svg>
                <div>Single layer lift</div>
                <div>Double stack lift</div>
                <div>Triple stack lift</div>
              </div>
              <div className="product-details-extra-item">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#product-double-circles" />
                </svg>
                <div>Natural cork insulation</div>
                <div>More mass, more steadiness</div>
                <div>Extra insulation by design</div>
              </div>
              <div className="product-details-extra-item">
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <use href="#product-double-circles" />
                </svg>
                <div>Stable grip on everyday surfaces</div>
                <div>Designed to be stardout</div>
                <div>Deployable on RTX 3090, on device</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specification Comparison Matrix */}
        <table id="product-compare" className="sub2">
          <tbody>
            <tr>
              <th>
                <h5>New</h5>
                <h4>PROMPTED</h4>
              </th>
              <th>
                <h5>New</h5>
                <h4>PROMPTED Pro</h4>
              </th>
              <th>
                <h5>New</h5>
                <h4>PROMPTED Pro Max</h4>
              </th>
            </tr>
            <tr className="body3">
              <td>
                <span>One coaster. One job. Done beautifully.</span>
              </td>
              <td>
                <span>Twice the cork. Twice the commitment. Still effortless.</span>
              </td>
              <td>
                <span>Three layers of confidence. For people who like their coffee slightly above it all.</span>
              </td>
            </tr>
            <tr>
              <td>
                <div>Stack:</div>
                <span>1</span>
              </td>
              <td>
                <div>Stack:</div>
                <span>2</span>
              </td>
              <td>
                <div>Stack:</div>
                <span>3</span>
              </td>
            </tr>
            <tr>
              <td>
                <div>Lift:</div>
                <span>1 coaster thick</span>
              </td>
              <td>
                <div>Lift:</div>
                <span>2 coasters thick</span>
              </td>
              <td>
                <div>Lift:</div>
                <span>3 coasters thick</span>
              </td>
            </tr>
            <tr>
              <td>
                <div>Material:</div>
                <span>Cork</span>
              </td>
              <td>
                <div>Material:</div>
                <span>Cork</span>
              </td>
              <td>
                <div>Material:</div>
                <span>Cork</span>
              </td>
            </tr>
            <tr>
              <td>
                <div>Connectivity:</div>
                <span>None</span>
              </td>
              <td>
                <div>Connectivity:</div>
                <span>None</span>
              </td>
              <td>
                <div>Connectivity:</div>
                <span>None</span>
              </td>
            </tr>
            <tr>
              <td>
                <div>Pairing:</div>
                <span>Not Required</span>
              </td>
              <td>
                <div>Pairing:</div>
                <span>Not Required</span>
              </td>
              <td>
                <div>Pairing:</div>
                <span>Not Required</span>
              </td>
            </tr>
            <tr>
              <td>
                <div>Updates:</div>
                <span>Never</span>
              </td>
              <td>
                <div>Updates:</div>
                <span>Never</span>
              </td>
              <td>
                <div>Updates:</div>
                <span>Never</span>
              </td>
            </tr>
            <tr>
              <td>
                <div>Best for:</div>
                <span>Daily mugs and quiet desks</span>
              </td>
              <td>
                <div>Best for:</div>
                <span>Taller cups and extra stability</span>
              </td>
              <td>
                <div>Best for:</div>
                <span>Maximum lift and maximum presence</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
