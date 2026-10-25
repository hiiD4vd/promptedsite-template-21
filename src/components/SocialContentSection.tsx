import React from 'react';

/**
 * SocialContentSection
 * Horizontal scroll gallery featuring humorous hardware-inspired cards:
 * "Runs on the edge", "Runs on RTX 3090", "Always On", "Drop-Tested",
 * and backward compatibility legacy support.
 */
export const SocialContentSection: React.FC = () => {
  return (
    <div id="social-content" className="section">
      <div className="section__inner">
        <div id="social-content-items-wrapper">
          {/* Card 1: Edge */}
          <div className="social-content-item" data-id="edge" data-offset="0.49">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/edge.webp" width="1700" height="1080" />
                  <img src="/images/social-content/edge_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Runs on the edge" />
                </picture>
                <h5 className="social-content-item-title">
                  Runs on the edge<br />Refuses the cloud
                </h5>
                <div className="social-content-item-note">On-device.</div>
              </div>
            </div>
          </div>

          {/* Card 2: Sticker 1 */}
          <div className="social-content-item" data-id="sticker_1" data-offset="0">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/sticker_1.webp" width="900" height="1080" />
                  <img src="/images/social-content/sticker_1_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Sticker" />
                </picture>
              </div>
            </div>
          </div>

          {/* Card 3: Always On */}
          <div className="social-content-item" data-id="always_on" data-offset="0.825">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/always_on.webp" width="1920" height="1080" />
                  <img src="/images/social-content/always_on_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Always on" />
                </picture>
                <h5 className="social-content-item-title">Always On</h5>
                <div className="social-content-item-note">24/7 UPTIME. No power required.</div>
                <picture className="social-content-item-cover desktop-only">
                  <source media="(min-width:768px)" srcSet="/images/social-content/always_on_cover.webp" width="398" height="283" />
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" width="1" height="1" loading="lazy" decoding="async" alt="" />
                </picture>
              </div>
            </div>
          </div>

          {/* Card 4: Color */}
          <div className="social-content-item" data-id="color" data-offset="0">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/color.webp" width="900" height="1080" />
                  <img src="/images/social-content/color_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Color swatch" />
                </picture>
              </div>
            </div>
          </div>

          {/* Card 5: 3090 */}
          <div className="social-content-item" data-id="3090" data-offset="0.47">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/3090.webp" width="2250" height="1080" />
                  <img src="/images/social-content/3090_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Runs on RTX 3090" />
                </picture>
                <h5 className="social-content-item-title">Runs on RTX 3090</h5>
                <div className="social-content-item-note">No More OOM on any consumer GPUs</div>
                <picture className="social-content-item-cover desktop-only">
                  <source media="(min-width:768px)" srcSet="/images/social-content/3090_cover.webp" width="588" height="154" />
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" width="1" height="1" loading="lazy" decoding="async" alt="" />
                </picture>
              </div>
            </div>
          </div>

          {/* Card 6: Perfect */}
          <div className="social-content-item" data-id="perfect" data-offset="0">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/perfect.webp" width="900" height="1080" />
                  <img src="/images/social-content/perfect_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Perfect" />
                </picture>
                <div className="social-content-item-note">Perfect By Design</div>
              </div>
            </div>
          </div>

          {/* Card 7: Drop Test */}
          <div className="social-content-item" data-id="drop_test" data-offset="0.5">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/drop_test.webp" width="2135" height="1080" />
                  <img src="/images/social-content/drop_test_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Drop test" />
                </picture>
                <h5 className="social-content-item-title">Drop-Tested</h5>
                <div className="social-content-item-note">
                  <span>Test conditions: hard surface</span>
                  <span>DATE: 02/29/2026</span>
                  <span>Damage: The Floor ;)</span>
                </div>
                <picture className="social-content-item-cover desktop-only">
                  <source media="(min-width:768px)" srcSet="/images/social-content/drop_test_cover.webp" width="528" height="176" />
                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" width="1" height="1" loading="lazy" decoding="async" alt="" />
                </picture>
              </div>
            </div>
          </div>

          {/* Card 8: Sticker 2 */}
          <div className="social-content-item" data-id="sticker_2" data-offset="0">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/sticker_2.webp" width="900" height="1080" />
                  <img src="/images/social-content/sticker_2_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Sticker 2" />
                </picture>
              </div>
            </div>
          </div>

          {/* Card 9: Legacy Support */}
          <div className="social-content-item" data-id="legacy_support" data-offset="0.61">
            <div className="social-content-item-clipper">
              <div className="social-content-item-inner">
                <picture className="social-content-item-bg">
                  <source media="(min-width:768px)" srcSet="/images/social-content/legacy_support.webp" width="2250" height="1080" />
                  <img src="/images/social-content/legacy_support_MOBILE.webp" width="600" height="800" loading="lazy" decoding="async" alt="Legacy Support" />
                </picture>
                <h5 className="social-content-item-title">Legacy Support</h5>
                <div className="social-content-item-note">
                  Supporting backward compatibility since the 5th millennium BCE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Pagination Dot Indicators */}
        <div id="social-content-progress" className="mobile-only">
          <div className="social-content-progress-item is-active" />
          <div className="social-content-progress-item" />
          <div className="social-content-progress-item" />
          <div className="social-content-progress-item" />
          <div className="social-content-progress-item" />
          <div className="social-content-progress-item" />
          <div className="social-content-progress-item" />
          <div className="social-content-progress-item" />
          <div className="social-content-progress-item" />
        </div>
      </div>
    </div>
  );
};
