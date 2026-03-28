import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types";

type ProjectsListProps = {
  projects: Project[];
};

function TechPill({ label, tone = "green" }: { label: string; tone?: "green" | "red" }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-elevated px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "green" ? "bg-green" : "bg-red"}`} />
      {label}
    </span>
  );
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [first, second, third] = projects;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
      {first ? (
        <Link href={`/projects/${first.slug}`} className="group md:col-span-8">
          <article className="overflow-hidden rounded-xl bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-ambient">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image src={first.featuredImage} alt={first.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 66vw, 100vw" />
            </div>
            <div className="p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {first.techStack.slice(0, 3).map((item) => (
                  <TechPill key={item} label={item} />
                ))}
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground">{first.title}</h3>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">{first.summary}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-accent">
                View Case Study
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </article>
        </Link>
      ) : null}

      {second ? (
        <Link href={`/projects/${second.slug}`} className="group md:col-span-4">
          <article className="flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-ambient">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src={second.featuredImage} alt={second.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
            <div className="flex grow flex-col p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {second.techStack.slice(0, 2).map((item, index) => (
                  <TechPill key={item} label={item} tone={index === 0 ? "red" : "green"} />
                ))}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{second.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{second.summary}</p>
            </div>
          </article>
        </Link>
      ) : null}

      {third ? (
        <Link href={`/projects/${third.slug}`} className="group md:col-span-4">
          <article className="flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-ambient">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src={third.featuredImage} alt={third.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
            <div className="flex grow flex-col p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {third.techStack.slice(0, 2).map((item) => (
                  <TechPill key={item} label={item} />
                ))}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{third.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{third.summary}</p>
            </div>
          </article>
        </Link>
      ) : null}

      <div className="md:col-span-8">
        <article className="grid overflow-hidden rounded-xl bg-elevated p-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h3 className="text-4xl font-extrabold tracking-tight text-foreground">Looking for a technical partner?</h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">I specialize in bridging the gap between complex engineering requirements and intuitive user experiences. Let&apos;s build something precise.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0">
            <div className="rounded-lg bg-surface p-6 text-center">
              <div className="text-4xl font-bold text-accent">99.9%</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Uptime delivery</div>
            </div>
            <div className="rounded-lg bg-surface p-6 text-center">
              <div className="text-4xl font-bold text-green">45+</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Deployed systems</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
