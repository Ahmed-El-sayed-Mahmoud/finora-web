import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { SUPPORT_EMAIL, supportMailto } from "@/config/site";

export const metadata: Metadata = {
  title: "Account & Data Deletion",
  description:
    "How to delete your Myndivo account and data, in the app or without it installed.",
};

export default function DataDeletionPage() {
  return (
    <LegalPage title="Account & Data Deletion" updated="August 25, 2026">
      <section>
        <h2>Delete your account from the app</h2>
        <p>
          Open Myndivo, go to <strong>Profile → Account → Delete account</strong>,
          and confirm both deletion prompts. This starts deletion immediately,
          you don&apos;t need to contact support. If you have a subscription,
          cancel it first (see below).
        </p>
      </section>

      <section>
        <h2>Request deletion without the app</h2>
        <p>
          If you no longer have the app installed, email{" "}
          <a
            href={supportMailto("Myndivo account deletion request")}
            className="text-ink underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          from the address on your account and ask us to delete it. We
          verify the request and complete deletion within 30 days.
        </p>
      </section>

      <section>
        <h2>Cancel a subscription separately</h2>
        <p>
          Deleting your Myndivo account does not cancel a Google Play
          subscription. Cancel it first in <strong>Google Play → Payments &amp;
          subscriptions → Subscriptions</strong> to stop future charges. You can
          still request account deletion if a subscription is active.
        </p>
      </section>

      <section>
        <h2>What gets deleted</h2>
        <p>
          Your profile, uploaded materials, generated quizzes and
          flashcards, chat history, study plans, streaks, and progress data
          are permanently deleted and cannot be recovered.
        </p>
      </section>

      <section>
        <h2>What we retain, and why</h2>
        <p>
          We may keep billing and transaction records where tax, accounting,
          dispute, or fraud-prevention rules require it. To prevent repeated
          use of the one-time free trial, we retain one-way keyed hashes derived
          from the Android device identifier and normalized account email,
          together with the trial start and highest lifetime trial usage. These
          records are no longer linked to a Myndivo account, do not contain the
          raw device identifier or email, and cannot reconstruct your study
          materials or activity. We retain them for as long as the one-time
          trial restriction is offered or as otherwise needed to prevent abuse.
        </p>
      </section>

      <section>
        <h2>Questions</h2>
        <p>
          Reach us at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-ink underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          . See our{" "}
          <Link href="/privacy" className="text-ink underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          for more on how we handle your data.
        </p>
      </section>
    </LegalPage>
  );
}
