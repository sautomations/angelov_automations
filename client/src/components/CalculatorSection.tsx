/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Interactive ROI calculator with terminal-style output
 * Slider inputs, real-time calculation, glowing results
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export default function CalculatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [newLeads, setNewLeads] = useState(100);
  const [currentCustomers, setCurrentCustomers] = useState(200);
  const [agedLeads, setAgedLeads] = useState(500);

  // Revenue calculations
  const avgDealValue = 500;
  const newLeadConversionLift = 0.15; // 15% more conversions
  const upsellRate = 0.08; // 8% upsell rate
  const agedLeadRevival = 0.05; // 5% revival rate

  const newLeadRevenue = Math.round(newLeads * newLeadConversionLift * avgDealValue * 12);
  const upsellRevenue = Math.round(currentCustomers * upsellRate * avgDealValue * 12);
  const agedLeadRevenue = Math.round(agedLeads * agedLeadRevival * avgDealValue);
  const totalRevenue = newLeadRevenue + upsellRevenue + agedLeadRevenue;

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <section id="calculator" className="relative py-24 lg:py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389925414/PdgZrBsavUGDgTLhcr6yQv/roi-section-DgE6dECZzMP9H446Kre7cu.webp"
          alt="Data analytics visualization background for ROI revenue calculator"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0A0A0F]/85" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest">
            // ROI Calculator
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8ED] leading-tight">
            Calculate Your{" "}
            <span className="text-[#00E5FF]">Lost Revenue</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B6B80]">
            Adjust the sliders to match your business. See how much additional
            revenue AI automation can unlock for you annually.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* New Leads */}
            <div className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm text-[#8E8E9A] font-medium uppercase tracking-wide">
                  New Leads Per Month
                </label>
                <span className="font-[family-name:var(--font-mono)] text-xl font-bold text-[#00E5FF]">
                  {newLeads}
                </span>
              </div>
              <Slider
                value={[newLeads]}
                onValueChange={(v) => setNewLeads(v[0])}
                min={10}
                max={1000}
                step={10}
                className="[&_[role=slider]]:bg-[#00E5FF] [&_[role=slider]]:border-none [&_[role=slider]]:shadow-[0_0_10px_rgba(0,229,255,0.4)] [&_.relative>div:first-child]:bg-[#1E1E2E] [&_.relative>div:first-child>div]:bg-gradient-to-r [&_.relative>div:first-child>div]:from-[#00E5FF] [&_.relative>div:first-child>div]:to-[#7C3AED]"
              />
              <div className="flex justify-between mt-2 text-xs text-[#6B6B80] font-[family-name:var(--font-mono)]">
                <span>10</span>
                <span>1,000</span>
              </div>
            </div>

            {/* Current Customers */}
            <div className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm text-[#8E8E9A] font-medium uppercase tracking-wide">
                  Current Customers to Upsell
                </label>
                <span className="font-[family-name:var(--font-mono)] text-xl font-bold text-[#7C3AED]">
                  {currentCustomers}
                </span>
              </div>
              <Slider
                value={[currentCustomers]}
                onValueChange={(v) => setCurrentCustomers(v[0])}
                min={10}
                max={5000}
                step={10}
                className="[&_[role=slider]]:bg-[#7C3AED] [&_[role=slider]]:border-none [&_[role=slider]]:shadow-[0_0_10px_rgba(124,58,237,0.4)] [&_.relative>div:first-child]:bg-[#1E1E2E] [&_.relative>div:first-child>div]:bg-gradient-to-r [&_.relative>div:first-child>div]:from-[#7C3AED] [&_.relative>div:first-child>div]:to-[#00E5FF]"
              />
              <div className="flex justify-between mt-2 text-xs text-[#6B6B80] font-[family-name:var(--font-mono)]">
                <span>10</span>
                <span>5,000</span>
              </div>
            </div>

            {/* Aged Leads */}
            <div className="bg-[#12121A] border border-[#1E1E2E] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm text-[#8E8E9A] font-medium uppercase tracking-wide">
                  Aged Leads in Your Database
                </label>
                <span className="font-[family-name:var(--font-mono)] text-xl font-bold text-[#00E5FF]">
                  {agedLeads.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[agedLeads]}
                onValueChange={(v) => setAgedLeads(v[0])}
                min={100}
                max={50000}
                step={100}
                className="[&_[role=slider]]:bg-[#00E5FF] [&_[role=slider]]:border-none [&_[role=slider]]:shadow-[0_0_10px_rgba(0,229,255,0.4)] [&_.relative>div:first-child]:bg-[#1E1E2E] [&_.relative>div:first-child>div]:bg-gradient-to-r [&_.relative>div:first-child>div]:from-[#00E5FF] [&_.relative>div:first-child>div]:to-[#7C3AED]"
              />
              <div className="flex justify-between mt-2 text-xs text-[#6B6B80] font-[family-name:var(--font-mono)]">
                <span>100</span>
                <span>50,000</span>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#00E5FF]/10 to-[#7C3AED]/10 rounded-2xl blur-xl" />
                <div className="relative bg-[#12121A] border border-[#1E1E2E] rounded-xl p-6 space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-2 pb-4 border-b border-[#1E1E2E]">
                    <Calculator className="w-4 h-4 text-[#00E5FF]" />
                    <span className="text-xs font-[family-name:var(--font-mono)] text-[#6B6B80] uppercase tracking-widest">
                      Revenue Projection
                    </span>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                        <span className="text-sm text-[#8E8E9A]">New Lead Conversions</span>
                      </div>
                      <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[#E8E8ED]">
                        {formatCurrency(newLeadRevenue)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                        <span className="text-sm text-[#8E8E9A]">Customer Upsells</span>
                      </div>
                      <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[#E8E8ED]">
                        {formatCurrency(upsellRevenue)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                        <span className="text-sm text-[#8E8E9A]">Aged Lead Revival</span>
                      </div>
                      <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[#E8E8ED]">
                        {formatCurrency(agedLeadRevenue)}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-[#00E5FF]/30 via-[#7C3AED]/30 to-[#00E5FF]/30" />

                  {/* Total */}
                  <div className="text-center py-4">
                    <p className="text-xs text-[#6B6B80] uppercase tracking-widest mb-2">
                      You're Missing Out On
                    </p>
                    <p className="font-[family-name:var(--font-mono)] text-4xl lg:text-5xl font-bold text-[#00E5FF] glow-text-cyan">
                      {formatCurrency(totalRevenue)}
                    </p>
                    <p className="text-sm text-[#6B6B80] mt-2">per year</p>
                  </div>

                  {/* CTA */}
                  <a href="#cta" className="block">
                    <button className="w-full py-3 px-6 bg-[#00E5FF] text-[#0A0A0F] font-semibold rounded-lg hover:bg-[#00E5FF]/90 transition-colors glow-cyan flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Recover This Revenue
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
