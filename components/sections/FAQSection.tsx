"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { FAQ_ITEMS } from "@/data";
import { cn } from "@/lib/utils";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <div
      className={cn(
        "bg-white border-[1.5px] rounded-card overflow-hidden transition-all duration-200",
        isOpen ? "border-brand-red-mid" : "border-gray-100"
      )}
    >
      <button
        id={questionId}
        className="w-full flex justify-between items-center px-6 py-5 text-left font-head font-bold text-[0.95rem] hover:bg-gray-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span>{question}</span>
        <Icon
          name="plus"
          className={cn(
            "w-5 h-5 text-brand-red flex-shrink-0 ml-3 transition-transform duration-300",
            isOpen && "rotate-45"
          )}
        />
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={cn(
          "overflow-hidden transition-all duration-350 ease-in-out",
          isOpen ? "max-h-[200px]" : "max-h-0"
        )}
      >
        <p className="px-6 pb-5 text-[0.88rem] text-neutral-gray leading-[1.7]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="py-[100px] bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <SectionHeading
            id="faq-heading"
            label="FAQ"
            title={
              <>
                Questions?{" "}
                <span className="text-brand-red">We have answers.</span>
              </>
            }
          />
        </div>

        <div
          className="max-w-[720px] mx-auto flex flex-col gap-3"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {FAQ_ITEMS.map(({ id, question, answer }, index) => (
            <div
              key={id}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <meta itemProp="name" content={question} />
              <FAQItem
                question={question}
                answer={answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === index ? -1 : index))
                }
                index={index}
              />
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <meta itemProp="text" content={answer} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
