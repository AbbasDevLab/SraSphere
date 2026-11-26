export const services = [
  {
    icon: "website",
    slug: "website-development",
    number: "01",
    title: "Website Design & Development",
    shortDescription:
      "A clear, professional digital presence designed around your customers and business goals.",
    introduction:
      "From a focused landing page to a custom web application, we plan and build responsive experiences that help people understand your business and take the next step.",
    problems: [
      "Your website no longer reflects the quality of your business.",
      "Customers struggle to find information or get in touch.",
      "Your team needs a tailored web experience beyond a template.",
    ],
    deliverables: [
      "Business websites and landing pages",
      "Responsive, accessible interfaces",
      "Custom web applications",
      "Content structure and on-page SEO foundations",
    ],
    applications: ["Professional services", "Healthcare and clinics", "Growing businesses"],
    faqs: [
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can review your current site, understand what needs to change and plan a redesign that preserves the useful parts of your existing experience.",
      },
      {
        question: "Will the website work on mobile?",
        answer:
          "Responsive behaviour is considered from the start, with layouts and interactions designed to work across phone, tablet and desktop screen sizes.",
      },
    ],
  },
  {
    icon: "ecommerce",
    slug: "ecommerce-solutions",
    number: "02",
    title: "E-commerce Solutions",
    shortDescription:
      "Thoughtful online shopping experiences that make it easier for customers to discover and buy.",
    introduction:
      "We help businesses plan and build online stores, connecting product presentation, checkout and the day-to-day tools needed to manage an online business.",
    problems: [
      "Your online store is difficult to browse or manage.",
      "The buying journey has avoidable friction.",
      "Your sales channels and business tools do not work well together.",
    ],
    deliverables: [
      "Online store design and development",
      "Shopify implementation",
      "Payment and business-tool integrations",
      "Responsive product and checkout experiences",
    ],
    applications: ["Retail and product brands", "Growing e-commerce businesses", "Direct-to-consumer shops"],
    faqs: [
      {
        question: "Can you work with an existing store?",
        answer:
          "We can discuss improvements, integrations or a redesign for an existing store after understanding its platform and your goals.",
      },
      {
        question: "Which e-commerce platform should I use?",
        answer:
          "The right choice depends on your catalogue, operations, budget and plans. We help compare the practical trade-offs before recommending an approach.",
      },
    ],
  },
  {
    icon: "automation",
    slug: "business-automation",
    number: "03",
    title: "Business Automation",
    shortDescription:
      "Connect everyday processes and reduce repetitive work with practical automation.",
    introduction:
      "We look for the manual handoffs and repeat tasks that slow a team down, then design right-sized workflows that fit how the business already operates.",
    problems: [
      "Repeated manual tasks consume time across the team.",
      "Information is copied between disconnected tools.",
      "Approvals and follow-ups are easy to miss.",
    ],
    deliverables: [
      "Workflow automation",
      "Business tool and API integrations",
      "Process mapping and optimisation",
      "Notifications and approval flows",
    ],
    applications: ["Professional services", "Retail operations", "Internal business processes"],
    faqs: [
      {
        question: "Do we need to replace our current software?",
        answer:
          "Not necessarily. We first assess your existing tools and look for useful integration or automation opportunities before proposing replacements.",
      },
      {
        question: "How do you choose what to automate?",
        answer:
          "We start by understanding the process, its exceptions and its business value. Automation should make a reliable process easier, not hide a broken one.",
      },
    ],
  },
  {
    icon: "mobile",
    slug: "mobile-app-development",
    number: "04",
    title: "Mobile App Development",
    shortDescription:
      "Mobile-first applications and experiences shaped around the people who use them.",
    introduction:
      "We help define and develop mobile application experiences, from early product requirements to implementation and integration with supporting services.",
    problems: [
      "Customers or staff need a more convenient mobile experience.",
      "A web-based process does not fit on-the-go use.",
      "An app idea needs a clear scope before development begins.",
    ],
    deliverables: [
      "Cross-platform application development",
      "Mobile-first user experiences",
      "Application and API integrations",
      "Product planning and technical scoping",
    ],
    applications: ["Customer-facing services", "Field and operations teams", "Digital products"],
    faqs: [
      {
        question: "Can you help plan an app before development?",
        answer:
          "Yes. We can help clarify the users, essential workflows and technical needs so the scope is grounded in the problem the app should solve.",
      },
      {
        question: "Can an app connect to our existing systems?",
        answer:
          "That depends on the systems and available integration options. We review those requirements as part of technical discovery.",
      },
    ],
  },
  {
    icon: "custom",
    slug: "custom-digital-solutions",
    number: "05",
    title: "Custom Digital Solutions",
    shortDescription:
      "Purpose-built software for requirements that off-the-shelf tools do not quite meet.",
    introduction:
      "When standard tools do not fit the way your business works, we help shape a custom solution with a clear scope, maintainable foundations and room to evolve.",
    problems: [
      "Your workflows do not fit the limits of existing software.",
      "Important business information lives in disconnected systems.",
      "A product idea needs technical planning and implementation.",
    ],
    deliverables: [
      "Tailored business software",
      "Custom web applications and SaaS platforms",
      "API and system integrations",
      "Digital transformation project support",
    ],
    applications: ["Startups and product teams", "Established businesses", "Complex internal workflows"],
    faqs: [
      {
        question: "How do custom projects get scoped?",
        answer:
          "We begin with your goals, users and constraints, then agree on a practical scope and delivery plan before implementation starts.",
      },
      {
        question: "Can the solution grow over time?",
        answer:
          "We plan for maintainability and change, while keeping the initial scope focused on the needs that matter most now.",
      },
    ],
  },
  {
    icon: "cloud",
    slug: "cloud-technology-solutions",
    number: "06",
    title: "Cloud & Technology Solutions",
    shortDescription:
      "Modern cloud application and deployment support, matched to your operational needs.",
    introduction:
      "We help businesses plan, build and deploy cloud-based applications with a focus on sensible architecture, maintainability and dependable operations.",
    problems: [
      "A growing application needs a more suitable hosting approach.",
      "Deployment processes are unclear or difficult to maintain.",
      "Technology choices need to support future requirements.",
    ],
    deliverables: [
      "Cloud-based application development",
      "Deployment and release support",
      "Integration and architecture planning",
      "Scalable technology foundations",
    ],
    applications: ["Web platforms", "Business applications", "Digital products and services"],
    faqs: [
      {
        question: "Do you work with our existing cloud provider?",
        answer:
          "We can review your current setup and discuss an approach that fits your requirements, team and existing technology.",
      },
      {
        question: "Can you support an existing application?",
        answer:
          "We can assess the application and its operational needs to determine what improvements or support would be appropriate.",
      },
    ],
  },
] as const;

export const projects = [
  {
    slug: "access360",
    name: "Access360",
    type: "Visitor management system",
    description:
      "A visitor management solution concept focused on registration, approval workflows and access tracking.",
    visual: "access",
    focusAreas: ["Visitor registration", "Approval workflows", "Access tracking"],
  },
  {
    slug: "dahera",
    name: "Dahéra",
    type: "E-commerce implementation",
    description:
      "An online jewellery retail experience focused on product presentation and a clear customer shopping journey.",
    visual: "commerce",
    focusAreas: ["Product presentation", "E-commerce functionality", "Customer shopping journey"],
  },
  {
    slug: "business-management-system",
    name: "Business Management System",
    type: "Concept demonstration",
    description:
      "A concept for bringing sales tracking, inventory, reporting and customer management into one workflow.",
    visual: "management",
    focusAreas: ["Sales tracking", "Inventory management", "Reporting and customer management"],
  },
];

export const insights = [
  {
    slug: "digital-presence-for-growing-businesses",
    category: "Digital Growth",
    title: "Why Every Growing Business Needs a Digital Presence",
    description:
      "Customers often look online before they get in touch. Explore what a credible digital presence means for a growing business.",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Your website is often the first introduction",
        paragraphs: [
          "Before someone calls, visits or asks for a recommendation, they may look for your business online. A clear digital presence helps them understand what you do, who you help and how to take the next step.",
          "That presence does not need to be complicated. A useful website, accurate contact details and consistent information across your channels can make it easier for people to decide whether you are the right fit.",
        ],
      },
      {
        heading: "Clarity matters more than complexity",
        paragraphs: [
          "A site can look polished and still leave a visitor unsure what the business offers. Start with the questions customers actually ask: what do you provide, who is it for, what happens next and how can someone reach you?",
          "Answering those questions plainly is more valuable than adding features that do not support the customer journey. Clear page structure, readable content and a straightforward enquiry path are a strong foundation.",
        ],
      },
      {
        heading: "Build a foundation you can maintain",
        paragraphs: [
          "A digital presence should reflect the current business and be manageable by the people responsible for it. Think about who will update the site, how new services will be added and what information needs to stay current.",
          "Treat your website as an evolving business tool. Review it when your offer changes, listen to customer questions and improve the parts of the experience that create friction.",
        ],
      },
    ],
  },
  {
    slug: "simplifying-business-operations-with-automation",
    category: "Automation",
    title: "How Automation Can Simplify Business Operations",
    description:
      "A practical way to spot repetitive work and decide which processes are ready for automation.",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Start with the work, not the tool",
        paragraphs: [
          "Automation is most useful when it addresses a real operational need. Begin by noticing repeated tasks, routine handoffs and information that people have to enter in more than one place.",
          "Ask the team where time is lost and which steps are easy to overlook. A short process walkthrough often reveals more than choosing a platform before the problem is understood.",
        ],
      },
      {
        heading: "Make the process clear first",
        paragraphs: [
          "A process that is inconsistent or unclear can be difficult to automate well. Map its usual steps, identify exceptions and agree who owns each decision before changing how the work is done.",
          "Then choose a focused first improvement. For example, an automation might route an enquiry to the right person or send a reminder when an approval is waiting. The goal is to remove unnecessary repetition while keeping people in control of important decisions.",
        ],
      },
      {
        heading: "Keep it understandable",
        paragraphs: [
          "Teams need to know what an automated workflow does, what happens when something goes wrong and who can update it. Clear ownership and simple documentation help prevent a useful automation from becoming an invisible dependency.",
          "Review the workflow after it is in use. Confirm that it still fits the process, handles the important exceptions and is making work easier for the people who rely on it.",
        ],
      },
    ],
  },
  {
    slug: "choosing-an-ecommerce-platform",
    category: "E-commerce",
    title: "Choosing the Right E-commerce Platform for Your Business",
    description:
      "Compare cost, control and speed to market when choosing how to sell online.",
    readingTime: "8 min read",
    sections: [
      {
        heading: "Start with how you sell",
        paragraphs: [
          "The right e-commerce platform depends on the way your business operates. Consider your catalogue, fulfilment process, payment requirements, existing tools and the amount of time your team can spend managing the store.",
          "Write down the essentials before comparing platforms. Separating must-haves from preferences helps keep a platform decision grounded in the needs of the business.",
        ],
      },
      {
        heading: "Balance speed, flexibility and ownership",
        paragraphs: [
          "Hosted services can make it quicker to get a store running and can include useful operational features. They also come with platform rules, subscription costs and limits that should be understood before committing.",
          "A more customised build can provide flexibility for specific requirements, but it usually demands more planning and ongoing technical care. Neither route is automatically better; the trade-off depends on your priorities and available resources.",
        ],
      },
      {
        heading: "Plan for the whole customer journey",
        paragraphs: [
          "A store is more than a product catalogue. Think through discovery, product details, checkout, order updates, returns and the internal work needed to fulfil an order.",
          "Choose an approach your team can operate and your customers can use comfortably. Starting with a clear, manageable scope makes it easier to learn from real use and improve the experience over time.",
        ],
      },
    ],
  },
];
