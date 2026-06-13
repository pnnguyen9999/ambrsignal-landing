import { ImageResponse } from "next/og";

export const alt = "AMBR Signal — Sound machines for signal-driven music";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#111111",
          padding: 64,
          border: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
          }}
        >
          <svg
            viewBox="0 0 64 64"
            width="42"
            height="42"
            fill="none"
          >
            <defs>
              <clipPath id="og-signal-clip">
                <rect x="3" y="3" width="58" height="58" rx="9" />
              </clipPath>
            </defs>
            <rect
              x="3"
              y="3"
              width="58"
              height="58"
              rx="9"
              stroke="#111111"
              strokeWidth="3"
            />
            <path
              d="M3 31H20a3 3 0 0 1 3 3v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V24a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v7h8v30H3V31Z"
              fill="#111111"
              clipPath="url(#og-signal-clip)"
            />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <span
              style={{
                fontSize: 25,
                fontWeight: 500,
                letterSpacing: "5px",
              }}
            >
              AMBR
            </span>
            <span style={{ fontSize: 20, color: "#666666" }}>Signal</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              maxWidth: 940,
              fontSize: 82,
              lineHeight: 0.95,
              letterSpacing: "-5px",
              fontWeight: 500,
            }}
          >
            Sound machines for signal-driven music.
          </div>
          <div style={{ fontSize: 22, color: "#666666" }}>
            Embedded instruments / sequencing / live performance
          </div>
        </div>
      </div>
    ),
    size,
  );
}
