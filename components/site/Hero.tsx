"use client";

import Link from "next/link";
import { BreatheHero } from "@/components/custom/blocks/BreatheHeroBlock";
import { heroCards } from "@/lib/restaurant";

export function Hero() {
  return (
    <BreatheHero
      title="An evening to"
      titleAccent="savour, slowly."
      titleStyle="serif"
      italicAccent
      description="Seasonal tasting menus, dry-aged cuts and a candle-lit cellar list, cooked over open flame and served with unhurried care."
      badgeText="Chef's seven-course tasting menu · now booking"
      badgeHighlight="New"
      badgeHref="/#offer"
      buttonLabel="Reserve a table"
      buttonHref="/reserve"
      secondaryButtonLabel="See signature dishes"
      secondaryButtonHref="/#dishes"
      cards={heroCards}
      captions="hover"
      scrollMode="grow"
      internalScroll={false}
      className="pt-28"
      linkComponent={Link}
    />
  );
}
