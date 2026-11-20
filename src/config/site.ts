/**
 * Central site configuration. The public URL is read from NEXT_PUBLIC_SITE_URL at build time
 * (inlined by Next.js), falling back to the default workers.dev URL.
 */
export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hishab-hub.vercel.app"
).replace(/\/+$/, "");

export const SITE_NAME = "হিসাব হাব";
export const SITE_NAME_EN = "Hishab Hub";
export const SITE_TAGLINE = "বাংলায় সহজ হিসাব — ফ্রি ক্যালকুলেটর";
export const SITE_DESCRIPTION =
  "হিসাব হাব — জমি পরিমাপ, লোন ইএমআই, ডিপিএস-এফডিআর, যাকাতসহ দরকারি সব হিসাব বাংলায়, একদম ফ্রি। কোনো সাইনআপ নেই, সব হিসাব আপনার ব্রাউজারেই হয়।";

/** Date of the last content review, shown in the footer and on tool pages (ISO yyyy-mm-dd). */
export const LAST_UPDATED = "2026-11-19";

/** Builds an absolute URL for a site path (always with trailing slash, matching trailingSlash: true). */
export function absoluteUrl(path: string = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE_URL}${withSlash === "//" ? "/" : withSlash}`;
}
