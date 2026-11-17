"use client";

import { CTASection } from "@/components/custom/blocks/CtaSectionBlock";
import { offerReels } from "@/lib/restaurant";

export function ChefOffer() {
  return (
    <section id="offer" className="scroll-mt-24">
      <CTASection
        variant="offer-showcase"
        badge="Chef's special · Tuesday to Thursday"
        heading="The seven-course tasting menu"
        subheading="Chef's favourite plates in one unhurried evening, from the first bite of raw scallop to the last square of chocolate. Wine pairing available."
        currency="$"
        price={145}
        compareAtPrice={185}
        period="per guest"
        savingsText="Save $40"
        ctaText="Reserve the tasting menu"
        ctaHref="/reserve?offer=tasting"
        footnote="Whole table only · Please tell us about allergies when you book"
        images={offerReels}
      />
    </section>
  );
}
