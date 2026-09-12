import { useState } from 'react';
import { estimatorTrades } from '@/lib/trades';
import { submitLead } from '@/lib/supabase';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Loader2,
  CheckCircle2,
  MapPin,
  Calendar,
  DollarSign,
  User,
  Phone,
  Mail,
  AlertCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const timelines = [
  { value: 'asap', label: 'ASAP', desc: 'Within 1 month' },
  { value: '1-3mo', label: '1–3 Months', desc: 'Planning ahead' },
  { value: '3-6mo', label: '3–6 Months', desc: 'Early stages' },
  { value: 'flexible', label: 'Flexible', desc: 'No rush' },
];

const budgets = [
  { value: '5-15k', label: '$5K – $15K', desc: 'Small project' },
  { value: '15-30k', label: '$15K – $30K', desc: 'Mid-range' },
  { value: '30-60k', label: '$30K – $60K', desc: 'Major reno' },
  { value: '60k+', label: '$60K+', desc: 'Full renovation' },
];

function isServiceZip(zip: string): boolean {
  if (!/^\d{5}$/.test(zip)) return false;
  const p = parseInt(zip.slice(0, 2), 10);
  return (p >= 60 && p <= 61) || (p >= 46 && p <= 47);
}

export default function CostEstimator() {
  const [step, setStep] = useState(1);
  const [selectedTrade, setSelectedTrade] = useState<string | null>(null);
  const [zip, setZip] = useState('');
  const [zipTouched, setZipTouched] = useState(false);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const zipValid = isServiceZip(zip);
  const step2Valid = zipValid && timeline && budget;
  const step3Valid = name.trim().length > 1 && phone.trim().length >= 10 && /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async () => {
    if (!selectedTrade || !step2Valid || !step3Valid) return;
    setSubmitting(true);
    setError(null);
    const result = await submitLead({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      trade: estimatorTrades.find((t) => t.id === selectedTrade)?.name || selectedTrade,
      zip_code: zip,
      timeline: timelines.find((t) => t.value === timeline)?.label || timeline,
      budget: budgets.find((b) => b.value === budget)?.label || budget,
    });
    setSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || 'Something went wrong. Please call us instead.');
    }
  };

  const reset = () => {
    setSubmitted(false);
    setStep(1);
    setSelectedTrade(null);
    setZip('');
    setZipTouched(false);
    setTimeline(null);
    setBudget(null);
    setName('');
    setPhone('');
    setEmail('');
    setError(null);
  };

  const progress = (step / 3) * 100;

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-gradient-to-b from-[#F8FAFC] to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#F59E0B] font-semibold text-sm tracking-[0.15em] uppercase">Free Estimate</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B192C] mt-3 mb-4 tracking-tight">
            Get Your Free Estimate in 3 Steps
          </h2>
          <p className="text-lg text-gray-600">
            No long forms. No typing out your address. Just pick, click, and we call you.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/40 overflow-hidden">
          {submitted ? (
            /* Success state */
            <div className="p-10 lg:p-16 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0B192C] mb-3">Estimate Request Received!</h3>
              <p className="text-gray-600 text-lg mb-2">
                Thanks, {name.split(' ')[0]}. A Keenahm project manager will call you at {phone} within one business day.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                We have also sent a confirmation to {email}. Check your spam folder if you do not see it.
              </p>
              <button
                onClick={reset}
                className="text-[#F59E0B] font-semibold hover:text-[#D97706] transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="bg-[#0B192C] px-6 py-5 lg:px-10">
                <div className="flex items-center justify-between mb-3">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                          step >= s
                            ? 'bg-[#F59E0B] text-[#0B192C]'
                            : 'bg-white/10 text-gray-500'
                        }`}
                      >
                        {step > s ? <Check className="w-5 h-5" /> : s}
                      </div>
                      <span className={`hidden sm:block text-sm font-medium ${step >= s ? 'text-white' : 'text-gray-500'}`}>
                        {s === 1 ? 'Trade' : s === 2 ? 'Scope' : 'Contact'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F59E0B] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="p-6 lg:p-10">
                {/* Step 1: Trade Selection */}
                {step === 1 && (
                  <div className="animate-[fadeInUp_0.3s_ease-out]">
                    <h3 className="text-xl font-bold text-[#0B192C] mb-1">What trade do you need?</h3>
                    <p className="text-gray-500 text-sm mb-6">Select the trade that best matches your project.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {estimatorTrades.map((trade) => {
                        const Icon = trade.icon as LucideIcon;
                        const selected = selectedTrade === trade.id;
                        return (
                          <button
                            key={trade.id}
                            onClick={() => setSelectedTrade(trade.id)}
                            className={`group relative p-4 rounded-2xl border-2 transition-all text-center ${
                              selected
                                ? 'border-[#F59E0B] bg-[#F59E0B]/10'
                                : 'border-gray-200 hover:border-[#F59E0B]/50 hover:bg-gray-50'
                            }`}
                          >
                            {selected && (
                              <div className="absolute top-2 right-2 w-5 h-5 bg-[#F59E0B] rounded-full flex items-center justify-center">
                                <Check className="w-3.5 h-3.5 text-[#0B192C]" strokeWidth={3} />
                              </div>
                            )}
                            <Icon
                              className={`w-8 h-8 mx-auto mb-2 transition-colors ${
                                selected ? 'text-[#F59E0B]' : 'text-gray-400 group-hover:text-[#F59E0B]'
                              }`}
                              strokeWidth={2}
                            />
                            <span className={`text-sm font-semibold ${selected ? 'text-[#0B192C]' : 'text-gray-700'}`}>
                              {trade.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2: Scope & ZIP */}
                {step === 2 && (
                  <div className="animate-[fadeInUp_0.3s_ease-out]">
                    <h3 className="text-xl font-bold text-[#0B192C] mb-1">Project scope &amp; location</h3>
                    <p className="text-gray-500 text-sm mb-6">Tell us your ZIP, timeline, and budget range.</p>

                    {/* ZIP */}
                    <div className="mb-6">
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#0B192C] mb-2">
                        <MapPin className="w-4 h-4 text-[#F59E0B]" />
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        value={zip}
                        onChange={(e) => setZip(e.target.value.replace(/\D/g, ''))}
                        onBlur={() => setZipTouched(true)}
                        placeholder="60601"
                        className={`w-full sm:w-48 text-lg font-mono tracking-wider px-4 py-3 rounded-xl border-2 transition-all focus:outline-none ${
                          zipValid
                            ? 'border-green-500 bg-green-50 text-[#0B192C]'
                            : zipTouched && zip.length === 5
                            ? 'border-red-400 bg-red-50 text-[#0B192C]'
                            : 'border-gray-200 focus:border-[#F59E0B] text-[#0B192C]'
                        }`}
                      />
                      {zipValid && (
                        <p className="text-green-600 text-sm mt-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Great — you are in our service area!
                        </p>
                      )}
                      {zipTouched && zip.length === 5 && !zipValid && (
                        <p className="text-red-500 text-sm mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" /> Outside our service zone. Call us to discuss options.
                        </p>
                      )}
                    </div>

                    {/* Timeline */}
                    <div className="mb-6">
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#0B192C] mb-2">
                        <Calendar className="w-4 h-4 text-[#F59E0B]" />
                        Timeline
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timelines.map((t) => (
                          <button
                            key={t.value}
                            onClick={() => setTimeline(t.value)}
                            className={`p-3 rounded-xl border-2 transition-all text-center ${
                              timeline === t.value
                                ? 'border-[#F59E0B] bg-[#F59E0B]/10'
                                : 'border-gray-200 hover:border-[#F59E0B]/50'
                            }`}
                          >
                            <span className="block text-sm font-bold text-[#0B192C]">{t.label}</span>
                            <span className="block text-xs text-gray-500 mt-0.5">{t.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="mb-2">
                      <label className="flex items-center gap-2 text-sm font-semibold text-[#0B192C] mb-2">
                        <DollarSign className="w-4 h-4 text-[#F59E0B]" />
                        Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {budgets.map((b) => (
                          <button
                            key={b.value}
                            onClick={() => setBudget(b.value)}
                            className={`p-3 rounded-xl border-2 transition-all text-center ${
                              budget === b.value
                                ? 'border-[#F59E0B] bg-[#F59E0B]/10'
                                : 'border-gray-200 hover:border-[#F59E0B]/50'
                            }`}
                          >
                            <span className="block text-sm font-bold text-[#0B192C]">{b.label}</span>
                            <span className="block text-xs text-gray-500 mt-0.5">{b.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact */}
                {step === 3 && (
                  <div className="animate-[fadeInUp_0.3s_ease-out]">
                    <h3 className="text-xl font-bold text-[#0B192C] mb-1">Where can we reach you?</h3>
                    <p className="text-gray-500 text-sm mb-6">A project manager will call you within one business day.</p>

                    <div className="space-y-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-[#0B192C] mb-2">
                          <User className="w-4 h-4 text-[#F59E0B]" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F59E0B] focus:outline-none text-[#0B192C] transition-all"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-[#0B192C] mb-2">
                          <Phone className="w-4 h-4 text-[#F59E0B]" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(312) 555-0100"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F59E0B] focus:outline-none text-[#0B192C] transition-all"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-semibold text-[#0B192C] mb-2">
                          <Mail className="w-4 h-4 text-[#F59E0B]" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@email.com"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F59E0B] focus:outline-none text-[#0B192C] transition-all"
                        />
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Your Request</p>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="bg-[#0B192C] text-white px-3 py-1 rounded-full">
                          {estimatorTrades.find((t) => t.id === selectedTrade)?.name}
                        </span>
                        <span className="bg-[#0B192C] text-white px-3 py-1 rounded-full">ZIP {zip}</span>
                        <span className="bg-[#0B192C] text-white px-3 py-1 rounded-full">
                          {timelines.find((t) => t.value === timeline)?.label}
                        </span>
                        <span className="bg-[#0B192C] text-white px-3 py-1 rounded-full">
                          {budgets.find((b) => b.value === budget)?.label}
                        </span>
                      </div>
                    </div>

                    {error && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex items-center gap-1 text-gray-500 hover:text-[#0B192C] font-medium text-sm transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 3 ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={step === 1 ? !selectedTrade : !step2Valid}
                      className="flex items-center gap-1.5 bg-[#F59E0B] hover:bg-[#D97706] disabled:bg-gray-300 disabled:cursor-not-allowed text-[#0B192C] font-bold text-sm px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/30"
                    >
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!step3Valid || submitting}
                      className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] disabled:bg-gray-300 disabled:cursor-not-allowed text-[#0B192C] font-bold text-sm px-7 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/30"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get Free Estimate
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
