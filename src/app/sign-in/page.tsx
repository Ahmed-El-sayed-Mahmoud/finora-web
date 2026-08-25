import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth-shell";
import { ButtonLink } from "@/components/button-link";
import { GOOGLE_PLAY_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Myndivo account.",
};

export default function SignInPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in on Android"
      subtitle="Open Myndivo to access your study plan and account securely."
      footer={
        <>
          Having trouble signing in?{" "}
          <Link href="/contact" className="font-medium text-ink underline underline-offset-2">
            Contact support
          </Link>
        </>
      }
    >
      <div className="space-y-4">
        <ButtonLink href={GOOGLE_PLAY_URL} className="w-full">
          Open Myndivo on Google Play
        </ButtonLink>
        <p className="text-center text-xs leading-5 text-ink-soft">
          For your security, this public website does not collect account
          passwords.
        </p>
      </div>
    </AuthShell>
  );
}
