import { Award, GraduationCap, Briefcase } from "lucide-react";
import {
  achievements,
  education,
  experience,
  focusAreas,
  profile,
  skills,
  type TimelineItem,
} from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="01" title="About" kicker="Full stack, end to end." />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m a B.Tech graduate in Artificial Intelligence &amp; Data Science, currently
            interning as a Full Stack Developer at KP IT Experts in Mohali. I like owning a feature
            from the database schema all the way to the pixel.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
              What I focus on
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="font-mono text-xs text-primary">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="03" title="Skills" kicker="The stack I work in daily." />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 50}>
              <div className="group h-full rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/60">
                <p className="font-mono text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                  {skill.name}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">{skill.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-border pl-6">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="relative">
          <span
            className={
              item.current
                ? "absolute top-1.5 -left-[26px] size-2.5 rounded-full bg-primary ring-4 ring-primary/20"
                : "absolute top-1.5 -left-[26px] size-2.5 rounded-full border border-border bg-background"
            }
          />
          <p className="font-mono text-[11px] tracking-widest text-primary uppercase">{item.period}</p>
          <p className="mt-1.5 text-base font-medium text-foreground">{item.title}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{item.org}</p>
          {item.detail ? (
            <p className="mt-1 font-mono text-xs text-muted-foreground">{item.detail}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          index="04"
          title="Experience"
          kicker="Internships, training and education."
        />
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <h3 className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <Briefcase className="size-4 text-primary" />
            Work &amp; certifications
          </h3>
          <Timeline items={experience} />
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <GraduationCap className="size-4 text-primary" />
            Education
          </h3>
          <Timeline items={education} />

          <h3 className="mt-12 mb-7 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <Award className="size-4 text-primary" />
            Achievements
          </h3>
          <div className="flex flex-col gap-3">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-surface px-4 py-3"
              >
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{item.org}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
