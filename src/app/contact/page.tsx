import type { Metadata } from "next";
import { AuthShell } from "@/components/auth-shell";
import { ContactForm } from "@/components/contact-form";
import { SUPPORT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Get in touch with the Myndivo team.",
};

export default function ContactPage() {
  return (
    <AuthShell
      eyebrow="Contact"
      title="Get in touch"
      subtitle="Questions about your account, billing, or anything else? We're here to help."
      footer={`Support email: ${SUPPORT_EMAIL}`}
    >
      <ContactForm />
    </AuthShell>
  );
}
