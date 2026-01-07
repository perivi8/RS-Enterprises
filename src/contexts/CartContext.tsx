import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/data/products';

export interface CartItem {
  productId: string;
  name: string;
  slug: string;
  image: string;
  pricePerKgINR: number;
  moqKg: number;
  qtyKg: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, qtyKg: number) => { ok: boolean; message?: string };
  updateQty: (productId: string, qtyKg: number) => { ok: boolean; message?: string };
  removeItem: (productId: string) => void;
  clear: () => void;
  count: number;
  subtotalINR: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'rs-cart-v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, qtyKg: number) => {
    if (qtyKg < product.moqKg) {
      return { ok: false, message: `Minimum ${product.moqKg}kg per product.` };
    }
    setItems(prev => {
      const existing = prev.find(i => i.productId === product.id);
      if (existing) {
        return prev.map(i => i.productId === product.id ? { ...i, qtyKg: i.qtyKg + qtyKg } : i);
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          slug: product.slug,
          image: product.images[0],
          pricePerKgINR: product.pricePerKgINR,
          moqKg: product.moqKg,
          qtyKg,
        },
      ];
    });
    return { ok: true };
  };

  const updateQty = (productId: string, qtyKg: number) => {
    const item = items.find(i => i.productId === productId);
    if (!item) return { ok: false, message: 'Item not found' };
    if (qtyKg < item.moqKg) return { ok: false, message: `Minimum ${item.moqKg}kg per product.` };
    setItems(prev => prev.map(i => i.productId === productId ? { ...i, qtyKg } : i));
    return { ok: true };
  };

  const removeItem = (productId: string) => setItems(prev => prev.filter(i => i.productId !== productId));
  const clear = () => setItems([]);

  const subtotalINR = useMemo(() => items.reduce((sum, i) => sum + i.qtyKg * i.pricePerKgINR, 0), [items]);
  const count = useMemo(() => items.reduce((c, i) => c + i.qtyKg, 0), [items]);

  const value: CartContextValue = { items, addItem, updateQty, removeItem, clear, count, subtotalINR };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
