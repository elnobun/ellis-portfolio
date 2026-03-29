import { Cloud, Database, Layers3, Sparkles, TerminalSquare, Workflow } from "lucide-react";

import { Container } from "@/components/ui/container";
import { AccentText } from "@/components/ui/accent-text";
import { Section } from "@/components/ui/section";
import type { SiteSettings } from "@/types";

const iconMap = {
  terminal: TerminalSquare,
  database: Database,
  cloud: Cloud,
  workflow: Workflow,
  sparkles: Sparkles,
  layers: Layers3
};

type ToolsOfTradeProps = {
  settings: SiteSettings;
};

export function ToolsOfTrade({ settings }: ToolsOfTradeProps) {
  return (
    <Section className="bg-surface py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="eyebrow mb-4 text-accent">{settings.toolsEyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground"><AccentText text={settings.toolsHeading} accentClassName="text-accent italic" /></h2>
          <p className="mx-auto mt-3 max-w-2xl text-[1.02rem] leading-8 text-muted-foreground">{settings.toolsDescription}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {settings.tools.map((tool) => {
            const Icon = iconMap[tool.icon as keyof typeof iconMap] || Layers3;

            return (
              <div key={tool.label} className="flex flex-col items-center gap-3 rounded-xl border border-border/10 px-4 py-5 text-muted-foreground opacity-70 transition hover:bg-surface hover:opacity-100">
                <Icon className="h-8 w-8" />
                <span className="text-sm font-medium">{tool.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
