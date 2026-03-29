import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { getSiteSettings } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = buildMetadata({
  title: "Ellis | Front-end Engineer",
  description:
    "A modern portfolio and case-study platform for a front-end engineer focused on careful UI, strong systems, and measurable product outcomes."
});

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(26,115,232,0.12),transparent_42%)] dark:bg-[radial-gradient(circle_at_top,rgba(138,180,248,0.13),transparent_42%)]" />
            <Header contactEmail={settings.contactEmail} />
            <main className="flex-1">{children}</main>
            <Footer settings={settings} />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
