import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { GOOGLE_PLAY_URL } from "@/config/site";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/help", label: "Help center" },
      { href: GOOGLE_PLAY_URL, label: "Get the Android app" },
    ],
  },
  {
    title: "Company",
    links: [{ href: "/contact", label: "Contact us" }],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
      { href: "/data-deletion", label: "Delete my account" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-cream-2/60">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-ink-soft">
            Myndivo is the AI study companion that turns your notes into
            mastery — adaptive quizzes, focus tools, and a tutor that knows
            what you actually need to learn next.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line/70 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Myndivo. All rights reserved.</p>
        <p>Made for people who actually want to remember what they study.</p>
      </Container>
    </footer>
  );
}
