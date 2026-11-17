"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { BookAppointment } from "@/components/custom/blocks/BookAppointmentBlock";
import { InputBlock } from "@/components/custom/blocks/InputBlock";
import { ToggleGroup, ToggleGroupItem } from "@/components/custom/blocks/ToggleGroupBlock";
import { createReservation } from "@/app/actions";
import { dishes, img, restaurant } from "@/lib/restaurant";

const OCCASIONS = ["Birthday", "Anniversary", "Business", "Celebration"];

const SLOT_GROUPS = [
  { label: "Early evening", slots: ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"].map((label) => ({ label })) },
  { label: "Late evening", slots: ["7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"].map((label) => ({ label })) },
];

const PRACTITIONER = {
  name: "Reserve a table at Chef's Hotel",
  shortName: "Chef's Hotel",
  specialties: "Seasonal tasting menus, dry-aged cuts and a candle-lit cellar list",
  practice: restaurant.address[0],
  photo: img("diningRoom", 900, 1200),
  photoAlt: "The candle-lit dining room at Chef's Hotel, tables laid for dinner",
  rating: 4.9,
  reviews: 1240,
  summary:
    "Guests describe warm, unhurried service and plates that taste as good as they look. Quiet enough to talk, lively enough to celebrate.",
  location: restaurant.address.join(", "),
  phone: restaurant.phone,
  email: restaurant.email,
};

export function ReserveExperience() {
  const params = useSearchParams();
  const dishSlug = params.get("dish");
  const dish = dishes.find((d) => d.slug === dishSlug);
  const offer = params.get("offer");

  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("");
  const [notes, setNotes] = useState(
    offer === "tasting"
      ? "Chef's seven-course tasting menu"
      : dish
        ? `Would like to try the ${dish.name}${params.get("size") ? ` (${params.get("size")} portion)` : ""}${Number(params.get("qty")) > 1 ? `, ${Number(params.get("qty"))} portions` : ""}`
        : "",
  );
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const extras = (
    <fieldset className="space-y-4 border-0 p-0">
      <legend className="mb-3 text-sm font-semibold">Your details</legend>

      <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-4 py-2.5">
        <div>
          <p className="text-sm font-medium" id="guests-label">Guests</p>
          <p className="text-xs text-muted-foreground">Parties of 1–12 online</p>
        </div>
        <div className="flex items-center gap-1" role="group" aria-labelledby="guests-label">
          <button
            type="button"
            aria-label="Remove a guest"
            disabled={guests <= 1}
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-40"
          >
            <Minus className="size-4" aria-hidden />
          </button>
          <output className="w-8 text-center text-base font-semibold tabular-nums" aria-live="polite">{guests}</output>
          <button
            type="button"
            aria-label="Add a guest"
            disabled={guests >= 12}
            onClick={() => setGuests((g) => Math.min(12, g + 1))}
            className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-40"
          >
            <Plus className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      <InputBlock label="Full name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <InputBlock label="Phone" name="phone" type="text" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 555 000 0000" />
      <InputBlock label="Email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />

      <div>
        <p className="mb-2 text-sm font-medium">Occasion <span className="font-normal text-muted-foreground">(optional)</span></p>
        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          value={occasion}
          onValueChange={(v) => setOccasion(typeof v === "string" ? v : "")}
          className="flex-wrap"
        >
          {OCCASIONS.map((o) => (
            <ToggleGroupItem key={o} value={o}>{o}</ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium">
          Allergies or requests <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"
          placeholder="Tell us about allergies, high chairs, window tables..."
        />
      </div>

      {error && (
        <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}
    </fieldset>
  );

  return (
    <BookAppointment
      variant="solid"
      practitioner={PRACTITIONER}
      scores={[
        { label: "Food", value: 4.9 },
        { label: "Service", value: 4.8 },
        { label: "Ambience", value: 4.9 },
      ]}
      visitReasons={[
        { label: "Celebrations", value: 34 },
        { label: "Date night", value: 28 },
        { label: "Business dinners", value: 20 },
        { label: "Friends and family", value: 18 },
      ]}
      activities={[
        { label: "Main dining room", value: 60 },
        { label: "Terrace", value: 25 },
        { label: "Chef's counter", value: 15 },
      ]}
      slotGroups={SLOT_GROUPS}
      // We are closed on Mondays.
      unavailable={(d) => d.getDay() === 1}
      bookingHeading="Choose your evening"
      labels={{
        report: "What guests say",
        reviews: "guest reviews",
        reasons: "Why guests dine with us",
        reasonsCenter: "most common",
        reasonsHover: "of tables",
        activities: "Where you can sit",
        time: "Time",
        submit: "Reserve",
        confirmed: "Table reserved",
        another: "Make another reservation",
      }}
      bookingExtras={extras}
      confirmationDetails={
        <>
          <p>
            Table for {guests}
            {occasion ? ` · ${occasion}` : ""}
          </p>
          {reference && <p className="mt-0.5">Reference {reference}</p>}
        </>
      }
      onBook={async ({ day, slot }) => {
        setError(null);
        try {
          const y = day.getFullYear();
          const m = String(day.getMonth() + 1).padStart(2, "0");
          const d = String(day.getDate()).padStart(2, "0");
          const result = await createReservation({
            date: `${y}-${m}-${d}`,
            time: slot,
            guests,
            name,
            phone,
            email,
            occasion,
            notes,
            offer: offer ?? undefined,
          });
          if (!result.ok) throw new Error(result.error);
          setReference(result.reference);
        } catch (e) {
          setError(e instanceof Error ? e.message : "Something went wrong. Please try again or call us.");
          throw e;
        }
      }}
    />
  );
}
