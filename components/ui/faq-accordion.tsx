'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          className={`border-b border-[#e8e8e8] ${i === 0 ? 'border-t' : ''}`}
        >
          <button
            className="w-full text-left py-5 flex items-start justify-between gap-4 group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className={`text-[15px] font-semibold leading-[1.45] transition-colors ${openIndex === i ? 'text-[#0a0a0a]' : 'text-[#0a0a0a] group-hover:text-[#2563eb]'}`}>
              {item.q}
            </span>
            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-[#f5f5f5] text-[#555555] transition-colors group-hover:bg-[#e8e8e8]">
              {openIndex === i ? <Minus size={12} /> : <Plus size={12} />}
            </span>
          </button>
          {openIndex === i && (
            <div className="pb-5 pr-8">
              <p className="text-[14.5px] text-[#555555] leading-[1.70]">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
