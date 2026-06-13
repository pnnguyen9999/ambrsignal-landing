import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "AMBR Signal builds compact music hardware, embedded instruments, and creative tools for rhythm, performance, and exploration.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AMBR Signal | Sound machines for signal-driven music",
    template: "%s | AMBR Signal",
  },
  description,
  keywords: [
    "music hardware",
    "groovebox",
    "embedded instruments",
    "MIDI controller",
    "STM32H7",
    "electronic music",
    "AMBR Garden",
  ],
  authors: [{ name: "AMBR Signal" }],
  creator: "AMBR Signal",
  publisher: "AMBR Signal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AMBR Signal",
    title: "AMBR Signal | Sound machines for signal-driven music",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "AMBR Signal | Sound machines for signal-driven music",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
