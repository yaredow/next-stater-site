import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";

import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <DocsLayout
      nav={{ ...baseOptions.nav, mode: "auto" }}
      tabMode="navbar"
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
