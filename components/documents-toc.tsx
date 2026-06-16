"use client";

import { useEffect, useMemo, useState } from "react";
import type { Heading } from "nextra";

type DocumentsTocProps = {
  toc?: Heading[];
};

export function DocumentsToc({ toc }: DocumentsTocProps) {
  const items = useMemo(() => toc?.filter((item) => item.id) ?? [], [toc]);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const visibleHeadings = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleHeadings.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visibleHeadings.delete(entry.target.id);
          }
        }

        const nextActiveId = [...visibleHeadings.entries()].sort(
          (a, b) => a[1] - b[1]
        )[0]?.[0];

        if (nextActiveId) {
          setActiveId(nextActiveId);
        }
      },
      {
        rootMargin: "-96px 0px -65% 0px",
        threshold: [0, 1],
      }
    );

    for (const item of items) {
      const heading = document.getElementById(item.id);

      if (heading) {
        observer.observe(heading);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <aside
      className="documents-toc"
      aria-label="On this page"
      data-pagefind-ignore="all"
    >
      <p className="documents-toc-title">On This Page</p>
      <nav>
        <ol>
          {items.map((item) => (
            <li key={item.id} data-depth={item.depth}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
