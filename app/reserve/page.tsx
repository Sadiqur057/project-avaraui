import type { Metadata } from "next";
import { Suspense } from "react";
import { ReserveExperience } from "@/components/site/ReserveExperience";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";

export const metadata: Metadata = {
  title: "Reserve a table",
  description: "Book a table at Chef's Hotel. Choose a date, time and party size; we will confirm by email.",
};

export default function ReservePage() {
  return (
    <>
      <SiteNavbar />
      <main className="pt-24 sm:pt-28">
        <Suspense fallback={<div className="mx-auto h-[70vh] max-w-7xl animate-pulse rounded-3xl bg-muted motion-reduce:animate-none" aria-hidden />}>
          <ReserveExperience />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
