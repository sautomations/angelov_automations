/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Horizontal 3-step process with connecting lines
 * Terminal-style step numbers, edge glow accents
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, Bot, CalendarCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Megaphone,
    title: "Lead Comes In",
    subtitle: "From any campaign source",
    description:
      "Whether it's Facebook Ads, Google, your website, or a referral — the moment a lead enters your pipeline, our AI activates instantly.",
  },
  {
    num: "02",
    icon: Bot,
    title: "AI Engages Instantly",
    subtitle: "Via SMS, WhatsApp & Web Chat",
    description:
      "Our AI initiates a natural, human-sounding conversation within seconds. It qualifies the lead, answers questions, and handles objections in real time.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Appointment Booked",
    subtitle: "Directly on your calendar",
    description:
      "Qualified leads are seamlessly booked into your team's calendar — no booking links, no friction. Your sales team only talks to ready-to-buy prospects.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-24 lg:py-32" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389925414/PdgZrBsavUGDgTLhcr6yQv/process-section-RtCSeBsntdYmzd4z3DJZVB.webp"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0A0A0F]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest">
            // How It Works
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8ED] leading-tight">
            Three Steps to{" "}
            <span className="text-[#00E5FF]">Never Miss a Lead</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B6B80]">
            From first contact to booked appointment — fully automated, fully
            human-sounding, fully integrated with your existing tools.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid lg:grid-cols-3 gap-6 lg:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
              className="relative"
            >
              {/* Connecting line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 * (i + 1) }}
                    className="w-full h-full bg-gradient-to-r from-[#00E5FF]/30 to-[#7C3AED]/30 origin-left"
                  />
                </div>
              )}

              <div className="relative bg-[#12121A]/60 border border-[#1E1E2E] rounded-xl p-8 lg:mx-3 hover:border-[#00E5FF]/20 transition-colors duration-300 group">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-[family-name:var(--font-mono)] text-5xl font-bold text-[#1E1E2E] group-hover:text-[#00E5FF]/10 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#E8E8ED]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#00E5FF] font-medium mt-1">
                  {step.subtitle}
                </p>
                <p className="text-sm text-[#6B6B80] mt-4 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/15 to-transparent" />
    </section>
  );
}
