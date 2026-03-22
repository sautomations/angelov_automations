/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Floating navbar with backdrop blur, edge glow line at bottom
 * Space Grotesk for brand, DM Sans for nav links
 */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#00E5FF]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#00E5FF] to-[#7C3AED] flex items-center justify-center">
              <span className="font-[family-name:var(--font-display)] font-bold text-sm text-[#0A0A0F]">
                A
              </span>
            </div>
            <span className="font-[family-name:var(--font-display)] font-semibold text-lg text-[#E8E8ED] group-hover:text-[#00E5FF] transition-colors">
              Angelov
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B6B80] hover:text-[#00E5FF] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#calculator">
              <Button
                variant="outline"
                className="border-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/40 text-sm font-medium"
              >
                Calculate ROI
              </Button>
            </a>
            <a href="#cta">
              <Button className="bg-[#00E5FF] text-[#0A0A0F] hover:bg-[#00E5FF]/90 font-semibold text-sm glow-cyan">
                Book a Demo
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#E8E8ED] p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#00E5FF]/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[#6B6B80] hover:text-[#00E5FF] transition-colors text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a href="#calculator" onClick={() => setMobileOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-[#00E5FF]/20 text-[#00E5FF] hover:bg-[#00E5FF]/10"
                  >
                    Calculate ROI
                  </Button>
                </a>
                <a href="#cta" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-[#00E5FF] text-[#0A0A0F] hover:bg-[#00E5FF]/90 font-semibold mt-2">
                    Book a Demo
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
