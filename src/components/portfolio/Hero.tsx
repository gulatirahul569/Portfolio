import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const phrases = [
  "MERN stack applications",
  "secure REST APIs",
  "role-based dashboards",
  "responsive React interfaces",
];

function useTypewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index % phrases.length]!;
    const done = !deleting && text === full;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) {
          setDeleting(true);
          return;
        }
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
          return;
        }
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      },
      done ? 1600 : deleting ? 35 : 70,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index]);

  return text;
}

export function Hero() {
  const typed = useTypewriter();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 68%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            Open to full stack roles
          </span>
        </div>

        <h1
          className="animate-rise mt-8 text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {profile.name}
          <span className="block text-primary text-glow">{profile.role}</span>
        </h1>

        <p
          className="animate-rise mt-6 max-w-xl font-mono text-sm text-muted-foreground sm:text-base"
          style={{ animationDelay: "160ms" }}
        >
          <span className="text-primary">$</span> building{" "}
          <span className="text-foreground">{typed}</span>
          <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-[2px] bg-primary align-middle text-transparent">
            |
          </span>
        </p>

        <p
          className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          {profile.tagline} From MongoDB schemas and JWT-secured Express APIs to polished React
          front-ends — I ship the whole thing.
        </p>

        <div
          className="animate-rise mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View projects
            <ArrowDown className="size-4" />
          </a>
          <a
            href={resumeAsset.url}
            download="Rahul-Gulati-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Download className="size-4" />
            Download resume
          </a>
        </div>

        <div
          className="animate-rise mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground"
          style={{ animationDelay: "380ms" }}
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-primary" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="size-3.5 text-primary" />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Github className="size-3.5 text-primary" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Linkedin className="size-3.5 text-primary" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
