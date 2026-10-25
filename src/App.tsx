import React from 'react';
import { Canvas3D } from './components/Canvas3D';
import { SvgSymbols } from './components/SvgSymbols';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AiSection } from './components/AiSection';
import { WearableSection } from './components/WearableSection';
import { FeaturesSection } from './components/FeaturesSection';
import { EncryptionSection } from './components/EncryptionSection';
import { GripSection } from './components/GripSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { TestimoniesSection } from './components/TestimoniesSection';
import { SocialContentSection } from './components/SocialContentSection';
import { ProductSection } from './components/ProductSection';
import { OpenWeightSection } from './components/OpenWeightSection';
import { FooterSection } from './components/FooterSection';
import { SiteFooter } from './components/SiteFooter';
import { ScrollIndicator } from './components/ScrollIndicator';
import { VideoOverlay } from './components/VideoOverlay';
import { useOryzoEngine } from './hooks/useOryzoEngine';

/**
 * PROMPTED SITE AI
 * Primary Application Shell.
 *
 * Assembles all modular UI sections, 3D WebGL canvases, Rive animations,
 * and handles the lifecycle initialization of the offline Three.js engine.
 */
export const App: React.FC = () => {
  // Initialize the 3D WebGL & Rive runtime engine once all DOM nodes are mounted
  useOryzoEngine();

  return (
    <React.Fragment>
      {/* 3D WebGL Coaster Canvas Layer */}
      <Canvas3D />

      {/* Reusable SVG Symbol Definitions */}
      <SvgSymbols />

      {/* Interactive UI & Scroll Hierarchy */}
      <div id="ui">
        <div id="site-content">
          <div id="pages-container">
            <div id="home" className="page">
              <HeroSection />
              <AiSection />
              <WearableSection />
              <FeaturesSection />
              <EncryptionSection />
              <GripSection />
              <SustainabilitySection />
              <TestimoniesSection />
              <SocialContentSection />
              <ProductSection />
              <OpenWeightSection />
              <FooterSection />
            </div>
          </div>
        </div>

        {/* Fixed Navigation Header */}
        <Header />

        {/* Floating Scroll Telemetry */}
        <SiteFooter />
        <ScrollIndicator />

        {/* Circular Preloader */}
        <Preloader />
      </div>

      {/* Fullscreen Video Overlay */}
      <VideoOverlay />
    </React.Fragment>
  );
};

export default App;
