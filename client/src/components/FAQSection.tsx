/*
 * DESIGN: Noir Command Center — Cyberpunk Brutalism
 * Accordion FAQ with edge glow accents
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you get us set up?",
    answer:
      "Most clients are fully live within 7 days. Our done-for-you setup process includes AI training on your specific industry, CRM integration, calendar sync, and conversation flow optimization. We handle everything — you just approve the final scripts.",
  },
  {
    question: "Does the AI actually sound human?",
    answer:
      "Yes. Our AI uses advanced natural language processing to have genuine, context-aware conversations. It handles slang, typos, multi-message threads, and even objections naturally. We've had leads thank our AI for being 'so helpful' without ever realizing they weren't talking to a person.",
  },
  {
    question: "What channels does the AI work on?",
    answer:
      "Currently, our AI engages leads via SMS, WhatsApp, and Web Chat. We're continuously expanding channel support. The AI maintains conversation context across channels, so if a lead starts on your website and continues via SMS, the experience is seamless.",
  },
  {
    question: "Do I need to change my CRM or calendar?",
    answer:
      "No. We build custom integrations to your existing tools — whether that's HubSpot, Salesforce, GoHighLevel, Google Calendar, Calendly, or any other system. You keep your current workflow; we just plug in the AI layer on top.",
  },
  {
    question: "What happens if the AI can't handle a question?",
    answer:
      "The AI is trained to recognize when a conversation requires human intervention. In those cases, it seamlessly hands off to your sales team with full conversation context, so the prospect never has to repeat themselves. You set the escalation rules.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. All plans are month-to-month after the initial setup. We believe in earning your business every month through results, not locking you into contracts. That said, most clients stay because the ROI speaks for itself.",
  },
  {
    question: "How do you measure results?",
    answer:
      "Every plan includes detailed performance dashboards showing response times, conversation rates, booking rates, and revenue attribution. For Revenue Accelerator and Enterprise clients, we provide weekly optimization reports and strategy calls.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We deploy on Azure enterprise servers with end-to-end encryption. All data is processed in compliance with GDPR and CCPA regulations. We never sell or share your customer data — it's yours, period.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#00E5FF] uppercase tracking-widest">
            // FAQ
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8E8ED] leading-tight">
            Common Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#12121A] border border-[#1E1E2E] rounded-xl px-6 data-[state=open]:border-[#00E5FF]/20 transition-colors"
              >
                <AccordionTrigger className="text-left text-[#E8E8ED] hover:text-[#00E5FF] font-[family-name:var(--font-display)] font-medium text-base py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B6B80] text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
