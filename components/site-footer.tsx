import { Brand } from "@/components/brand";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/ambrsignal" },
  { label: "YouTube", href: "https://youtube.com/@ambrsignal" },
  { label: "Contact", href: "mailto:hello@ambrsignal.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1300px] px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <a
              href="#"
              aria-label="AMBR Signal home"
              className="hover:opacity-60"
            >
              <Brand compact />
            </a>
            <p className="mt-3 text-sm text-muted">
              Music hardware, software, and signal craft.
            </p>
          </div>
          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-muted"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-line pt-6 text-xs text-muted sm:mt-16">
          © 2026 AMBR Signal. Built in Vietnam.
        </p>
      </div>
    </footer>
  );
}
