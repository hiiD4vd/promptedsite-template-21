import React from 'react';

/**
 * HeroSection
 * Primary landing view highlighting the core proposition:
 * "Made for mugs. Built for tables.", creative studio accolades,
 * and the video thumbnail teaser button.
 */
export const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="section">
      <div className="section__inner o-container">
        {/* Top Tagline & 3D Logo Reference Anchor */}
        <div id="hero-top" className="sub1">
          <div id="hero-top-tagline">Made for mugs. Built for tables.</div>
          <div id="hero-logo-ref" />
        </div>

        {/* Narrative Copy */}
        <div id="hero-copy" className="body1">
          Designed to lift, insulate, and grip in all the right ways. Prompted Site makes the simplest moment feel considered.
        </div>

        {/* Glassmorphism Award Card */}
        <div id="hero-card">
          <div id="hero-card-inner">
            <h4 id="hero-card-header">
              Designed<br />
              by Prompted Site,<br />
              the award-winning<br />
              creative studio.
            </h4>
            <div className="o-dashline desktop-only" />
            <div id="hero-card-desc" className="body2">
              <span>The world's most</span>
              <span> unnecessarily</span>
              <span> sophisticated AI coaster.</span>
            </div>
          </div>
        </div>

        {/* Video Thumbnail & Play Trigger */}
        <div id="hero-video-wrapper" role="button" tabIndex={0} aria-label="Play Hero Reel Video">
          <span className="hero-video__glow" />
          <span className="hero-video__border" />
          <div id="hero-video-thumbnail-wrapper">
            <img
              id="hero-video-thumbnail"
              width={320}
              height={180}
              src="/images/video_thumb.webp"
              // @ts-expect-error fetchpriority is a standard HTML attribute in modern browsers
              fetchpriority="high"
              alt="Video thumbnail"
            />
          </div>
          <div id="hero-video-play">PLAY</div>
        </div>
      </div>
    </div>
  );
};
