"use client";

import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Input your course topic",
    description: "Simply enter your course subject and target audience",
  },
  {
    number: "02",
    title: "AI generates content",
    description:
      "Our AI creates comprehensive course materials and practice tests",
  },
  {
    number: "03",
    title: "Review and customize",
    description: "Fine-tune the generated content to match your teaching style",
  },
  {
    number: "04",
    title: "Export to Udemy",
    description: "Publish your course with one click and start earning",
  },
];

export default function Demo() {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 dark:bg-gray-900">
      {/* Background gradients */}
      {theme === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
            How it works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-4xl font-bold md:text-6xl"
          >
            Create courses in minutes,
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              not months
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Demo Video/GIF Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur transition duration-1000 group-hover:opacity-50"></div>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm">
              <Image
                src="https://cdn.dribbble.com/users/1626229/screenshots/8165287/media/62e40d0108774b108a66d950e2fc4e5e.gif"
                alt="Product Demo"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />

              {/* Play button overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gray-900/50 opacity-0 transition-opacity group-hover:opacity-100"
                whileHover={{ scale: 1.05 }}
              >
                <button className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20">
                  <Play className="h-6 w-6 fill-white text-white" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Steps Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative flex items-start space-x-6 rounded-lg p-4 transition-colors dark:group-hover:bg-gray-800/50">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 font-bold text-indigo-400">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="mb-2 flex items-center text-xl font-semibold transition-colors group-hover:text-indigo-400">
                      {step.title}
                      <ChevronRight className="ml-2 h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </h3>
                    <p className="transition-colors dark:text-gray-400 dark:group-hover:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
