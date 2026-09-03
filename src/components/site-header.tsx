import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { GOOGLE_PLAY_URL } from "@/config/site";

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/help", label: "Help" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-cream/86 py-3 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between rounded-[22px] bg-surface/88 px-3 pl-4 shadow-[0_16px_50px_rgba(49,43,39,0.08),inset_0_0_0_1px_rgba(23,24,25,0.06)] sm:pl-5">
          <Logo />
          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-soft sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ButtonLink href={GOOGLE_PLAY_URL} className="min-h-10 pl-5 text-xs sm:text-sm">
              <span className="header-label-mobile">Get app</span>
              <span className="header-label-desktop">Get Myndivo</span>
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
