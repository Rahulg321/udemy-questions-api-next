import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: any) => <h1 className="text-4xl font-bold mb-4" {...props} />,
    h2: (props: any) => (
      <h2 className="text-2xl font-semibold mt-6 mb-4" {...props} />
    ),
    p: (props: any) => <p className="mb-4" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
    li: (props: any) => <li className="mb-2" {...props} />,
    pre: (props: any) => (
      <pre className="bg-gray-100 p-2 rounded mb-4" {...props} />
    ),
    code: (props: any) => (
      <code className="bg-gray-100 px-1 rounded" {...props} />
    ),
    ...components,
  };
}
