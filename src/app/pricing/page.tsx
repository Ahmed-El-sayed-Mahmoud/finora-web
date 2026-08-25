import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";
import { GOOGLE_PLAY_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for Finora — start with a 7-day free trial, then pick the plan that fits how you study.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    annualPrice: null,
    description: "A useful study companion you can keep using for free.",
    features: [
      "50 Basic tutor messages / month",
      "25 upload pages / month",
      "30 quiz & flashcard items / month",
      "2 tutor photos + 1 AI study plan / month",
      "2 courses, 25 documents & 30 saved notes",
      "Unlimited focus sessions",
    ],
    highlight: false,
  },
  {
    name: "Scholar",
    price: "$12.99",
    cadence: "month",
    annualPrice: "$124.99 / year",
    description: "Complete advanced study support for a full semester.",
    features: [
      "300 Advanced tutor messages / month",
      "All 16 advanced answer formats",
      "500 upload pages + 200 practice items / month",
      "15 voice minutes + 25 tutor photos / month",
      "5 AI study-plan generations / month",
      "10 courses, 150 documents & 200 saved notes",
      "10 active plans + unlimited focus sessions",
    ],
    highlight: true,
  },
  {
    name: "Mastery",
    price: "$24.99",
    cadence: "month",
    annualPrice: "$239.99 / year",
    description: "The same complete tutor with much more room for exam season.",
    features: [
      "600 Advanced tutor messages / month",
      "The same 16 advanced answer formats as Scholar",
      "1,200 upload pages + 500 practice items / month",
      "40 voice minutes + 75 tutor photos / month",
      "10 AI study-plan generations / month",
      "25 courses, 500 documents & 1,000 saved notes",
      "25 active plans + unlimited focus sessions",
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
          Every new account starts with a 7-day trial: 70 Advanced tutor
          messages, all 16 answer formats, 50 upload pages, 30 practice items,
          and 2 voice minutes. No credit card required.
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
