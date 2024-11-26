import React from "react";
import Introduction from "@/components/markdown/api/introduction.mdx";

export const metadata = {
  title: "API Introduction",
  description: "Introduction to the API",
};

const ApiIntroductionPage = async () => {
  return (
    <div className="">
      <article className="prose">
        <Introduction />
      </article>
      <div className="w-64 fixed right-0 top-16 bottom-0 overflow-y-auto border-l  backdrop-blur-sm p-6">
        <div className="sticky top-6">
          <h3 className="text-sm font-medium text-gray-400 mb-4">
            On this page
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ApiIntroductionPage;
