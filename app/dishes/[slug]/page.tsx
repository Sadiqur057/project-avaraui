import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Flame, GlassWater, TriangleAlert } from "lucide-react";
import { ProductDetails } from "@/components/custom/blocks/ProductDetailsBlock";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { dishes, getDish } from "@/lib/restaurant";

export function generateStaticParams() {
  return dishes.map((dish) => ({ slug: dish.slug }));
}

export async function generateMetadata({ params }: PageProps<"/dishes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) return {};
  return {
    title: dish.name,
    description: `${dish.tagline}. ${dish.description}`,
    openGraph: { images: [dish.image] },
  };
}

export default async function DishPage({ params }: PageProps<"/dishes/[slug]">) {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) notFound();

  const others = dishes.filter((d) => d.slug !== dish.slug).slice(0, 3);

  const facts = [
    { Icon: TriangleAlert, label: "Contains", value: dish.allergens.join(", ") },
  ];

  return (
    <>
      <SiteNavbar />
      <main className="pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            href="/#dishes"
            className="inline-flex items-center gap-2 rounded-full text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft className="size-4" aria-hidden /> All signature dishes
          </Link>
        </div>

        <ProductDetails
          variant="bento-editorial-showcase"
          title={dish.name}
          price={`$${dish.price}`}
          originalPrice=""
          description={dish.description}
          badge={`${dish.course} · Chef's special`}
          rating={dish.rating}
          reviewsCount={dish.reviews}
          images={dish.gallery}
          colors={[]}
          sizes={["Tasting", "Signature", "To share"]}
          className="pt-6 sm:pt-8"
          bento={{
            reviewNoun: "Guest Reviews",
            savingsLabel: "",
            notice: `Limited: only ${dish.portionsLeft} portions prepared each evening`,
            sizeLabel: "Portion",
            ctaLabel: "Reserve a table for this dish",
            ctaHref: `/reserve?dish=${dish.slug}`,
            perks: ["Cooked to order", "Pairing on request", "Allergy-aware"],
            extra: (
              <dl className="grid gap-3 border-t border-border pt-4 text-sm">
                <div className="flex gap-3">
                  <GlassWater className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pairs with</dt>
                    <dd className="mt-0.5 text-foreground">{dish.pairing}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cooked to order</dt>
                    <dd className="mt-0.5 text-foreground">About {dish.prep}</dd>
                  </div>
                </div>
              </dl>
            ),
          }}
        />

        <section className="px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">From the kitchen</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">How we make it</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">{dish.story}</p>

              <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted-foreground">On the plate</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {dish.notes.map((note) => (
                  <li key={note} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                    <Flame className="size-3.5 text-primary" aria-hidden />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid content-start gap-4">
              {facts.map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-foreground">{value}</dd>
                  </div>
                </div>
              ))}
              <p className="px-1 text-sm text-muted-foreground">
                Please tell us about allergies when you book. We can adapt most dishes for guests who are
                vegetarian, gluten-free or dairy-free.
              </p>
            </dl>
          </div>
        </section>

        <section className="bg-secondary/60 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Keep exploring" title="More from the kitchen" />
            <ul className="mt-12 grid gap-6 sm:grid-cols-3">
              {others.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/dishes/${d.slug}`}
                    className="group flex h-full gap-4 rounded-3xl border border-border bg-card p-3 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:flex-col"
                  >
                    <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-2xl sm:aspect-[4/3] sm:w-full">
                      <Image
                        src={d.image}
                        alt={d.name}
                        fill
                        sizes="(min-width: 640px) 360px, 112px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center sm:px-2 sm:pb-2">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{d.course}</p>
                      <h3 className="mt-1 flex items-center justify-between gap-2 font-serif text-xl">
                        {d.name}
                        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden />
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">${d.price}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
