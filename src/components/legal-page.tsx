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
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ink-soft">Last updated {updated}</p>
        <div className="mt-10 space-y-8 text-sm leading-7 text-ink-soft [&_h2]:mb-2 [&_h2]:font-serif [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_li]:marker:text-terracotta [&_strong]:text-ink [&_ul]:space-y-2">
          {children}
        </div>
      </div>
    </Container>
  );
}
