import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { GOOGLE_PLAY_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for Myndivo — start with a 7-day free trial, then pick the plan that fits how you study.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    annualPrice: null,
    description: "A useful study companion you can keep using for free.",
    features: [
      "100 flexible AI credits / month",
      "30 upload pages / month",
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
    description: "Complete advanced study support for a full semester.",
    features: [
      "2,700 flexible AI credits / month on monthly or annual billing",
      "All 16 advanced answer formats",
      "600 upload pages / month with dense-page protection",
      "5 GB storage",
      "Unlimited courses",
      "Tutor, quizzes, flashcards, voice, images and plans share one wallet",
      "Unlimited focus sessions",
    ],
    highlight: true,
  },
  {
    name: "Mastery",
    price: "$19.99",
    cadence: "month",
    annualPrice: "$199.99 / year",
    description: "The same complete tutor with much more room for exam season.",
    features: [
      "4,500 flexible AI credits / month on monthly or annual billing",
      "The same 16 advanced answer formats as Scholar",
      "1,200 upload pages / month with dense-page protection",
      "15 GB storage",
      "Unlimited courses",
      "Tutor, quizzes, flashcards, voice, images and plans share one wallet",
      "Unlimited focus sessions",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <Container className="py-20 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs font-medium uppercase tracking-wide text-terracotta">
          Pricing
        </span>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-ink">
          Simple pricing, real results.
        </h1>
        <p className="mt-4 text-ink-soft">
          Every new account starts with a 7-day trial: 500 flexible AI credits,
          all 16 answer formats, 100 upload pages, 0.5 GB storage, and unlimited
          focus sessions. No credit card required.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-3xl border p-8 ${
              plan.highlight
                ? "border-terracotta bg-white shadow-[0_8px_30px_rgba(212,98,74,0.12)]"
                : "border-line bg-white/60"
            }`}
          >
            {plan.highlight ? (
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-terracotta/10 px-3 py-1 text-xs font-medium text-terracotta">
                Most popular
              </span>
            ) : null}
            <h2 className="font-serif text-xl font-semibold text-ink">
              {plan.name}
            </h2>
            <p className="mt-1 text-sm text-ink-soft">{plan.description}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-serif text-4xl font-semibold text-ink">
                {plan.price}
              </span>
              <span className="text-sm text-ink-soft">
                {plan.price === "$0" ? plan.cadence : `/${plan.cadence}`}
              </span>
            </p>
            {plan.annualPrice ? (
              <p className="mt-2 text-sm font-medium text-terracotta">
                or {plan.annualPrice}
              </p>
            ) : null}
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-ink-soft"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink
              href={GOOGLE_PLAY_URL}
              variant={plan.highlight ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              Choose in the Android app
            </ButtonLink>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-lg text-center text-xs text-ink-soft">
        Prices shown in USD; Google Play displays the final localized price.
        Cancel anytime from your account settings — you&apos;ll keep access
        through the end of your current billing period.
      </p>
    </Container>
  );
}
