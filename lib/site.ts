const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const SITE_URL = (
  configuredSiteUrl?.startsWith("http")
    ? configuredSiteUrl
    : "https://ambrsignal.com"
).replace(/\/$/, "");
