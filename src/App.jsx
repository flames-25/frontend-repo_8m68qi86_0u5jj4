import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { HeartPulse } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#05080f] text-white">
      {/* Simple top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05080f]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-sky-400" />
            <span className="font-semibold">ApexDental Cloud</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 sm:inline-flex">Sign in</a>
            <a href="#pricing" className="rounded-lg bg-sky-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-400">Get started</a>
          </div>
        </div>
      </header>

      <main className="w-full">
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
