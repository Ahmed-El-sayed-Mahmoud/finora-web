import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth-shell";
import { ButtonLink } from "@/components/button-link";
import { GOOGLE_PLAY_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Create your account",
  description:
    "Start your 7-day free trial of Myndivo — no credit card required.",
};

export default function RegisterPage() {
  return (
    <AuthShell
      eyebrow="7-day free trial"
      title="Start in the Android app"
      subtitle="Create your account securely in Myndivo. No credit card is required for the seven-day trial."
      footer={
        <>
          Need help?{" "}
          <Link href="/contact" className="font-medium text-ink underline underline-offset-2">
            Contact support
          </Link>
        </>
      }
    >
      <div className="space-y-4">
        <ButtonLink href={GOOGLE_PLAY_URL} className="w-full">
          Get Myndivo on Google Play
        </ButtonLink>
        <p className="text-center text-xs leading-5 text-ink-soft">
          Accounts, purchases, and sign-in are handled in the Android app. This
          website will never ask for your Myndivo password.
        </p>
      </div>
    </AuthShell>
  );
}
