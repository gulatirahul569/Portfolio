import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(shown ? "animate-rise" : "opacity-0", className)}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:mb-14">
      <span className="font-mono text-xs tracking-[0.28em] text-primary uppercase">
        {index} / {title}
      </span>
      {kicker ? (
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {kicker}
        </h2>
      ) : null}
      <div className="h-px w-full bg-border" />
    </div>
  );
}
