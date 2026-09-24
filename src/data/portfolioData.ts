import heroDeveloperImg from '../assets/images/hero_developer_interfaces_1790168343456.jpg';
import aboutWorkspaceImg from '../assets/images/about_developer_workspace_1790168330671.jpg';
import sobiaShahLogoImg from '../assets/images/sobia_shah_logo_1790168857369.jpg';
import projectCorporateImg from '../assets/images/project_corporate_mockup_1790165741475.jpg';
import projectEcommerceImg from '../assets/images/project_ecommerce_mockup_1790165759400.jpg';
import projectRealEstateImg from '../assets/images/project_realestate_mockup_1790165774601.jpg';
import projectRestaurantImg from '../assets/images/project_restaurant_food_mockup_1790166902708.jpg';
import projectFintechImg from '../assets/images/project_fintech_venture_mockup_1790166933472.jpg';
import projectCreativeImg from '../assets/images/project_creative_portfolio_mockup_1790166920035.jpg';
import { ProjectItem, ServiceItem, ExperienceItem, SkillCategory, ProcessStep } from '../types/portfolio.ts';

export const PERSONAL_INFO = {
  name: 'Sobia Shah',
  title: 'WordPress Web Developer',
  experience: '3 Years',
  email: 'shahsobia157@gmail.com',
  phone: '+92 321 7081027',
  location: 'Sargodha, Pakistan',
  linkedin: 'https://www.linkedin.com/in/sobia-shah4/',
  status: 'Available for New Projects & Contracts',
  logoVisual: sobiaShahLogoImg,
  heroVisual: heroDeveloperImg,
  aboutVisual: aboutWorkspaceImg,
  education: {
    degree: 'Bachelor in Computer Science',
    institution: 'University of Sargodha',
    graduated: '2021',
    focus: 'Software Architecture, Web Technologies & Database Systems'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'WordPress Development',
    tagline: 'Custom Architecture & Scalable Builds',
    description: 'Engineering responsive, high-performance WordPress websites tailored to specific business objectives with clean markup, rigorous security practices, and intuitive content management.',
    deliverables: [
      'Custom theme setup & child themes',
      'Clean semantic HTML5 / CSS3 / modern JS',
      'Mobile-first responsive architecture',
      'Admin dashboard customization'
    ]
  },
  {
    number: '02',
    title: 'Elementor Development',
    tagline: 'Precision Visual Layouts & Custom Widgets',
    description: 'Transforming design concepts into dynamic, pixel-accurate Elementor Pro builds that client teams can update effortlessly without compromising site speed or structure.',
    deliverables: [
      'Bespoke Elementor template kits',
      'Dynamic content loop & custom query integrations',
      'Responsive breakpoint fine-tuning',
      'Lightweight animation & micro-interactions'
    ]
  },
  {
    number: '03',
    title: 'WooCommerce Development',
    tagline: 'High-Converting Online Stores',
    description: 'Building secure, streamlined eCommerce stores with custom product archives, optimized single-product layouts, multi-gateway checkouts, and inventory synchronization.',
    deliverables: [
      'Custom catalog & filter architecture',
      'Payment gateway & shipping API setup',
      'Cart & checkout conversion optimization',
      'Variable product & bundle configuration'
    ]
  },
  {
    number: '04',
    title: 'Theme & Plugin Customization',
    tagline: 'Deep Code Tailoring & Custom Hooks',
    description: 'Extending off-the-shelf and custom WordPress themes and plugins to achieve tailored business logic without breaking core update paths or bloating the database.',
    deliverables: [
      'Custom action hooks & filter development',
      'Third-party plugin conflict resolution',
      'Custom post types & taxonomy structuring',
      'API connectors & webhook integrations'
    ]
  },
  {
    number: '05',
    title: 'Optimization & Troubleshooting',
    tagline: 'Core Web Vitals & Technical Reliability',
    description: 'Diagnosing complex WordPress errors, database bloat, plugin conflicts, security vulnerabilities, and slow page speeds to achieve 90+ PageSpeed scores.',
    deliverables: [
      'Critical CSS generation & asset minification',
      'Database query optimization & object caching',
      'WSOD, PHP fatal errors & bug debugging',
      'SEO-friendly site architecture & crawlability'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'CMS & WordPress Ecosystem',
    description: 'Core expertise in WordPress engine, builders, and eCommerce platforms.',
    skills: [
      { name: 'WordPress', focus: 'Custom builds, core API, multisite & taxonomy' },
      { name: 'Elementor & Elementor Pro', focus: 'Design translation, dynamic templates, responsive fine-tuning' },
      { name: 'WooCommerce', focus: 'Store builds, checkouts, payment gateways, product feeds' },
      { name: 'Theme Customization', focus: 'Child themes, template hierarchy, styling overrides' },
      { name: 'Plugin Customization', focus: 'Hook-based modifications, API extensions, plugin vetting' }
    ]
  },
  {
    category: 'Front-End & Core Technologies',
    description: 'Foundational web standards ensuring semantic, accessible, and fast experiences.',
    skills: [
      { name: 'HTML5', focus: 'Semantic markup, ARIA accessibility, structured data' },
      { name: 'CSS3 / Modern Styling', focus: 'Flexbox, CSS Grid, media queries, CSS variables' },
      { name: 'JavaScript', focus: 'DOM manipulation, async fetch, UI interactions' },
      { name: 'Responsive Web Design', focus: 'Mobile-first fluid layouts across all viewport sizes' }
    ]
  },
  {
    category: 'Performance, SEO & Reliability',
    description: 'Engineering websites that load swiftly and rank reliably in organic search.',
    skills: [
      { name: 'Website Performance', focus: 'Core Web Vitals, caching, asset deferral, image compression' },
      { name: 'SEO-Friendly Websites', focus: 'Schema markup, clean URL hierarchy, meta optimization' },
      { name: 'Website Troubleshooting', focus: 'Debug logs, PHP error isolation, hosting conflicts, security audit' }
    ]
  },
  {
    category: 'Integrations & Modern Workflow',
    description: 'Leveraging modern toolchains and automated integrations for rapid delivery.',
    skills: [
      { name: 'Third-Party Tool Integration', focus: 'CRM forms, analytics, marketing pixels, payment APIs' },
      { name: 'AI-Powered Development Tools', focus: 'Accelerated coding workflows, asset preparation, testing' },
      { name: 'Modern Web Development', focus: 'Cross-browser testing, Git version control, deployment workflows' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'Feb 2024 – Apr 2026',
    role: 'WordPress Developer',
    company: 'Nitro9',
    type: 'Remote',
    description: [
      'Engineered bespoke, responsive WordPress websites for international clientele, ensuring adherence to high performance and accessibility benchmarks.',
      'Developed custom Elementor page layouts, complex WooCommerce stores, and customized third-party plugins to meet distinct client product requirements.',
      'Audited website load times and implemented Core Web Vitals optimizations, delivering sub-2-second load times and high PageSpeed metrics.',
      'Configured on-page SEO structures, dynamic schemas, and secure hosting environments to boost organic discovery.'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'WooCommerce', 'PHP Hooks', 'JavaScript', 'CSS3', 'SEO Best Practices', 'Performance Optimization']
  },
  {
    period: 'Apr 2022 – Mar 2024',
    role: 'Web Developer',
    company: 'Codesthinker',
    type: 'Remote',
    description: [
      'Delivered full-cycle WordPress and web development projects from concept and design mockups through final deployment and handover.',
      'Customized WordPress themes and plugins, resolved technical debt, fixed site errors, and addressed responsive rendering bugs across multiple device viewports.',
      'Integrated third-party APIs, contact automation systems, and payment gateways into client websites.',
      'Collaborated closely with cross-functional remote teams to translate business requirements into functional, maintainable web experiences.'
    ],
    technologies: ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'Theme Customization', 'Responsive Design', 'Troubleshooting']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'corporate-flagship',
    title: 'Aura Advisory Group',
    category: 'Corporate Website',
    typeTag: 'Corporate',
    description: 'A bespoke corporate website built on WordPress with custom Gutenberg and Elementor components, designed for an international strategic consulting firm.',
    fullOverview: 'A comprehensive corporate digital presence designed to position an international consulting practice with confidence and authority. Built with a bespoke WordPress foundation, this project showcases structured case study templates, executive bios, and interactive service matrices while maintaining a lightweight footprint and 95+ desktop PageSpeed score.',
    image: projectCorporateImg,
    clientType: 'Corporate Advisory / Professional Services',
    year: '2025',
    deliverables: [
      'Custom WordPress theme architecture',
      'Elementor Pro bespoke template library',
      'Multi-tiered corporate inquiry funnel',
      'Comprehensive on-page SEO setup'
    ],
    techStack: ['WordPress 6.x', 'Elementor Pro', 'Custom CSS/JS', 'Schema Markup', 'WP Rocket'],
    features: [
      'Sub-1.2s first contentful paint',
      'Interactive executive bio drawer',
      'Client case study indexing system',
      'Fully responsive custom navigation'
    ]
  },
  {
    id: 'luxury-ecommerce',
    title: 'Maison Éthérée Atelier',
    category: 'E-commerce Website',
    typeTag: 'E-Commerce',
    description: 'A luxury direct-to-consumer WooCommerce store featuring custom product page layouts, multi-currency support, and optimized checkout flow.',
    fullOverview: 'Developed to present luxury artisanal goods with an editorial aesthetic. The WooCommerce architecture was tailored with custom AJAX cart slide-outs, high-resolution product galleries with lazy-load zoom, variable attributes, and seamless Stripe payment gateway integration.',
    image: projectEcommerceImg,
    clientType: 'Luxury Retail & Artisanal Goods',
    year: '2025',
    deliverables: [
      'WooCommerce store setup & theme integration',
      'Custom checkout & cart conversion flow',
      'Multi-currency & localized shipping rules',
      'Automated transactional email branding'
    ],
    techStack: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom PHP Snippets', 'Payment APIs'],
    features: [
      'Instant AJAX drawer cart',
      'Optimized product variations',
      'Microdata e-commerce rich snippets',
      'Automated inventory thresholds'
    ]
  },
  {
    id: 'architectural-realestate',
    title: 'Vanguard Living & Estates',
    category: 'Real Estate Website',
    typeTag: 'Real Estate',
    description: 'A high-impact architectural property showcase website featuring custom property post types, interactive map markers, and high-resolution galleries.',
    fullOverview: 'A luxury real estate and architectural development portal created to showcase high-value residential and commercial properties. Built using custom post types and Advanced Custom Fields, the site allows brokers to easily publish floor plans, property specs, and virtual tour links without touching code.',
    image: projectRealEstateImg,
    clientType: 'High-End Real Estate & Development',
    year: '2024',
    deliverables: [
      'Custom Post Types & Taxonomy (Properties, Neighborhoods)',
      'Custom property detail layouts with floor-plan viewer',
      'Private scheduling & broker contact forms',
      'Image optimization pipeline for architectural photography'
    ],
    techStack: ['WordPress', 'Elementor', 'ACF / Custom Fields', 'CSS Grid', 'SEO Schema'],
    features: [
      'Dynamic neighborhood filtering',
      'High-resolution floor plan lightboxes',
      'Direct WhatsApp & calendar booking integration',
      'Speed-optimized media loading'
    ]
  },
  {
    id: 'epicurean-restaurant',
    title: 'L’Osteria & Botanical Bar',
    category: 'Restaurant / Food Website',
    typeTag: 'Hospitality',
    description: 'An atmospheric hospitality website showcasing seasonal culinary menus, table reservation integration, and private event inquiry pathways.',
    fullOverview: 'Crafted for an upscale dining establishment to convey culinary refinement through typography and dark aesthetic tones. Features custom menu tabs with dietary indicators, integrated table reservation modules (OpenTable/SevenRooms API compatibility), and direct Google Maps location routing.',
    image: projectRestaurantImg,
    clientType: 'Fine Dining & Hospitality',
    year: '2024',
    deliverables: [
      'Dynamic seasonal menu manager',
      'Table reservation flow integration',
      'Mobile-optimized touch menu browsing',
      'Local SEO & Google Business profile sync'
    ],
    techStack: ['WordPress', 'Elementor', 'Custom JavaScript', 'Schema Restaurant JSON-LD', 'Third-Party Booking API'],
    features: [
      'Instant filter by dietary preference',
      'Direct mobile phone click-to-call & booking',
      'Event brochure PDF download pipeline',
      'Atmospheric dark-mode presentation'
    ]
  },
  {
    id: 'capital-business',
    title: 'Apex Venture Capital',
    category: 'Business Website',
    typeTag: 'Finance',
    description: 'A sophisticated investment firm website with portfolio showcase, founder pitch submission portal, and regulatory compliance disclosures.',
    fullOverview: 'Engineered for a venture investment firm managing tech portfolios. Built to convey stability and forward momentum with understated typography, bespoke portfolio company filter grids, team profiles, and a secure encrypted founder submission system.',
    image: projectFintechImg,
    clientType: 'Venture Capital & Private Equity',
    year: '2024',
    deliverables: [
      'Portfolio company dynamic archive',
      'Founder pitch intake form with file upload validation',
      'Compliance and legal disclaimer architecture',
      'Custom security hardening & firewall configuration'
    ],
    techStack: ['WordPress', 'Custom Theme Child', 'Elementor Pro', 'Advanced Forms', 'Security Headers'],
    features: [
      'Segmented portfolio filtration by sector',
      'Multi-stage pitch intake workflow',
      'Zero layout shifts (CLS < 0.02)',
      'Enterprise security & spam protection'
    ]
  },
  {
    id: 'atelier-creative-portfolio',
    title: 'Studio Kroma Creative Direction',
    category: 'Creative Portfolio',
    typeTag: 'Creative',
    description: 'An avant-garde portfolio site for an independent creative studio, featuring horizontal layout rhythms, large imagery, and editorial typography.',
    fullOverview: 'A minimalist creative showcase designed to highlight visual brand identities, digital campaigns, and print editorial work. Focused on expansive negative space, high-contrast serif typography, and smooth interaction transitions.',
    image: projectCreativeImg,
    clientType: 'Design Studio & Art Direction',
    year: '2023',
    deliverables: [
      'Minimalist portfolio template system',
      'Full-bleed project preview drawers',
      'Client inquiry brief questionnaire',
      'Fluid typography scale across all viewports'
    ],
    techStack: ['WordPress', 'Elementor', 'Modern CSS', 'SVG Micro-animations', 'Performance Caching'],
    features: [
      'Custom mouse cursor hover indicators',
      'Asymmetric editorial project layouts',
      'Optimized WebP image delivery',
      'Clean typography hierarchy'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Understand the business, goals and requirements.',
    details: 'Every project begins with a deep exploration of the client’s brand goals, target audience, technical needs, and existing systems. We align on scope, deliverables, and performance benchmarks.'
  },
  {
    number: '02',
    title: 'Design',
    summary: 'Create a clean, modern and user-focused experience.',
    details: 'Translating strategic objectives into intuitive user flows, clear visual hierarchy, and polished layouts. Every interface element is structured for maximum clarity, brand prestige, and usability.'
  },
  {
    number: '03',
    title: 'Develop',
    summary: 'Build a responsive and functional website using modern web technologies.',
    details: 'Developing the WordPress site with clean code, modular architecture, responsive styling across all devices, and robust custom themes/plugins engineered for longevity and effortless content management.'
  },
  {
    number: '04',
    title: 'Refine',
    summary: 'Test, optimize and polish the website for performance and usability.',
    details: 'Comprehensive quality assurance: cross-browser testing, mobile verification, Core Web Vitals performance tuning, on-page SEO verification, security checks, and client handover training.'
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Clean & Modern Design',
    description: 'Timeless visual layouts with deliberate typography, balanced negative space, and modern aesthetics tailored to elevate your business credibility.'
  },
  {
    title: 'Responsive Across Devices',
    description: 'Flawlessly tested across mobile, tablet, and wide desktop viewports with fluid proportions and natural touch interactions.'
  },
  {
    title: 'SEO-Friendly Development',
    description: 'Engineered with clean semantic markup, fast server response times, schema structured data, and crawl-friendly architectures.'
  },
  {
    title: 'Performance Focused',
    description: 'Optimized assets, clean database queries, efficient caching, and zero code bloat to deliver rapid load speeds and superior Core Web Vitals.'
  },
  {
    title: 'Customized Solutions',
    description: 'No cookie-cutter templates. Every theme setting, plugin configuration, and custom code snippet is tailored to your exact operational requirements.'
  },
  {
    title: 'Business-Focused Approach',
    description: 'Websites engineered not just to look impressive, but to achieve concrete commercial results: lead generation, inquiries, and customer trust.'
  }
];
