import type { MDXComponents } from "mdx/types";
import Code from "./reusable-code";
import React from "react";
import Image from "next/image";

// React component you want, including inline styles,
// components from other libraries, and more.'

function slugify(str: any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: any) {
  const Heading = ({ children }: any) => {
    const slug = slugify(children);

    return React.createElement(
      `h${level}`,
      { id: slug },
      React.createElement(
        "a",
        {
          href: `#${slug}`,
          className: "",
        },
        children // Ensure the children (text content) are inside the <a> tag
      )
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="mt-4 rounded-lg" {...props} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    p: (props: any) => <p className="mb-4" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
    li: (props: any) => <li className="mb-2" {...props} />,
    pre: (props: any) => <pre className=" p-2 rounded mb-4" {...props} />,
    code: Code,
    ...components,
  };
}
