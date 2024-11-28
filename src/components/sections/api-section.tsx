"use client";

import { motion } from "framer-motion";
import { Download, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface ApiEndpoint {
  method: "GET" | "POST";
  title: string;
  description: string;
  endpoint: string;
  json: string;
}

const apiEndpoints: ApiEndpoint[] = [
  {
    method: "POST",
    title: "Create API Key",
    description:
      "Generate a new API key for accessing the course creation endpoints.",
    endpoint: "/api/create-api-key",
    json: `{
  "user_id": "apidemo"
}`,
  },
  {
    method: "POST",
    title: "Generate Questions",
    description:
      "Create AI-powered practice test questions for any subject or certification.",
    endpoint: "/api/generate-questions",
    json: `{
  "certificationName": "NVIDIA-Certified Associate: AI Infrastructure and Operations",
  "questionsPerTopic": 2,
  "topics": [
    "Describe the NVIDIA software stack used in an AI environment",
    "Compare and contrast training and inference architecture requirements and considerations",
    "Understand the process of extracting insights from large datasets using data mining, data visualization, and similar techniques"
  ]
}`,
  },
  {
    method: "GET",
    title: "Task Status",
    description: "Check the status of your question generation task.",
    endpoint: "/api/task-status/{task_id}",
    json: `{
  "status": "completed",
  "result": "NVIDIA-Certified_Associate:_AI_Infrastructure_and_Operations_ed971662-d43c-4963-92bc-9f74b723gh65.csv",
  "created_at": "2024-10-25T09:22:07.882081",
  "updated_at": "2024-10-25T09:22:57.532838"
}`,
  },
  {
    method: "GET",
    title: "Download CSV",
    description:
      "Download generated questions in CSV format for easy importing.",
    endpoint: "/api/download-csv/{filename}",
    json: `{
 "content-disposition": "attachment; filename=NVIDIA-Certified_Associate:_AI_Infrastructure_and_Operations_ed971662-d43c-4963-92bc-9f74b723cf11.csv" 
 "content-length": "10790" 
 "content-type:" "text/csv; charset=utf-8" 
 "date": "Fri,25 Oct 2024 09:27:02 GMT"
 "etag": "e288ca1fcdd9441ada93bcc53361a474"
 "last-modified": "Fri,25 Oct 2024 09:22:57 GMT"
 "server": "uvicorn"
}`,
  },
];

export default function ApiSection() {
  const { theme } = useTheme();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (json: string, index: number) => {
    await navigator.clipboard.writeText(json);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleDownload = (json: string, endpoint: string) => {
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${endpoint.replace("/", "-")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Filter endpoints by method
  const postEndpoints = apiEndpoints.filter(
    (endpoint) => endpoint.method === "POST",
  );

  const getEndpoints = apiEndpoints.filter(
    (endpoint) => endpoint.method === "GET",
  );

  return (
    <section className="relative py-20">
      {/* Background gradients */}
      {theme === "dark" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-4xl font-bold md:text-6xl"
          >
            Finally, a course creator API
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              designed for creators
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-3xl text-xl text-gray-400"
          >
            Our API provides Udemy Practice Test Course creation for any
            subject, any certification, any complexity, any vendor.
          </motion.p>
        </motion.div>

        {/* POST endpoints */}
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {postEndpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />

                <div className="relative h-full rounded-lg bg-muted p-6 dark:bg-gray-900">
                  <h3 className="mb-2 text-xl font-semibold">
                    {endpoint.title}
                  </h3>
                  <p className="mb-4">{endpoint.description}</p>

                  <div className="mb-4 flex items-center space-x-2">
                    <span className="rounded bg-blue-500/10 px-2 py-1 text-sm font-medium text-blue-400">
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-sm dark:text-gray-400">
                      {endpoint.endpoint}
                    </code>
                  </div>

                  <div className="relative">
                    <div className="absolute right-4 top-4 flex items-center space-x-2">
                      <button
                        onClick={() => handleCopy(endpoint.json, index)}
                        className="rounded-lg p-2 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4 text-gray-400" />
                        {copiedIndex === index && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs text-white">
                            Copied!
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() =>
                          handleDownload(endpoint.json, endpoint.endpoint)
                        }
                        className="rounded-lg p-2 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                        title="Download JSON"
                      >
                        <Download className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>

                    <div className="overflow-x-auto rounded-lg bg-gray-200 p-4 font-mono text-sm dark:bg-gray-800">
                      <pre className="leading-loose dark:text-gray-300">
                        {endpoint.json}
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GET endpoints */}
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {getEndpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />

                <div className="relative h-full rounded-lg bg-muted p-6 dark:bg-gray-900">
                  <h3 className="mb-2 text-xl font-semibold">
                    {endpoint.title}
                  </h3>
                  <p className="mb-4">{endpoint.description}</p>

                  <div className="mb-4 flex items-center space-x-2">
                    <span className="rounded bg-emerald-500/10 px-2 py-1 text-sm font-medium text-emerald-400">
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-sm dark:text-gray-400">
                      {endpoint.endpoint}
                    </code>
                  </div>

                  <div className="relative">
                    <div className="absolute right-4 top-4 flex items-center space-x-2">
                      <button
                        onClick={() =>
                          handleCopy(
                            endpoint.json,
                            index + postEndpoints.length,
                          )
                        }
                        className="rounded-lg p-2 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4 text-gray-400" />
                        {copiedIndex === index + postEndpoints.length && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs text-white">
                            Copied!
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() =>
                          handleDownload(endpoint.json, endpoint.endpoint)
                        }
                        className="rounded-lg p-2 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                        title="Download JSON"
                      >
                        <Download className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>

                    <div className="overflow-x-auto rounded-lg bg-gray-200 p-4 font-mono text-sm dark:bg-gray-800">
                      <pre className="leading-loose">{endpoint.json}</pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
