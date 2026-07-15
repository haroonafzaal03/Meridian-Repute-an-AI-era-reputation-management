import type { Metadata } from "next";
import { PolicyShell } from "@/components/policy-shell";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers about the information on the Meridian Repute website and the nature of reputation intelligence services.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <PolicyShell title="Disclaimer" lastUpdated="15 July 2026">
      <h2>General Information Only</h2>
      <p>
        The content of this website — including articles, insights, statistics,
        and service descriptions — is provided for general information. It
        reflects our professional perspective at the time of publication and may
        become outdated as platforms, algorithms, and laws change. It should not
        be treated as advice for any specific situation.
      </p>

      <h2>Not Legal Advice</h2>
      <p>
        Meridian Repute is a reputation intelligence and communications
        consultancy. We are not a law firm, and nothing on this website or in
        our consultations constitutes legal advice — including any discussion of
        defamation, the Prevention of Electronic Crimes Act (PECA), content
        takedowns, or related matters. Where an engagement raises legal
        questions, we recommend, and where appropriate coordinate with,
        qualified legal counsel. Clients remain responsible for obtaining their
        own legal advice.
      </p>

      <h2>No Guaranteed Results</h2>
      <p>
        Search engines, AI assistants, social platforms, and review sites
        operate under their own systems and policies, which change without
        notice and are outside our control. References on this website to
        improved visibility, search presence, AI descriptions, or reputation
        scores describe the aims of our work, not promised outcomes. Past
        results, examples, and case studies do not guarantee similar results for
        any other client.
      </p>

      <h2>AI-Related Findings</h2>
      <p>
        Our AI visibility reports describe how AI systems such as ChatGPT,
        Gemini, and AI-powered search responded to queries at the time of
        testing. AI outputs are probabilistic and change between queries,
        models, and dates. A report is a snapshot, not a permanent record of how
        any AI system will describe a person or business.
      </p>

      <h2>Testimonials</h2>
      <p>
        Testimonials on this website reflect the genuine experience of the
        individuals quoted. They are individual experiences and do not guarantee
        that other clients will achieve the same results.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        This website may link to external websites and services. We are not
        responsible for their content, accuracy, or privacy practices, and a
        link does not imply endorsement.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer may be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </PolicyShell>
  );
}
