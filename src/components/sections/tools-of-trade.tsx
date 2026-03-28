import { Cloud, Database, Layers3, Sparkles, TerminalSquare, Workflow } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const tools = [
  { label: "TypeScript", icon: TerminalSquare },
  { label: "PostgreSQL", icon: Database },
  { label: "Google Cloud", icon: Cloud },
  { label: "System Design", icon: Workflow },
  { label: "Motion UI", icon: Sparkles },
  { label: "Next.js", icon: Layers3 }
];

export function ToolsOfTrade() {
  return (
    <Section className="bg-surface py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="eyebrow mb-4 text-accent">Technical Proficiency</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Tools of the Trade</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <div key={tool.label} className="flex flex-col items-center gap-3 text-muted-foreground opacity-70 transition hover:opacity-100">
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
