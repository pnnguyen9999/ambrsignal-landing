import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width="340"
          height="340"
          fill="none"
        >
          <defs>
            <clipPath id="icon-signal-clip">
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
            clipPath="url(#icon-signal-clip)"
          />
        </svg>
      </div>
    ),
    size,
  );
}
