"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import { highlight } from "sugar-high";
import { cn } from "./lib/utils";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
export default function Code({ children, ...props }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeHTML = highlight(children);

  return (
    <div className="relative group border-2 p-4 rounded-md leading-tight">
      <code
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        className="hljs" // Ensure the highlight.js class is added
        style={{}} // Adjust the line-height as needed
        {...props}
      />
    </div>
  );
}
