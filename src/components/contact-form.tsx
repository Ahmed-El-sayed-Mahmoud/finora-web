import { SUPPORT_EMAIL, supportMailto } from "@/config/site";

export function ContactForm() {
  return (
    <div className="text-center">
      <p className="text-sm leading-6 text-ink-soft">
        Email us from the address connected to your Myndivo account when your
        question is about account access, billing, or deletion.
      </p>
      <a
        href={supportMailto("Myndivo support request")}
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-bold text-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-terracotta-dark active:translate-y-px"
      >
        Email {SUPPORT_EMAIL}
      </a>
    </div>
  );
}
