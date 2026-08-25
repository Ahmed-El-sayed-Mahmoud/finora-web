import { SUPPORT_EMAIL, supportMailto } from "@/config/site";

export function ContactForm() {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 text-center">
      <p className="text-sm leading-6 text-ink-soft">
        Email us from the address connected to your Finora account when your
        question is about account access, billing, or deletion.
      </p>
      <a
        href={supportMailto("Finora support request")}
        className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-terracotta px-6 text-sm font-medium text-cream transition-colors hover:bg-terracotta-dark"
      >
        Email {SUPPORT_EMAIL}
      </a>
    </div>
  );
}
