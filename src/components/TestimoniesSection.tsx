import React from 'react';
import { TestimonialItem } from '../types';

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'edan',
    author: 'Edan K.',
    role: 'NASA astronaut wannabe',
    quote: '"This is the <span>best coaster</span> that I\'ve <br>ever used. Prompted Site made me<br>a believer."',
    highlight: 'best coaster',
    rating: 5,
    imageDesktop: '/images/testimonies/astronut.webp',
    imageMobile: '/images/testimonies/astronut_MOBILE.webp',
  },
  {
    id: 'roger',
    author: 'Gol D. Roger',
    role: 'Old-school Pirate',
    quote: '"My coaster? If you want it, I\'ll let you have it. Look for it! I left everything I gathered together in <span>one place!</span>"',
    highlight: 'one place!',
    rating: 4.5,
    imageDesktop: '/images/testimonies/pirate_king.webp',
    imageMobile: '/images/testimonies/pirate_king_MOBILE.webp',
  },
  {
    id: 'jamie',
    author: 'Jamie R.',
    role: 'AI influencer, Ex-Web3 influencer',
    quote: '"<span>We are so cooked</span>. Hollywood is not ready for a coaster this cinematic."',
    highlight: 'We are so cooked',
    rating: 5,
    imageDesktop: '/images/testimonies/youtuber.webp',
    imageMobile: '/images/testimonies/youtuber_MOBILE.webp',
  },
  {
    id: 'jules',
    author: 'Jules M.',
    role: 'Minimalist',
    quote: '"I tried the wearable mode. I achieved… <span>attention</span>."',
    highlight: 'attention',
    rating: 5,
    imageDesktop: '/images/testimonies/attention.webp',
    imageMobile: '/images/testimonies/attention_MOBILE.webp',
  },
  {
    id: 'priya',
    author: 'Priya K.',
    role: 'Flat Earth believer',
    quote: '"My table hasn\'t been this protected since I stopped trusting <span>gravity</span>."',
    highlight: 'gravity',
    rating: 5,
    imageDesktop: '/images/testimonies/flat_earth.webp',
    imageMobile: '/images/testimonies/flat_earth_MOBILE.webp',
  },
];

/**
 * TestimoniesSection
 * Social proof & community review showcase with 4.9/5 overall rating,
 * authentic satirical customer testimonials, and responsive picture avatars.
 */
export const TestimoniesSection: React.FC = () => {
  return (
    <div id="testimonies" className="section">
      <div className="section__inner o-container">
        {/* Section Heading */}
        <div id="testimonies-hero">
          <h2 id="testimonies-hero-title">People all around the world love Prompted Site</h2>
          <div id="testimonies-hero-desc" className="body1">
            Do not take our word for it, see what people say after living with Prompted Site.
          </div>
        </div>

        {/* Reviews Table */}
        <div id="testimonies-table">
          {/* Table Header */}
          <div id="testimonies-table-header" className="sub2">
            <div id="testimonies-table-header-title">Rating & Reviews</div>
            <div id="testimonies-table-header-center">
              <div id="testimonies-table-header-reviews">Custom reviews [ 364 ]</div>
              <div className="testimonies-table-rating">
                <svg width="96" height="15" aria-hidden="true">
                  <use href="#star" />
                  <use href="#star" x="19" />
                  <use href="#star" x="38" />
                  <use href="#star" x="57" />
                  <use href="#star" x="76" />
                </svg>
                <div className="testimonies-table-rating-text">[ 4.9/5 ]</div>
              </div>
            </div>
            <div id="testimonies-table-header-right">PROMPTED SITE in use</div>
          </div>

          <div className="o-dashline" />

          {/* Testimonials List */}
          <div id="testimonies-table-list">
            {TESTIMONIALS.map((item, idx) => (
              <React.Fragment key={item.id}>
                <div className="testimonies-table-item">
                  <div className="testimonies-table-item-content">
                    <div className="testimonies-table-rating">
                      <svg width="96" height="15" aria-hidden="true">
                        <use href="#star" />
                        <use href="#star" x="19" />
                        <use href="#star" x="38" />
                        <use href="#star" x="57" />
                        <use href={item.rating === 4.5 ? '#star-half' : '#star'} x="76" />
                      </svg>
                      <div className="testimonies-table-rating-text sub2">
                        [ {item.rating === 5 ? '5/5' : '4.5/5'} ]
                      </div>
                    </div>

                    <div
                      className="testimonies-table-item-content-title quote"
                      dangerouslySetInnerHTML={{ __html: item.quote }}
                    />

                    <div className="testimonies-table-item-content-author sub2">
                      <div className="testimonies-table-item-content-author-name">{item.author}</div>
                      <div className="testimonies-table-item-content-author-desc">{item.role}</div>
                    </div>
                  </div>

                  <div className="testimonies-table-item-image-wrapper">
                    <picture>
                      <source media="(min-width:768px)" srcSet={item.imageDesktop} width="640" height="480" />
                      <img
                        src={item.imageMobile}
                        width="64"
                        height="64"
                        loading="lazy"
                        decoding="async"
                        alt={item.author}
                      />
                    </picture>
                  </div>
                </div>

                {idx < TESTIMONIALS.length - 1 && <div className="o-dashline" />}
              </React.Fragment>
            ))}
            <div className="o-dashline" />
          </div>
        </div>
      </div>
    </div>
  );
};
