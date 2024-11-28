import Footer from "@/components/Footer";
import ApiSidebar from "@/components/sidebars/api-sidebar";
import DocsSidebar from "@/components/sidebars/docs-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import AsideSidebar from "./aside-sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 items-start dark:bg-gray-900/80 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <AsideSidebar />
      <div className="dark:bg-gray-900">{children}</div>
    </div>
  );
};

export default layout;
