import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { formatPrice } from '@/utils/currency';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { Banknote } from 'lucide-react';

const Checkout = () => {
  const { items, subtotalINR, clear } = useCart();
  const { currency } = useCurrency();
  const navigate = useNavigate();

  const onPay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = 'ORD-' + Date.now().toString(36).toUpperCase();
    clear();
    navigate(`/order-success/${id}`);
  };

  return (
    <main className="container mx-auto py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <form onSubmit={onPay} className="space-y-4 lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-3">
            <Input placeholder="Full name" required />
            <Input type="email" placeholder="Email" required />
          </div>
          <Input placeholder="Address line 1" required />
          <Input placeholder="Address line 2" />
          <div className="grid md:grid-cols-3 gap-3">
            <Input placeholder="City" required />
            <Input placeholder="State" required />
            <Input placeholder="Postal code" required />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <Input placeholder="Country" required />
            <Input placeholder="Phone" required />
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h2 className="font-semibold mb-3">Payment Method</h2>
            <div className="border rounded-lg p-4 bg-muted/30">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  defaultChecked 
                  className="w-4 h-4 text-primary"
                />
                <Banknote className="w-5 h-5 text-primary" />
                <div>
                  <span className="font-medium">Cash on Delivery (COD)</span>
                  <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                </div>
              </label>
            </div>
          </div>

          <Button type="submit" variant="hero" className="mt-4">Place Order</Button>
        </form>
        <aside className="rounded-lg border p-6 h-fit">
          <div className="font-medium mb-2">Order Summary</div>
          <ul className="text-sm text-muted-foreground space-y-1 mb-3">
            {items.map(i => (
              <li key={i.productId} className="flex items-center justify-between">
                <span>{i.name} • {i.qtyKg}kg</span>
                <span>{formatPrice(i.pricePerKgINR * i.qtyKg, currency)}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between"><span>Subtotal</span><span className="font-semibold">{formatPrice(subtotalINR, currency)}</span></div>
          <div className="text-xs text-muted-foreground mt-2">Taxes and shipping calculated at payment. Export freight quoted separately.</div>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
