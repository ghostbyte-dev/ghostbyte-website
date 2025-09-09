// FaqSectionClient.tsx
"use client";

import { useState, useRef, useEffect } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col space-y-4 max-w-2xl w-full mx-auto">
      {faqs.map((item, index) => (
        <AccordionItem
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          item={item}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  item,
  isOpen,
  onClick,
}: {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left px-6 py-4 bg-gray-900 hover:bg-gray-800 flex justify-between items-center"
      >
        <span className="text-gray-200 font-medium">{item.question}</span>
        <span className="text-gray-400">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-[height] duration-500 ease-in-out"
      >
        <div className="px-6 py-4">
          <p className="text-gray-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
