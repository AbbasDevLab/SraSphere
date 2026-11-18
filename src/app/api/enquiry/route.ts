import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { serviceOptions, budgetOptions } from "@/lib/site-config";

const SERVICE_VALUES: readonly string[] = serviceOptions;
const BUDGET_VALUES: readonly string[] = budgetOptions;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, companyName, country, service, budget, projectDescription } = body ?? {};

    const isNonEmptyString = (v: unknown, min: number, max: number) =>
      typeof v === "string" && v.trim().length >= min && v.trim().length <= max;

    if (
      !isNonEmptyString(fullName, 2, 120) ||
      !isNonEmptyString(email, 5, 200) ||
      !/^\S+@\S+\.\S+$/.test(email) ||
      !isNonEmptyString(companyName, 2, 200) ||
      !isNonEmptyString(country, 2, 100) ||
      !isNonEmptyString(projectDescription, 20, 5000) ||
      !SERVICE_VALUES.includes(service) ||
      !BUDGET_VALUES.includes(budget)
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
      budget,
      project_description: projectDescription.trim(),
    });

    if (error) {
      return NextResponse.json(
        { error: "We could not record your enquiry right now. Please try again or email us directly." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
