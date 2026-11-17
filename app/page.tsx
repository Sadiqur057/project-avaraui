import { ChefOffer } from "@/components/site/ChefOffer";
import { GuestReviews } from "@/components/site/GuestReviews";
import { Hero } from "@/components/site/Hero";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { OurStory } from "@/components/site/OurStory";
import { SignatureDishes } from "@/components/site/SignatureDishes";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main>
        <Hero />
        <SignatureDishes />
        <OurStory />
        <ChefOffer />
        <GuestReviews />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
