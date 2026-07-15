import type { Metadata } from "next";
import Link from "next/link";
import { PolicyShell } from "@/components/policy-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Meridian Repute website and our reputation intelligence, executive branding, and advisory services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <PolicyShell title="Terms of Service" lastUpdated="15 July 2026">
      <p>
        These terms govern your use of the Meridian Repute website
        (meridianrepute.com) and, together with a signed consulting agreement,
        the services we provide. By using this website or engaging our services,
        you accept these terms.
      </p>

      <h2>1 — Who We Are</h2>
      <p>
        Meridian Repute is an AI reputation intelligence and executive influence
        consultancy operating from Lahore, Pakistan. Our services include
        reputation audits, AI visibility analysis, executive branding, review
        intelligence, crisis readiness, and continuous reputation monitoring.
      </p>

      <h2>2 — Services &amp; Engagements</h2>
      <p>
        Information on this website is a general description of our services, not
        a binding offer. Every client engagement is defined by a written
        consulting agreement that sets out scope, deliverables, fees, and
        timelines. If these terms conflict with a signed agreement, the signed
        agreement prevails.
      </p>

      <h2>3 — No Guarantee of Outcomes</h2>
      <p>
        Reputation outcomes depend on third-party platforms we do not control —
        search engines, AI systems, social networks, review platforms, and media
        organisations. We apply professional expertise and established methods,
        but we do not and cannot guarantee specific search rankings, specific
        AI-generated descriptions, removal of particular content, review scores,
        media coverage, or any other specific outcome. Any projections we share
        are good-faith estimates, not commitments.
      </p>

      <h2>4 — Client Responsibilities</h2>
      <ul>
        <li>
          Provide accurate, truthful information about yourself or your
          organisation.
        </li>
        <li>
          Authorise us in writing before we research, publish, or communicate on
          your behalf.
        </li>
        <li>
          Review and approve content before publication where the engagement
          involves published material.
        </li>
        <li>
          Use our reports and deliverables lawfully and in accordance with the
          engagement&apos;s purpose.
        </li>
      </ul>
      <p>
        We rely on the accuracy of the information clients provide. Clients are
        responsible for the factual accuracy of claims they ask us to
        communicate, and agree to indemnify Meridian Repute against third-party
        claims arising from false or misleading information supplied to us.
      </p>

      <h2>5 — Ethical &amp; Legal Boundaries</h2>
      <p>
        We operate within the laws of Pakistan, including the Prevention of
        Electronic Crimes Act (PECA) as amended, and within the ethical
        standards published on our{" "}
        <Link href="/ethics-standards">Ethics &amp; Engagement Standards</Link>{" "}
        page. We decline work that involves fabricated reviews, false content,
        suppression of accurate information of legitimate public interest, or
        harassment of journalists or private individuals. We may pause or
        terminate an engagement that would require us to breach these standards
        or applicable law.
      </p>

      <h2>6 — Fees &amp; Payment</h2>
      <p>
        Fees are set out in each consulting agreement. Unless agreed otherwise:
        one-time audits are payable in advance; retainers are invoiced monthly in
        advance; and late payment may result in suspension of services. Fees for
        work already performed are non-refundable except where a signed agreement
        states otherwise.
      </p>

      <h2>7 — Confidentiality</h2>
      <p>
        Both parties agree to keep confidential information confidential. We do
        not disclose client identities or engagement details without written
        consent, except where disclosure is required by law. Mutual
        non-disclosure agreements are available for all engagements.
      </p>

      <h2>8 — Intellectual Property</h2>
      <p>
        The content of this website — text, design, and brand assets — belongs
        to Meridian Repute and may not be reproduced without permission. Reports
        and deliverables produced for a client become the client&apos;s property
        upon full payment; our underlying methods, frameworks, templates, and
        tools remain ours.
      </p>

      <h2>9 — Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Meridian Repute&apos;s total
        liability arising from any engagement is limited to the fees paid for
        that engagement in the three months preceding the claim, and we are not
        liable for indirect, consequential, or reputational losses caused by
        third-party platforms, media coverage, or actions taken by others.
      </p>

      <h2>10 — Termination</h2>
      <p>
        Either party may terminate an engagement in accordance with the notice
        period in the consulting agreement. On termination, fees for work
        performed up to the termination date remain payable.
      </p>

      <h2>11 — Governing Law &amp; Jurisdiction</h2>
      <p>
        These terms are governed by the laws of the Islamic Republic of
        Pakistan. The courts of Lahore have exclusive jurisdiction over any
        dispute arising from this website or our services, subject to any
        dispute-resolution clause in a signed agreement.
      </p>

      <h2>12 — Changes &amp; Contact</h2>
      <p>
        We may revise these terms from time to time; the current version is
        always available on this page. Questions may be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or +92 333
        4723813.
      </p>
    </PolicyShell>
  );
}
