"use client";

import { ChevronDown } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import type { SiteSettings } from "@/types";

type HeroProps = {
  settings: SiteSettings;
};

export function Hero({ settings }: HeroProps) {
  const scrollToWork = () => {
    const target = document.getElementById("curated-artifacts");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  void settings;

  return (
    <Section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6 pb-20 pt-16 text-center sm:pt-20 lg:pt-24">
      <Container>
        <div className="absolute left-[-10%] top-20 h-[40%] w-[40%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-20 right-[-10%] h-[40%] w-[40%] rounded-full bg-green/10 blur-[120px]" />
        <Reveal className="relative z-10 mx-auto max-w-5xl space-y-8">
          <span className="inline-block rounded-full bg-elevated px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-soft">
            Available for New Projects
          </span>
          <div className="space-y-6">
            <h1 className="text-balance text-5xl font-extrabold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Crafting Digital Experiences with <span className="text-accent italic">Precision</span> and Care
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A Full-Stack Developer and UI Architect specializing in high-performance web applications that merge technical rigor with human-centric design.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <ButtonLink href="/projects" className="px-10 py-4 text-lg font-bold shadow-[0_18px_34px_rgba(0,88,188,0.2)]">
              View My Work
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="px-10 py-4 text-lg font-bold">
              Get in Touch
            </ButtonLink>
          </div>
        </Reveal>
        <button
          type="button"
          onClick={scrollToWork}
          className="scroll-pulse absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition hover:text-foreground"
          aria-label="Scroll to curated artifacts"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </Container>
    </Section>
  );
}
