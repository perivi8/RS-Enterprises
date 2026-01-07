import { useWishlist } from '@/contexts/WishlistContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/utils/currency';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { products } from '@/data/products';
import { toast } from '@/hooks/use-toast';

const Wishlist = () => {
  const { items, removeItem, clear } = useWishlist();
  const { currency } = useCurrency();
  const { addItem } = useCart();

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      const res = addItem(product, product.moqKg);
      if (res.ok) {
        toast({ title: 'Added to cart', description: `${product.name} • ${product.moqKg}kg` });
      }
    }
  };

  if (items.length === 0) {
    return (
      <main className="container mx-auto py-10 text-center">
        <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-muted-foreground mb-6">Save your favorite products to buy them later!</p>
        <Button asChild>
          <Link to="/products">Browse Products</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-3xl md:text-4xl font-bold">My Wishlist</h1>
        <Button variant="outline" size="sm" onClick={clear}>
          Clear All
        </Button>
      </div>
      <p className="text-muted-foreground mb-8">{items.length} item{items.length > 1 ? 's' : ''} in your wishlist</p>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map(item => (
          <Card key={item.productId} className="relative">
            <button
              onClick={() => removeItem(item.productId)}
              className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-red-50 transition-colors"
              aria-label="Remove from wishlist"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
            <CardHeader>
              <img 
                src={item.image} 
                alt={item.name} 
                className="h-48 w-full object-cover rounded-md" 
              />
              <CardTitle className="mt-3 text-lg">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-medium">{formatPrice(item.pricePerKgINR, currency)} / kg</div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button 
                onClick={() => handleAddToCart(item.productId)} 
                className="flex-1"
                size="sm"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to={`/products/${item.slug}`}>View</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Wishlist;
