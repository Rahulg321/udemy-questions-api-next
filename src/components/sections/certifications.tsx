"use client";

import { motion } from "framer-motion";
import IconCloud from "../ui/icon-cloud";
import { useTheme } from "next-themes";

const techIcons = [
  "typescript",
  "javascript",
  "java",
  "python",
  "react",
  "angular",
  "vuedotjs",
  "amazonaws",
  "googlecloud",
  "microsoftazure",
  "docker",
  "kubernetes",
  "linux",
  "windows",
  "cisco",
  "vmware",
  "oracle",
  "mongodb",
  "postgresql",
  "mysql",
  "redis",
  "nginx",
  "apache",
  "git",
  "github",
  "gitlab",
  "jenkins",
  "terraform",
  "ansible",
  "prometheus",
];

export default function Certifications() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen overflow-hidden py-20 dark:bg-gray-900">
      {theme === "dark" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-900/10 to-gray-900" />
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
            Certifications
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-4xl font-bold md:text-6xl"
          >
            Practice Tests for
            <br />
            Popular Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-16 max-w-2xl text-xl dark:text-gray-300"
          >
            Generate high-quality practice tests for the most in-demand
            certifications across various technologies
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-radial relative h-[600px] w-full from-indigo-500/5 via-transparent to-transparent"
        >
          <IconCloud iconSlugs={techIcons} />
        </motion.div>
      </div>
    </section>
  );
}
