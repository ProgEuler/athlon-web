import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects, uses and protects your data.`,
};

const { name, contactEmail } = siteConfig;

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 8, 2026">
      <section>
        <p>
          This Privacy Policy explains how {name} (&quot;we&quot;,
          &quot;us&quot;) collects, uses and shares information when you use our
          mobile app and website. By using {name} you agree to the practices
          described here.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <ul className="space-y-1">
          <li>
            <strong>Account information:</strong> name, email address and
            sign-in details.
          </li>
          <li>
            <strong>Booking and match data:</strong> venues you book, matches
            you join, chat messages, polls and community posts.
          </li>
          <li>
            <strong>Device and usage data:</strong> approximate location (to
            show nearby venues), camera and microphone access when you choose
            to use them, app interactions, device type and crash reports.
          </li>
          <li>
            <strong>Purchase data:</strong> subscription status handled by the
            App Store. We never see your payment card details.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use information</h2>
        <ul className="space-y-1">
          <li>To let you book venues and join or create matches.</li>
          <li>To power chat, community and ranking features.</li>
          <li>To send booking confirmations and notifications.</li>
          <li>To diagnose bugs and keep the service secure.</li>
        </ul>
      </section>

      <section>
        <h2>Sharing</h2>
        <p>
          We do not sell your personal data. We share information only with
          service providers who help us run {name} (such as hosting and
          analytics), when required by law, or with your consent.
        </p>
      </section>

      <section>
        <h2>Data retention and deletion</h2>
        <p>
          We keep your data while your account is active. You can export or
          delete your account and associated data at any time from the app, or
          by contacting us.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          Data is encrypted in transit and at rest. No method of transmission
          or storage is completely secure, but we work to protect your
          information.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          {name} is not directed to children under 13, and we do not knowingly
          collect their information.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We will post the new
          version here and update the date above.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Questions? Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
