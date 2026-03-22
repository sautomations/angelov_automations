/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Full-bleed hero with generated background, asymmetric layout
 * Space Grotesk display type, terminal-style stat counters
 */
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-mono)] tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389925414/PdgZrBsavUGDgTLhcr6yQv/hero-bg-kihQ899CtBGNBjt2FTwveK.webp"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/60 via-[#0A0A0F]/40 to-[#0A0A0F]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-xs font-medium text-[#00E5FF] tracking-wide uppercase">
                  AI-Powered Revenue Operations
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-[#E8E8ED]">Stop Losing </span>
              <span className="text-[#00E5FF] glow-text-cyan">Revenue</span>
              <br />
              <span className="text-[#E8E8ED]">to Slow </span>
              <span className="text-[#6B6B80]">Follow-Up</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-[#8E8E9A] max-w-xl leading-relaxed"
            >
              Our AI engages every lead in under 60 seconds via SMS, WhatsApp, and
              Web Chat — qualifying prospects and booking appointments while your
              competitors are still checking their inbox.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#cta">
                <Button
                  size="lg"
                  className="bg-[#00E5FF] text-[#0A0A0F] hover:bg-[#00E5FF]/90 font-semibold text-base px-8 h-12 glow-cyan group"
                >
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#calculator">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#2A2A3A] text-[#E8E8ED] hover:bg-[#12121A] hover:border-[#00E5FF]/30 font-medium text-base px-8 h-12"
                >
                  Calculate Your Lost Revenue
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right: Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00E5FF]/5 to-[#7C3AED]/5 rounded-2xl blur-xl" />

              <div className="relative bg-[#12121A]/80 backdrop-blur-sm border border-[#1E1E2E] rounded-xl p-6 space-y-5">
                {/* Header */}
                <div className="flex items-center gap-2 pb-4 border-b border-[#1E1E2E]">
                  <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="text-xs font-[family-name:var(--font-mono)] text-[#6B6B80] uppercase tracking-widest">
                    Live Performance Metrics
                  </span>
                </div>

                {/* Stats */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[#00E5FF]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6B6B80] uppercase tracking-wide">Avg Response Time</p>
                        <p className="text-2xl font-bold text-[#E8E8ED]">
                          <AnimatedCounter target={47} suffix="s" prefix="< " />
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-[#00E5FF] font-[family-name:var(--font-mono)]">-94%</span>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-[#1E1E2E] to-transparent" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-[#7C3AED]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6B6B80] uppercase tracking-wide">Conversion Lift</p>
                        <p className="text-2xl font-bold text-[#E8E8ED]">
                          +<AnimatedCounter target={37} suffix="%" />
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-[#7C3AED] font-[family-name:var(--font-mono)]">avg</span>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-[#1E1E2E] to-transparent" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-[#00E5FF]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6B6B80] uppercase tracking-wide">Revenue Recovered</p>
                        <p className="text-2xl font-bold text-[#E8E8ED]">
                          $<AnimatedCounter target={2} suffix=".4M+" />
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-[#00E5FF] font-[family-name:var(--font-mono)]">2024</span>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-4 border-t border-[#1E1E2E]">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 rounded-full bg-[#1E1E2E] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full"
                      />
                    </div>
                    <span className="text-xs font-[family-name:var(--font-mono)] text-[#6B6B80]">78% lead capture rate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
    </section>
  );
}
