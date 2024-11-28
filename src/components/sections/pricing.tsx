"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    name: "AI Course Generation",
    description: "Generate complete course content with AI",
  },
  {
    name: "Practice Test Creation",
    description: "Auto-generate practice tests and quizzes",
  },
  {
    name: "Export to Udemy",
    description: "One-click export to Udemy platform",
  },
  {
    name: "Analytics Dashboard",
    description: "Track course performance and engagement",
  },
  {
    name: "Custom Branding",
    description: "Add your brand colors and logo",
  },
  {
    name: "Priority Support",
    description: "24/7 priority email and chat support",
  },
];

export default function Pricing() {
  return (
    <section className="relative min-h-screen overflow-hidden py-20 dark:bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-6xl">
            We like keeping things simple
          </h2>
          <p className="text-3xl font-semibold md:text-5xl">
            One plan one price.
          </p>
        </motion.div>

        <div className="relative">
          {/* Half-moon gradient using SVG */}
          <div className="absolute inset-x-0 top-0 -mt-40">
            <svg
              className="w-full"
              viewBox="0 0 1440 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M0 400C0 400 360 0 720 0C1080 0 1440 400 1440 400H0Z"
                fill="url(#gradient-pricing)"
              />
              <defs>
                <linearGradient
                  id="gradient-pricing"
                  x1="720"
                  y1="0"
                  x2="720"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-baseline">
              <span className="text-7xl font-bold md:text-8xl">$29</span>
              <span className="ml-2 text-xl dark:text-gray-400">/month</span>
            </div>
            <p className="mt-2 dark:text-gray-400">(billed annually)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 pt-1">
                    <Check className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                    <p className="dark:text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <button className="inline-flex items-center space-x-2 rounded-lg bg-indigo-600 px-8 py-4 font-medium text-white transition-colors hover:bg-indigo-700">
                Start your 14-day free trial
              </button>
              <p className="mt-4 text-gray-400">No credit card required</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
