import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteConfig } from "@/configs/site.config";
import {
  OrganizationJsonLd,
  WebsiteSchemaJsonLd,
} from "@/components/seo/structured-data";
import { cn } from "@/lib/utils";

import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/ui/footer";
import { Icons } from "@/components/shared/icons";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["system-ui", "arial"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  fallback: ["system-ui", "arial"],
});

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  fallback: ["system-ui", "arial"],
});

export const metadata = SiteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <WebsiteSchemaJsonLd
          siteUrl={SiteConfig.openGraph?.url?.toString() || ""}
        />
        <OrganizationJsonLd
          name="Next.js Starter Template"
          url={SiteConfig.openGraph?.url?.toString() || ""}
          logo={`${SiteConfig.openGraph?.url}/logo.png`}
          sameAs={["https://github.com/yaredow/nextjs-starter-template"]}
        />
      </head>
      <body
        className={cn(
          `min-h-screen antialiased ${fontSans.variable} ${fontMono.variable} ${fontMontserrat.variable}`,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader />
          <div>
            <Header />
            {children}
            <Footer
              socialLinks={[
                {
                  icon: <Icons.twitter className="h-5 w-5" />,
                  href: "https://twitter.com/yared_ow",
                  label: "Twitter",
                },
                {
                  icon: <Icons.gitHub className="h-5 w-5" />,
                  href: "https://github.com/yaredow",
                  label: "GitHub",
                },
              ]}
              mainLinks={[
                { href: "/products", label: "Products" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ]}
              legalLinks={[
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
              ]}
              copyright={{
                text: "© 2025 Yared Yilma",
              }}
            />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
