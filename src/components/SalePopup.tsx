import { useEffect, useState } from 'react';
import { Button } from './ui/Button';

const BUSINESS_PLAN_URL = 'https://my.zedgehost.com/index.php?rp=/store/web-hosting/business';

/**
 * 11.11 sale popup. Shows on every page load, shortly after the page opens,
 * and never renders during prerendering.
 */
export function SalePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVisible(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="zh-sale-popup" role="dialog" aria-modal="true" aria-label="11.11 sale">
      <div className="zh-sale-popup__backdrop" onClick={() => setVisible(false)} aria-hidden="true" />
      <div className="zh-sale-popup__card">
        <button
          className="zh-sale-popup__close"
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Close"
        >
          ×
        </button>
        <div className="zh-sale-popup__media">
          <img src="/assets/img/hero-home-v3.webp" alt="" width={900} height={600} />
        </div>
        <div className="zh-sale-popup__badges">
          <span className="zh-sale-popup__badge">11.11 SALE</span>
          <span className="zh-sale-popup__badge zh-sale-popup__badge--off">40% OFF</span>
        </div>
        <h2 className="zh-sale-popup__title">Web Hosting with FREE .com Domain</h2>
        <p className="zh-sale-popup__price">
          Rs 3,999<span>/year</span>
        </p>
        <p className="zh-sale-popup__perks">Free SSL • Free Migration • Same Price on Renewal</p>
        <Button href={BUSINESS_PLAN_URL} variant="on-dark" size="lg" block>
          Buy Now
        </Button>
        <p className="zh-sale-popup__note">Business Plan — limited time offer</p>
      </div>
    </div>
  );
}
