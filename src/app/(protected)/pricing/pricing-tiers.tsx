"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals getting started",
    gradient: "from-blue-500/10 to-indigo-500/10",
    features: [
      "Up to 3 projects",
      "Basic API access",
      "Community support",
      "1GB storage",
      "Weekly backups",
    ],
    icon: Zap,
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Ideal for professionals and growing teams",
    gradient: "from-indigo-500/10 to-purple-500/10",
    features: [
      "Unlimited projects",
      "Advanced API access",
      "Priority support",
      "10GB storage",
      "Daily backups",
      "Custom integrations",
      "Analytics dashboard",
    ],
    icon: Star,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations with advanced needs",
    gradient: "from-purple-500/10 to-pink-500/10",
    features: [
      "Unlimited everything",
      "24/7 premium support",
      "100GB storage",
      "Real-time backups",
      "Custom solutions",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced security",
    ],
    icon: Star,
    popular: false,
  },
];

export default function PricingTiers() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen overflow-hidden py-20 dark:bg-gray-900">
      {theme === "dark" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/5 via-gray-900 to-gray-900" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400"
          >
            Pricing
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
          >
            Choose Your Plan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-xl text-gray-400"
          >
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} rounded-2xl opacity-50 blur-xl`}
              />

              <div className="relative rounded-2xl border bg-muted p-8 backdrop-blur-sm transition-colors duration-300 group-hover:border-indigo-500/50 dark:border-gray-700 dark:bg-gray-800/50">
                {tier.popular && (
                  <div className="absolute -top-4 right-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}

                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
                    <tier.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-indigo-400">
                    {tier.name}
                  </h3>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>

                  <p className="mb-6 text-gray-500 dark:text-gray-400">
                    {tier.description}
                  </p>

                  <Button className="mb-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                    Get Started
                  </Button>

                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                      >
                        <Check className="mr-3 h-5 w-5 text-indigo-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400">
            All plans include 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
