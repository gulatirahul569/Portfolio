import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="02" title="Projects" kicker="Things I designed, built and shipped." />
      </Reveal>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/50 sm:p-9">
              <div
                className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
              />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:gap-12">
                <div className="lg:w-1/2">
                  <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{project.subtitle}</p>

                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-mono text-[11px] tracking-widest text-foreground uppercase">
                      Problem&nbsp;—&nbsp;
                    </span>
                    {project.problem}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-mono text-[11px] tracking-widest text-foreground uppercase">
                      Solution&nbsp;—&nbsp;
                    </span>
                    {project.solution}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        Live demo
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <Github className="size-3.5" />
                        Source
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="rounded-lg border border-border bg-background p-5">
                    <div className="mb-4 flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-destructive/70" />
                      <span className="size-2.5 rounded-full bg-muted-foreground/50" />
                      <span className="size-2.5 rounded-full bg-primary/70" />
                      <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}/highlights
                      </span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-0.5 font-mono text-xs text-primary">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
