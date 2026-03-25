/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Full-width CTA with gradient mesh background
 * Strong conversion-focused copy
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389925414/PdgZrBsavUGDgTLhcr6yQv/cta-bg-Vtk223ATxu9VpCUPhUbYPs.webp"
          alt="Futuristic digital landscape background for booking a free AI automation demo"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0A0A0F]/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest">
            // Ready to Start?
          </span>

          <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-6xl font-bold text-[#E8E8ED] leading-tight">
            Stop Burning Leads.
            <br />
            <span className="text-[#00E5FF] glow-text-cyan">
              Start Closing Them.
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#8E8E9A] max-w-2xl mx-auto leading-relaxed">
            Book a free 15-minute demo and see exactly how our AI would handle
            your leads. No commitment, no pressure — just a live demonstration
            of what you've been missing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:zabivkataone@gmail.com">
              <Button
                size="lg"
                className="bg-[#00E5FF] text-[#0A0A0F] hover:bg-[#00E5FF]/90 font-bold text-base px-10 h-14 glow-cyan-strong group"
              >
                Book Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:2139074122">
              <Button
                size="lg"
                variant="outline"
                className="border-[#2A2A3A] text-[#E8E8ED] hover:bg-[#12121A] hover:border-[#00E5FF]/30 font-medium text-base px-10 h-14"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call (213) 907-4122
              </Button>
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#6B6B80]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00E5FF]" />
              <a href="mailto:zabivkataone@gmail.com" className="hover:text-[#00E5FF] transition-colors">
                zabivkataone@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#00E5FF]" />
              <a href="tel:2139074122" className="hover:text-[#00E5FF] transition-colors">
                (213) 907-4122
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
