export const siteConfig = {
  name: 'NavaWeb Studio',
  shortName: 'NAVAWEB',
  location: 'Madurai, Tamil Nadu, India',
  locationShort: 'Madurai / India',
  email: 'naveen24505@gmail.com',
  whatsapp: '+91 8072448512',
  social: {
    instagram: 'https://www.instagram.com/navawebstudio/',
    linkedin: 'https://www.linkedin.com/in/naveen-kumar-s-2770982a9/',
    github: 'https://github.com/Jassnaveen',
    whatsapp: 'https://wa.me/918072448512',
  },
};

const PROJECT_INQUIRY_MESSAGE = `Hi Naveen, I found NavaWeb Studio through your website. I'm interested in building a website for my business.
Business Name:
Website Needed:
Project Details:
Please share your available packages and pricing. Thank you!`;

export function getWhatsAppUrl(): string {
  return `${siteConfig.social.whatsapp}?text=${encodeURIComponent(PROJECT_INQUIRY_MESSAGE)}`;
}

export function openWhatsApp(): void {
  window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    number: '01',
    title: 'Business Websites',
    description: 'Professional, fast-loading websites that establish credibility and convert visitors into customers.',
    tags: ['Corporate', 'Startup', 'Service Business'],
  },
  {
    number: '02',
    title: 'E-Commerce',
    description: 'Full online stores with secure checkout, inventory management, and optimised product pages.',
    tags: ['Shopify', 'Custom Cart', 'Payments'],
  },
  {
    number: '03',
    title: 'Landing Pages',
    description: 'High-converting single-page experiences for campaigns, product launches, and lead generation.',
    tags: ['Conversion', 'A/B Test Ready', 'Fast Deploy'],
  },
  {
    number: '04',
    title: 'Portfolios',
    description: 'Showcase your work with elegant, image-forward portfolio sites that leave a lasting impression.',
    tags: ['Creative', 'Photography', 'Personal Brand'],
  },
  {
    number: '05',
    title: 'Restaurant & Catering',
    description: 'Menu displays, online ordering, and reservation systems designed for the hospitality industry.',
    tags: ['Menus', 'Reservations', 'Gallery'],
  },
  {
    number: '06',
    title: 'Maintenance',
    description: 'Ongoing updates, security patches, performance tuning, and content changes to keep you running.',
    tags: ['Security', 'Updates', 'Support'],
  },
];

export const projects = [
  {
    number: '01',
    title: 'PS Catering & Events',
    category: 'Catering & Hospitality',
    description: 'A website built to turn visitors into enquiries.',
    image: 'https://images.pexels.com/photos/34307855/pexels-photo-34307855.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Strategy', 'Design', 'Development'],
    href: '#',
  },
  {
    number: '02',
    title: 'Football Store',
    category: 'E-Commerce',
    description: 'An online store for football jerseys and merchandise.',
    image: 'https://images.pexels.com/photos/18243021/pexels-photo-18243021.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['E-Commerce', 'Design', 'Development'],
    href: '#',
  },
  {
    number: '03',
    title: 'Business Website',
    category: 'Corporate',
    description: 'A modern professional presence for a growing company.',
    image: 'https://images.pexels.com/photos/5483188/pexels-photo-5483188.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Branding', 'Design', 'Development'],
    href: '#',
  },
];

export const pricingTiers = [
  {
    name: 'Starter',
    price: '₹3,999',
    suffix: '+',
    description: 'For small businesses needing a clean, professional online presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '2 weeks delivery',
    ],
    highlighted: false,
  },
  {
    name: 'Business',
    price: '₹7,999',
    suffix: '+',
    description: 'For growing businesses that need more pages, features, and polish.',
    features: [
      'Up to 12 pages',
      'Custom animations',
      'CMS integration',
      'Advanced SEO',
      'Analytics setup',
      '3 weeks delivery',
    ],
    highlighted: true,
  },
  {
    name: 'Growth',
    price: '₹14,999',
    suffix: '+',
    description: 'For businesses ready to sell online or build complex interactions.',
    features: [
      'Unlimited pages',
      'E-commerce functionality',
      'Custom workflows',
      'Performance optimization',
      'Priority support',
      '4-5 weeks delivery',
    ],
    highlighted: false,
  },
];

export const processSteps = [
  { number: '01', title: 'Discover', description: 'We learn about your business, goals, and audience.' },
  { number: '02', title: 'Plan', description: 'We map the structure, content, and technical approach.' },
  { number: '03', title: 'Design', description: 'We craft the visual identity and user experience.' },
  { number: '04', title: 'Build', description: 'We develop, test, and refine every detail.' },
  { number: '05', title: 'Launch', description: 'We deploy, monitor, and hand over the keys.' },
];

export const workflowSteps = [
  { label: 'IDEA', description: 'Your vision, clarified' },
  { label: 'AI', description: 'Accelerated exploration' },
  { label: 'DESIGN', description: 'Crafted with intent' },
  { label: 'DEVELOPMENT', description: 'Built to perform' },
  { label: 'LAUNCH', description: 'Ready for the world' },
];

export const testimonials = [
  {
    quote: 'NavaWeb understood our brand from day one. The website they delivered looks nothing like what we expected — it looks better.',
    name: 'Client Name',
    business: 'Business Name',
    location: 'Madurai, India',
  },
  {
    quote: 'Fast, professional, and genuinely invested in the result. Our enquiries doubled within the first month.',
    name: 'Client Name',
    business: 'Business Name',
    location: 'Madurai, India',
  },
  {
    quote: 'They translated our vague ideas into a website that feels premium. Worth every rupee.',
    name: 'Client Name',
    business: 'Business Name',
    location: 'Madurai, India',
  },
];
