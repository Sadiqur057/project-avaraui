"use server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ActionResult<T = object> = ({ ok: true } & T) | { ok: false; error: string };

export async function subscribe(email: string): Promise<ActionResult> {
  if (!EMAIL.test(email.trim())) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  // TODO: store the address with your email provider (Resend, Mailchimp, ...).
  // Nothing is persisted yet.
  return { ok: true };
}

export type ReservationInput = {
  date: string; // ISO date
  time: string;
  guests: number;
  name: string;
  phone: string;
  email: string;
  occasion?: string;
  notes?: string;
  offer?: string;
};

export async function createReservation(
  input: ReservationInput,
): Promise<ActionResult<{ reference: string }>> {
  if (!input.name.trim()) return { ok: false, error: "Please tell us your name." };
  if (!/^[+\d][\d\s().-]{6,}$/.test(input.phone.trim())) return { ok: false, error: "Please enter a phone number we can reach you on." };
  if (!EMAIL.test(input.email.trim())) return { ok: false, error: "Please enter a valid email address." };
  if (!(input.guests >= 1 && input.guests <= 12)) return { ok: false, error: "We seat parties of 1 to 12 online. Call us for larger groups." };
  // TODO: save to a database / send to your reservation system and email a confirmation.
  // Nothing is persisted yet; the reference below is only a placeholder.
  return { ok: true, reference: `CH-${Date.now().toString(36).toUpperCase().slice(-6)}` };
}
