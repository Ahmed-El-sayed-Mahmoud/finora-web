import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/container";
import finnMark from "../../public/finn-mark.png";

export function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <section className="flex flex-1 items-center justify-center py-16">
      <Container className="flex justify-center">
        <div className="w-full max-w-md rounded-[37px] bg-ink/[0.055] p-[7px] shadow-[0_26px_70px_rgba(59,49,43,0.1)]">
          <div className="rounded-[30px] bg-surface p-8 sm:p-10">
          <Image
            src={finnMark}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11"
          />
          <span className="mt-4 block text-xs font-medium uppercase tracking-wide text-terracotta">
            {eyebrow}
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-ink">
            {title}
          </h1>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{subtitle}</p>
          <div className="mt-8">{children}</div>
          {footer ? (
            <p className="mt-6 text-center text-sm text-ink-soft">{footer}</p>
          ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FormField({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-ink">{label}</span>
      <input
        {...props}
        className="h-12 w-full rounded-2xl bg-cream px-4 text-sm text-ink shadow-[inset_0_0_0_1px_rgba(23,24,25,0.1)] outline-none transition-shadow duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] placeholder:text-ink-soft focus:shadow-[inset_0_0_0_2px_#b94834]"
      />
    </label>
  );
}
