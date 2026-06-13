import { Brand } from "@/components/brand";

const navigation = [
  { label: "Product", href: "#product" },
  { label: "Process", href: "#process" },
  { label: "Updates", href: "#updates" },
  { label: "Contact", href: "mailto:hello@ambrsignal.com" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1300px] items-center justify-between px-5 sm:px-8">
        <a href="#" aria-label="AMBR Signal home" className="hover:opacity-60">
          <Brand />
        </a>

        <nav aria-label="Primary navigation" className="hidden sm:block">
          <ul className="flex items-center gap-7 text-[13px] font-medium">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors duration-200 hover:text-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative sm:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-[13px] font-medium [&::-webkit-details-marker]:hidden">
            Menu
            <span
              aria-hidden="true"
              className="relative block h-2.5 w-3.5 transition-transform group-open:rotate-45"
            >
              <span className="absolute left-0 top-0 h-px w-full bg-current" />
              <span className="absolute bottom-0 left-0 h-px w-full bg-current" />
            </span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-9 min-w-44 rounded-xl border border-line bg-white p-2 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          >
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[#f5f5f5]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
