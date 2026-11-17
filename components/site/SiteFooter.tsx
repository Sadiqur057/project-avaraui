"use client";

import { Footer } from "@/components/custom/blocks/FooterBlock";
import { navLinks, restaurant } from "@/lib/restaurant";
import { UtensilsCrossed } from "lucide-react";

export function SiteFooter() {
  return (
    <section id="visit" className="scroll-mt-24">
      <Footer
        variant="wordmark-glow"
        brandName={restaurant.name}
        wordmark={restaurant.name.replace(" ", " ")}
        logo={
          <span className="flex items-center gap-2 text-foreground">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <UtensilsCrossed className="size-4" aria-hidden />
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight">{restaurant.name}</span>
          </span>
        }
        tagline="Seasonal tasting menus, dry-aged cuts and a candle-lit cellar list. Reservations recommended."
        wordmarkFooter={{
          columns: [
            {
              title: "Explore",
              children: [
                ...navLinks.slice(0, 4).map((l) => ({ title: l.name, link: l.href })),
              ],
            },
            {
              title: "Dine with us",
              children: [
                { title: "Reserve a table", link: "/reserve" },
                { title: "Chef's tasting menu", link: "/reserve?offer=tasting" },
                { title: "Truffle wagyu", link: "/dishes/truffle-wagyu" },
                { title: "Seared salmon", link: "/dishes/seared-salmon" },
              ],
            },
          ],
          contact: {
            email: restaurant.email,
            phone: restaurant.phone,
            location: restaurant.address.join(", "),
            hours: [...restaurant.hours],
          },
          labels: { contact: "Reservations", location: "Find us", hours: "Opening hours", social: "Follow" },
          social: [...restaurant.social],
          legal: [
            { title: "Privacy", link: "#" },
            { title: "Terms", link: "#" },
          ],
          copyright: restaurant.name,
          bottomLine: "Please tell us about allergies when you book.",
        }}
      />
    </section>
  );
}
