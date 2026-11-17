import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/restaurant";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { value: "2009", label: "Doors opened" },
  { value: "38", label: "Seats, one room" },
  { value: "30 days", label: "Dry-aging, in house" },
];

export function OurStory() {
  return (
    <section id="story" className="scroll-mt-24 bg-secondary/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl pb-16 sm:pb-20 lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src={img("chef", 1000, 1250)}
              alt="Our chef plating a dish at the pass"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-square w-1/2 overflow-hidden rounded-3xl border-[6px] border-secondary shadow-xl sm:w-2/5">
            <Image src={img("diningRoom", 600, 600)} alt="The candle-lit dining room" fill sizes="240px" className="object-cover" />
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title={
              <>
                A small kitchen with a <em className="text-primary">long memory</em>
              </>
            }
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
            <p>
              Chef&apos;s Hotel began as a twelve-seat supper room above a fish market, cooking whatever the
              boats brought in that morning. Fifteen years on the room is bigger, but the idea hasn&apos;t
              changed: buy from people we know, cook over fire, and let the ingredient do the talking.
            </p>
            <p>
              Our butcher ages beef and pork in-house for up to thirty days. Our pastry chef starts each
              dessert two days before you eat it. And our team sets a table the way we would for friends at
              home: warm, unhurried and generous.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {facts.map((f) => (
              <div key={f.label}>
                <dd className="font-serif text-3xl text-primary sm:text-4xl">{f.value}</dd>
                <dt className="mt-1 text-sm text-muted-foreground">{f.label}</dt>
              </div>
            ))}
          </dl>

          <Link
            href="/reserve"
            className="mt-10 inline-flex h-12 items-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Book your evening
          </Link>
        </div>
      </div>
    </section>
  );
}
