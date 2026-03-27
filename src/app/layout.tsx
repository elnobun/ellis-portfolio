import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { getSiteSettings } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Ellis | Front-end Engineer",
  description:
    "A modern portfolio and case-study platform for a front-end engineer focused on careful UI, strong systems, and measurable product outcomes."
});

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(34,120,84,0.12),_transparent_42%)] dark:bg-[radial-gradient(circle_at_top,_rgba(95,204,158,0.12),_transparent_42%)]" />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer settings={settings} />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
