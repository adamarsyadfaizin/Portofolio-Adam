const domain =
  process.env.DOMAIN ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const METADATA = {
  creator: "Adam Arsyad",
  description: "Personal website, portfolio, blog",
  keyword: "adam, adam arsyad, moch adam arsyad faizin",
  authors: {
    name: "Adam Arsyad",
    url: domain,
  },
  openGraph: {
    url: domain,
    siteName: "Adam Arsyad",
    locale: "id-ID",
  },
  exTitle: "| Adam Arsyad",
  profile: "/images/adam.jpg",
};
