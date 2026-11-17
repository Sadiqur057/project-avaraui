"use client";

import { ReviewsBlock } from "@/components/custom/blocks/ReviewsBlock";
import { reviews } from "@/lib/restaurant";

export function GuestReviews() {
  return (
    <section id="reviews" className="scroll-mt-24">
      <ReviewsBlock
        variant="up-down-vertical-marquee"
        title="Kind words from our guests"
        subtitle="Anniversaries, birthdays and quiet Tuesday dinners. Here is what the people at our tables say."
        eyebrow="Guest reviews"
        reviews={reviews}
      />
    </section>
  );
}
