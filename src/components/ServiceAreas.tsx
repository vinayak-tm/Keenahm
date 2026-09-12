import { useState } from 'react';
import { MapPin, CheckCircle2, XCircle, Search, Navigation, Building2 } from 'lucide-react';

function isServiceArea(zip: string): boolean {
  const z = zip.trim();
  if (!/^\d{5}$/.test(z)) return false;
  const prefix = parseInt(z.slice(0, 2), 10);
  return (prefix >= 60 && prefix <= 61) || (prefix >= 46 && prefix <= 47);
}

const serviceZones = [
  { name: 'Chicago Metro', detail: 'Downtown & near west' },
  { name: 'South Suburbs', detail: 'Cook & Will County' },
  { name: 'NW Indiana', detail: 'Lake & Porter County' },
  { name: 'Lake County IL', detail: 'North suburban coverage' },
];

export default function ServiceAreas() {
  const [zip, setZip] = useState('');
  const [result, setResult] = useState<null | { valid: boolean; zip: string }>(null);

  const checkZip = () => {
    if (zip.trim().length === 0) return;
    setResult({ valid: isServiceArea(zip), zip: zip.trim() });
  };

  return (
    <section id="service-areas" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F59E0B]">Service Areas</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B192C] sm:text-4xl lg:text-5xl">
              Chicagoland &amp; Northwest Indiana
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
              From downtown Chicago to the Indiana dunes, our crews are on the road every day across Cook, DuPage, Will, Lake (IL), and Lake County (IN).
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {serviceZones.map((area) => (
                <div key={area.name} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/15">
                    <MapPin className="h-4 w-4 text-[#D97706]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0B192C]">{area.name}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{area.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-gray-500">ZIP prefixes</span>
              {['IL 60xxx', 'IL 61xxx', 'IN 46xxx', 'IN 47xxx'].map((prefix) => (
                <span key={prefix} className="rounded-md bg-[#0B192C] px-3 py-1.5 font-mono text-xs font-semibold text-[#F59E0B]">
                  {prefix}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#0B192C] p-6 shadow-2xl shadow-slate-300/40 sm:p-8">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,.25) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#F59E0B]">
                    <Navigation className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-[0.16em]">Coverage overview</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-white">We bring the crew to you.</h3>
                </div>
                <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-white/10 sm:flex">
                  <Building2 className="h-5 w-5 text-[#F59E0B]" />
                </div>
              </div>

              <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#13243B]">
                <div className="absolute left-[18%] top-[28%] h-20 w-32 -rotate-12 rounded-[45%] border border-[#F59E0B]/50 bg-[#F59E0B]/10" />
                <div className="absolute right-[13%] top-[38%] h-16 w-24 rotate-12 rounded-[45%] border border-[#F59E0B]/40 bg-[#F59E0B]/10" />
                <div className="absolute left-[40%] top-[42%] flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] shadow-lg shadow-amber-500/40">
                  <MapPin className="h-5 w-5 text-[#0B192C]" />
                </div>
                <div className="absolute bottom-3 left-4 rounded-md bg-[#0B192C]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-300">Chicagoland</div>
                <div className="absolute bottom-3 right-4 rounded-md bg-[#0B192C]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-300">NW Indiana</div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="mb-3 flex items-center gap-2">
                  <Search className="h-4 w-4 text-[#F59E0B]" />
                  <h4 className="text-sm font-semibold text-white">Check your ZIP code</h4>
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => { setResult(null); setZip(e.target.value.replace(/\D/g, '')); }}
                    onKeyDown={(e) => e.key === 'Enter' && checkZip()}
                    placeholder="e.g. 60601"
                    aria-label="ZIP code"
                    className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 font-mono text-lg tracking-wider text-white placeholder-gray-500 transition-all focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30"
                  />
                  <button onClick={checkZip} className="rounded-xl bg-[#F59E0B] px-5 py-3.5 font-bold text-[#0B192C] transition-all hover:bg-[#D97706] hover:shadow-lg hover:shadow-amber-500/30">Check</button>
                </div>
              </div>

              {result && (
                <div className={`mt-4 flex items-center gap-3 rounded-xl border p-4 animate-[fadeInUp_0.3s_ease-out] ${result.valid ? 'border-green-500/30 bg-green-500/15' : 'border-red-500/30 bg-red-500/15'}`}>
                  {result.valid ? <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" /> : <XCircle className="h-5 w-5 shrink-0 text-red-400" />}
                  <div>
                    <p className="text-sm font-semibold text-white">{result.valid ? `We serve ZIP ${result.zip}!` : `ZIP ${result.zip} is outside our area.`}</p>
                    <p className="mt-0.5 text-xs text-gray-300">{result.valid ? 'You are in our service area. Request a free estimate today.' : 'Try a 60xxx, 61xxx, 46xxx, or 47xxx ZIP.'}</p>
                  </div>
                </div>
              )}

              <p className="mt-4 text-center text-xs text-gray-500">Outside the standard zone? Call us about select projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
