import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/Button';

const STORAGE_KEY = 'zh-sale-popup-seen';
const BUSINESS_PLAN_URL = 'https://my.zedgehost.com/index.php?rp=/store/web-hosting/business';

/**
 * 11.11 sale popup. Shows once per visitor (tracked in localStorage) shortly
 * after the first page load, and never renders during prerendering.
 */
export function SalePopup() {
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'seen');
    } catch {
      // Storage unavailable: the popup just stays hidden for this visit.
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const timer = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div className="zh-sale-popup" role="dialog" aria-modal="true" aria-label="11.11 sale">
      <div className="zh-sale-popup__backdrop" onClick={dismiss} aria-hidden="true" />
      <div className="zh-sale-popup__card">
        <button className="zh-sale-popup__close" type="button" onClick={dismiss} aria-label="Close">
          ×
        </button>
        <span className="zh-sale-popup__badge">11.11 SALE</span>
        <h2 className="zh-sale-popup__title">Web Hosting with FREE .com Domain</h2>
        <p className="zh-sale-popup__price">
          Rs 3,999<span>/year</span>
        </p>
        <p className="zh-sale-popup__perks">Free SSL • Free Migration • Same Price on Renewal</p>
        <div onClick={dismiss}>
          <Button href={BUSINESS_PLAN_URL} variant="on-dark" size="lg" block>
            Buy Now
          </Button>
        </div>
        <p className="zh-sale-popup__note">Business Plan — limited time offer</p>
      </div>
    </div>
  );
}
