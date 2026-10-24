import React from 'react';

/**
 * WearableSection
 * The interactive horizontal scrolling wearable gallery showcasing
 * coaster portability stunts, yoga warnings, prompt interactions, and the satirical magazine cover.
 */
export const WearableSection: React.FC = () => {
  return (
    <div id="wearable" className="section">
      <div className="section__inner o-container">
        {/* Section Heading */}
        <div id="wearable-copy">
          <h4 id="wearable-title">
            <span>So portable,</span>
            <span>it's wearable</span>
          </h4>
          <div id="wearable-title-2-dummy" />
        </div>

        {/* Thumbnail Parallax Strips */}
        <div className="wearable-gallery-thumbs-wrapper is-left desktop-only">
          <div className="wearable-gallery-thumbs-move-container" />
        </div>
        <div className="wearable-gallery-thumbs-wrapper is-right desktop-only">
          <div className="wearable-gallery-thumbs-move-container" />
        </div>

        {/* Main 3D Wearable Container */}
        <div id="wearable-main">
          <div id="wearable-main-small" />
          <canvas id="wearable-main-canvas" aria-label="3D Wearable Scene" />

          {/* Gallery Items */}
          <div id="wearable-gallery-wrapper">
            <div id="wearable-gallery-move-container">
              {/* Item 1: Intro */}
              <div className="wearable-gallery-item" data-id="intro" data-type="intro" data-file="intro.webp">
                <div className="wearable-gallery-item-inner" />
              </div>

              {/* Item 2: Yoga Stunt with Warning */}
              <div className="wearable-gallery-item" data-id="yoga" data-type="video" data-file="yoga.webp">
                <div className="wearable-gallery-item-inner" />
                <div id="wearable-gallery-warning">
                  <div id="wearable-gallery-warning-icon-wrapper" className="sub2">
                    <svg viewBox="0 0 33 30" aria-hidden="true">
                      <path
                        fill="#FFEDD6"
                        d="M12.6 2.157c1.66-2.876 5.81-2.876 7.47 0l12.015 20.81c1.66 2.876-.415 6.47-3.735 6.47V27.71c1.992 0 3.237-2.156 2.24-3.882L18.577 3.02c-.996-1.725-3.486-1.725-4.482 0L2.079 23.829c-.996 1.726.25 3.882 2.241 3.882v1.726l-.307-.01C.975 29.22-.9 25.972.439 23.238l.146-.272L12.6 2.157ZM28.35 27.71v1.726H4.32V27.71h24.03Z"
                      />
                      <path
                        fill="#FFEDD6"
                        d="m18.16 9.783-.208 9.11h-2.029l-.201-9.11h2.438Zm-1.222 13.042c-.382 0-.71-.134-.983-.403a1.338 1.338 0 0 1-.403-.983c0-.378.134-.701.403-.97.273-.269.6-.403.983-.403.374 0 .697.134.97.403.277.269.416.592.416.97a1.3 1.3 0 0 1-.195.7c-.126.21-.294.378-.504.504a1.323 1.323 0 0 1-.687.182Z"
                      />
                    </svg>
                    <h5>Warning</h5>
                  </div>
                  <div id="wearable-gallery-warning-message">
                    This stunt was performed by professionals.<br />
                    Do not attempt this at home.
                  </div>
                </div>
              </div>

              {/* Item 3: Shoulder */}
              <div className="wearable-gallery-item" data-id="shoulder" data-type="image" data-file="shoulder.webp">
                <div className="wearable-gallery-item-inner" />
              </div>

              {/* Item 4: Bikini Prompt */}
              <div className="wearable-gallery-item" data-id="bikini" data-type="image" data-file="bikini.webp">
                <div className="wearable-gallery-item-inner">
                  <div id="wearable-gallery-bikini-overlay" />
                  <div id="wearable-gallery-bikini-message">
                    <div id="wearable-gallery-bikini-prompt">
                      Hey <span><span>@</span>promptedsite</span>, can you put on a bikini?
                    </div>
                    <div id="wearable-gallery-bikini-send-btn-wrapper">
                      <button className="btn is-orange" type="button">Send</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 5: Glasses */}
              <div className="wearable-gallery-item" data-id="glasses" data-type="image" data-file="glasses.webp">
                <div className="wearable-gallery-item-inner" />
              </div>

              {/* Item 6: Bite Video */}
              <div className="wearable-gallery-item" data-id="bite" data-type="video" data-file="bite.webp">
                <div className="wearable-gallery-item-inner" />
              </div>

              {/* Item 7: Pocket */}
              <div className="wearable-gallery-item" data-id="pocket" data-type="image" data-file="pocket.webp">
                <div className="wearable-gallery-item-inner" />
              </div>

              {/* Item 8: Magazine Outro */}
              <div id="wearable-magazine" className="wearable-gallery-item" data-id="outro" data-type="outro" data-file="outro.webp">
                <div id="wearable-magazine-title" />
                <div className="wearable-gallery-item-inner">
                  <div id="wearable-magazine-issue">ISSUE NO. 00124</div>
                  <div id="wearable-magazine-idea">
                    <div id="wearable-magazine-idea-num">
                      <div id="wearable-magazine-idea-num-inner">
                        <span>2</span>
                        <span>5</span>
                        <span>
                          <span>5</span>
                          <span>6</span>
                          <span>7</span>
                          <span>8</span>
                        </span>
                      </div>
                    </div>
                    <div id="wearable-magazine-idea-txt">
                      AI SLOP IDEAS<br />
                      FOR THIS<br />
                      WINTER
                    </div>
                  </div>
                  <div id="wearable-magazine-main">
                    <div id="wearable-magazine-main-title-1">We Are So</div>
                    <div id="wearable-magazine-main-title-2">Cooked!</div>
                    <div id="wearable-magazine-main-desc">
                      <span>Prompted Site is taking everyone's jobs...</span>
                      <span>and replacing them with AI!</span>
                    </div>
                  </div>
                  <div id="wearable-magazine-num">
                    <svg viewBox="0 0 36 25" aria-hidden="true">
                      <path
                        fill="#FDE9CE"
                        d="M29.076 20.223c-1.363 0-2.504-.302-3.42-.906a5.925 5.925 0 0 1-2.08-2.482c-.47-1.05-.704-2.19-.704-3.42 0-1.7.302-3.086.906-4.159.603-1.073 1.397-1.856 2.38-2.347a7.116 7.116 0 0 1 3.287-.772c1.163 0 2.191.269 3.086.805.894.537 1.598 1.308 2.113 2.314.536 1.006.804 2.225.804 3.656 0 1.542-.268 2.861-.804 3.957-.515 1.073-1.252 1.9-2.214 2.482-.939.581-2.057.872-3.354.872Zm.37-.537c1.251 0 2.224-.525 2.917-1.576.693-1.073 1.04-2.638 1.04-4.695 0-1.409-.168-2.616-.503-3.622-.336-1.006-.828-1.778-1.476-2.314-.648-.537-1.442-.805-2.381-.805-1.23 0-2.236.514-3.018 1.543-.783 1.006-1.174 2.436-1.174 4.292 0 2.191.38 3.935 1.14 5.232.782 1.297 1.934 1.945 3.454 1.945Zm-6.473 4.796v-.604h12.341v.604H22.973ZM0 24.482v-.403l1.979-.1c.447-.023.737-.157.872-.403.156-.246.234-.66.234-1.24V2.078c0-.581-.067-.983-.2-1.207C2.75.648 2.447.525 1.978.503L0 .403V0h5.6l12.678 20.96h.033V2.08c0-.56-.078-.95-.235-1.175-.156-.245-.47-.38-.939-.402l-1.81-.1V0h6.74v.402l-2.012.101c-.425.022-.704.157-.838.402-.135.224-.202.649-.202 1.275v22.302h-1.509L3.823 1.912h-.067v20.49c0 .56.067.95.201 1.174.157.224.459.358.906.403l1.911.1v.403H0Z"
                      />
                    </svg>
                    <span>6</span>
                  </div>
                  <div id="wearable-magazine-corner">
                    <div id="wearable-magazine-corner-title">PROMPTED-1</div>
                    <div id="wearable-magazine-corner-desc">
                      <span>An open-weight model designed to be</span>
                      <span>lightweight and easy to carry.</span>
                    </div>
                    <svg id="wearable-magazine-barcode" viewBox="0 0 226 47" aria-hidden="true">
                      <path
                        fill="#FDE9CE"
                        d="M203.554 46.901V0h4.769v46.901h-4.769Zm9.539 0V0h4.77v46.901h-4.77Zm7.154 0V0h4.77v46.901h-4.77ZM178.109 46.901V0h2.385v46.901h-2.385Zm4.77 0V0h4.77v46.901h-4.77Zm9.539 0V0h2.385v46.901h-2.385ZM152.665 46.901V0h4.77v46.901h-4.77Zm9.539 0V0h2.385v46.901h-2.385Zm4.77 0V0h2.385v46.901h-2.385ZM127.221 46.901V0h2.385v46.901h-2.385Zm7.155 0V0h2.384v46.901h-2.384Zm11.924 0V0h4.769v46.901H146.3ZM101.777 46.901V0h2.385v46.901h-2.385Zm7.154 0V0h2.385v46.901h-2.385Zm4.77 0V0h4.77v46.901h-4.77ZM76.332 46.901V0h2.385v46.901h-2.385Zm7.155 0V0h2.385v46.901h-2.385Zm7.154 0V0h9.54v46.901h-9.54ZM50.888 46.901V0h2.385v46.901h-2.385Zm7.155 0V0h2.384v46.901h-2.384Zm4.77 0V0h4.769v46.901h-4.77ZM25.444 46.901V0h2.385v46.901h-2.385Zm4.77 0V0h4.77v46.901h-4.77Zm9.54 0V0h2.384v46.901h-2.385ZM0 46.901V0h9.54v46.901H0Zm14.309 0V0h2.385v46.901h-2.385Zm4.77 0V0h2.384v46.901h-2.385Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
