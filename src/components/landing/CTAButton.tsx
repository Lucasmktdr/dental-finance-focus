import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export interface CTAButtonProps extends ComponentProps<"button"> {
  variant?: "accent" | "outline";
}

export function CTAButton({ className, variant = "accent", ...props }: CTAButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex min-h-[52px] w-full items-center justify-center rounded-xl px-5 text-base font-semibold leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto",
        variant === "accent" &&
          "bg-accent text-accent-foreground shadow-[var(--shadow-cta)] hover:bg-accent/90",
        variant === "outline" &&
          "border border-border bg-background text-foreground hover:bg-secondary",
        className,
      )}
    />
  );
}

export interface CTALinkProps extends ComponentProps<"a"> {
  variant?: "accent" | "whatsapp" | "outline";
}

export function CTALink({ className, variant = "accent", ...props }: CTALinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl px-5 text-center text-base font-semibold leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto",
        variant === "accent" &&
          "bg-accent text-accent-foreground shadow-[var(--shadow-cta)] hover:bg-accent/90",
        variant === "whatsapp" &&
          "border border-accent/40 bg-accent/10 text-accent-foreground hover:bg-accent/20",
        variant === "outline" &&
          "border border-border bg-background text-foreground hover:bg-secondary",
        className,
      )}
    />
  );
}
