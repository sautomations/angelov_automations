/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * "Under the Hood" technical differentiators
 * Asymmetric bento grid with varying card sizes
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Wrench,
  Shield,
  Calendar,
  StopCircle,
  Server,
  Code,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Human-Sounding AI",
    description:
      "Our conversational AI uses advanced NLP to text naturally — no robotic scripts. Leads can't tell the difference.",
    span: "sm:col-span-1",
  },
  {
    icon: Layers,
    title: "Multi-Message Intelligence",
    description:
      "When leads send multiple messages in a row, our AI processes them all before responding — just like a real human would.",
    span: "sm:col-span-1",
  },
  {
    icon: Calendar,
    title: "In-Conversation Scheduling",
    description:
      "No booking links. The AI schedules appointments dynamically within the conversation itself, resulting in 3x higher booking rates.",
    span: "sm:col-span-1",
  },
  {
    icon: StopCircle,
    title: "Smart Stop Sequence",
    description:
      "AI knows when to stop. If a lead isn't interested, the conversation ends gracefully — protecting your brand reputation.",
    span: "sm:col-span-1",
  },
  {
    icon: Server,
    title: "Azure Enterprise Servers",
    description:
      "Custom solutions deployed on robust Azure infrastructure. End-to-end encryption, 99.9% uptime, and zero reliance on fragile no-code tools.",
    span: "sm:col-span-1",
  },
  {
    icon: Code,
    title: "Custom Integrations",
    description:
      "We build custom-coded integrations to your existing calendar, CRM, and tech stack. No workflow changes required on your end.",
    span: "sm:col-span-1",
  },
  {
    icon: Wrench,
    title: "Done-For-You Setup",
    description:
      "Our team handles everything — from AI training to integration to launch. You're live in under 7 days with zero technical effort.",
    span: "sm:col-span-1",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure with end-to-end encryption. Your customer data is protected at every touchpoint.",
    span: "sm:col-span-1",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D0D14] to-[#0A0A0F]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest">
            // Under The Hood
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8ED] leading-tight">
            Built Different.{" "}
            <span className="text-[#6B6B80]">Not Duct-Taped.</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B6B80] max-w-2xl">
            While others rely on Zapier chains and ChatGPT wrappers, we build
            custom AI systems on enterprise infrastructure. Here's what sets us
            apart.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className={`group relative bg-[#12121A] border border-[#1E1E2E] rounded-xl p-6 hover:border-[#00E5FF]/20 transition-all duration-300 ${feature.span}`}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/0 to-transparent group-hover:via-[#00E5FF]/30 transition-all duration-300" />

              <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00E5FF]/15 transition-colors">
                <feature.icon className="w-5 h-5 text-[#00E5FF]" />
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#E8E8ED] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6B6B80] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
