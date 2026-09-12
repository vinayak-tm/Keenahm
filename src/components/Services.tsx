import { ArrowRight } from 'lucide-react';
import { trades } from '@/lib/trades';

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#F59E0B] font-semibold text-sm tracking-[0.15em] uppercase">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] mt-3 mb-4 tracking-tight">
            Six Trades. One Crew. Zero Excuses.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every trade is handled by licensed specialists who answer to the same project lead — so your renovation stays on schedule, on budget, and on code.
          </p>
        </div>

        {/* Trade Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trades.map((trade) => {
            const Icon = trade.icon;
            return (
              <div
                key={trade.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={trade.image}
                    alt={`${trade.name} work by Keenahm Construction`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-[#0B192C]/10 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-[#0B192C]" strokeWidth={2.5} />
                  </div>
                  {/* Trade name on image */}
                  <h3 className="absolute bottom-3 left-4 text-2xl font-bold text-white tracking-tight">
                    {trade.name}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{trade.blurb}</p>
                  <ul className="space-y-2 mb-5">
                    {trade.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-[#F59E0B] rounded-full shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#estimator"
                    className="group/btn flex items-center gap-1.5 text-[#0B192C] font-semibold text-sm hover:text-[#F59E0B] transition-colors"
                  >
                    Get Trade Estimate
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
