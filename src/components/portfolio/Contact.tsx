import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "GitHub", value: "gulatirahul569", href: profile.github, Icon: Github },
  { label: "LinkedIn", value: "Rahul Gulati", href: profile.linkedin, Icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading index="05" title="Contact" kicker="Let's build something together." />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              I&apos;m currently open to full stack developer roles and freelance projects. The
              fastest way to reach me is email — I usually reply within a day.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              Say hello
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/60"
                >
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
                    <Icon className="size-3.5" />
                    {label}
                  </span>
                  <p className="mt-2.5 text-sm break-all text-foreground transition-colors group-hover:text-primary">
                    {value}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
