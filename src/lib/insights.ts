export type Insight = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  topic: string;
};

// Editorial previews — full articles are not published yet.
export const insights: Insight[] = [
  {
    slug: "digital-presence",
    title: "Why Every Growing Business Needs a Digital Presence",
    description:
      "Customers check you online before they ever call you. What a credible digital presence actually means for a growing business — and where most first attempts fall short.",
    readTime: "6 min read",
    topic: "Digital Presence",
  },
  {
    slug: "automation-simplifies-operations",
    title: "How Automation Can Simplify Business Operations",
    description:
      "Automation is not about robots running your company. It is about removing the repetitive steps that quietly consume your team's week — with a practical framework for spotting them.",
    readTime: "7 min read",
    topic: "Business Automation",
  },
  {
    slug: "choosing-ecommerce-platform",
    title: "Choosing the Right E-commerce Platform for Your Business",
    description:
      "Shopify, WordPress or fully custom? The honest trade-offs between cost, control and speed to market, and how to decide based on how your business actually sells.",
    readTime: "8 min read",
    topic: "E-commerce",
  },
];
