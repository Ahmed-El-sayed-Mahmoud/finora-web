import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { GOOGLE_PLAY_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start Myndivo with a 7-day free trial, then choose the plan that fits how you study.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    annualPrice: null,
    description: "A useful study companion you can keep using for free.",
    features: [
      "100 flexible AI credits each month",
      "30 upload pages each month",
      "0.25 GB storage",
      "9 core answer formats",
      "Up to 2 courses",
      "Unlimited focus sessions",
    ],
    highlight: false,
  },
  {
    name: "Scholar",
    price: "$11.99",
    cadence: "month",
    annualPrice: "$119.99 / year",
    description: "Complete study support for a full semester.",
    features: [
      "2,700 flexible AI credits each month",
      "All 16 advanced answer formats",
      "600 upload pages with dense-page protection",
      "5 GB storage and unlimited courses",
      "Tutor, quizzes, flashcards, voice, images, and plans",
      "Unlimited focus sessions",
    ],
    highlight: true,
  },
  {
    name: "Mastery",
    price: "$19.99",
    cadence: "month",
    annualPrice: "$199.99 / year",
    description: "More room for exam season and demanding courses.",
    features: [
      "4,500 flexible AI credits each month",
      "All 16 advanced answer formats",
      "1,200 upload pages with dense-page protection",
      "15 GB storage and unlimited courses",
      "Tutor, quizzes, flashcards, voice, images, and plans",
      "Unlimited focus sessions",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <Container className="py-20 sm:py-28">
      <section className="pricing-intro">
        <div>
          <p className="eyebrow">Simple pricing</p>
          <h1 className="pricing-title">
            Simple plans. Serious focus.
          </h1>
        </div>
        <div className="rounded-[30px] bg-surface p-8 shadow-[inset_0_0_0_1px_rgba(23,24,25,0.06)] sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-[-0.035em]">
            Every account starts complete.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-ink-soft">
            Try all 16 answer formats, 500 AI credits, 100 upload pages,
            unlimited focus sessions, and up to 2 courses for 7 days.
          </p>
          <p className="mt-6 text-sm font-bold text-terracotta-dark">
            No credit card required.
          </p>
        </div>
      </section>

      <section className="pricing-grid">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-[30px] p-[7px] ${
              plan.highlight
                ? "pricing-featured bg-ink shadow-[0_30px_80px_rgba(23,24,25,0.18)]"
                : "bg-ink/[0.055]"
            }`}
          >
            <div
              className={`flex min-h-[610px] flex-col rounded-[24px] p-7 sm:p-8 ${
                plan.highlight ? "bg-ink text-cream" : "bg-surface text-ink"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-2xl font-bold tracking-[-0.035em]">
                  {plan.name}
                </h2>
                {plan.highlight ? (
                  <span className="rounded-full bg-cream px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.1em] text-ink">
                    Most popular
                  </span>
                ) : null}
              </div>

              <p className={`mt-3 text-sm leading-6 ${plan.highlight ? "text-cream/70" : "text-ink-soft"}`}>
                {plan.description}
              </p>

              <p className="mt-8 flex items-end gap-2">
                <span className="font-display text-5xl font-[750] tracking-[-0.055em]">
                  {plan.price}
                </span>
                <span className={`pb-1 text-sm ${plan.highlight ? "text-cream/70" : "text-ink-soft"}`}>
                  {plan.price === "$0" ? plan.cadence : `/${plan.cadence}`}
                </span>
              </p>

              {plan.annualPrice ? (
                <p className={`mt-2 text-sm font-bold ${plan.highlight ? "text-[#f2a38f]" : "text-terracotta-dark"}`}>
                  or {plan.annualPrice}
                </p>
              ) : null}

              <ul className="mt-8 space-y-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex gap-3 text-sm leading-6 ${plan.highlight ? "text-cream/78" : "text-ink-soft"}`}
                  >
                    <span aria-hidden="true" className={plan.highlight ? "text-[#f2a38f]" : "text-terracotta-dark"}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={GOOGLE_PLAY_URL}
                variant={plan.highlight ? "secondary" : "primary"}
                className={`mt-auto w-full ${plan.highlight ? "bg-cream hover:bg-white" : ""}`}
              >
                Get Myndivo
              </ButtonLink>
            </div>
          </article>
        ))}
      </section>

      <p className="mx-auto mt-14 max-w-xl text-center text-xs leading-6 text-ink-soft">
        Prices are shown in USD. Google Play displays your localized price.
        Cancel anytime and keep access through your current billing period.
      </p>
    </Container>
  );
}
