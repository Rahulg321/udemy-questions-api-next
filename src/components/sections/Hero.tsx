"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen, DollarSign } from "lucide-react";
import Ripple from "@/components/ui/ripple";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { useTheme } from "next-themes";

const features = [
  {
    icon: Sparkles,
    text: "AI-Powered Generation",
    gradient: "from-blue-500 to-indigo-500",
    delay: 0,
  },
  {
    icon: BookOpen,
    text: "Practice Test Creation",
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.1,
  },
  {
    icon: DollarSign,
    text: "Monetization Tools",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
];

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="hero-gradient relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient overlay */}
      {theme === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-gray-900/80 to-gray-900" />
      )}

      {/* Ripple Effect */}
      <Ripple className="z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4"
          >
            <AnimatedGradientText>
              Introducing Udemy Practice Exam Creator
            </AnimatedGradientText>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create Udemy Courses
            <span className="text-indigo-400"> with AI</span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Generate high-quality practice tests and course content in minutes.
            Monetize your expertise with AI-powered course creation.
          </motion.p>

          <motion.div
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-indigo-600 px-8 py-4 font-medium text-white transition-all hover:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
              <Sparkles className="relative z-10 h-5 w-5 transition-transform group-hover:rotate-12" />
              <span className="relative z-10">Start Creating</span>
            </motion.button>

            <motion.button
              className="group flex items-center justify-center gap-2 rounded-lg border-2 border-gray-700 bg-gray-800 px-8 py-4 font-medium text-white transition-all hover:border-gray-600 hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="h-5 w-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Enhanced feature icons */}
          <motion.div
            className="relative mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + item.delay }}
                className="group relative"
              >
                <motion.div
                  className={`mx-auto h-16 w-16 rounded-2xl bg-gradient-to-r ${item.gradient} relative p-0.5`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-900 transition-colors group-hover:bg-gray-800">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                    <item.icon className="relative z-10 h-8 w-8 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  </div>
                </motion.div>

                <motion.p
                  className="mt-4 font-medium transition-colors group-hover:text-indigo-400"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
