/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Horizontal scrolling industry cards with icon + glow
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Car,
  Plane,
  Sun,
  Home,
  Stethoscope,
  Hammer,
  Building,
  Paintbrush,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

const industries = [
  { name: "Automotive", icon: Car },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Solar Energy", icon: Sun },
  { name: "Roofing", icon: Home },
  { name: "Healthcare & Clinics", icon: Stethoscope },
  { name: "Home Remodeling", icon: Hammer },
  { name: "Real Estate", icon: Building },
  { name: "Interior Design", icon: Paintbrush },
  { name: "E-Commerce", icon: ShoppingBag },
  { name: "Professional Services", icon: Briefcase },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest">
            // Industries
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8ED] leading-tight">
            Proven Across{" "}
            <span className="text-[#00E5FF]">Every Industry</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B6B80]">
            Our AI adapts to your industry's language, objections, and buying
            cycle. Here are some of the verticals where we've driven remarkable
            results.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="group relative bg-[#12121A] border border-[#1E1E2E] rounded-xl p-5 flex flex-col items-center text-center hover:border-[#00E5FF]/20 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center mb-3 group-hover:bg-[#00E5FF]/15 transition-colors">
                  <industry.icon className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <p className="text-sm font-medium text-[#8E8E9A] group-hover:text-[#E8E8ED] transition-colors">
                  {industry.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
