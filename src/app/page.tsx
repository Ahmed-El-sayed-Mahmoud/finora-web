import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { GOOGLE_PLAY_URL } from "@/config/site";
import focusHero from "../../public/myndivo-focus-hero-desk.png";
import answerScreen from "../../public/product-ai-answer.png";
import focusScreen from "../../public/product-focus-lock.png";
import masteryScreen from "../../public/product-mastery.png";
import materialsScreen from "../../public/product-materials.png";
import planScreen from "../../public/product-plan.png";
import progressScreen from "../../public/product-progress.png";

const proofPoints = [
  "Your materials",
  "Adaptive practice",
  "Strong Lock",
  "Concept mastery",
];

const materialTypes = ["Lectures", "Books", "Slides", "Class notes"];

const focusFlow = [
  {
    title: "Choose the noise",
    body: "Pick the apps that usually pull you away.",
  },
  {
    title: "Start one session",
    body: "Strong Lock keeps the boundary you set.",
  },
  {
    title: "Finish with proof",
    body: "End on a quiz, flashcard, or concept check.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section overflow-hidden">
        <Container className="hero-layout grid items-center gap-12 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-16">
          <Reveal className="relative z-[1] max-w-xl">
            <p className="eyebrow">Focus first. Then master it.</p>
            <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(3.25rem,6vw,6.75rem)] font-[750] leading-[0.92] tracking-[-0.065em] text-ink">
              Stop scrolling. Start studying.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-ink-soft">
              Myndivo locks distractions, turns your materials into practice,
              and guides every session toward mastery.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={GOOGLE_PLAY_URL}>Get Myndivo</ButtonLink>
              <ButtonLink href="#study-system" variant="secondary">
                See the system
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="media-shell hero-media-shell">
              <div className="media-core relative aspect-[3/2] overflow-hidden">
                <Image
                  src={focusHero}
                  alt="Finn studying inside a focus shield while distracting social apps stay locked outside"
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-label="What Myndivo connects" className="proof-rail">
        <Container className="grid grid-cols-2 md:grid-cols-4">
          {proofPoints.map((item) => (
            <p key={item} className="proof-item">
              {item}
            </p>
          ))}
        </Container>
      </section>

      <section id="study-system" className="section-space scroll-mt-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <Reveal className="lg:sticky lg:top-32">
            <h2 className="section-title max-w-[10ch]">
              Drop in a lecture. Get a study system.
            </h2>
            <p className="section-copy mt-6 max-w-md">
              Books, slides, PDFs, or notes become connected concepts,
              flashcards, quizzes, and a plan you can actually follow.
            </p>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Supported study materials">
              {materialTypes.map((type) => (
                <span key={type} className="quiet-chip">
                  {type}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="material-stage">
            <div className="media-shell mx-auto max-w-[520px]">
              <div className="media-core overflow-hidden">
                <Image
                  src={materialsScreen}
                  alt="Myndivo materials page turning uploaded study content into a quiz and flashcard"
                  sizes="(max-width: 1024px) 88vw, 520px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="focus" className="section-space pt-0 scroll-mt-28">
        <Container>
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="section-title">When focus starts, the feed ends.</h2>
            <p className="section-copy mt-5 max-w-xl">
              Strong Lock blocks the apps you choose and keeps your study
              session on the screen that matters.
            </p>
          </Reveal>

          <div className="grid items-start gap-6 lg:grid-cols-[1.18fr_0.82fr]">
            <Reveal className="media-shell focus-media-shell">
              <div className="media-core overflow-hidden">
                <Image
                  src={focusScreen}
                  alt="Myndivo Strong Lock protecting a study session from Instagram, TikTok, X, and Facebook"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="focus-copy-panel lg:sticky lg:top-28">
              <p className="focus-statement">
                Willpower is unreliable. A boundary is better.
              </p>
              <div className="mt-auto pt-16">
                {focusFlow.map((item) => (
                  <div key={item.title} className="focus-flow-item">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="tutor" className="section-space scroll-mt-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <Reveal className="relative order-2 lg:order-1">
            <div className="answer-aura" aria-hidden="true" />
            <div className="media-shell relative mx-auto max-w-[520px] -rotate-[1.5deg] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:rotate-0">
              <div className="media-core overflow-hidden">
                <Image
                  src={answerScreen}
                  alt="Ask Finn explaining Newton's second law inside a real Myndivo course"
                  sizes="(max-width: 1024px) 88vw, 520px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <h2 className="section-title max-w-[9ch]">Answers that actually click.</h2>
            <p className="section-copy mt-6 max-w-md">
              Ask Finn about your own course. Get a clear explanation grounded
              in the material you uploaded.
            </p>
            <blockquote className="pull-quote mt-10">
              “No generic question bank. No starting over every session.”
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <section id="progress" className="section-space progress-section scroll-mt-28">
        <Container>
          <Reveal className="max-w-3xl">
            <h2 className="section-title max-w-[13ch]">
              Know what needs work. Do that next.
            </h2>
            <p className="section-copy mt-5 max-w-xl">
              Concept mastery, smart reminders, and visible momentum turn a
              vague study goal into the next useful action.
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Reveal className="mx-auto w-full max-w-[460px]">
              <div className="media-shell">
                <div className="media-core overflow-hidden">
                  <Image
                    src={masteryScreen}
                    alt="Myndivo concept mastery showing strengths, weak spots, and the next best study action"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <p className="image-caption">Concept mastery</p>
            </Reveal>

            <Reveal delay={90} className="mx-auto w-full max-w-[460px]">
              <div className="media-shell">
                <div className="media-core overflow-hidden">
                  <Image
                    src={planScreen}
                    alt="Myndivo study plan with daily reminders, weak spot alerts, and an upcoming quiz"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <p className="image-caption">A plan that remembers</p>
            </Reveal>

            <Reveal delay={140} className="mx-auto w-full max-w-[460px]">
              <div className="media-shell">
                <div className="media-core overflow-hidden">
                  <Image
                    src={progressScreen}
                    alt="Finn celebrating Myndivo XP, streaks, and varied study achievements"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <p className="image-caption">Momentum you can see</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Reveal className="closing-panel">
            <div>
              <h2 className="max-w-[10ch] font-display text-[clamp(2.75rem,5.5vw,5.75rem)] font-[750] leading-[0.96] tracking-[-0.055em]">
                Win back your study time.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-ink-soft">
                Start free on Android. No credit card required.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href={GOOGLE_PLAY_URL}>Get Myndivo</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                See pricing
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
