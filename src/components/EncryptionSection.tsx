import React from 'react';

/**
 * EncryptionSection
 * Interactive smart flip encryption feature:
 * Type a secret word, hit Encode/Decode, and watch the 3D coaster flip
 * to reveal or scramble the mirrored message.
 */
export const EncryptionSection: React.FC = () => {
  return (
    <div id="encryption" className="section">
      <div className="section__inner o-container">
        <div id="encryption-main">
          {/* Section Header */}
          <div id="encryption-header">
            <div id="encryption-tagline" className="sub1">
              Secure communications simplified
            </div>
            <h2 id="encryption-title">
              Smart flip <br />
              encryption
            </h2>
            <div id="encryption-desc" className="body2">
              Write a message. Flip. Instantly secure - until <br />
              someone flips it back. Genius.
            </div>
          </div>

          {/* Interactive Input Box with Grid Lines */}
          <div id="encryption-field">
            <div className="encryption-field-line" />
            <div className="encryption-field-line" />
            <div className="encryption-field-line" />
            <div className="encryption-field-line" />
            <input
              type="text"
              id="encryption-field-input"
              defaultValue="PROMPTED"
              maxLength={10}
              aria-label="Encryption Message Input"
              autoComplete="off"
              spellCheck="false"
            />
          </div>

          {/* Flip / Encode / Decode Trigger Button */}
          <button
            id="encryption-field-flip-btn"
            className="btn is-active is-flipper"
            type="button"
          >
            <span id="encryption-field-flip-btn-inner">
              <span className="is-flipper-target">Encode Message</span>
              <span className="is-flipper-target">Decode Message</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
