import { useState, useEffect } from 'react';
import { Phone, Menu, X, HardHat, Calculator } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Keenahm', href: '#why-keenahm' },
  { label: 'Before / After', href: '#before-after' },
  { label: 'Areas', href: '#service-areas' },
  { label: 'Financing', href: '#financing' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B192C]/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-[#0B192C]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-11 lg:h-11 bg-[#F59E0B] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <HardHat className="w-6 h-6 text-[#0B192C]" strokeWidth={2.5} />
              </div>
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-lg lg:text-xl tracking-tight">KEENAHM</span>
              <span className="block text-[#F59E0B] text-[10px] lg:text-xs font-semibold tracking-[0.2em] uppercase">Construction Inc.</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#F59E0B] text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F59E0B] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13125550100"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              (312) 555-0100
            </a>
            <a
              href="#portal"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Customer Portal
            </a>
            <a
              href="#estimator"
              className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0B192C] font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              <Calculator className="w-4 h-4" />
              Free Estimate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0B192C] border-t border-white/10 animate-[fadeIn_0.2s_ease-out]">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 text-gray-300 hover:text-[#F59E0B] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 pb-2 space-y-2 border-t border-white/10 mt-3">
              <a
                href="tel:+13125550100"
                className="flex items-center gap-2 py-3 px-4 text-gray-300 hover:text-white text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                (312) 555-0100
              </a>
              <a href="#portal" className="block py-3 px-4 text-gray-300 hover:text-white text-sm font-medium">
                Customer Portal
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#F59E0B] text-[#0B192C] font-bold text-sm px-5 py-3 rounded-lg mt-2"
              >
                <Calculator className="w-4 h-4" />
                Free Estimate
              </a>
            </div>
          </nav>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden grid grid-cols-2 gap-2 bg-[#0B192C]/95 backdrop-blur-md border-t border-white/10 p-2 pb-[calc(8px+env(safe-area-inset-bottom))]">
        <a
          href="tel:+13125550100"
          className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4 text-[#F59E0B]" />
          Call Now
        </a>
        <a
          href="#estimator"
          className="flex items-center justify-center gap-2 rounded-lg bg-[#F59E0B] py-3 text-sm font-bold text-[#0B192C]"
        >
          <Calculator className="h-4 w-4" />
          Free Estimate
        </a>
      </div>
    </header>
  );
}
