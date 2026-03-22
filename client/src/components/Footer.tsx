/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Minimal footer with edge line top border
 */
export default function Footer() {
  return (
    <footer className="relative border-t border-[#1E1E2E]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#00E5FF] to-[#7C3AED] flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] font-bold text-sm text-[#0A0A0F]">
                  A
                </span>
              </div>
              <span className="font-[family-name:var(--font-display)] font-semibold text-lg text-[#E8E8ED]">
                Angelov Automations
              </span>
            </div>
            <p className="text-sm text-[#6B6B80] max-w-sm leading-relaxed">
              AI-powered revenue operations for businesses that refuse to leave
              money on the table. Custom-built automation on enterprise
              infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#process" },
                { label: "Pricing", href: "#pricing" },
                { label: "Industries", href: "#industries" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#6B6B80] hover:text-[#00E5FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-[#6B6B80]">
              <li>
                <a href="mailto:zabivkataone@gmail.com" className="hover:text-[#00E5FF] transition-colors">
                  zabivkataone@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:2139074122" className="hover:text-[#00E5FF] transition-colors">
                  (213) 907-4122
                </a>
              </li>
              <li>Los Angeles, CA</li>
              <li>Available Online Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1E1E2E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6B80]">
            &copy; {new Date().getFullYear()} Angelov Automations Corp. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#6B6B80]">
            <a href="#" className="hover:text-[#00E5FF] transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
