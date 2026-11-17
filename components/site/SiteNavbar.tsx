"use client";

import Link from "next/link";
import { NavbarBlock } from "@/components/custom/blocks/NavbarBlock";
import { navLinks, restaurant } from "@/lib/restaurant";

export function SiteNavbar() {
  return (
    <NavbarBlock
      variant="floating"
      logoText={restaurant.name}
      linkComponent={Link}
      links={navLinks}
      secondaryAction={{ label: "Call us", href: `tel:${restaurant.phone.replace(/[^\d+]/g, "")}` }}
      cta={{ label: "Reserve a table", href: "/reserve" }}
    />
  );
}
