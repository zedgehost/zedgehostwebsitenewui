import { useState } from 'react';
import { Icon } from './Icon';

/** Copy-to-clipboard button for a promo code. Shows "Copied!" briefly after copying. */
export function PromoCodeCopy({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const area = document.createElement('textarea');
      area.value = code;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      className="zh-promo-code"
      onClick={copy}
      aria-label={`Copy promo code ${code}`}
    >
      <code>{code}</code>
      <Icon name={copied ? 'check' : 'copy'} size={16} />
      <span>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
}
