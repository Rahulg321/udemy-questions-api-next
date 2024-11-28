"use client";

import { motion } from "framer-motion";
import { Brain, Target, Rocket, PenTool, BarChart, Zap } from "lucide-react";
import { useTheme } from "next-themes";

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description:
      "Generate comprehensive practice tests and course materials using advanced AI",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Target,
    title: "Topic Analysis",
    description:
      "AI analyzes your subject matter to create relevant, targeted questions",
    gradient: "from-indigo-500/10 to-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Quick Creation",
    description: "Create complete course content in minutes, not hours or days",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: PenTool,
    title: "Custom Editing",
    description:
      "Fine-tune and customize generated content to match your style",
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: BarChart,
    title: "Performance Tracking",
    description: "Monitor course performance and student engagement metrics",
    gradient: "from-rose-500/10 to-orange-500/10",
  },
  {
    icon: Zap,
    title: "Instant Export",
    description: "Export directly to Udemy's platform with one click",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
];

export default function Features() {
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
            Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
          >
            Powerful Features for
            <br />
            Course Creators
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-xl text-gray-400"
          >
            Everything you need to create engaging courses and practice tests
            that students love
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
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
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-50 blur-xl`}
              />

              <div className="relative rounded-2xl border bg-muted p-8 backdrop-blur-sm transition-colors duration-300 group-hover:border-indigo-500/50 dark:border-gray-700 dark:bg-gray-800/50">
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-indigo-400">
                    {feature.title}
                  </h3>

                  <p className="transition-colors duration-300 dark:text-gray-400 dark:group-hover:text-gray-300">
                    {feature.description}
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
