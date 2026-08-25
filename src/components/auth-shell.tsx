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
        <div className="w-full max-w-md rounded-3xl border border-line bg-white/70 p-8 shadow-[0_1px_0_rgba(26,15,10,0.03)] sm:p-10">
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
          <h1 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-ink">
            {title}
          </h1>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{subtitle}</p>
          <div className="mt-8">{children}</div>
          {footer ? (
            <p className="mt-6 text-center text-sm text-ink-soft">{footer}</p>
          ) : null}
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
        className="h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
      />
    </label>
  );
}
