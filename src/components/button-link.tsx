import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-cream shadow-[0_10px_30px_rgba(23,24,25,0.16)] hover:bg-terracotta-dark",
  secondary:
    "bg-surface text-ink shadow-[inset_0_0_0_1px_rgba(23,24,25,0.1)] hover:bg-cream-2",
  ghost: "bg-transparent text-ink-soft hover:text-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap rounded-full px-3 pl-6 text-sm font-bold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-px ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {variant !== "ghost" ? (
        <span
          aria-hidden="true"
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 ${
            variant === "primary" ? "bg-white/12" : "bg-ink/[0.06]"
          }`}
        >
          ↗
        </span>
      ) : null}
    </Link>
  );
}
