import ApiSidebar from "@/components/sidebars/api-sidebar";
import DocsSidebar from "@/components/sidebars/docs-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <ApiSidebar />
      <SidebarInset className="h-full peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4)-var(--header-height))]">
        <div className="">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
