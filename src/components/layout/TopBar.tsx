import { useCurrency } from '../../app/currency';
import { site } from '../../content/site';
import { Container } from '../ui/Container';

const currencies = ['PKR', 'USD'] as const;

/**
 * One half of the scrolling ticker. The track renders this twice, back to
 * back, so the -50% loop is seamless; the second copy is hidden from
 * screen readers so the message is only announced once.
 */
function TickerHalf({ hidden }: { hidden?: boolean }) {
  return (
    <span className="zh-ticker__half" aria-hidden={hidden || undefined}>
      {[0, 1, 2].map((index) => (
        <span key={index} className="zh-ticker__item">
          <strong>11.11 SALE</strong> — Web Hosting with FREE .com Domain — Rs 3,999/year — 40% OFF
        </span>
      ))}
    </span>
  );
}

export function TopBar() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="zh-topbar">
      <Container>
        <div className="zh-topbar__inner">
          <div className="zh-topbar__offer">
            <div className="zh-ticker">
              <div className="zh-ticker__track">
                <TickerHalf />
                <TickerHalf hidden />
              </div>
            </div>
            <a href="cloud-hosting.html">Claim Discount</a>
          </div>
          <div className="zh-topbar__links">
            <div className="zh-currency" role="group" aria-label="Select currency">
              {currencies.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={currency === option}
                  onClick={() => setCurrency(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <a href={site.clientArea}>Client Area</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
