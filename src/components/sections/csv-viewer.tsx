"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ResizableColumn } from "@/components/csv/resizable-columns";
import { columns, sampleData } from "@/components/csv/data";
import { FileJson, Sparkles } from "lucide-react";
import ShineBorder from "../ui/shine-border";
import { useTheme } from "next-themes";

export default function CsvViewer() {
  const { theme } = useTheme();

  const [columnWidths, setColumnWidths] = useState<{ [key: string]: number }>(
    Object.fromEntries(columns.map((col) => [col, 300])),
  );

  const handleColumnResize = (column: string, width: number) => {
    setColumnWidths((prev) => ({
      ...prev,
      [column]: width,
    }));
  };

  return (
    <section className="relative pb-20 pt-4 dark:bg-gray-900">
      {theme === "dark" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(99,102,241,0.05)_0deg,transparent_60deg,transparent_300deg,rgba(99,102,241,0.05)_360deg)]" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 px-4 py-1 text-sm text-indigo-400"
          >
            <FileJson className="h-4 w-4" />
            <span>Sample API Response</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            <span className="animate-gradient-text inline-flex bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] bg-clip-text text-transparent">
              Generated Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-3xl text-lg text-gray-400"
          >
            Here&apos;s what you&apos;ll get when you use our API -
            professionally crafted practice test questions with detailed
            explanations
          </motion.p>
        </motion.div>

        <ShineBorder
          borderRadius={16}
          borderWidth={1}
          duration={8}
          color={["#4f46e5", "#7c3aed", "#2563eb"]}
          className="w-full min-w-full bg-transparent p-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full overflow-hidden rounded-xl shadow-2xl backdrop-blur-sm dark:bg-gray-800/50"
          >
            <div className="border-b px-6 py-4 backdrop-blur-sm dark:border-indigo-500/20">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-500/10 p-2">
                  <Sparkles className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    NVIDIA Certified Associate: AI Infrastructure and Operations
                  </h3>
                  <p className="text-sm">Practice Test Questions CSV Format</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="scrollbar-thin scrollbar-thumb-indigo-500/50 scrollbar-track-gray-800/50 h-[400px] overflow-y-auto">
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 z-10 bg-muted dark:bg-gray-800">
                    <tr className="backdrop-blur-sm">
                      {columns.map((column, index) => (
                        <th
                          key={index}
                          className="whitespace-nowrap border-b border-r border-indigo-500/20 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
                        >
                          <ResizableColumn
                            width={columnWidths[column]}
                            onResize={(width) =>
                              handleColumnResize(column, width)
                            }
                          >
                            <div className="px-6 py-4">{column}</div>
                          </ResizableColumn>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="backdrop-blur-sm dark:bg-gray-800/30">
                    {sampleData.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="transition-colors duration-150 dark:hover:bg-indigo-500/5"
                      >
                        {columns.map((column, colIndex) => (
                          <td
                            key={`${rowIndex}-${colIndex}`}
                            className="group border-b border-r border-indigo-500/20"
                          >
                            <div
                              className="px-6 py-6 text-sm"
                              style={{
                                width: `${columnWidths[column]}px`,
                                minWidth: `${columnWidths[column]}px`,
                                maxWidth: `${columnWidths[column]}px`,
                                overflowWrap: "break-word",
                              }}
                            >
                              {row[column as keyof typeof row]}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </ShineBorder>
      </div>
    </section>
  );
}
