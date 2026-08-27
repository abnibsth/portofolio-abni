import fs from "fs";
import path from "path";

export function ensureKnightImage() {
  try {
    const userProfile = process.env.USERPROFILE || "";
    const brainDir = path.join(
      userProfile,
      ".gemini",
      "antigravity-ide",
      "brain",
      "d5278cc9-a171-4976-934b-3e19b911d96d"
    );

    const publicImages = path.join(process.cwd(), "public", "images");
    const eventsDir = path.join(publicImages, "events");

    if (!fs.existsSync(eventsDir)) {
      fs.mkdirSync(eventsDir, { recursive: true });
    }

    // Copy Cek API image if generated
    const cekApiTarget = path.join(publicImages, "cek-api.png");
    if (!fs.existsSync(cekApiTarget) && fs.existsSync(brainDir)) {
      const files = fs.readdirSync(brainDir).filter((f) => f.startsWith("cek_api_dashboard"));
      if (files.length > 0) {
        fs.copyFileSync(path.join(brainDir, files[0]), cekApiTarget);
      }
    }

    // Copy Pelita Hati screenshot if uploaded
    const pelitaTarget = path.join(publicImages, "pelita-hati.png");
    const userUploadedDir = path.join(brainDir, ".user_uploaded");
    if (!fs.existsSync(pelitaTarget) && fs.existsSync(userUploadedDir)) {
      const files = fs.readdirSync(userUploadedDir).filter((f) => f.includes("1787834622288"));
      if (files.length > 0) {
        fs.copyFileSync(path.join(userUploadedDir, files[0]), pelitaTarget);
      }
    }

    // Copy Tech Event 1
    const event1Target = path.join(eventsDir, "tech-meetup.jpg");
    if (!fs.existsSync(event1Target) && fs.existsSync(brainDir)) {
      const files = fs.readdirSync(brainDir).filter((f) => f.startsWith("tech_conference_meetup"));
      if (files.length > 0) {
        fs.copyFileSync(path.join(brainDir, files[0]), event1Target);
      }
    }

    // Copy Tech Event 2
    const event2Target = path.join(eventsDir, "hackathon-workshop.jpg");
    if (!fs.existsSync(event2Target) && fs.existsSync(brainDir)) {
      const files = fs.readdirSync(brainDir).filter((f) => f.startsWith("tech_workshop_hackathon"));
      if (files.length > 0) {
        fs.copyFileSync(path.join(brainDir, files[0]), event2Target);
      }
    }
  } catch {
    // Ignore error
  }
}
