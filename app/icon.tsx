import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  const filePath = path.join(process.cwd(), "public/images/abni-jousting1.png");
  const fileBuffer = fs.readFileSync(filePath);
  const base64Image = `data:image/png;base64,${fileBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64Image}
          alt="Favicon"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
