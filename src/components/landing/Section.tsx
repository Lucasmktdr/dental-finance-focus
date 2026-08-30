import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  tone?: "light" | "soft" | "deep";
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  tone = "light",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-14 sm:px-6 md:py-20",
        tone === "light" && "bg-background text-foreground",
        tone === "soft" && "bg-primary-soft text-foreground",
        tone === "deep" && "bg-primary-deep text-primary-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">
        {(eyebrow || title || subtitle) && (
          <header className="mb-8 md:mb-12">
            {eyebrow && (
              <p
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide",
                  tone === "deep" ? "text-accent" : "text-primary",
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-3 max-w-2xl text-base leading-relaxed sm:text-lg",
                  tone === "deep" ? "text-primary-foreground/80" : "text-muted-foreground",
                )}
              >
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

