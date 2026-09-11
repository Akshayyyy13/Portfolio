import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { GallerySection } from './sections/GallerySection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';

export const App: React.FC = () => {
  return (
    <main
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] w-full"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
};

export default App;
