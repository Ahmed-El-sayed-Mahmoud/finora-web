import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Help center",
  description: "Answers to common questions about Myndivo.",
};

const faqs = [
  {
    question: "What is Myndivo?",
    answer:
      "Myndivo is an AI study companion. Upload your notes, slides, or textbooks and turn them into adaptive quizzes, flashcards, and a study plan tuned to what you already know. Finn, your AI tutor, helps you close the gaps.",
  },
  {
    question: "How does the 7-day free trial work?",
    answer:
      "Every new account gets 7 days with the complete Advanced tutor: 500 flexible AI credits, all 16 answer formats, 100 upload pages, 0.5 GB storage, up to 2 courses, and unlimited focus sessions. No credit card is required. The account moves to Free when the trial ends.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel in Google Play under Payments & subscriptions, then Subscriptions. You keep access through your current billing period with no cancellation fees. Deleting your Myndivo account does not cancel the subscription, so cancel it there first.",
  },
  {
    question: "Is my study data private?",
    answer:
      "Your materials and study data power your own study plan and are not shared with other users. Read the Privacy Policy for full details on what we collect and how it is used.",
  },
  {
    question: "What can I upload?",
    answer:
      "Upload PDFs, slide decks, photos of handwritten or printed notes, and scanned pages. Myndivo reads the content and extracts the concepts needed to build your plan.",
  },
  {
    question: "Which devices does Myndivo support?",
    answer:
      "Myndivo is available on Android. Account deletion is available inside the app, subscriptions are managed through Google Play, and this website provides support and legal information.",
  },
];

export default function HelpPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Help center</p>
          <h1 className="mt-5 max-w-[9ch] font-display text-[clamp(3.5rem,7vw,6.5rem)] font-[750] leading-[0.92] tracking-[-0.06em] text-ink">
            Questions, answered clearly.
          </h1>
          <p className="mt-6 max-w-sm leading-7 text-ink-soft">
            Get quick answers here, or talk to us if your account needs a human.
          </p>
          <ButtonLink href="/contact" className="mt-8">
            Contact support
          </ButtonLink>
        </div>

        <div className="rounded-[30px] bg-surface px-6 py-4 shadow-[inset_0_0_0_1px_rgba(23,24,25,0.06)] sm:px-9">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group py-7 shadow-[inset_0_-1px_0_rgba(23,24,25,0.08)] last:shadow-none"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold tracking-[-0.025em] text-ink marker:content-none sm:text-xl">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-2 text-xl text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl pr-12 text-sm leading-7 text-ink-soft">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}
