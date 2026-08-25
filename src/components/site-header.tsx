import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/button-link";
import { GOOGLE_PLAY_URL } from "@/config/site";

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/help", label: "Help" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line/70 bg-cream/80 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-ink-soft sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={GOOGLE_PLAY_URL}
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:inline"
          >
            Android app
          </Link>
          <ButtonLink href={GOOGLE_PLAY_URL}>Get Myndivo</ButtonLink>
        </div>
      </Container>
    </header>
  );
}
