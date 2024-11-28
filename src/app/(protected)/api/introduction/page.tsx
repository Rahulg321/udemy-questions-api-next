"use client";

import React, { useState } from "react";
import Introduction from "@/components/markdown/api/introduction.mdx";
import Link from "next/link";
import { Sparkles, Rocket, Code, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "overview",
    icon: Sparkles,
    title: "Overview",
    content: `Our mission is to make course creation accessible and delightful for educators.

We provide a simple REST API, which delivers AI-powered course generation, including:

- Practice test questions
- Course content generation
- Student engagement analytics
- Performance tracking
- Content optimization
- Export capabilities

We support 30,000+ topics, going back across all major certification providers.

Our platform is perfect for building online courses, practice test platforms, learning management systems, educational tools, and more.`,
  },
  {
    id: "getting-started",
    icon: Rocket,
    title: "Getting Started",
    content: `To get started with our API, you'll need:

1. Create an account and obtain your API key
2. Choose your course topic or certification
3. Make your first API call
4. Export generated content to your platform`,
  },
  {
    id: "examples",
    icon: Code,
    title: "Examples",
    content: null,
    codeExample: {
      title: "Generate Practice Test Questions",
      description:
        "Here's how to generate practice test questions using our API:",
      code: `const response = await fetch('https://api.coursegen.ai/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    certification: "AWS Solutions Architect",
    questionsCount: 5,
    topics: ["EC2", "S3", "VPC"]
  })
});

const result = await response.json();
const taskId = result.task_id;

// Check task status
const statusResponse = await fetch(\`https://api.coursegen.ai/v1/status/\${taskId}\`, {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const status = await statusResponse.json();
console.log(\`Task status: \${status.status}\`);`,
    },
  },
];

const ApiIntroductionPage = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };
  return (
    <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      {/* Main content */}
      <div className="mx-auto">
        <div className="prose prose-invert mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-4xl font-bold">Introduction</h1>
            <p className="mb-12 text-xl">
              Welcome to Course Generator API, a developer-friendly course
              creation platform.
            </p>
          </motion.div>

          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12"
            >
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <section.icon className="h-6 w-6 text-indigo-400" />
                {section.title}
              </h2>

              {section.content && (
                <div className="space-y-4">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <div key={i}>
                      {paragraph.startsWith("-") ? (
                        <ul className="ml-4 list-inside list-disc space-y-2">
                          {paragraph.split("\n").map((item, j) => (
                            <li key={j}>{item.replace("- ", "")}</li>
                          ))}
                        </ul>
                      ) : paragraph.match(/^\d\./) ? (
                        <ol className="ml-4 list-inside list-decimal space-y-2">
                          {paragraph.split("\n").map((item, j) => (
                            <li key={j}>{item.replace(/^\d\.\s/, "")}</li>
                          ))}
                        </ol>
                      ) : (
                        <p>{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.codeExample && (
                <div className="mt-6">
                  <h3 className="mb-2 text-lg font-medium">
                    {section.codeExample.title}
                  </h3>
                  <p className="mb-4 text-gray-400">
                    {section.codeExample.description}
                  </p>
                  <div className="group relative bg-muted">
                    <div className="relative">
                      <div className="absolute right-4 top-4 z-10">
                        <button
                          onClick={() =>
                            handleCopyCode(section.codeExample.code)
                          }
                          className={cn(
                            "rounded-lg p-2 transition-colors",
                            copiedCode
                              ? "bg-green-500/20 text-green-400"
                              : "text-gray-400 hover:bg-gray-400 hover:text-black dark:bg-gray-800/50 dark:hover:bg-gray-800",
                          )}
                        >
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                      <pre className="relative overflow-x-auto rounded-lg border border-gray-800 p-6 backdrop-blur-sm dark:bg-gray-900/75">
                        <code className="text-sm dark:text-gray-300">
                          {section.codeExample.code}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </motion.section>
          ))}
        </div>
      </div>
      <div className="hidden border-l-2 text-sm xl:block">
        <div className="sticky top-24 h-[calc(100vh-3.5rem)] px-4">
          <div className="no-scrollbar h-full overflow-auto pb-10">
            <p>On this page</p>
            <nav className="mt-4 space-y-4">
              <Link
                href="/api/introduction#Overview"
                className="group block transition-colors duration-200 hover:text-blue-500"
              >
                <span className="transition-transform duration-200 group-hover:scale-125">
                  ✨
                </span>
                <span className="ml-1 group-hover:underline">Overview</span>
              </Link>
              <Link
                href="/api/introduction#getting-started"
                className="group block transition-colors duration-200 hover:text-blue-500"
              >
                <span className="transition-transform duration-200 group-hover:scale-125">
                  🚀
                </span>
                <span className="ml-1 group-hover:underline">
                  Getting Started
                </span>
              </Link>
              <Link
                href="/api/introduction#Examples"
                className="group block transition-colors duration-200 hover:text-blue-500"
              >
                <span className="transition-transform duration-200 group-hover:scale-125">
                  👩‍💻
                </span>
                <span className="ml-1 group-hover:underline">Examples</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIntroductionPage;
