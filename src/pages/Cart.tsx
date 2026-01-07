import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { formatPrice } from '@/utils/currency';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const CartPage = () => {
  const { items, updateQty, removeItem, subtotalINR } = useCart();
  const { currency } = useCurrency();

  const onQty = (id: string, qty: number, moq: number) => {
    const res = updateQty(id, qty);
    if (!res.ok) toast({ title: 'MOQ not met', description: res.message, variant: 'destructive' });
  };

  return (
    <main className="container mx-auto py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {items.map(i => (
              <div key={i.productId} className="rounded-lg border p-4 flex items-center gap-4">
                <img src={i.image} alt={i.name} className="w-20 h-20 rounded-md object-cover" />
                <div className="flex-1">
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm text-muted-foreground">{formatPrice(i.pricePerKgINR, currency)} / kg</div>
                  <div className="text-xs text-muted-foreground">MOQ: {i.moqKg}kg</div>
                </div>
                <Input type="number" min={i.moqKg} step={1} defaultValue={i.qtyKg} onChange={(e)=> onQty(i.productId, Number(e.target.value), i.moqKg)} className="w-28" />
                <Button variant="ghost" onClick={()=> removeItem(i.productId)}>Remove</Button>
              </div>
            ))}
          </div>
          <aside className="rounded-lg border p-6 h-fit">
            <div className="flex items-center justify-between mb-2"><span>Subtotal</span><span className="font-semibold">{formatPrice(subtotalINR, currency)}</span></div>
            <div className="text-xs text-muted-foreground mb-4">Taxes and shipping calculated at checkout. Domestic via courier; export freight quoted separately.</div>
            <Button asChild className="w-full"><Link to="/checkout">Proceed to Checkout</Link></Button>
          </aside>
        </div>
      )}
    </main>
  );
};

export default CartPage;
