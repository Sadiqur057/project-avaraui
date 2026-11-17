import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { dishes } from "@/lib/restaurant";
import { SectionHeading } from "./SectionHeading";

export function SignatureDishes() {
  return (
    <section id="dishes" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Signature dishes"
          title="Plates our guests come back for"
          description="Each dish is cooked to order from the day's market. Open one to see how it is made and what to pour with it."
        />

        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <li key={dish.slug} className={i % 3 === 1 ? "lg:mt-10" : undefined}>
              <Link
                href={`/dishes/${dish.slug}`}
                className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                    {dish.course}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground shadow-lg">
                    ${dish.price}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl leading-snug">{dish.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{dish.tagline}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-1.5 size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Star className="size-4 fill-accent text-accent" aria-hidden />
                  <span className="font-medium text-foreground">{dish.rating}</span>
                  <span>({dish.reviews} guest reviews)</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
