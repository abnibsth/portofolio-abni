import type { SocialLink } from "@/types";
import { site } from "./site";

/**
 * Link kontak yang tampil di section Contact dan footer.
 * Entry `null` otomatis tersaring, jadi kamu cukup mengisi `site.ts`.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    hint: site.email,
    event: "click_email",
  },
  {
    label: "LinkedIn",
    href: site.linkedinUrl,
    hint: "Riwayat kerja & rekomendasi",
    event: "click_linkedin",
  },
  {
    label: "GitHub",
    href: `https://github.com/${site.githubUsername}`,
    hint: `@${site.githubUsername}`,
    event: "click_github_profile",
  },
  ...(site.twitterUrl
    ? ([
        {
          label: "X / Twitter",
          href: site.twitterUrl,
          hint: "Catatan singkat soal ngoding",
          event: "click_twitter",
        },
      ] satisfies SocialLink[])
    : []),
  ...(site.whatsappUrl
    ? ([
        {
          label: "WhatsApp",
          href: site.whatsappUrl,
          hint: "Untuk obrolan cepat",
          event: "click_whatsapp",
        },
      ] satisfies SocialLink[])
    : []),
];
