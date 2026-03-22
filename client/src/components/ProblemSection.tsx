/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Bento grid layout showing the cost of slow follow-up
 * Terminal-style data presentation
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    stat: "78%",
    label: "of deals go to the first responder",
    description:
      "Harvard Business Review found that companies responding within 5 minutes are 100x more likely to connect with a lead.",
    color: "#00E5FF",
  },
  {
    icon: DollarSign,
    stat: "$1.2M",
    label: "average annual revenue leaked",
    description:
      "Businesses with 50+ monthly leads lose over a million dollars yearly from delayed or missed follow-ups alone.",
    color: "#7C3AED",
  },
  {
    icon: Users,
    stat: "67%",
    label: "of leads never get a response",
    description:
      "Most sales teams are overwhelmed. Two-thirds of inbound leads are never contacted, representing pure waste on ad spend.",
    color: "#00E5FF",
  },
  {
    icon: AlertTriangle,
    stat: "5 min",
    label: "is the maximum window to engage",
    description:
      "After 5 minutes, lead contact rates drop by 400%. After 30 minutes, the lead is effectively lost to your competition.",
    color: "#7C3AED",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest">
            // The Problem
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8ED] leading-tight">
            Every Minute Costs You{" "}
            <span className="text-[#00E5FF]">Money</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B6B80] max-w-2xl">
            Your ad spend generates leads. But if your team takes hours — or
            days — to respond, you are paying to send customers to your
            competitors.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-16 grid sm:grid-cols-2 gap-4 lg:gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="group relative bg-[#12121A] border border-[#1E1E2E] rounded-xl p-6 lg:p-8 hover:border-[color:var(--hover-color)] transition-all duration-300"
              style={{ "--hover-color": `${problem.color}33` } as React.CSSProperties}
            >
              {/* Top edge glow on hover */}
              <div
                className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${problem.color}40, transparent)`,
                }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${problem.color}10` }}
                >
                  <problem.icon
                    className="w-6 h-6"
                    style={{ color: problem.color }}
                  />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-[family-name:var(--font-mono)] text-3xl lg:text-4xl font-bold"
                      style={{ color: problem.color }}
                    >
                      {problem.stat}
                    </span>
                  </div>
                  <p className="text-sm text-[#8E8E9A] font-medium mt-1">
                    {problem.label}
                  </p>
                  <p className="text-sm text-[#6B6B80] mt-3 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
