export const LINKS = {
  WORK: { id: 1, href: "#project-section", name: "WORK", },
  BLOG: { id: 2, href: "https://syntax-error-blog.vercel.app/", name: "BLOG" },
  CONTACT: { id: 3, href: "https://linktr.ee/abhikr4545", name: "CONTACT" },
}

export type LinkType = typeof LINKS;
export type InnerLinkType = typeof LINKS["WORK"];