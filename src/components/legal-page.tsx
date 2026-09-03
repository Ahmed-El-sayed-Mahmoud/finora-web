import type { ReactNode } from "react";
import { Container } from "@/components/container";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-5xl font-bold tracking-[-0.05em] text-ink sm:text-6xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ink-soft">Last updated {updated}</p>
        <div className="mt-12 space-y-9 rounded-[30px] bg-surface p-7 text-sm leading-7 text-ink-soft shadow-[inset_0_0_0_1px_rgba(23,24,25,0.06)] sm:p-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-[-0.025em] [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_li]:marker:text-terracotta [&_strong]:text-ink [&_ul]:space-y-2">
          {children}
        </div>
      </div>
    </Container>
  );
}
