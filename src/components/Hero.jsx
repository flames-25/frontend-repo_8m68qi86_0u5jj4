import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#05080f]">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05080f]/60 via-[#05080f]/40 to-[#05080f]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05080f] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center sm:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Medical SaaS for Dental Clinics
        </span>
        <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Run a world‑class dental clinic
          <br /> with one secure platform
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/70 sm:text-lg">
          Scheduling, charting, imaging, e‑prescriptions, and analytics — unified and compliant.
          Built for speed, privacy, and modern patient experiences.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
          >
            Get started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore features
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-4">
          {[
            'HIPAA-ready',
            'ISO 27001',
            'End-to-end encryption',
            '99.9% uptime',
          ].map((item) => (
            <div key={item} className="text-xs text-white/60">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
