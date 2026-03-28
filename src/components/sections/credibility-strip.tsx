import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type CredibilityStripProps = {
  items: string[];
};

export function CredibilityStrip({ items }: CredibilityStripProps) {
  return (
    <Section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="rounded-lg bg-surface px-5 py-5 text-sm font-medium text-muted-foreground shadow-soft">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
