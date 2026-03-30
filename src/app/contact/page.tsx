import { ArrowRight, GitBranch, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { AccentText } from "@/components/ui/accent-text";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getContactContent } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Ellis",
  description: "Get in touch about front-end engineering, design systems, or product UI work.",
  path: "/contact"
});

export const revalidate = 60;

export default async function ContactPage() {
  const content = await getContactContent();
  const contactCards = [
    {
      label: "Email",
      value: content.email,
      href: `mailto:${content.email}`,
      icon: Mail,
      color: "text-accent bg-accent/10"
    },
    {
      label: "LinkedIn",
      value: content.linkedIn.replace(/^https?:\/\//, ""),
      href: content.linkedIn,
      icon: MapPin,
      color: "text-green bg-green/10"
    },
    {
      label: "GitHub",
      value: content.github.replace(/^https?:\/\//, ""),
      href: content.github,
      icon: GitBranch,
      color: "text-red bg-red/10"
    }
  ];

  return (
    <Section className="px-6 pb-20 pt-26">
      <Container className="max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-[-0.05em] text-foreground md:text-6xl">
            <AccentText text={content.heading} />
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[1.02rem] leading-8 text-muted-foreground">
            {content.supportingText}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-lg border border-border/20 bg-surface px-8 py-10 shadow-soft md:px-10 md:py-12">
              <p className="eyebrow">{content.eyebrowLabel}</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">{content.panelHeading}</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{content.panelBody}</p>
              <div className="mt-7 space-y-3 text-sm text-muted-foreground">
                <div className="rounded-md border border-border/15 bg-elevated/85 p-4">
                  <p className="font-semibold text-foreground">{content.bestForTitle}</p>
                  <p className="mt-1 leading-7">{content.bestForBody}</p>
                </div>
                <div className="rounded-md border border-border/15 bg-elevated/85 p-4">
                  <p className="font-semibold text-foreground">{content.responseTitle}</p>
                  <p className="mt-1 leading-7">{content.responseBody}</p>
                </div>
              </div>
          </div>
          <form className="space-y-7 rounded-lg border border-border/20 bg-surface px-8 py-10 shadow-soft md:px-10 md:py-12">
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <div className="space-y-2.5">
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-[0.06em] text-muted-foreground">{content.nameLabel}</label>
                  <input id="name" name="name" placeholder="John Doe" className="w-full rounded-md border border-border/20 bg-background px-5 py-4 text-foreground outline-none ring-0 placeholder:text-border transition focus:-translate-y-0.5 focus:border-accent/25 focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/15" />
                </div>
                <div className="space-y-2.5">
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-[0.06em] text-muted-foreground">{content.emailLabel}</label>
                  <input id="email" name="email" type="email" placeholder="john@example.com" className="w-full rounded-md border border-border/20 bg-background px-5 py-4 text-foreground outline-none ring-0 placeholder:text-border transition focus:-translate-y-0.5 focus:border-accent/25 focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/15" />
                </div>
              </div>
              <div className="space-y-2.5">
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-[0.06em] text-muted-foreground">{content.messageLabel}</label>
                <textarea id="message" name="message" rows={6} placeholder="Tell me about your project or just say hi..." className="w-full resize-none rounded-md border border-border/20 bg-background px-5 py-4 text-foreground outline-none ring-0 placeholder:text-border transition focus:-translate-y-0.5 focus:border-accent/25 focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/15" />
              </div>
              <div className="flex justify-center pt-1 sm:justify-start">
                <Link href={`mailto:${content.email}`} className="inline-flex items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,rgb(var(--accent)),rgb(var(--accent-soft)))] px-10 py-4 text-lg font-bold text-accent-foreground shadow-[0_18px_34px_rgba(0,88,188,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(0,88,188,0.2)]">
                  {content.submitLabel}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <Link href={item.href} key={item.label} className="flex items-center gap-4 rounded-lg border border-border/20 bg-elevated p-6 shadow-soft transition hover:border-accent/20 hover:bg-surface">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">{item.label}</p>
                  <p className="text-xl font-medium text-foreground">{item.value}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
