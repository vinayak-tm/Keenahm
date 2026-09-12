import { ShieldCheck, Clock, Award, Users, FileCheck, Headset } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Fully bonded in Illinois and Indiana. Every project carries comprehensive liability coverage — no fly-by-night risk.',
  stat: 'IL #058-123456',
  },
  {
    icon: Clock,
    title: 'On-Time Guarantee',
    desc: 'We commit to a timeline in writing and hit it. Delays cost you money, so we absorb them — not you.',
    stat: '97% on-time rate',
  },
  {
    icon: Award,
    title: 'Master Craftsmen',
    desc: 'Every crew member averages 10+ years in their trade. No subcontractor roulette — the same team start to finish.',
    stat: '10+ yrs avg experience',
  },
  {
    icon: FileCheck,
    title: 'Permits Handled',
    desc: 'We pull every permit, pass every inspection, and deliver a final sign-off packet. You never deal with the city.',
    stat: '100% permit compliance',
  },
  {
    icon: Headset,
    title: 'Direct Project Access',
    desc: 'Your project manager picks up the phone. No gatekeepers, no call centers, no waiting for a callback.',
    stat: 'Same-day callback',
  },
  {
    icon: Users,
    title: '1,150+ Satisfied Clients',
    desc: 'Fifteen years of referrals built on trust. Over 90% of our work comes from word-of-mouth — that is the real proof.',
    stat: '90% referral rate',
  },
];

export default function WhyKeenahm() {
  return (
    <section id="why-keenahm" className="relative overflow-hidden bg-[#0B192C] py-20 lg:py-28">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #F59E0B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#F59E0B]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F59E0B]">Why Keenahm</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">The Difference Is In The Details</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            We do not cut corners. We do not disappear. We deliver what we promise — and then we stand behind it.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-[#F59E0B]/5 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-0" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59E0B]/15 transition-colors group-hover:bg-[#F59E0B]">
                    <Icon className="h-6 w-6 text-[#F59E0B] transition-colors group-hover:text-[#0B192C]" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{feature.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-[#F59E0B]/10 px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                    <span className="text-xs font-semibold text-[#F59E0B]">{feature.stat}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
