import { useState } from 'react';
import { CreditCard, TrendingUp, Check, Sparkles } from 'lucide-react';

const terms = [12, 24, 36, 48, 60];

export default function Financing() {
  const [projectSize, setProjectSize] = useState(15000);
  const [term, setTerm] = useState(36);

  const monthlyPayment = projectSize / term;

  return (
    <section id="financing" className="relative overflow-hidden bg-[#0B192C] py-20 lg:py-28">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F59E0B]/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5">
              <CreditCard className="h-4 w-4 text-[#F59E0B]" />
              <span className="text-sm font-semibold text-[#F59E0B]">Pre-Approved Remodel Financing</span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Finance Your Renovation at <span className="text-[#F59E0B]">0% APR</span>
            </h2>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-gray-400">
              Do not let cash flow delay your project. We partner with top lenders to offer pre-approved financing with promotional 0% APR periods — so you can start now and pay over time.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                'No money down on approved credit',
                '0% intro APR for 12–18 months',
                'Fixed rates as low as 7.99% after promo',
                'Soft pull — no credit score impact to check',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/15">
                    <Check className="h-3 w-3 text-[#F59E0B]" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#estimator"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F59E0B] px-7 py-4 font-bold text-[#0B192C] transition-all hover:bg-[#D97706] hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Start With a Free Estimate
            </a>
          </div>

          {/* Right: Payment Calculator */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59E0B]/15">
                <TrendingUp className="h-6 w-6 text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Monthly Payment Estimator</h3>
                <p className="text-sm text-gray-400">0% promotional APR</p>
              </div>
            </div>

            {/* Project size slider */}
            <div className="mb-6">
              <div className="mb-2 flex items-baseline justify-between">
                <label className="text-sm font-medium text-gray-300">Project Size</label>
                <span className="text-2xl font-bold text-[#F59E0B]">${projectSize.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={5000}
                max={100000}
                step={1000}
                value={projectSize}
                onChange={(e) => setProjectSize(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-[#F59E0B]"
              />
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>$5K</span>
                <span>$100K</span>
              </div>
            </div>

            {/* Term selector */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-300">Repayment Term</label>
              <div className="grid grid-cols-5 gap-2">
                {terms.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTerm(t)}
                    className={`rounded-lg py-2.5 text-sm font-semibold transition-all ${
                      term === t ? 'bg-[#F59E0B] text-[#0B192C]' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {t}mo
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="rounded-2xl border border-[#F59E0B]/30 bg-[#F59E0B]/10 p-6 text-center">
              <p className="mb-1 text-sm text-gray-400">Estimated Monthly Payment</p>
              <p className="text-4xl font-bold text-white">
                ${monthlyPayment.toFixed(2)}
                <span className="text-lg font-normal text-gray-400">/mo</span>
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B]/20 px-3 py-1">
                <Sparkles className="h-3 w-3 text-[#F59E0B]" />
                <p className="text-xs font-semibold text-[#F59E0B]">0% APR promotional period</p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-gray-500">
              Estimates only. Final terms subject to lender approval and credit qualification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
