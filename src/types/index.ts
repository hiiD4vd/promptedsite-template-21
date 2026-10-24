/**
 * Shared Type Definitions for PROMPTED SITE AI
 */

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
  highlight: string;
  rating: number; // e.g. 5 or 4.5
  imageDesktop: string;
  imageMobile: string;
}

export interface SocialCardItem {
  id: string;
  offset: string;
  title?: string;
  note?: string;
  notes?: string[];
  imageDesktop: string;
  imageMobile: string;
  coverDesktop?: string;
  isSticker?: boolean;
}

export interface ProductModelTier {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  stack: number;
  lift: string;
  material: string;
  connectivity: string;
  pairing: string;
  updates: string;
  bestFor: string;
}
