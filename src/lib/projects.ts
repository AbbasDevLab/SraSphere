export type Project = {
  slug: string;
  reference: string;
  title: string;
  category: string;
  categoryLabel: string;
  cardDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technology: string[];
  mockup: {
    type: "dashboard" | "storefront" | "operations";
    accent: string;
  };
  outcomes: string[] | null;
  outcomeNote?: string;
};

export const projects: Project[] = [
  {
    slug: "access360",
    reference: "Project 01",
    title: "Access360",
    category: "visitor-management",
    categoryLabel: "Visitor Management System",
    cardDescription:
      "A visitor management solution designed to improve campus security, visitor registration, approval workflows and access tracking.",
    overview:
      "Access360 is a visitor management system built to replace paper visitor logs with a structured digital process. It covers the full visitor journey — pre-registration or walk-in registration, identity capture through OCR, host approval workflows and a complete audit trail of entry and exit activity.",
    challenge:
      "Campus and office reception teams were recording visitors in paper registers. That made it slow to check who was on site at any moment, impossible to enforce host approval before access was granted, and very difficult to produce a reliable audit trail after the fact. Sensitive visitor details were also exposed to anyone with access to the book.",
    solution:
      "We designed a web-based system around the daily reality of reception work: a fast registration flow that reads visitor ID documents through OCR, an approval step that notifies the host before badges are issued, and a searchable log of every entry and exit. The backend was built on .NET 8 Web APIs with a SQL Server database, chosen for reliability and transactional integrity in a security context.",
    features: [
      "Visitor self-registration and walk-in registration",
      "OCR-based identity document capture to reduce typing",
      "Host approval workflow with notifications",
      "Badge issuance and check-in / check-out tracking",
      "Searchable visitor log with export for audits",
      "Role-based access for reception, hosts and administrators",
    ],
    technology: [".NET 8 Web APIs", "SQL Server", "OCR services", "Web frontend (responsive)"],
    mockup: {
      type: "dashboard",
      accent: "#73D5E9",
    },
    outcomes: null,
    outcomeNote:
      "This was delivered as an academic project. No commercial deployment or measured outcomes are claimed.",
  },
  {
    slug: "dahera",
    reference: "Project 02",
    title: "Dahéra",
    category: "ecommerce",
    categoryLabel: "E-commerce Implementation",
    cardDescription:
      "An online jewellery retail experience focused on product presentation, e-commerce functionality, branding and customer purchasing journeys.",
    overview:
      "Dahéra is an online jewellery retail experience built on Shopify. The work centred on how fine jewellery sells online: photography-led product presentation, a browsing and filtering experience that feels premium, and a checkout path that keeps purchase friction low.",
    challenge:
      "Selling jewellery online demands more than a product list. Collections change with seasons, products vary widely in variant (size, metal, stone), and buyers need reassurance at every step. The store needed to present a small brand as credible against larger established retailers, on a budget that ruled out heavy custom platforms.",
    solution:
      "We implemented the store on Shopify to get proven commerce infrastructure — payments, cart, inventory — out of the box, then focused effort where it differentiated the brand: a custom theme with editorial collection pages, structured product data for variants, and a streamlined purchasing journey from discovery to confirmation.",
    features: [
      "Custom Shopify theme with editorial collection presentation",
      "Variant handling for size, metal and stone options",
      "Filtering and discovery across collections",
      "Streamlined cart and checkout journey",
      "Responsive design for mobile-first shopping",
      "Basic on-page SEO structure for products and collections",
    ],
    technology: ["Shopify", "Shopify theme customisation", "E-commerce integrations", "Responsive web design"],
    mockup: {
      type: "storefront",
      accent: "#E0B87A",
    },
    outcomes: null,
    outcomeNote:
      "This was implemented as a concept retail build. No commercial trading results or sales figures are claimed.",
  },
  {
    slug: "business-management-system",
    reference: "Project 03",
    title: "Business Management System",
    category: "business-software",
    categoryLabel: "Business Software Concept",
    cardDescription:
      "A concept for simplifying retail operations through sales tracking, inventory management, reporting and customer management.",
    overview:
      "The Business Management System is a concept design for a lightweight retail operations platform. It brings sales tracking, stock levels, customer records and daily reporting into a single application sized for small and growing retailers who cannot justify a full enterprise ERP.",
    challenge:
      "Small retailers commonly run sales in one tool, stock in a spreadsheet and customer details in a notebook. Reconciliation is manual, shrinkage is invisible until stock takes, and there is no simple answer to questions like best-selling lines or reorder timing. Full ERP systems solve this but are costly and heavy for a small team.",
    solution:
      "The concept prioritises the shortest path to a trustworthy daily picture: fast sale entry, automatic stock adjustment, a customer record linked to purchases, and a morning dashboard that needs no training to read. The design keeps data relationships simple and the interface focused on the three or four actions staff perform all day.",
    features: [
      "Fast point-of-sale style sale entry",
      "Automatic inventory adjustment and low-stock alerts",
      "Customer records linked to purchase history",
      "Daily sales and movement dashboard",
      "Simple role separation for staff and owner",
      "Report exports for accounting",
    ],
    technology: ["Web technologies", "REST APIs", "Relational database systems"],
    mockup: {
      type: "operations",
      accent: "#8BD3B0",
    },
    outcomes: null,
    outcomeNote:
      "This is an internal concept project. It has not been commercially deployed and no usage results are claimed.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
