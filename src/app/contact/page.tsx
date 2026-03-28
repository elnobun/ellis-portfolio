import { ArrowRight, GitBranch, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getContactContent } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Ellis",
  description: "Get in touch about front-end engineering, design systems, or product UI work.",
  path: "/contact"
});

const contactCards = [
  {
    label: "Email",
    value: "hello@curator.dev",
    icon: Mail,
    color: "text-accent bg-accent/10"
  },
  {
    label: "Location",
    value: "San Francisco, CA",
    icon: MapPin,
    color: "text-green bg-green/10"
  },
  {
    label: "GitHub",
    value: "@technical_curator",
    icon: GitBranch,
    color: "text-red bg-red/10"
  }
];

export default async function ContactPage() {
  const content = await getContactContent();

  return (
    <Section className="px-6 pb-24 pt-28">
      <Container className="max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-[-0.05em] text-foreground md:text-6xl">
            Let&apos;s Build <span className="bg-[linear-gradient(135deg,rgb(var(--accent)),rgb(var(--accent-soft)))] bg-clip-text text-transparent">Together</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            I am currently <span className="inline-flex items-center gap-1.5 rounded-full bg-green/25 px-3 py-1 text-sm font-bold text-green"><span className="h-2 w-2 rounded-full bg-green" />Available for work</span> and looking for new challenges in software engineering and technical product design.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] bg-surface shadow-soft">
          <div className="h-1.5 w-full bg-[linear-gradient(90deg,rgb(var(--accent)),rgb(var(--accent-soft)),rgb(var(--green)))]" />
          <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="bg-[linear-gradient(180deg,rgba(0,88,188,0.04),transparent)] px-8 py-10 md:px-10 md:py-12">
              <p className="eyebrow">Start a conversation</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">Tell me about the product, team, and problem space.</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">Share as much or as little detail as you like. I am especially interested in front-end systems, product UI, platform rebuilds, and CMS-backed experiences.</p>
              <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                <div className="rounded-xl bg-elevated p-4">
                  <p className="font-semibold text-foreground">Best for</p>
                  <p className="mt-1 leading-7">Portfolio rebuilds, design systems, performance improvements, and product UX refinements.</p>
                </div>
                <div className="rounded-xl bg-elevated p-4">
                  <p className="font-semibold text-foreground">Typical response time</p>
                  <p className="mt-1 leading-7">Within 1-2 business days.</p>
                </div>
              </div>
            </div>
            <form className="space-y-8 px-8 py-10 md:px-10 md:py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-[0.06em] text-muted-foreground">Full Name</label>
                <input id="name" name="name" placeholder="John Doe" className="w-full rounded-xl bg-elevated px-5 py-4 text-foreground outline-none ring-0 placeholder:text-border transition focus:-translate-y-0.5 focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-[0.06em] text-muted-foreground">Email Address</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" className="w-full rounded-xl bg-elevated px-5 py-4 text-foreground outline-none ring-0 placeholder:text-border transition focus:-translate-y-0.5 focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/40" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-[0.06em] text-muted-foreground">Your Message</label>
              <textarea id="message" name="message" rows={6} placeholder="Tell me about your project or just say hi..." className="w-full resize-none rounded-xl bg-elevated px-5 py-4 text-foreground outline-none ring-0 placeholder:text-border transition focus:-translate-y-0.5 focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/40" />
            </div>
            <div className="flex justify-center pt-2 sm:justify-start">
              <Link href={`mailto:${content.email}`} className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent)),rgb(var(--accent-soft)))] px-10 py-4 text-lg font-bold text-accent-foreground shadow-[0_18px_34px_rgba(0,88,188,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(0,88,188,0.22)]">
                Send Message
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            </form>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-4 rounded-xl bg-elevated p-6 shadow-soft">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">{item.label}</p>
                  <p className="text-xl font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
