import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <span className="font-serif text-6xl font-semibold text-terracotta">
        404
      </span>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-ink">
        This page took a study break.
      </h1>
      <p className="mt-2 max-w-sm text-sm text-ink-soft">
        We couldn&apos;t find what you were looking for. Let&apos;s get you
        back on track.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </Container>
  );
}
