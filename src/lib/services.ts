import {
  Briefcase,
  Cloud,
  Code2,
  Globe,
  ShoppingBag,
  Smartphone,
  Zap,
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
    id: "website-development",
    number: "01",
    title: "Website Design & Development",
    icon: Globe,
    shortDescription: "Create a credible, responsive digital presence that turns attention into action.",
    longDescription: "Your website should make it easy for the right people to understand your offer and take the next step. We design and build polished, fast experiences for businesses that want to look credible and grow online.",
    businessProblems: ["An outdated site that no longer reflects the business", "Poor mobile experience and slow page performance", "Unclear messaging that loses potential enquiries", "Limited control over content and updates"],
    deliverables: ["Responsive website or landing page", "Clear information architecture and conversion paths", "Accessible, performance-minded implementation", "Content management and launch support"],
    whoNeedsIt: "Startups launching, established businesses refreshing their presence, and teams that need a reliable custom web experience.",
    services: ["Business websites", "Landing pages", "Responsive websites", "Custom web applications"],
  },
  {
    id: "ecommerce-solutions",
    number: "02",
    title: "E-commerce Solutions",
    icon: ShoppingBag,
    shortDescription: "Build online shopping experiences that make products easy to discover, trust and buy.",
    longDescription: "A good online store balances brand, usability and operational reality. We create e-commerce experiences that present your products clearly, reduce purchase friction and give your team practical tools to manage orders.",
    businessProblems: ["Customers struggle to find or compare products", "An inconsistent or unconvincing buying journey", "Manual order handling and disconnected tools", "A store that works poorly on mobile"],
    deliverables: ["Branded storefront and collection structure", "Product, cart and checkout experience", "Payment and business-tool integrations", "Store handover and ongoing improvement support"],
    whoNeedsIt: "Retail and product businesses moving online, redesigning an existing store or preparing to scale their catalogue.",
    services: ["Online stores", "Shopify development", "Payment integrations", "E-commerce experiences"],
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Automation",
    icon: Zap,
    shortDescription: "Remove repetitive work and connect the tools your team already relies on.",
    longDescription: "Automation is most valuable when it quietly makes everyday work simpler. We map repetitive processes, connect business tools and create dependable workflows that give your team time back.",
    businessProblems: ["Staff repeatedly copy data between systems", "Approvals and follow-ups get missed", "Reporting is assembled manually", "Important work depends on one person's memory"],
    deliverables: ["Workflow mapping and automation opportunities", "Connected business tools and notifications", "Rules for approvals, handoffs and follow-ups", "Documentation and team training"],
    whoNeedsIt: "Growing businesses whose teams spend too much time on manual administration instead of customers and growth.",
    services: ["Workflow automation", "Process optimisation", "Business tool integrations", "Repetitive task automation"],
  },
  {
    id: "mobile-app-development",
    number: "04",
    title: "Mobile App Development",
    icon: Smartphone,
    shortDescription: "Design useful mobile-first experiences for customers, teams and field operations.",
    longDescription: "Mobile products need to be clear, quick and designed around real-world use. We help turn a validated product idea or business process into a focused mobile experience that works across the devices your audience uses.",
    businessProblems: ["Customers or staff need access away from a desk", "A web process is awkward on smaller screens", "A product idea needs a focused mobile experience", "Existing apps are hard to use or maintain"],
    deliverables: ["Mobile-first user journeys and interface", "Cross-platform application development", "API and data integration", "Testing, deployment guidance and support"],
    whoNeedsIt: "Businesses with field teams, customer apps, internal mobile workflows or a clear product opportunity beyond the browser.",
    services: ["Cross-platform applications", "Mobile-first experiences", "Custom app solutions", "App maintenance"],
  },
  {
    id: "custom-digital-solutions",
    number: "05",
    title: "Custom Digital Solutions",
    icon: Code2,
    shortDescription: "Build tailored software for processes that off-the-shelf tools cannot handle well.",
    longDescription: "When the way your business works is unique, forcing it into generic software creates friction. We scope and build focused digital solutions around your actual requirements, data and users.",
    businessProblems: ["Packaged software cannot support a critical process", "Teams rely on spreadsheets and workarounds", "Separate systems need to share information", "A new digital product needs a reliable foundation"],
    deliverables: ["Requirements and solution architecture", "Custom web software and APIs", "Database and third-party integrations", "Testing, deployment and maintenance plan"],
    whoNeedsIt: "Startups building a product and established organisations that need software shaped around their workflows.",
    services: ["Tailored business software", "API integrations", "Digital transformation projects", "Database solutions"],
  },
  {
    id: "cloud-technology-solutions",
    number: "06",
    title: "Cloud & Technology Solutions",
    icon: Cloud,
    shortDescription: "Put dependable, scalable technology foundations underneath your digital work.",
    longDescription: "A digital experience is only as reliable as the systems behind it. We help teams choose sensible cloud approaches, deploy applications cleanly and prepare their technology for the next stage of growth.",
    businessProblems: ["Deployment is stressful and inconsistent", "A system needs a more dependable operating foundation", "Technology costs are difficult to understand", "A growing product needs room to scale"],
    deliverables: ["Cloud application setup and deployment support", "Environment and release guidance", "Scalable architecture recommendations", "Technical documentation and handover"],
    whoNeedsIt: "Teams launching cloud-based applications or improving the reliability, maintainability and scalability of existing systems.",
    services: ["Cloud-based applications", "Deployment support", "Scalable technology solutions", "Technical consulting"],
  },
];
