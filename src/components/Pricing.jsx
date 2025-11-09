import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$79',
    cadence: 'per provider / month',
    features: [
      'Appointments & reminders',
      'Digital intake & consent forms',
      'Basic charting',
      'Email support',
    ],
    cta: 'Start free trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$149',
    cadence: 'per provider / month',
    features: [
      'Everything in Starter',
      'Imaging & perio charts',
      'Claims & e‑prescriptions',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Choose Professional',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'for multi‑location groups',
    features: [
      'Single Sign‑On (SSO)',
      'Custom roles & audit logs',
      'Data migration & onboarding',
      'Dedicated success manager',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
];

const TierCard = ({ tier }) => (
  <div
    className={`flex flex-col rounded-2xl border p-6 backdrop-blur transition ${
      tier.highlighted
        ? 'border-sky-500/40 bg-sky-500/10 shadow-[0_0_0_1px_rgba(14,165,233,0.2)]'
        : 'border-white/10 bg-white/5'
    }`}
  >
    <div className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
      <div className="text-3xl font-bold text-white">{tier.price}</div>
    </div>
    <div className="mt-1 text-xs text-white/60">{tier.cadence}</div>
    <ul className="mt-6 flex-1 space-y-3">
      {tier.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-white/80">
          <Check className="mt-0.5 h-4 w-4 text-sky-400" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
        tier.highlighted
          ? 'bg-sky-500 text-white hover:bg-sky-400'
          : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
      }`}
    >
      {tier.cta}
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-[#05080f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. No setup fees. Cancel anytime.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-white/50">
          Prices shown in USD. Taxes may apply. Enterprise discounts available.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
