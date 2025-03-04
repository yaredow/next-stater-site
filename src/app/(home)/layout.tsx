import { HomeLayout } from "fumadocs-ui/layouts/home";
import { RootProvider } from "fumadocs-ui/provider";
import { baseOptions } from "../layout.config";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: HomeLayoutProps) {
  return (
    <RootProvider>
      <HomeLayout {...baseOptions}>{children}</HomeLayout>
    </RootProvider>
  );
}
