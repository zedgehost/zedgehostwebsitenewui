import { CtaBand } from '../components/sections/CtaBand';
import { DomainSearch } from '../components/sections/DomainSearch';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Icon } from '../components/ui/Icon';
import { Section } from '../components/ui/Section';
import { site } from '../content/site';

const popularPages = [
  { label: 'Shared Hosting', href: 'shared-hosting.html', note: 'From Rs 1,499/year' },
  { label: 'WordPress Hosting', href: 'wordpress-hosting.html', note: 'From Rs 1,499/year' },
  { label: 'Cloud Hosting', href: 'cloud-hosting.html', note: 'From Rs 9,999/year' },
  { label: 'VPS Hosting', href: 'linux-vps-server.html', note: 'From Rs 1,699/month' },
  { label: 'Domain Search', href: 'domain-search.html', note: '.com from Rs 2,999' },
  { label: 'Blog', href: 'blog.html', note: 'Guides & tips' },
  { label: 'About Us', href: 'about-us.html', note: 'Who we are' },
  { label: 'Contact Us', href: site.contact, note: 'We reply fast' },
];

export function NotFoundPage() {
  return (
    <Layout currentPath="404.html">
      <section className="zh-hero zh-hero--dark zh-notfound">
        <Container>
          <span className="zh-eyebrow">Error 404</span>
          <p className="zh-notfound__code" aria-label="Error 404">
            4<span>0</span>4
          </p>
          <h1>Page not found</h1>
          <p className="zh-hero__sub">
            The page you were looking for does not exist or has moved. Check the link, or head
            back to one of the popular pages below.
          </p>
          <div className="zh-hero__actions">
            <Button href="index.html" variant="primary" size="lg">
              Go to Homepage
              <Icon name="arrow-right" size={18} />
            </Button>
            <Button href="domain-search.html" variant="on-dark" size="lg">
              Search Domains
            </Button>
          </div>
        </Container>
      </section>

      <Section eyebrow="Keep going" title="Popular pages" center>
        <div className="zh-notfound__search" data-reveal>
          <h3>Looking for a domain instead?</h3>
          <p>Search and register a new domain right from here.</p>
          <DomainSearch />
        </div>
        <ul className="zh-notfound__links">
          {popularPages.map((page) => (
            <li key={page.href}>
              <a href={page.href}>
                <strong>{page.label}</strong>
                <span>{page.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        data={{
          title: 'Ready to build your online presence?',
          text: 'Talk to our team about hosting, domains and everything you need to launch with confidence.',
          primary: { label: 'Get Started', href: 'index.html#plans' },
          secondary: { label: 'Contact us', href: site.contact },
        }}
      />
    </Layout>
  );
}
