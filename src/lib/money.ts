export const LOCALE =
  process.env.NEXT_PUBLIC_LOCALE || "en-ZA";

export const CURRENCY =
  process.env.NEXT_PUBLIC_CURRENCY || "ZAR";

const nf = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: CURRENCY,
  maximumFractionDigits: 2,
});

export function formatPrice(amount: number) {
  return nf.format(amount);
}

export function discountedPrice(
  price: number,
  discount: { amount: number; percentage: number }
) {
  if (discount?.percentage && discount.percentage > 0) {
    return Math.max(
      0,
      Math.round(price - (price * discount.percentage) / 100)
    );
  }
  if (discount?.amount && discount.amount > 0) {
    return Math.max(0, price - discount.amount);
  }
  return price;
}

export function getCurrencySymbol(
  locale = LOCALE,
  currency = CURRENCY
): string {
  // Extract the currency sign from Intl parts
  const parts = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).formatToParts(0);
  const sym = parts.find(p => p.type === "currency")?.value;
  return sym ?? currency;
}