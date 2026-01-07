import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const OrderSuccess = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <main className="container mx-auto py-16 text-center">
      <h1 className="font-serif text-3xl md:text-4xl font-bold">Thank you for your order!</h1>
      <p className="mt-3 text-muted-foreground">Your order has been received and is being processed.</p>
      <div className="mt-6 rounded-lg border inline-block px-6 py-4">
        <div className="text-sm text-muted-foreground">Order ID</div>
        <div className="text-xl font-semibold">{id}</div>
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <Button asChild variant="secondary"><Link to="/products">Continue Shopping</Link></Button>
        <Button asChild variant="outline"><Link to="/account">View Orders</Link></Button>
      </div>
    </main>
  );
};

export default OrderSuccess;
