import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { budgetOptions, serviceOptions } from "@/lib/site-config";

const isStringInRange = (value: unknown, min: number, max: number): value is string =>
  typeof value === "string" && value.trim().length >= min && value.trim().length <= max;
const isService = (value: unknown): value is (typeof serviceOptions)[number] =>
  typeof value === "string" && serviceOptions.some((service) => service === value);
const isBudget = (value: unknown): value is (typeof budgetOptions)[number] =>
  typeof value === "string" && budgetOptions.some((budget) => budget === value);

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const { fullName, email, companyName, country, service, budget, projectDescription } = payload;
  const normalizedBudget = budget === "" || budget === undefined ? null : budget;

  if (
    !isStringInRange(fullName, 2, 120) ||
    !isStringInRange(email, 5, 200) ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !isStringInRange(companyName, 2, 200) ||
    !isStringInRange(country, 2, 100) ||
    !isStringInRange(projectDescription, 20, 5000) ||
    !isService(service) ||
    (normalizedBudget !== null &&
      !isBudget(normalizedBudget))
  ) {
    return NextResponse.json(
      { error: "Please check the form fields and try again." },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Enquiries are not configured yet. Please contact us directly by email." },
      { status: 503 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { error } = await supabase.from("enquiries").insert({
    full_name: fullName.trim(),
    email: email.trim(),
    company_name: companyName.trim(),
    country: country.trim(),
    service,
    budget: normalizedBudget,
    project_description: projectDescription.trim(),
  });

  if (error) {
    console.error("Could not save contact enquiry", error);
    return NextResponse.json(
      { error: "We could not record your enquiry right now. Please try again or email us directly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
