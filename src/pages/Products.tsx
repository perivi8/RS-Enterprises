import { products } from '@/data/products';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { convertPerKg, formatPrice } from '@/utils/currency';
import { toast } from '@/hooks/use-toast';
import { Heart } from 'lucide-react';

const Products = () => {
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { currency } = useCurrency();
  const [qtyById, setQtyById] = useState<Record<string, number>>(() => Object.fromEntries(products.map(p => [p.id, p.moqKg])));

  const handleAdd = (pId: string) => {
    const product = products.find(p => p.id === pId)!;
    const qty = qtyById[pId] || product.moqKg;
    const res = addItem(product, qty);
    if (!res.ok) toast({ title: 'MOQ not met', description: res.message, variant: 'destructive' });
    else toast({ title: 'Added to cart', description: `${product.name} • ${qty}kg` });
  };

  const handleWishlist = (p: typeof products[0]) => {
    toggleWishlist({
      productId: p.id,
      name: p.name,
      slug: p.slug,
      image: p.images[0],
      pricePerKgINR: p.pricePerKgINR,
    });
    if (isInWishlist(p.id)) {
      toast({ title: 'Removed from wishlist', description: p.name });
    } else {
      toast({ title: 'Added to wishlist', description: p.name });
    }
  };

  return (
    <main className="container mx-auto py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Products</h1>
      <p className="text-muted-foreground mb-8">All products are sold by weight (kg). Minimum order quantity per product is 10kg.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(p => (
          <Card key={p.id} className="transition-transform hover:scale-[1.02] relative">
            <button
              onClick={() => handleWishlist(p)}
              className={`absolute top-2 right-2 z-10 p-2 rounded-full transition-colors ${
                isInWishlist(p.id) 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500'
              }`}
              aria-label={isInWishlist(p.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart className={`w-5 h-5 ${isInWishlist(p.id) ? 'fill-current' : ''}`} />
            </button>
            <CardHeader>
              <img src={p.images[0]} alt={`${p.name} product image`} loading="lazy" className="h-48 w-full object-cover rounded-md" />
              <CardTitle className="mt-3 text-lg">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-2">{p.note || p.badges.join(' • ')}</div>
              <div className="font-medium">{formatPrice(p.pricePerKgINR, currency)} / kg</div>
              <div className="text-xs text-muted-foreground mt-1">MOQ: {p.moqKg}kg</div>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Input
                type="number"
                min={p.moqKg}
                step={1}
                value={qtyById[p.id]}
                onChange={(e) => setQtyById(s => ({ ...s, [p.id]: Number(e.target.value) }))}
                aria-label={`Quantity in kg for ${p.name}`}
              />
              <Button onClick={() => handleAdd(p.id)} disabled={(qtyById[p.id] ?? p.moqKg) < p.moqKg}>Add to Cart</Button>
              <Button asChild variant="outline"><Link to={`/products/${p.slug}`}>View</Link></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Products;
