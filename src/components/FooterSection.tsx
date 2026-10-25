import React from 'react';

/**
 * FooterSection
 * Major landing conclusion containing:
 * - Brand declaration and visionary value proposition
 * - Newsletter subscription input with animated arrow
 * - Direct contact emails (New Business & General Enquiries)
 * - Social handles, terms, privacy, and satirical disclaimer
 */
export const FooterSection: React.FC = () => {
  return (
    <div id="footer" className="section">
      <div className="section__inner o-container o-grid">
        {/* Brand Top */}
        <div id="footer-top">
          <style>{`
            #footer-lusion-logo {
              width: auto !important;
              height: auto !important;
              white-space: nowrap !important;
            }
            #footer-lusion-logo:before,
            #footer-lusion-logo:after {
              display: none !important;
            }
          `}</style>
          <div
            id="footer-lusion-logo"
            style={{
              fontFamily: "'halyard-display-variable', sans-serif",
              fontWeight: 900,
              fontSize: '1.6rem',
              letterSpacing: '3px',
              color: 'currentColor',
              display: 'flex',
              alignItems: 'center',
              marginRight: '48px',
            }}
          >
            PROMPTED SITE
          </div>
          <h2 id="footer-title">
            <span>We caught your attention with a non-existent product.</span>
            <span>If we can sell a coaster, imagine what we can do for your brand.</span>
          </h2>
        </div>

        {/* Studio Link Button */}
        <a
          id="footer-lusion-link"
          className="btn is-dark is-flipper"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          promptedsite.com
        </a>

        {/* Share & Love */}
        <div id="footer-love" className="sub2">
          <div>
            Built by{' '}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Prompted Site
            </a>
            <br />
            with love{' '}
            <svg viewBox="0 0 11 9" aria-hidden="true">
              <path
                d="M5.5 8.967C4.198 7.234 1.535 6.44.428 4.55-.249 3.47-.141 1.707.732.823 1.502-.083 3.287-.23 4.22.487c.99.703 1.144 1.648 1.232 2.816.15.022.097-.062.112-.224.118-1.143.316-1.904 1.232-2.592.937-.72 2.702-.565 3.472.336.874.884.98 2.649.304 3.728-1.11 1.876-3.77 2.69-5.072 4.416"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <span>Share with friends</span>
            <span> If you like it</span>
          </div>
          <button className="is-flipper" type="button">
            Copy URL
          </button>
        </div>

        {/* Newsletter Form */}
        <div id="footer-email" role="region" aria-labelledby="footer-newsletter-label">
          <label id="footer-newsletter-label" className="footer-item-caption sub2" htmlFor="footer-email-input">
            Subscribe to Prompted Site's Newsletter:
          </label>
          <form id="footer-newsletter-form" noValidate>
            <div id="footer-email-input-wrapper">
              <input
                type="email"
                id="footer-email-input"
                name="EMAIL"
                autoComplete="email"
                placeholder="Your Email"
                required
                aria-required="true"
                aria-describedby="footer-newsletter-message"
              />
              <button type="submit" id="footer-email-btn" aria-label="Subscribe to newsletter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4.11 12.75a.75.75 0 0 1 0-1.5h13.978l-5.036-5.036a.75.75 0 1 1 1.06-1.06l6.316 6.315.53.53-.53.53-6.316 6.317a.75.75 0 0 1-1.06-1.061l5.035-5.035H4.109Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="o-dashline" />
            </div>
            <div id="footer-newsletter-message" aria-live="polite" />
          </form>
        </div>

        {/* Contact Info */}
        <div id="footer-contact-wrapper">
          <div id="contact" className="footer-item">
            <div className="footer-item-caption sub2">New Business:</div>
            <a
              className="footer-item-link is-flipper"
              href="#contact"
              onClick={(e) => e.preventDefault()}
            >
              contact@promptedsite.com
            </a>
          </div>
          <div className="footer-item">
            <div className="footer-item-caption sub2">General Enquires:</div>
            <a
              className="footer-item-link is-flipper"
              href="#contact"
              onClick={(e) => e.preventDefault()}
            >
              hello@promptedsite.com
            </a>
          </div>
        </div>

        {/* Social Accounts */}
        <div id="footer-social-wrapper">
          <a className="footer-item-link" href="#footer" onClick={(e) => e.preventDefault()}>
            X
          </a>
          <a className="footer-item-link is-flipper" href="#footer" onClick={(e) => e.preventDefault()}>
            Instagram
          </a>
          <a className="footer-item-link is-flipper" href="#footer" onClick={(e) => e.preventDefault()}>
            Linkedin
          </a>
        </div>

        {/* Legal Policies */}
        <div id="footer-extra-wrapper">
          <a className="footer-item-link is-flipper" href="#footer" onClick={(e) => e.preventDefault()}>
            Terms &amp; Conditions
          </a>
          <a className="footer-item-link is-flipper" href="#footer" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>
        </div>

        {/* Creative Disclaimer */}
        <div id="footer-caption" className="sub2">
          <div className="o-dashline mobile-only" />
          <span>
            This entire site is a fictional creative project by Prompted Site. Prompted Site represents next-gen AI design.
            No products are for sale. All claims are satirical and for entertainment purposes only.
          </span>
        </div>
      </div>
    </div>
  );
};
