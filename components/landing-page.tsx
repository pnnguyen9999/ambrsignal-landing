'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/components/brand";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import prototypeImage from "@/public/img/ambrsignal-proto.png";
import { animate } from "animejs";
import CursorBlinker from "./ui/CursorBlinker";

const features = [
  { number: "01", title: "16-step sequencing" },
  { number: "02", title: "MIDI over USB" },
  { number: "03", title: "Custom bare-metal UI" },
  { number: "04", title: "Embedded audio engine" },
  { number: "05", title: "Chord trigger mode" },
  { number: "06", title: "Hardware-first workflow" },
];

const processSteps = [
  "Prototype concept",
  "Schematic & PCB",
  "JLCPCB assembly",
  "STM32H7 firmware",
  "USB MIDI testing",
  "Audio engine",
  "Live demo sessions",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </p>
  );
}

function SectionIntro({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.055em]">
        {title}
      </h2>
      <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {body}
      </p>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0 lg:max-w-[520px]">
      <div className="relative aspect-[2/3] overflow-hidden">
        <div className="absolute inset-x-4 top-0 z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
          <span>AMBR / GDN-01</span>
          <span>Prototype</span>
        </div>
        <Image
          src={prototypeImage}
          alt="AMBR Garden groovebox prototype with display, controls, and performance pads"
          fill
          priority
          placeholder="blur"
          sizes="(max-width: 1023px) min(100vw - 40px, 560px), 520px"
          className="object-cover object-center"
        />
      </div>
      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
        AMBR Garden / prototype
      </p>
    </div>
  );
}

function Hero() {
  const baseDisplayText = "Sound machines for signal-driven music.";
  const [displayText, setDisplayText] = useState("");
  const animationRef = useRef<any>(null);

  useEffect(() => {
    const counter = { count: 0 };
    animationRef.current = animate(counter, {
      count: baseDisplayText.length,
      duration: 2000,
      ease: "inQuad",
      alternate: true,
      loop: true,
      loopDelay: 2000,
      onUpdate: () => {
        const latest = Math.round(counter.count);
        setDisplayText(baseDisplayText.slice(0, latest));
      },
    });

    return () => {
      animationRef.current?.pause();
    };
  }, []);

  return (
    <section className="overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16 lg:pb-32 lg:pt-32">
        <div>
          <SectionLabel>Independent music technology studio</SectionLabel>
          <h1 className="max-w-[780px] lg:min-h-[400px] text-[clamp(3.4rem,8vw,6.8rem)] font-medium leading-[0.90] tracking-[-0.072em]">
            {/* Sound machines for signal-driven music. */}
            {displayText}
            <CursorBlinker />
          </h1>
          <p className="mt-8 max-w-[650px] text-lg leading-8 text-muted sm:mt-10 sm:text-xl sm:leading-9">
            AMBR Signal builds compact music hardware, embedded instruments, and
            creative tools for rhythm, performance, and exploration.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row sm:mt-10">
            <a
              href="#updates"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#111] px-5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
            >
              Follow the build
              <ArrowIcon />
            </a>
            <a
              href="#product"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#cfcfcf] bg-white px-5 text-sm font-medium transition-colors hover:border-[#111] hover:bg-[#fafafa]"
            >
              See AMBR Garden
            </a>
          </div>
          <p className="mt-5 max-w-xl font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-muted sm:text-[11px]">
            First prototype in development — built around STM32H7, MIDI, custom
            UI, and live sequencing.
          </p>
        </div>

        <ProductVisual />
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="product" className="border-b border-line">
      <div className="mx-auto max-w-[1300px] px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionIntro
            label="01 / Product"
            title="Introducing AMBR Garden"
            body="AMBR Garden is our first groovebox prototype: a compact instrument for sketching patterns, triggering chords, shaping sound, and performing ideas live."
          />
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group min-h-36 bg-white p-6 transition-colors hover:bg-[#fafafa] sm:min-h-44 sm:p-7"
              >
                <p className="font-mono text-[10px] text-muted">
                  {feature.number}
                </p>
                <h3 className="mt-10 max-w-[180px] text-lg font-medium leading-6 tracking-[-0.025em] sm:mt-14">
                  {feature.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="border-b border-line bg-[#fafafa]">
      <div className="mx-auto grid max-w-[1300px] gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-24 lg:py-36">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionIntro
            label="02 / Process"
            title="Built from the board up."
            body="From schematic design and PCB layout to firmware, audio testing, enclosure experiments, and live demos — AMBR Garden is being developed in public as a real hardware project."
          />
        </div>

        <ol className="border-t border-[#d6d6d6]">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="group grid grid-cols-[48px_1fr_auto] items-center gap-3 border-b border-[#d6d6d6] py-5 sm:grid-cols-[64px_1fr_auto] sm:py-6"
            >
              <span className="font-mono text-[10px] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-medium tracking-[-0.02em] sm:text-lg">
                {step}
              </span>
              <span
                aria-hidden="true"
                className={`size-2 rounded-full border border-[#999] ${index < 3 ? "bg-[#111]" : "bg-transparent"
                  }`}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function MediaPlaceholder() {
  return (
    <section aria-labelledby="prototype-media" className="border-b border-line">
      <div className="mx-auto max-w-[1300px] px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <div className="mb-5 flex items-center justify-between">
          <SectionLabel>03 / Field notes</SectionLabel>
          <p className="mb-5 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:block">
            Media archive / incoming
          </p>
        </div>
        <div className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-line bg-[#111] sm:aspect-[16/9]">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-white/25">
            <div className="absolute inset-x-0 top-[-40px] h-20 [clip-path:polygon(0_50%,8%_50%,11%_12%,15%_90%,20%_35%,26%_66%,31%_47%,40%_53%,45%_15%,50%_87%,57%_40%,63%_62%,70%_47%,77%_52%,83%_30%,88%_70%,92%_50%,100%_50%,100%_52%,92%_52%,88%_72%,83%_32%,77%_54%,70%_49%,63%_64%,57%_42%,50%_89%,45%_17%,40%_55%,31%_49%,26%_68%,20%_37%,15%_92%,11%_14%,8%_52%,0_52%)] bg-white" />
          </div>
          <div className="relative flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-transform duration-300 group-hover:scale-105 sm:size-20">
            <span className="ml-1 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white sm:border-y-[9px] sm:border-l-[14px]" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-white/60 sm:bottom-7 sm:left-7 sm:right-7 sm:text-[10px]">
            <span>Signal test / 00:00:00</span>
            <span>Awaiting capture</span>
          </div>
        </div>
        <p
          id="prototype-media"
          className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base"
        >
          Prototype footage, PCB shots, and live jam sessions coming soon.
        </p>
      </div>
    </section>
  );
}

function UpdatesSection() {
  return (
    <section id="updates" className="bg-[#f2f2f0]">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-24 lg:py-32">
        <SectionIntro
          label="04 / Updates"
          title="Follow the signal."
          body="Get updates on the prototype, demos, sound tests, manufacturing notes, and launch progress."
        />
        <form
          action="#updates"
          method="get"
          className="flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="your@email.com"
            className="min-h-12 min-w-0 flex-1 rounded-xl border border-[#cfcfcb] bg-white px-4 text-sm placeholder:text-[#888] focus:border-[#111] focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#111] px-5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
          >
            Notify me
            <ArrowIcon />
          </button>
        </form>
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductSection />
        <ProcessSection />
        <MediaPlaceholder />
        <UpdatesSection />
      </main>
      <SiteFooter />
    </>
  );
}
