import {
  Globe,
  Briefcase,
  Code2,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string;
  businessProblems: string[];
  deliverables: string[];
  whoNeedsIt: string;
  services: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "digital-experiences",
    number: "01",
    title: "Digital Experiences",
    icon: Globe,
    shortDescription:
      "Build a strong online presence with professional digital experiences.",
    longDescription:
      "Your website or online store is often the first conversation a customer has with your business. We design and build digital experiences that load fast, look credible and guide visitors towards enquiry or purchase.",
    businessProblems: [
      "An outdated or slow website that undermines credibility",
      "Losing online sales to competitors with better stores",
      "No control over content, products or updates",
      "A site that does not work properly on mobile",
    ],
    deliverables: [
      "A responsive, performance-optimised website or store",
      "Content and product management you control",
      "On-page technical SEO foundations",
      "Ongoing maintenance and security updates",
    ],
    whoNeedsIt:
      "New businesses establishing a presence, retailers moving online, and established companies whose current site no longer reflects their brand.",
    services: [
      "Business Website Development",
      "E-commerce Development",
      "Shopify Development",
      "WordPress Development",
      "UI/UX Design",
      "Website Maintenance",
    ],
  },
  {
    id: "business-solutions",
    number: "02",
    title: "Business Solutions",
    icon: Briefcase,
    shortDescription:
      "Simplify business operations through connected and practical software solutions.",
    longDescription:
      "Sales, stock, accounts and customer records scattered across spreadsheets and disconnected tools slow a business down. We implement connected systems that give you one reliable view of daily operations.",
    businessProblems: [
      "Records spread across spreadsheets and disconnected tools",
      "Stock discrepancies and manual recounting",
      "Slow billing, quoting or approval processes",
      "No single, trustworthy view of business performance",
    ],
    deliverables: [
      "A POS, ERP or CRM system configured to your workflows",
      "Data migration from spreadsheets and legacy tools",
      "Staff onboarding and documentation",
      "Reporting dashboards for day-to-day decisions",
    ],
    whoNeedsIt:
      "Retailers, wholesalers and service businesses whose operations have outgrown spreadsheets and manual processes.",
    services: [
      "POS Systems",
      "ERP Implementation",
      "CRM Solutions",
      "Inventory Management",
      "Business Process Automation",
      "Software Integration",
    ],
  },
  {
    id: "software-engineering",
    number: "03",
    title: "Software Engineering",
    icon: Code2,
    shortDescription:
      "Turn business requirements into reliable and scalable software applications.",
    longDescription:
      "When off-the-shelf software no longer fits how your business works, custom development is the answer. We engineer web and mobile applications around your actual processes, built to grow with you.",
    businessProblems: [
      "Critical processes that no packaged software supports",
      "Multiple tools that should talk to each other but don't",
      "Manual workarounds that consume staff hours weekly",
      "Fear of scaling because systems won't cope",
    ],
    deliverables: [
      "A custom web or mobile application, scoped to requirements",
      "Well-documented APIs and integrations",
      "Database design and data migration",
      "Testing, deployment and post-launch support",
    ],
    whoNeedsIt:
      "Startups launching a product, and established businesses whose operations need software that fits them exactly.",
    services: [
      "Custom Web Applications",
      "API Development",
      "Database Solutions",
      "Mobile Application Development",
      "Third-party Integrations",
      "Software Maintenance",
    ],
  },
  {
    id: "digital-intelligence",
    number: "04",
    title: "Digital Intelligence",
    icon: BrainCircuit,
    shortDescription:
      "Use automation, analytics and emerging technologies to improve business efficiency.",
    longDescription:
      "Repetitive admin, manual reporting and gut-feel decisions cost growing businesses hours every week. We apply automation, analytics and AI-powered workflows so your team focuses on work that actually needs them.",
    businessProblems: [
      "Hours lost weekly to repetitive admin and data entry",
      "Reports assembled by hand, always slightly out of date",
      "Decisions made without reliable numbers",
      "Enquiries and follow-ups that slip through the cracks",
    ],
    deliverables: [
      "Automated workflows for recurring processes",
      "Analytics dashboards connected to your data sources",
      "AI-assisted handling of enquiries, documents or content",
      "Training so your team runs the automations confidently",
    ],
    whoNeedsIt:
      "Growing teams drowning in manual processes, and owners who want decisions based on accurate, current numbers.",
    services: [
      "AI-powered Workflows",
      "Business Automation",
      "Data Analytics",
      "Business Intelligence",
      "Technical Consulting",
    ],
  },
];
