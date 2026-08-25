import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Help center",
  description: "Answers to common questions about Finora.",
};

const faqs = [
  {
    question: "What is Finora?",
    answer:
      "Finora is an AI study companion. Upload your notes, slides, or textbooks and it turns them into adaptive quizzes, flashcards, and a study plan tuned to what you already know — with an AI tutor to help you close the gaps.",
  },
  {
    question: "How does the 7-day free trial work?",
    answer:
      "Every new account gets 7 days with the complete Advanced tutor: 70 messages (up to 15 a day), all 16 answer formats, 50 upload pages, 30 practice items, 2 voice minutes, 5 tutor photos, and one AI study-plan generation. No credit card is required, and the account moves to Free when the trial ends.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel from your account settings at any time and you'll keep access through the end of your current billing period — no cancellation fees.",
  },
  {
    question: "Is my study data private?",
    answer:
      "Your materials and study data are used to power your own study plan and are not shared with other users. See our Privacy Policy for the full details on what we collect and how it's used.",
  },
  {
    question: "What can I upload?",
    answer:
      "PDFs, slide decks, photos of handwritten or printed notes, and scanned pages. Finora reads the content and extracts the concepts it needs to build your plan.",
  },
  {
    question: "Which devices does Finora support?",
    answer:
      "Finora is available on Android. Account deletion is available inside the app, subscriptions are managed through Google Play, and this website provides support and legal information.",
  },
];

export default function HelpPage() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs font-medium uppercase tracking-wide text-terracotta">
          Help center
        </span>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-ink">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-ink-soft">
          Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll help.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl divide-y divide-line">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink marker:content-none">
              {faq.question}
              <span className="shrink-0 text-terracotta transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-line bg-cream-2/60 p-10 text-center">
        <h2 className="font-serif text-xl font-semibold text-ink">
          Still need help?
        </h2>
        <p className="text-sm text-ink-soft">
          Our team is happy to help with anything account or billing related.
        </p>
        <ButtonLink href="/contact">Contact support</ButtonLink>
      </div>
    </Container>
  );
}
