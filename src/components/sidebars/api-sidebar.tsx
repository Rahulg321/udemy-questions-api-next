"use client";

import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Menu items with nested structure
const items = [
  {
    title: "Get Started",
    icon: Home,
    subItems: [{ title: "Introduction", url: "/api/introduction" }],
  },
  {
    title: "Endpoints",
    icon: Inbox,
    subItems: [
      { title: "Create API Key", url: "/api/create-api-key" },
      { title: "Generate Questions", url: "/api/generate-questions" },
      { title: "Get Task Status", url: "/api/get-task-status" },
      { title: "Download CSV", url: "/api/download-csv" },
    ],
  },
  {
    title: "Guides",
    icon: Calendar,
    subItems: [
      { title: "Authentication", url: "#authentication" },
      { title: "Error Handling", url: "#error-handling" },
    ],
  },
  {
    title: "Resources",
    icon: Search,
    subItems: [
      { title: "API Reference", url: "#api-reference" },
      { title: "SDKs", url: "#sdks" },
    ],
  },
  {
    title: "Support",
    icon: Settings,
    subItems: [
      { title: "FAQ", url: "#faq" },
      { title: "Contact Us", url: "#contact-us" },
    ],
  },
];

export default function ApiSidebar() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <Sidebar variant="inset" className="top-[--header-height]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>API Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Collapsible
                    open={openSections.includes(item.title)}
                    onOpenChange={() => toggleSection(item.title)}
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-200" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent asChild>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
