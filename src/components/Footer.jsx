import React from 'react';
import { ShieldCheck, HeartPulse, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#070b14] py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <HeartPulse className="h-5 w-5 text-sky-400" />
              <span className="font-semibold">ApexDental Cloud</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Secure, modern software for forward‑thinking dental clinics.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/90">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/90">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/90">Get in touch</h4>
            <form className="mt-3 flex max-w-sm items-center gap-2">
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-sky-500/40 focus:bg-white/10"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400"
              >
                <Mail className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4 text-sky-400" /> HIPAA‑ready infrastructure
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} ApexDental Cloud. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
