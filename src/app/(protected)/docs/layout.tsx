import DocsSidebar from "@/components/sidebars/docs-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <SidebarInset className="h-full peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4)-var(--header-height))]">
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
