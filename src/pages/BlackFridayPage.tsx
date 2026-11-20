import { Layout } from '../components/layout/Layout';
import { CtaBand } from '../components/sections/CtaBand';
import { DealGrid } from '../components/sections/DealGrid';
import { FAQSection } from '../components/sections/FAQSection';
import { Hero } from '../components/sections/Hero';
import { PlanGrid } from '../components/sections/PlanGrid';
import { StatsBand } from '../components/sections/StatsBand';
import { Section } from '../components/ui/Section';
import {
  blackFridayCta,
  blackFridayDeals,
  blackFridayFaqs,
  blackFridayHero,
  blackFridayPlans,
} from '../content/blackFriday';
import { stats, whyChoose } from '../content/home';
import { site } from '../content/site';

export function BlackFridayPage() {
  return (
    <Layout currentPath="black-friday.html">
      <Hero data={blackFridayHero} />

      <Section
        id="deals"
        center
        eyebrow="Black Friday Deals"
        title="Pick the Black Friday deal that fits your goal"
        subtitle="Real discounts on real plans. No coupon needed for hosting deals."
      >
        <DealGrid items={blackFridayDeals} />
      </Section>

      <Section
        id="plans"
        tone="mint"
        center
        eyebrow={blackFridayPlans.eyebrow}
        title={blackFridayPlans.title}
        subtitle={blackFridayPlans.subtitle}
      >
        <PlanGrid plans={blackFridayPlans.plans} note={blackFridayPlans.note} />
      </Section>

      <StatsBand
        title="Why You Should Choose Us"
        subtitle="Experience unmatched performance, reliability, and support designed to elevate your online presence."
        features={whyChoose}
        stats={stats}
      />

      <FAQSection
        items={blackFridayFaqs}
        title="Black Friday FAQs"
        subtitle="Quick answers about the sale, the free domain, renewals and refunds."
        cta={{ label: 'Contact our support team', href: site.contact }}
      />

      <CtaBand data={blackFridayCta} />
    </Layout>
  );
}
