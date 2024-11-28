"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

export default function CTA() {
  const { theme } = useTheme();
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden dark:bg-gray-900">
      {theme === "dark" && (
        <div className="bg-gradient-radial absolute inset-0 from-indigo-500/20 via-gray-900 to-gray-900" />
      )}

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glowing effect */}
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

          <motion.h2
            className="relative mb-6 text-5xl font-bold md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start Creating Today
          </motion.h2>

          <motion.p
            className="mx-auto mb-12 max-w-2xl text-xl dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of course creators who are already using AI to
            generate engaging content and practice tests.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group flex items-center gap-3 rounded-lg bg-indigo-600 px-8 py-4 font-medium text-white transition-colors hover:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="h-5 w-5" />
              Start Free Trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <p className="dark:text-gray-400">No credit card required</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
