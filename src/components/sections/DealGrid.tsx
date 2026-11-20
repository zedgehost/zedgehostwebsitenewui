import type { DealCard } from '../../content/types';
import { Icon } from '../ui/Icon';

export function DealGrid({ items }: { items: DealCard[] }) {
  return (
    <div className="zh-deal-grid" data-reveal-group>
      {items.map((item) => (
        <article
          className={`zh-deal-card${item.featured ? ' zh-deal-card--featured' : ''}`}
          key={item.title}
        >
          <div className="zh-deal-card__top">
            <span className="zh-icon-tile">
              <Icon name={item.icon} size={24} />
            </span>
            {item.badge && <span className="zh-deal-card__badge">{item.badge}</span>}
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p className="zh-deal-card__price">
            <strong>{item.price}</strong>
            {item.wasPrice && <s>{item.wasPrice}</s>}
            <span>{item.period}</span>
          </p>
          <ul className="zh-deal-card__features">
            {item.features.map((feature) => (
              <li key={feature}>
                <Icon name="check-circle" size={16} />
                {feature}
              </li>
            ))}
          </ul>
          <a className="zh-deal-card__link" href={item.href}>
            {item.ctaLabel}
            <Icon name="arrow-right" size={16} />
          </a>
        </article>
      ))}
    </div>
  );
}
