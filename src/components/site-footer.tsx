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
      { href: GOOGLE_PLAY_URL, label: "Android app" },
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
    <footer className="pb-6">
      <Container>
        <div className="rounded-[30px] bg-surface px-7 py-12 shadow-[inset_0_0_0_1px_rgba(23,24,25,0.06)] sm:px-10 lg:px-14">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.8fr_0.8fr]">
            <div className="max-w-sm">
              <Logo />
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                A focus-first study system for Android. Upload your materials,
                lock distractions, and prove what you know.
              </p>
            </div>
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold text-ink">{column.title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-terracotta-dark"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-2 pt-6 text-xs text-ink-soft shadow-[inset_0_1px_0_rgba(23,24,25,0.08)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Myndivo. All rights reserved.</p>
            <p>Made for people who want to remember what they study.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
