import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

const ExportPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    country: '',
    products: '',
    quantity: '',
    incoterms: '',
    port: '',
    message: '',
  });

  const isFormValid = 
    formData.company.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.country.trim() !== '' &&
    formData.products.trim() !== '' &&
    formData.quantity.trim() !== '' &&
    formData.incoterms.trim() !== '' &&
    formData.port.trim() !== '' &&
    formData.message.trim() !== '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    toast({ title: 'Export RFQ submitted', description: 'Thanks! We will get back to you within 24 hours.' });
    setFormData({
      company: '',
      email: '',
      country: '',
      products: '',
      quantity: '',
      incoterms: '',
      port: '',
      message: '',
    });
  };

  return (
    <main className="container mx-auto py-10">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Export & Bulk Orders</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">Bulk shipments (≥100kg), private label, and container loads supported. HS Code: 08013200. Certifications: ISO • HACCP • Organic • FSSAI.</p>
      <section className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-semibold mb-2">Request Export Quote</h2>
          <form onSubmit={onSubmit} className="space-y-3">
            <Input required name="company" value={formData.company} onChange={handleChange} placeholder="Company name *" />
            <div className="grid grid-cols-2 gap-3">
              <Input required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email *" />
              <Input required name="country" value={formData.country} onChange={handleChange} placeholder="Country *" />
            </div>
            <Input required name="products" value={formData.products} onChange={handleChange} placeholder="Products & grades (e.g., Premium W320) *" />
            <Input required name="quantity" type="number" min={100} step={10} value={formData.quantity} onChange={handleChange} placeholder="Quantity in kg (≥100) *" />
            <Input required name="incoterms" value={formData.incoterms} onChange={handleChange} placeholder="Incoterms (e.g., FOB, CIF) *" />
            <Input required name="port" value={formData.port} onChange={handleChange} placeholder="Port (e.g., Nhava Sheva) *" />
            <Textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Requirements & packaging *" />
            <div className="text-xs text-muted-foreground">* All fields are required to submit your request.</div>
            <Button type="submit" variant="hero" disabled={!isFormValid} className={!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}>
              Submit RFQ
            </Button>
          </form>
        </div>
        <aside className="rounded-lg border p-6 bg-secondary">
          <h3 className="font-semibold mb-2">Export Capabilities</h3>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
            <li>Packaging: 10kg / 25kg vacuum, nitrogen-flushed</li>
            <li>OEM & Private Label options</li>
            <li>Container shipments with temperature control</li>
            <li>Traceability from farm to pack</li>
          </ul>
        </aside>
      </section>
    </main>
  );
};

export default ExportPage;
