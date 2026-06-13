import { LandingPage } from "@/components/landing-page";
import { SITE_URL } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AMBR Signal",
  url: SITE_URL,
  description:
    "A music technology studio building sound machines, embedded instruments, and signal-driven creative tools.",
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "AMBR Garden",
      description:
        "A compact groovebox prototype for sequencing, MIDI control, and live electronic music performance.",
      category: "Electronic musical instrument",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage />
    </>
  );
}
