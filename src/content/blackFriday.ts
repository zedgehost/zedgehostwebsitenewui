import type {
  CtaBandData,
  DealCard,
  FaqItem,
  HeroData,
  PlanSectionData,
} from './types';
import { sharedHostingPlans } from './plans/shared';

/**
 * Black Friday landing page (black-friday.html).
 * Every price and claim here is real: the Unlimited/Enterprise deal is the
 * live WHMCS price (Rs 4,999/year, was Rs 9,999), the .com price is the live
 * COM2499 promo, and VPS/Cloud show regular prices with no discount badge.
 * No end date is set for the sale — the page says "Limited time offer" only.
 */

export const blackFridayHero: HeroData = {
  eyebrow: 'Black Friday Deals 2026',
  campaign: 'blackfriday',
  title: 'Black Friday: Unlimited Hosting + FREE .com Domain',
  subtitle:
    'One price. Everything included. Unlimited web hosting for just Rs 4,999/year (was Rs 9,999) with a FREE .com domain for the first year. Turbo NVMe SSD, free SSL, cPanel, free migration and 24/7 support. Limited time offer.',
  priceFrom: 4999,
  priceRegular: 9999,
  ticks: ['Turbo NVMe SSD', 'Free SSL + cPanel', 'Free website migration', '24/7 support'],
  primaryCta: { label: 'Claim the Deal', href: '#plans' },
  secondaryCta: { label: 'See All Deals', href: '#deals' },
  image: { src: '/assets/img/hero-home-v3.webp', alt: 'ZedgeHost Black Friday web hosting deals in Pakistan' },
  transparentImage: true,
  variant: 'dark',
};

export const blackFridayDeals: DealCard[] = [
  {
    icon: 'server',
    badge: '50% OFF',
    title: 'Web Hosting',
    description: 'Fast, secure hosting that grows with your site. Unlimited plan now half price.',
    price: 'Rs 4,999',
    wasPrice: 'Rs 9,999',
    period: '/year',
    features: ['FREE .com domain (1st year)', 'Free SSL + cPanel', 'Turbo NVMe SSD'],
    ctaLabel: 'See hosting deal',
    href: 'shared-hosting.html',
  },
  {
    icon: 'code',
    badge: '50% OFF',
    title: 'WordPress Hosting',
    description: 'Optimized hosting for fast, secure WordPress sites. Unlimited plan now half price.',
    price: 'Rs 4,999',
    wasPrice: 'Rs 9,999',
    period: '/year',
    features: ['FREE .com domain (1st year)', 'Free SSL + cPanel', 'Fast WordPress setup'],
    ctaLabel: 'See WordPress deal',
    href: 'wordpress-hosting.html',
  },
  {
    icon: 'globe',
    badge: 'Rs 500 OFF',
    title: 'Domains',
    description: 'Claim your name at a Black Friday price with promo code COM2499.',
    price: 'Rs 2,499',
    wasPrice: 'Rs 2,999',
    period: '/1st year',
    features: ['Promo code COM2499', 'Instant registration', 'Renewal Rs 3,999/year'],
    ctaLabel: 'See domain deals',
    href: 'domain-search.html',
  },
  {
    icon: 'bolt',
    title: 'VPS Hosting',
    description: 'Full root access and dedicated power, all yours.',
    price: 'Rs 1,699',
    period: '/month',
    features: ['1–2 CPU cores', '2–8 GB RAM', '40–160 GB SSD'],
    ctaLabel: 'See VPS plans',
    href: 'linux-vps-server.html',
  },
  {
    icon: 'cloud',
    title: 'Cloud Hosting',
    description: 'Scalable hosting powered by multiple servers for maximum uptime.',
    price: 'Rs 9,999',
    period: '/year',
    features: ['FREE .com domain (1st year)', 'Scalable resources', '99.9% uptime'],
    ctaLabel: 'See cloud plans',
    href: 'cloud-hosting.html',
  },
];

export const blackFridayPlans: PlanSectionData = {
  eyebrow: 'Black Friday Plans',
  title: 'Web Hosting Plans at Black Friday Prices',
  subtitle:
    'Unlimited hosting now half price. Every plan includes free SSL, cPanel and 24/7 support.',
  note: 'All plans include free SSL, cPanel and 24/7 support.',
  plans: sharedHostingPlans,
};

export const blackFridayFaqs: FaqItem[] = [
  {
    q: 'When does the ZedgeHost Black Friday sale end?',
    a: 'The Black Friday deals are a limited time offer. The Unlimited Hosting price of Rs 4,999/year and the .com promo code COM2499 stay live until we announce an end date, so order now to lock the price in.',
  },
  {
    q: 'What is included in the Black Friday Unlimited Hosting deal?',
    a: 'The Enterprise (Unlimited) web hosting plan for Rs 4,999/year instead of Rs 9,999, with a FREE .com domain for the first year, free SSL, cPanel, Turbo NVMe SSD, free migration and 24/7 support.',
  },
  {
    q: 'What does the FREE .com domain cost on renewal?',
    a: 'The .com domain is free for the first year. From the second year it renews at the regular Rs 3,999/year.',
  },
  {
    q: 'What does the hosting plan cost on renewal?',
    a: 'The Enterprise plan renews at Rs 4,999/year, the same Black Friday price.',
  },
  {
    q: 'Do I need a coupon code for the Black Friday deal?',
    a: 'No code is needed for the hosting deal, the Rs 4,999 price is already live. For a standalone .com domain at Rs 2,499 (was Rs 2,999), use promo code COM2499 at checkout.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes, every plan includes a 30-day money-back guarantee.',
  },
];

export const blackFridayCta: CtaBandData = {
  title: 'Ready to claim your Black Friday deal?',
  text: 'Unlimited hosting + FREE .com domain for Rs 4,999/year. Limited time offer.',
  primary: { label: 'Get Unlimited Hosting', href: 'shared-hosting.html' },
  secondary: { label: 'Search Domains', href: 'domain-search.html' },
};
