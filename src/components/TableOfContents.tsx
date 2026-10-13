import React from 'react';
import { ListOrdered } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-xs"
    >
      <div className="flex items-center gap-2.5 pb-4 border-b border-slate-200 text-[#0B1F3A]">
        <ListOrdered className="w-5 h-5 text-[#FF6B1A]" />
        <h2 className="text-base font-bold tracking-tight text-slate-900">
          Table of Contents
        </h2>
      </div>
      <ol className="mt-4 space-y-2.5 text-sm list-decimal list-inside text-slate-700">
        {items.map((item) => (
          <li key={item.id} className="leading-snug">
            <a
              href={`#${item.id}`}
              className="text-slate-700 hover:text-[#FF6B1A] font-medium transition-colors inline-block"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
