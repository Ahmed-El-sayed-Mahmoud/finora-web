import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { ANDROID_PACKAGE, SUPPORT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Finora collects, uses, shares, retains, and protects data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 25, 2026">
      <section>
        <h2>1. Scope and developer contact</h2>
        <p>
          This Privacy Policy applies to the Finora Android application
          (package <strong>{ANDROID_PACKAGE}</strong>) and the Finora website
          (together, the &quot;Service&quot;). Finora is an AI study partner. For
          privacy questions or requests, contact the developer at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-ink underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>

      <section>
        <h2>2. Information you provide</h2>
        <p>
          <strong>Account and profile information:</strong> your name, email
          address, profile photo if supplied by a sign-in provider, Firebase
          user identifier, authentication provider, and account preferences.
          Password credentials are handled by Firebase Authentication; Finora
          does not store your password on its own servers.
        </p>
        <p>
          <strong>Study content:</strong> course names, exams and deadlines,
          notes, documents, slide decks, PDFs, images, scanned pages, voice
          notes, spoken questions and their transcripts, chat prompts, and
          other material you choose to upload or create.
        </p>
        <p>
          <strong>Learning activity:</strong> quiz and flashcard answers,
          generated content, study plans, focus-session history, distraction
          counts, streaks, achievements, concept mastery, usage allowances,
          notification preferences, and AI-response reports.
        </p>
        <p>
          <strong>Support communications:</strong> the content of emails you
          send to the support address and the email address used to send them.
          The website opens your email application and does not silently submit
          a web form.
        </p>
      </section>

      <section>
        <h2>3. Information collected automatically</h2>
        <p>
          <strong>Device and app information:</strong> Android version, app
          version, device or installation identifiers, an Expo push token when
          notifications are enabled, time-zone or UTC offset used to schedule
          reminders, and basic request and security logs such as IP address and
          request time.
        </p>
        <p>
          <strong>Purchase information:</strong> Google Play product,
          subscription, renewal, cancellation, and entitlement status. Finora
          does not receive your full payment-card number.
        </p>
        <p>
          <strong>Diagnostics:</strong> crash reports, error details, route or
          feature area, app version, platform, and an opaque Firebase user ID.
          Crash reporting is configured not to attach your email or study
          materials intentionally, although technical logs can contain data
          present at the time of an error.
        </p>
        <p>
          <strong>Trial-abuse prevention:</strong> the Android device identifier
          and normalized account email are sent to the backend and converted
          into separate keyed one-way hashes. The raw values are not stored in
          the trial-grant table. The hashes, trial start, and highest lifetime
          trial usage prevent repeated use of the one-time free trial.
        </p>
      </section>

      <section>
        <h2>4. Android permissions and on-device access</h2>
        <p>
          Finora asks for camera access only when you take a study photo and
          microphone access only when you start a voice feature. Selected
          photos, documents, and audio may be uploaded for the feature you
          requested. Gallery selection uses Android&apos;s system picker and does
          not require ongoing access to your full photo library.
        </p>
        <p>
          Optional audio-device controls may read nearby paired Bluetooth audio
          device names and connection state. These details stay on the device.
          Notifications are used for study reminders and active focus-session
          status when you enable them.
        </p>
        <p>
          Strong Lock asks separately for display-over-other-apps,
          Accessibility, app-usage access, notification, and Do Not Disturb
          access. During an active Strong Lock, Accessibility and usage access
          detect which app is in front so Finora can return you to the session.
          Finora does not retrieve screen content or press controls through the
          Accessibility service. Detected app names remain on the device; only
          the number of blocked distractions is saved with study progress.
          These capabilities are inactive when Strong Lock is not running and
          can be disabled in Android settings.
        </p>
      </section>

      <section>
        <h2>5. How we use information</h2>
        <p>
          We use information to authenticate accounts; store and organize study
          materials; generate tutoring responses, quizzes, flashcards, study
          plans, embeddings, and transcripts; personalize learning and focus
          features; deliver reminders; process and restore subscriptions;
          enforce plan limits and one-time trials; respond to support and
          deletion requests; moderate reported AI output; prevent fraud and
          abuse; diagnose crashes; and secure, maintain, and improve the
          Service.
        </p>
      </section>

      <section>
        <h2>6. Service providers and data sharing</h2>
        <p>
          We do not sell personal information and do not use it for third-party
          advertising. We disclose only the data needed for providers to perform
          services for Finora, including:
        </p>
        <ul>
          <li>
            Google Firebase for authentication, crash reporting, and messaging;
          </li>
          <li>
            Google Cloud, including Gemini or Vertex AI and Cloud Storage, for
            AI processing, hosting, and file storage;
          </li>
          <li>
            Voyage AI and Weaviate for study-content embeddings, retrieval, and
            reranking;
          </li>
          <li>Deepgram for live speech-to-text;</li>
          <li>
            RevenueCat and Google Play for purchases, subscription status, and
            entitlement management; and
          </li>
          <li>
            infrastructure providers used for database, network, and application
            hosting.
          </li>
        </ul>
        <p>
          We may also disclose information when required by law, to protect
          users or the Service, or as part of a business transfer subject to
          appropriate safeguards. We do not authorize AI providers to use your
          private study content to train models for other customers.
        </p>
      </section>

      <section>
        <h2>7. Security</h2>
        <p>
          Production app traffic uses HTTPS encryption in transit. We use
          authenticated access, user-scoped records and storage paths, access
          controls, secret management, restricted production credentials, and
          deletion routines for account data. No method of storage or
          transmission is completely secure, so we cannot guarantee absolute
          security.
        </p>
      </section>

      <section>
        <h2>8. Retention and deletion</h2>
        <p>
          We generally retain account information, study content, progress,
          notification tokens, and subscription entitlements while your account
          is active. Some operational logs and crash records are kept only as
          long as reasonably needed for security, debugging, and reliability.
          Legal, tax, accounting, dispute, and fraud-prevention records may be
          retained for the period required for those purposes.
        </p>
        <p>
          Account deletion removes the account and associated profile, study
          content, generated items, chat history, files, vectors, notification
          tokens, plans, and progress. Limited trial-prevention hashes and usage
          high-water marks remain without an account link as described above.
          See{" "}
          <Link
            href="/data-deletion"
            className="text-ink underline underline-offset-2"
          >
            Account &amp; Data Deletion
          </Link>{" "}
          for the in-app and web request paths and what may be retained.
        </p>
      </section>

      <section>
        <h2>9. Your choices and rights</h2>
        <p>
          You can change notification and device permissions in Finora or
          Android settings, choose whether to upload content, report AI output,
          and delete your account in the app. Depending on where you live, you
          may also request access, correction, export, restriction, objection,
          or deletion of personal information by emailing us. We may need to
          verify that the request concerns your account.
        </p>
      </section>

      <section>
        <h2>10. Children&apos;s privacy</h2>
        <p>
          Finora is not directed to children under 13, and we do not knowingly
          collect personal information from children under 13. If you believe a
          child under 13 has provided information, contact us so we can review
          and delete it.
        </p>
      </section>

      <section>
        <h2>11. International processing</h2>
        <p>
          Providers may process information in countries other than the one
          where you live. Where required, we rely on provider contracts and
          appropriate safeguards for these transfers.
        </p>
      </section>

      <section>
        <h2>12. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy as the Service or legal requirements
          change. We will post the updated version here and revise the
          &quot;Last updated&quot; date. Material changes may also be announced in
          the app or through another appropriate channel.
        </p>
      </section>

      <section>
        <h2>13. Contact</h2>
        <p>
          Email privacy questions or requests to{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-ink underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
