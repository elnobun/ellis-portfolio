import { Blocks, Cloud, Code2, Layers3 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAboutContent } from "@/lib/sanity/api";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About | Ellis",
  description: "Learn how Ellis approaches front-end systems, product UI, and maintainable engineering.",
  path: "/about"
});

const timeline = [
  {
    years: "2021 - Present",
    title: "Lead Systems Architect",
    company: "Global FinTech Solutions",
    summary:
      "Orchestrating the migration of legacy monolithic architectures to microservices. Led a team of 12 engineers to deliver a high-throughput trading engine processing 50k+ requests per second with sub-10ms latency.",
    tags: ["Distributed Systems", "Go", "Leadership"],
    active: true
  },
  {
    years: "2018 - 2021",
    title: "Senior Frontend Engineer",
    company: "Creative Digital Agency",
    summary:
      "Developed bespoke design systems for Fortune 500 clients. Specialized in complex data visualization and accessible UI frameworks.",
    tags: ["React", "TypeScript", "D3.js"]
  },
  {
    years: "2016 - 2018",
    title: "Full Stack Developer",
    company: "E-Commerce Startup",
    summary:
      "Founding engineer responsible for the entire MVP cycle. Scaled the platform from 0 to 100k active monthly users.",
    tags: []
  }
];

export default async function AboutPage() {
  const content = await getAboutContent();

  return (
    <>
      <Section className="pb-24 pt-28">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-lg bg-green/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-green">Introduction</span>
              <h1 className="mt-6 text-5xl font-extrabold tracking-[-0.05em] text-foreground lg:text-7xl lg:leading-[1.05]">
                Engineering digital <span className="text-accent">artifacts</span> with human intent.
              </h1>
              <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>{content.intro}</p>
                {content.story.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="group relative lg:col-span-5">
              <div className="aspect-square overflow-hidden rounded-2xl bg-elevated shadow-soft transition duration-500 group-hover:-rotate-2">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional portrait"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-surface p-6 shadow-ambient md:block">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Currently Building</p>
                    <p className="text-xs text-muted-foreground">Distributed Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-elevated py-24">
        <Container>
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Technical Arsenal</h2>
            <p className="mt-2 text-muted-foreground">Selected technologies I leverage to solve complex problems.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-2xl bg-surface p-8 shadow-soft md:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <Blocks className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["TypeScript", "Rust", "Go", "Python"].map((item, index) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-lg bg-elevated px-4 py-2 text-sm font-semibold">
                    <span className={`h-2 w-2 rounded-full ${index === 3 ? "bg-accent-soft" : "bg-green"}`} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-surface p-8 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <Layers3 className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold">Frameworks</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">React / Next.js</span>
                    <span className="text-xs text-muted-foreground">Expert</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-elevated">
                    <div className="h-full w-[95%] bg-accent" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">Node.js</span>
                    <span className="text-xs text-muted-foreground">Senior</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-elevated">
                    <div className="h-full w-[88%] bg-accent" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-surface p-8 shadow-soft">
              <div className="mb-6 flex items-center gap-3">
                <Cloud className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold">Infrastructure</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">AWS, Terraform, Kubernetes, Docker</p>
              <div className="flex -space-x-2">
                {['AWS', 'K8s', 'TF'].map((item) => (
                  <div key={item} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface bg-elevated text-[10px] font-bold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Career Journey</h2>
              <p className="mt-4 max-w-xs text-muted-foreground">A narrative of professional growth and technical leadership.</p>
            </div>
            <div className="space-y-16 lg:col-span-8">
              {timeline.map((item, index) => (
                <div key={item.title} className="relative pl-12">
                  <div className={`absolute left-0 top-0 ${index === timeline.length - 1 ? "h-8" : "bottom-0"} w-[2px] bg-muted`} />
                  <div className={`absolute left-[-5px] top-2 h-3 w-3 rounded-full ${item.active ? "bg-accent" : "bg-border"} ring-4 ring-surface`} />
                  <div className="mb-2">
                    <span className={`text-sm font-bold uppercase tracking-[0.16em] ${item.active ? "text-accent" : "text-muted-foreground"}`}>{item.years}</span>
                    <h3 className="mt-1 text-2xl font-extrabold text-foreground">{item.title}</h3>
                    <p className="text-lg font-medium text-muted-foreground">{item.company}</p>
                  </div>
                  <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">{item.summary}</p>
                  {item.tags.length ? (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-elevated px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-20 pt-6">
        <Container>
          <div className="rounded-[2rem] bg-accent-soft/20 p-12 text-center">
            <h2 className="text-3xl font-extrabold text-foreground">Let&apos;s build something significant.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Currently open to technical advisory roles and collaborative architectural challenges.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" className="px-8 py-4 font-bold">Get In Touch</ButtonLink>
              <ButtonLink href="/projects" variant="secondary" className="px-8 py-4 font-bold">View Projects</ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
