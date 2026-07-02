import React from 'react';
import { useLenis } from '../hooks/useLenis';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { NoiseOverlay } from '../components/layout/NoiseOverlay';
import { GridBackground } from '../components/layout/GridBackground';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { ScrollToTop } from '../components/layout/ScrollToTop';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useLenis();

  return (
    <div className="relative min-h-screen selection:bg-[#00F5D4]/30 selection:text-white transition-colors duration-300">
      {/* Background Visual Components */}
      <GridBackground />
      <NoiseOverlay />
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative pt-28 min-h-[calc(100vh-320px)] z-10">
        {children}
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};
