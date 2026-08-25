import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SUPPORT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Myndivo.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 25, 2026">
      <section>
        <h2>1. Acceptance of terms</h2>
        <p>
          By creating an account or using Myndivo&apos;s website or mobile app
          (together, the &quot;Service&quot;), you agree to these Terms of
          Service. If you don&apos;t agree, please don&apos;t use the
          Service.
        </p>
      </section>

      <section>
        <h2>2. Accounts</h2>
        <p>
          You must provide accurate information when creating an account and
          keep your login credentials secure. You&apos;re responsible for
          activity that happens under your account.
        </p>
      </section>

      <section>
        <h2>3. Subscriptions and billing</h2>
        <p>
          New accounts receive a seven-day trial without a payment method. If
          you do not buy a subscription, the account moves to the Free plan
          when the trial ends. Paid Android subscriptions are purchased and
          billed through Google Play, renew automatically for the billing
          period shown at checkout, and continue until cancelled in your Google
          Play subscription settings. Cancelling stops future renewal and you
          keep paid access through the current billing period. Deleting Myndivo
          does not automatically cancel a Google Play subscription.
        </p>
        <p>
          Google Play displays the final localized price, taxes, trial or offer
          terms, and renewal date before purchase. Refunds are handled under
          Google Play&apos;s applicable rules.
        </p>
      </section>

      <section>
        <h2>4. Acceptable use</h2>
        <p>
          You agree not to misuse the Service — including attempting to
          disrupt it, reverse-engineer it, generate prohibited or harmful
          content, cheat or facilitate academic dishonesty, or use it to
          violate any law or another person&apos;s rights.
        </p>
      </section>

      <section>
        <h2>5. Your content</h2>
        <p>
          You retain ownership of the materials you upload. By uploading
          content, you grant us a license to process and store it solely to
          provide the Service to you, such as generating quizzes, flashcards,
          and study plans. You must have the rights or permission needed to
          upload and process that content.
        </p>
      </section>

      <section>
        <h2>6. AI-generated content</h2>
        <p>
          Myndivo uses AI to generate quizzes, flashcards, study plans, and
          tutor responses based on your materials. AI output can be
          incomplete or inaccurate. Myndivo is a study aid and is not a
          substitute for professional, medical, legal, or financial advice,
          and you should verify important information independently. You can
          report an AI response from the flag action shown below that response
          in the Android app.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          You may stop using the Service and delete your account at any
          time. We may suspend or terminate accounts that violate these
          Terms.
        </p>
      </section>

      <section>
        <h2>8. Disclaimers and limitation of liability</h2>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any
          kind. To
          the fullest extent permitted by law, Myndivo is not liable for
          indirect, incidental, or consequential damages arising from your
          use of the Service.
        </p>
      </section>

      <section>
        <h2>9. Changes to these terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          Service after changes take effect means you accept the updated
          Terms.
        </p>
      </section>

      <section>
        <h2>10. Contact us</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-ink underline underline-offset-2">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
