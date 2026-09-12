import { HardHat, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B192C] border-t border-white/10">
      {/* CTA bar */}
      <div id="portal" className="bg-[#F59E0B] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0B192C] tracking-tight">
                Ready to start your project?
              </h3>
              <p className="text-[#0B192C]/80 mt-1">Get a free estimate today — no obligation, no pressure.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+13125550100"
                className="flex items-center justify-center gap-2 bg-[#0B192C] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#1E293B] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (312) 555-0100
              </a>
              <a
                href="#estimator"
                className="flex items-center justify-center gap-2 bg-[#0B192C] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#1E293B] transition-colors"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-[#0B192C]" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-lg tracking-tight">KEENAHM</span>
                <span className="block text-[#F59E0B] text-[10px] font-semibold tracking-[0.2em] uppercase">Construction Inc.</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Master craftsmen serving Chicagoland and Northwest Indiana since 2009. Licensed, bonded, and built on referrals.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#F59E0B] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Carpentry', 'Electrical', 'HVAC', 'Masonry', 'Painting', 'Plumbing'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#why-keenahm" className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors">Why Keenahm</a></li>
              <li><a href="#before-after" className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors">Before / After</a></li>
              <li><a href="#service-areas" className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors">Service Areas</a></li>
              <li><a href="#financing" className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors">Financing</a></li>
              <li><a href="#portal" className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors">Customer Portal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <a href="tel:+13125550100" className="hover:text-white transition-colors">(312) 555-0100</a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <a href="mailto:info@keenahm.com" className="hover:text-white transition-colors">info@keenahm.com</a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                Chicago, IL &amp; NW Indiana
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Keenahm Construction Inc. All rights reserved. Licensed IL #058-123456 &middot; IN #29287
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
