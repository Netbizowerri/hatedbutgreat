import React, { Suspense } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { WhatsAppFloat } from '../ui/WhatsAppFloat';
import { Outlet } from 'react-router-dom';

function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#008751] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#008751] selection:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#008751] focus:text-white focus:rounded-lg focus:text-sm focus:font-bold">
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
