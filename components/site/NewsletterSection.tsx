"use client";

import { Newsletter } from "@/components/custom/blocks/NewsletterBlock";
import { subscribe } from "@/app/actions";
import { FACES } from "@/lib/restaurant";

export function NewsletterSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-6xl">
        <Newsletter variant="portraits" portraits={FACES.slice(0, 4).map((src) => ({ src, alt: "A guest at Chef's Hotel" }))}>
          <Newsletter.Heading id="newsletter-heading" className="font-serif font-medium">Join the Chef&apos;s Table circle</Newsletter.Heading>
          <Newsletter.Intro>
            One short note a month: new seasonal dishes, wine dinners and first access to reservations. No spam,
            and one click to leave.
          </Newsletter.Intro>
          <Newsletter.Form
            onSubscribe={async (email) => {
              const result = await subscribe(email);
              if (!result.ok) throw new Error(result.error);
            }}
            action="Subscribe"
            successTitle="Welcome to the table"
            successText="Look out for our next note in your inbox."
          />
          <Newsletter.Proof avatars={FACES}>Read by guests who dine with us again and again</Newsletter.Proof>
        </Newsletter>
      </div>
    </section>
  );
}
