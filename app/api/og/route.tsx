import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/dddlfnsoe/image/upload/v1711403718/Asset_1_w4pvpd.png"
          alt="logo"
        />
        <h2>DevLab Software Company</h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
