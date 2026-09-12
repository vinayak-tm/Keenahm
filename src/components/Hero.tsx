import { ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/8961401/pexels-photo-8961401.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Keenahm Construction crew on site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/90 to-[#0B192C]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-[#0B192C]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full px-4 py-1.5 mb-6 animate-[fadeInUp_0.6s_ease-out]">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-[#F59E0B] text-sm font-semibold tracking-wide">Licensed & Insured — Illinois & Indiana</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 animate-[fadeInUp_0.7s_ease-out]">
            Built Right.
            <br />
            <span className="text-[#F59E0B]">Delivered On Time.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl animate-[fadeInUp_0.8s_ease-out]">
            Keenahm Construction Inc. brings 15+ years of master craftsmanship to Chicagoland and Northwest Indiana — from single-trade repairs to full-home renovations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-[fadeInUp_0.9s_ease-out]">
            <a
              href="#estimator"
              className="group flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0B192C] font-bold text-base px-7 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Get Your Free Estimate
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#before-after"
              className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all hover:bg-white/5"
            >
              See Our Transformations
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 animate-[fadeInUp_1s_ease-out]">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">1,150+ satisfied clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-gray-300 text-sm">On-time delivery guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#0B192C]/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-5">
            {[
              { value: '1,200+', label: 'Houses Completed' },
              { value: '15+', label: 'Years Experience' },
              { value: '1,150+', label: 'Happy Clients' },
              { value: '6', label: 'Licensed Trades' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-[#F59E0B]">{stat.value}</div>
                <div className="text-xs lg:text-sm text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
