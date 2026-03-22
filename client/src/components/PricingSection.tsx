/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Three-tier pricing with featured middle card
 * Terminal-style headers, edge glow on featured tier
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Rocket, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Core Engine",
    icon: Zap,
    tagline: "Speed to Lead",
    setup: "$997",
    monthly: "$497",
    description:
      "Eliminate the speed-to-lead problem. Every inquiry gets an instant, intelligent response before your competitors even check their inbox.",
    features: [
      "AI response via SMS & WhatsApp",
      "Web chat widget integration",
      "Basic lead qualification",
      "Calendar booking integration",
      "CRM data sync",
      "7-day setup guarantee",
      "Monthly performance reports",
    ],
    featured: false,
    color: "#00E5FF",
  },
  {
    name: "Revenue Accelerator",
    icon: Rocket,
    tagline: "Most Popular",
    setup: "$2,497",
    monthly: "$997",
    description:
      "Unlock hidden revenue in your existing database. Systematically re-engage dormant leads and maximize customer lifetime value.",
    features: [
      "Everything in Core Engine",
      "Database reactivation campaigns",
      "Automated upsell sequences",
      "Cross-sell automation",
      "Advanced lead scoring",
      "Multi-step nurture flows",
      "A/B conversation testing",
      "Dedicated success manager",
      "Weekly optimization calls",
    ],
    featured: true,
    color: "#7C3AED",
  },
  {
    name: "Enterprise Suite",
    icon: Building2,
    tagline: "Custom Built",
    setup: "Custom",
    monthly: "From $2,500",
    description:
      "A fully bespoke automation infrastructure built on Azure servers, tailored to your exact tech stack and business processes.",
    features: [
      "Everything in Revenue Accelerator",
      "Custom Azure server deployment",
      "Multi-system integrations (ERP, CRM)",
      "Predictive analytics dashboard",
      "Custom AI voice & personality",
      "End-to-end encryption",
      "SLA-backed uptime guarantee",
      "Dedicated engineering team",
      "Priority 24/7 support",
    ],
    featured: false,
    color: "#00E5FF",
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest">
            // Pricing
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8ED] leading-tight">
            Invest in <span className="text-[#00E5FF]">Revenue</span>, Not
            Expense
          </h2>
          <p className="mt-4 text-lg text-[#6B6B80]">
            Every plan pays for itself within the first month. Choose the level
            of automation that matches your growth stage.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
              className={`relative group ${tier.featured ? "lg:-mt-4 lg:mb-0" : ""}`}
            >
              {/* Featured glow */}
              {tier.featured && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#7C3AED] via-[#00E5FF]/50 to-[#7C3AED] opacity-40" />
              )}

              <div
                className={`relative rounded-xl overflow-hidden ${
                  tier.featured
                    ? "bg-[#12121A] border-0"
                    : "bg-[#12121A] border border-[#1E1E2E]"
                }`}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] text-center py-2">
                    <span className="text-xs font-bold text-white uppercase tracking-widest">
                      {tier.tagline}
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${tier.color}15` }}
                    >
                      <tier.icon className="w-5 h-5" style={{ color: tier.color }} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#E8E8ED]">
                        {tier.name}
                      </h3>
                      {!tier.featured && (
                        <span className="text-xs text-[#6B6B80]">{tier.tagline}</span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[#6B6B80] leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-[#1E1E2E]">
                    <div className="flex items-baseline gap-1">
                      <span className="font-[family-name:var(--font-mono)] text-3xl font-bold text-[#E8E8ED]">
                        {tier.monthly}
                      </span>
                      <span className="text-sm text-[#6B6B80]">/mo</span>
                    </div>
                    <p className="text-xs text-[#6B6B80] mt-1">
                      {tier.setup === "Custom" ? "Custom setup fee" : `+ ${tier.setup} one-time setup`}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: tier.color }}
                        />
                        <span className="text-sm text-[#8E8E9A]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href="#cta">
                    <Button
                      className={`w-full h-12 font-semibold ${
                        tier.featured
                          ? "bg-gradient-to-r from-[#7C3AED] to-[#00E5FF] text-white hover:opacity-90"
                          : "bg-[#1E1E2E] text-[#E8E8ED] hover:bg-[#2A2A3A] border border-[#2A2A3A]"
                      }`}
                    >
                      {tier.setup === "Custom" ? "Schedule a Call" : "Get Started"}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-[#6B6B80] mt-10"
        >
          All plans include a 30-day performance guarantee. No long-term
          contracts required.
        </motion.p>
      </div>
    </section>
  );
}
