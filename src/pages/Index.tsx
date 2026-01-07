import hero from '@/assets/hero-cashews.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCurrency } from '@/contexts/CurrencyContext';
import { formatPrice } from '@/utils/currency';

const Index = () => {
  const featured = products.slice(0, 4);
  const { currency } = useCurrency();

  return (
    <main>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Premium cashews spilling from burlap sack" className="w-full h-[52vh] md:h-[64vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
        <div className="container mx-auto absolute inset-0 flex items-end pb-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">From Farm to Flavor — Premium Cashews</h1>
            <p className="mt-3 text-muted-foreground">Premium cashews since 2017. MOQ 10kg per product. Export-ready with ISO, HACCP, Organic & FSSAI.</p>
            <div className="mt-6 flex gap-3">
              <Button asChild variant="hero"><Link to="/products">Shop Now</Link></Button>
              <Button asChild variant="outline"><Link to="/export">Request Export Quote</Link></Button>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">Domestic shipping calculated at checkout. Export freight quoted separately.</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(p => (
            <Card key={p.id} className="transition-transform hover:scale-[1.02]">
              <CardHeader>
                <img src={p.images[0]} alt={`${p.name} featured image`} loading="lazy" className="h-44 w-full object-cover rounded-md" />
                <CardTitle className="mt-3 text-lg">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-1">From {formatPrice(p.pricePerKgINR, currency)} / kg</div>
                <div className="text-xs text-muted-foreground">MOQ 10kg</div>
                <div className="mt-3"><Button asChild size="sm"><Link to={`/products/${p.slug}`}>View</Link></Button></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
