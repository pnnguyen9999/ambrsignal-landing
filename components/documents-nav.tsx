"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type DocumentsNavItem = {
  title: string;
  route: string;
  children?: DocumentsNavItem[];
};

type DocumentsNavProps = {
  items: DocumentsNavItem[];
};

function normalizePath(path: string) {
  return path === "/" ? path : path.replace(/\/$/, "");
}

export function DocumentsNav({ items }: DocumentsNavProps) {
  const pathname = normalizePath(usePathname());

  return (
    <nav aria-label="Documents" className="documents-nav">
      {items.map((item) => {
        const route = normalizePath(item.route);
        const isActive = pathname === route;

        return (
          <div key={item.route}>
            <Link
              href={item.route}
              aria-current={isActive ? "page" : undefined}
              className="documents-nav-link"
            >
              {item.title}
            </Link>
            {item.children?.length ? (
              <div className="ml-3">
                <DocumentsNav items={item.children} />
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
