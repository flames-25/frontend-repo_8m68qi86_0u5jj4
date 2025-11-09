import React from 'react';
import { Shield, Calendar, ChartBar, Camera, Cpu } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    desc: 'Automated reminders, waitlist, and multi-location calendars that sync in real time.',
  },
  { icon: Shield, title: 'Compliance First', desc: 'HIPAA-ready, role-based access, and audit trails baked in by default.' },
  { icon: Camera, title: 'Imaging & Charting', desc: 'Intraoral imaging, perio charts, and treatment plans — all in one place.' },
  { icon: ChartBar, title: 'Analytics', desc: 'Track production, collections, and case acceptance with visual dashboards.' },
  { icon: Cpu, title: 'AI Assist', desc: 'Automate notes, coding suggestions, and identify patterns in patient history.' },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#070b14] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to run your practice</h2>
          <p className="mt-3 text-white/70">Built for modern teams — secure, fast, and patient‑first.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
