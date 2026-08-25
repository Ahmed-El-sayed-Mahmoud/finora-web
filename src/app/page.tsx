import Image from "next/image";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import finnHero from "../../public/finn-hero.png";
import { GOOGLE_PLAY_URL } from "@/config/site";

const features = [
  {
    title: "Adaptive quizzes & flashcards",
    description:
      "Every question is generated from your own materials and adjusts to what you've actually mastered — no generic question banks.",
  },
  {
    title: "A tutor that remembers your gaps",
    description:
      "Chat with an AI tutor that tracks concept-level coverage across every session, so it always knows what to teach you next.",
  },
  {
    title: "Focus tools that stick",
    description:
      "A guided focus-dose ladder and distraction lock help you build attention back up instead of fighting your phone alone.",
  },
  {
    title: "Study plans with real checkpoints",
    description:
      "Steps only complete when you pass a short checkpoint quiz — no boxes ticked just for showing up.",
  },
];

const steps = [
  {
    step: "01",
    title: "Upload what you're studying",
    description:
      "PDFs, slides, photos of notes, even scanned pages — Finora reads them and pulls out the concepts that matter.",
  },
  {
    step: "02",
    title: "Get a plan built around you",
    description:
      "Finora turns your materials into a study plan, adaptive quizzes, and flashcards tuned to your current mastery level.",
  },
  {
    step: "03",
    title: "Study, check in, improve",
    description:
      "Track coverage per concept, keep your streak alive, and let the plan adjust as you get stronger.",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line/70">
        <Container className="grid gap-12 py-20 sm:py-28 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold">
              Your 7-day free trial starts today
            </span>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              The AI study companion that actually gets you to mastery.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-7 text-ink-soft">
              Turn your notes, slides, and textbooks into adaptive quizzes,
              flashcards, and a focus-first plan — guided by a tutor that
              knows exactly what you still need to learn.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={GOOGLE_PLAY_URL}>Get the Android app</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                See pricing
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs text-ink-soft">
              No credit card required · Cancel anytime
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-cream-2/60 p-8">
            <div
              className="relative -mt-4 mb-2 flex justify-center"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(212,98,74,0.16) 0%, rgba(212,98,74,0) 70%)",
              }}
            >
              <Image
                src={finnHero}
                alt="Finn, the Finora fox, studying with a notebook and pen"
                width={280}
                priority
                className="h-auto w-56"
              />
            </div>
            <p className="font-serif text-sm uppercase tracking-widest text-terracotta">
              Built around
            </p>
            <ul className="mt-6 space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                  <span className="text-sm leading-6 text-ink-soft">
                    <span className="font-medium text-ink">{f.title}.</span>{" "}
                    {f.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-line/70">
        <Container className="py-20 sm:py-24">
          <h2 className="max-w-lg font-serif text-3xl font-semibold tracking-tight text-ink">
            How Finora works
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="font-serif text-sm text-terracotta">
                  {s.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 text-center sm:py-24">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-semibold tracking-tight text-ink">
            Study smarter, not just longer.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Start your 7-day free trial — no credit card required.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={GOOGLE_PLAY_URL}>Open Google Play</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
