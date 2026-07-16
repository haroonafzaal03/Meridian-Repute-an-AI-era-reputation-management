import type { Metadata } from "next";
import { PolicyShell } from "@/components/policy-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ethics & Engagement Standards",
  description:
    "The ethical standards that govern every Meridian Repute engagement: no fabricated reviews, no suppression of truthful reporting, and legally compliant reputation defense.",
  alternates: { canonical: "/ethics-standards/" },
};

export default function EthicsStandardsPage() {
  return (
    <PolicyShell title="Ethics & Engagement Standards" lastUpdated="15 July 2026">
      <p className="my-14 border-y border-border py-8 text-center text-[clamp(16px,2.4vw,19px)] font-extralight tracking-[0.12em] uppercase leading-[2]">
        We don&apos;t create images.
        <br />
        We protect truths.
      </p>

      <p>
        A reputation firm&apos;s own standards are its first case study. These
        are the principles that govern every Meridian Repute engagement. They
        are not marketing language — they are working rules, written into how we
        scope, accept, and deliver our work.
      </p>

      <h2>1 — We Work With Truth</h2>
      <p>
        Our role is to make sure the accurate story of a person or business is
        visible, complete, and fairly represented — in search results, on social
        platforms, in reviews, and in the answers AI systems give. We correct
        false, outdated, and misleading information. We do not fabricate
        achievements, credentials, or narratives.
      </p>

      <h2>2 — We Do Not Suppress Legitimate Information</h2>
      <p>
        We do not accept engagements whose purpose is to bury accurate reporting
        of legitimate public interest, silence lawful criticism, or intimidate
        journalists, reviewers, or private individuals. Where damaging
        information about a client is true, our work focuses on context,
        response, remediation, and rebuilding — not concealment.
      </p>

      <h2>3 — No Fake Reviews. No Fake Accounts. Ever.</h2>
      <p>
        We never purchase reviews, post reviews from fabricated identities,
        incentivise reviews in violation of platform policies, or operate
        inauthentic accounts on any platform. We help clients earn genuine
        feedback from real customers and respond to it professionally.
        Everything we publish complies with the policies of the platform it
        appears on.
      </p>

      <h2>4 — Legal Review on Sensitive Engagements</h2>
      <p>
        Crisis communications and content-correction work in Pakistan operates
        within a demanding legal environment, including the Prevention of
        Electronic Crimes Act (PECA) as amended. Every crisis-response and
        content-dispute engagement includes a legal-review step, and where
        required we coordinate with qualified media and cyber-law counsel. We do
        not advise or execute strategies that would expose our clients — or our
        firm — to unlawful conduct.
      </p>

      <h2>5 — Verification Before Publication</h2>
      <p>
        Factual claims in content we write or place on a client&apos;s behalf
        are verified against sources the client provides or that we can
        independently confirm. Clients are responsible for the accuracy of the
        information they give us, and we decline to publish claims we know or
        suspect to be false.
      </p>

      <h2>6 — Discretion &amp; Confidentiality</h2>
      <p>
        We do not disclose who our clients are, that an engagement exists, or
        anything shared with us in the course of our work — except with written
        consent or where the law requires. Non-disclosure agreements are
        standard, not exceptional.
      </p>

      <h2>7 — Conflicts of Interest</h2>
      <p>
        We do not represent direct competitors in the same market on adversarial
        reputation matters at the same time. Where a potential conflict arises,
        we disclose it and, where necessary, decline the engagement.
      </p>

      <h2>8 — Honest Use of AI</h2>
      <p>
        We use AI systems to analyse, monitor, and accelerate our work — never
        to manufacture false signals. AI-assisted content we produce is reviewed
        by a human strategist, reflects the client&apos;s genuine voice and
        verified facts, and is never used to deceive platforms, readers, or
        algorithms.
      </p>

      <h2>9 — The Right to Decline</h2>
      <p>
        We reserve the right to decline or exit any engagement that would require
        us to breach these standards. In a business built on reputation, the
        firm&apos;s own integrity is the product.
      </p>

      <p style={{ marginTop: "48px" }}>
        Questions about these standards may be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </PolicyShell>
  );
}
