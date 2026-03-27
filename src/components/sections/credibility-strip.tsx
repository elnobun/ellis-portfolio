import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type CredibilityStripProps = {
  items: string[];
};

export function CredibilityStrip({ items }: CredibilityStripProps) {
  return (
    <Section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-3 rounded-[1.75rem] border border-border bg-surface p-5 sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-border/70 bg-background/70 px-4 py-4 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
