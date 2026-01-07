import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { formatPrice } from '@/utils/currency';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const CartSheet = () => {
  const { items, subtotalINR, removeItem } = useCart();
  const { currency } = useCurrency();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" aria-label="Cart">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground">Your cart is empty.</p>
          ) : (
            items.map((i) => (
              <div key={i.productId} className="flex items-center gap-4">
                <img src={i.image} alt={i.name} className="w-16 h-16 rounded-md object-cover" loading="lazy" />
                <div className="flex-1">
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm text-muted-foreground">{i.qtyKg}kg × {formatPrice(i.pricePerKgINR, currency)} /kg</div>
                </div>
                <Button variant="ghost" onClick={() => removeItem(i.productId)}>Remove</Button>
              </div>
            ))
          )}
        </div>
        <SheetFooter className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-semibold">{formatPrice(subtotalINR, currency)}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button asChild variant="secondary"><Link to="/cart">View Cart</Link></Button>
            <Button asChild variant="hero"><Link to="/checkout">Checkout</Link></Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
