import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { useCurrency } from '@/contexts/CurrencyContext';
import { formatPrice } from '@/utils/currency';

const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { currency } = useCurrency();

  const filteredProducts = query.trim() 
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.badges.some(b => b.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelect = () => {
    setOpen(false);
    setQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Search">
          <Search className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search cashews..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>
        
        <div className="mt-4 max-h-80 overflow-y-auto">
          {query.trim() && filteredProducts.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No products found for "{query}"</p>
          )}
          
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              onClick={handleSelect}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
                <p className="text-sm font-medium text-primary">{formatPrice(product.pricePerKgINR, currency)} / kg</p>
              </div>
            </Link>
          ))}
          
          {!query.trim() && (
            <div className="text-center text-muted-foreground py-8">
              <p>Start typing to search products</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
