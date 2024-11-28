"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const data = {
  navMain: [
    {
      title: "Get Started",
      url: "#",
      items: [
        {
          title: "Introduction",
          url: "/api/introduction",
        },
      ],
    },
    {
      title: "API Guide",
      url: "#",
      items: [
        {
          title: "Create API Key",
          url: "/api/create-api-key",
        },
        {
          title: "Generate Questions",
          url: "/api/generate-questions",
        },
        {
          title: "Get Task Status",
          url: "/api/get-task-status",
        },
        {
          title: "Download CSV",
          url: "/api/download-csv",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
      ],
    },
  ],
};

const AsideSidebar = () => {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  return (
    <aside className="top-16 z-30 hidden w-full shrink-0 border-r border-border/40 dark:border-border md:sticky md:block">
      <div className="no-scrollbar h-full overflow-auto py-6 pr-6 lg:py-8">
        <div className="w-full">
          {data.navMain.map((section) => (
            <div key={section.title} className="pb-4">
              <Collapsible
                open={openSections.includes(section.title)}
                onOpenChange={() => toggleSection(section.title)}
              >
                <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-semibold hover:bg-accent hover:text-accent-foreground">
                  {section.title}
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-2">
                  <div className="mt-1 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className={cn(
                          "block rounded-md px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground",
                          pathname === item.url
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default AsideSidebar;
