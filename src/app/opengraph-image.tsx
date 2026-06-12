import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1e3a5f",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(5, 150, 105, 0.35) 0%, rgba(5, 150, 105, 0) 55%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: "rgba(5, 150, 105, 0.18)",
            border: "1px solid rgba(5, 150, 105, 0.5)",
            borderRadius: "9999px",
            padding: "10px 24px",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              backgroundColor: "#34d399",
            }}
          />
          <div style={{ color: "#a7f3d0", fontSize: "24px", fontWeight: 600 }}>
            {profile.availability}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ffffff", fontSize: "72px", fontWeight: 700 }}>
            {profile.name}
          </div>
          <div
            style={{
              color: "#bcd0e5",
              fontSize: "34px",
              marginTop: "16px",
              maxWidth: "900px",
            }}
          >
            {profile.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8aa3bf",
            fontSize: "26px",
          }}
        >
          <div>{profile.tagline}</div>
          <div>{`${profile.location} · ${profile.workModes}`}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
