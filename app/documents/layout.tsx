import type { ReactNode } from "react";
import Link from "next/link";
import type { PageMapItem } from "nextra";
import { getPageMap } from "nextra/page-map";
import { Brand } from "@/components/brand";
import {
  DocumentsNav,
  type DocumentsNavItem,
} from "@/components/documents-nav";
import { DocumentsSearch } from "@/components/documents-search";

export const metadata = {
  title: "Documents",
};

function getItemTitle(item: PageMapItem) {
  if ("frontMatter" in item && typeof item.frontMatter?.title === "string") {
    return item.frontMatter.title;
  }

  if ("name" in item) {
    return item.name
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  return null;
}

function getNavItems(pageMap: PageMapItem[]): DocumentsNavItem[] {
  return pageMap.flatMap((item) => {
    if (!("route" in item)) {
      return [];
    }

    const title = getItemTitle(item);

    if (!title) {
      return [];
    }

    return [
      {
        title,
        route: item.route,
        children: "children" in item ? getNavItems(item.children) : undefined,
      },
    ];
  });
}

export default async function DocumentsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pageMap = await getPageMap("/documents");
  const navItems = getNavItems(pageMap);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur"
        data-pagefind-ignore="all"
      >
        <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="AMBR Signal home">
            <Brand />
          </Link>
          <DocumentsSearch />
        </div>
      </header>
      <div className="grid lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside
          className="border-b border-line py-6 lg:sticky lg:top-[72px] lg:h-[calc(100vh-72px)] lg:border-b-0 lg:border-r"
          data-pagefind-ignore="all"
        >
          <DocumentsNav items={navItems} />
        </aside>
        {children}
      </div>
    </div>
  );
}
