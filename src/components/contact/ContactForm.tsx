"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const subjects = [
  "General question",
  "Book an inspection",
  "Buyer home inspection",
  "New construction",
  "Pre-listing inspection",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const subject = String(data.get("subject") || "Inspection inquiry");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${message}`;
    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-line bg-white p-8">
        <p className="eyebrow">Message ready</p>
        <h3 className="headline mt-3 text-3xl">Thank you.</h3>
        <p className="mt-4 text-sm leading-7 text-muted">
          Your email client should open with the message. If it does not, write us at{" "}
          <a href={site.emailHref} className="text-ink underline">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Full name" name="name" placeholder="Your name" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="(832) 833-2863" required />
      </div>
      <label className="block">
        <span className="mb-2 block text-sm">Subject</span>
        <select
          name="subject"
          className="h-12 w-full rounded-sm border border-line bg-white px-4 text-sm outline-none focus:border-gold"
          defaultValue={subjects[0]}
        >
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm">
          Message <span className="text-gold">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="w-full rounded-sm border border-line bg-white px-4 py-3 text-sm outline-none focus:border-gold"
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded bg-gold px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-gold-deep"
      >
        Send Message <ArrowRight className="h-3.5 w-3.5" />
      </button>
      <p className="text-xs text-muted">We typically respond within a few hours during business hours.</p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm">
        {label} {required ? <span className="text-gold">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-sm border border-line bg-white px-4 text-sm outline-none focus:border-gold"
      />
    </label>
  );
}
