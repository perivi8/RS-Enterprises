import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface WishlistItem {
  productId: string;
  name: string;
  slug: string;
  image: string;
  pricePerKgINR: number;
}

interface WishlistContextValue {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (item: WishlistItem) => void;
  clear: () => void;
  count: number;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

const STORAGE_KEY = 'rs-wishlist-v1';

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>(() => {
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

  const addItem = (item: WishlistItem) => {
    setItems(prev => {
      if (prev.find(i => i.productId === item.productId)) return prev;
      return [...prev, item];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(i => i.productId !== productId));
  };

  const isInWishlist = (productId: string) => {
    return items.some(i => i.productId === productId);
  };

  const toggleWishlist = (item: WishlistItem) => {
    if (isInWishlist(item.productId)) {
      removeItem(item.productId);
    } else {
      addItem(item);
    }
  };

  const clear = () => setItems([]);

  const count = useMemo(() => items.length, [items]);

  const value: WishlistContextValue = { items, addItem, removeItem, isInWishlist, toggleWishlist, clear, count };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
};
