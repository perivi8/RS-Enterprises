export type Currency = 'INR' | 'USD';

export const DEFAULT_RATE_INR_PER_USD = 83; // can be adjusted in settings later

export function formatPrice(amountINR: number, currency: Currency, rate = DEFAULT_RATE_INR_PER_USD) {
  if (currency === 'INR') {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amountINR);
  }
  const inUSD = amountINR / rate;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inUSD);
}

export function convertPerKg(pricePerKgINR: number, currency: Currency, rate = DEFAULT_RATE_INR_PER_USD) {
  if (currency === 'INR') return pricePerKgINR;
  return +(pricePerKgINR / rate).toFixed(2);
}
