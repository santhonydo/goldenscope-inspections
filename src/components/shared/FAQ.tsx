"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export function FAQ({
  items = faqs,
  defaultOpen = null,
}: {
  items?: { question: string; answer: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-[17px] font-medium tracking-tight">{item.question}</span>
              <Plus
                className={`h-4 w-4 shrink-0 text-gold transition-transform ${isOpen ? "rotate-45" : ""}`}
              />
            </button>
            {isOpen ? (
              <p className="pb-5 max-w-2xl text-sm leading-7 text-muted">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
