import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon : monogramme « ML » blanc sur carré vert arrondi (logo du site). */
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
          background: "linear-gradient(135deg, #047857 0%, #059669 100%)",
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "-1px",
          borderRadius: 14,
          fontFamily: "sans-serif",
        }}
      >
        ML
      </div>
    ),
    { ...size }
  );
}
