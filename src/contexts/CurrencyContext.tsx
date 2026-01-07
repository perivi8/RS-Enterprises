import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Currency, DEFAULT_RATE_INR_PER_USD } from '@/utils/currency';

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  rate: number;
  setRate: (r: number) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(() => (localStorage.getItem('currency') as Currency) || 'INR');
  const [rate, setRate] = useState<number>(() => {
    const saved = localStorage.getItem('fxRate');
    return saved ? Number(saved) : DEFAULT_RATE_INR_PER_USD;
    });

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('fxRate', String(rate));
  }, [rate]);

  const value = useMemo(() => ({ currency, setCurrency, rate, setRate }), [currency, rate]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
};
