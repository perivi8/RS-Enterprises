import { useEffect } from 'react';

const ShippingPolicy = () => {
  useEffect(() => {
    document.title = 'Shipping Policy — R S Enterprises';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Learn about shipping methods, timelines, and export freight for R S Enterprises.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel','canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', '/shipping-policy');
  }, []);

  return (
    <main className="container mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold">Shipping Policy</h1>
        <p className="text-xl text-muted-foreground mt-2">Freshness in Every Shipment – From Farm to Port with Care</p>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          At R S Enterprises, we take pride in delivering premium-grade cashew products to clients across India and around the globe. 
          Our shipping process is designed for efficiency, traceability, and maximum freshness—whether it's a single pallet or a full container.
        </p>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Order Processing Time</h2>
          <p className="mb-4">
            Once your order is confirmed and payment is verified, we initiate the processing within 3 to 7 business days, which includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Final quality checks</li>
            <li>Moisture-controlled vacuum packaging</li>
            <li>Custom export labeling (if required)</li>
            <li>Coordination with freight and customs agents</li>
          </ul>
          <p className="mb-4">
            For bulk and OEM orders, timelines may vary depending on:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Product type (e.g., W320, W240, splits, etc.)</li>
            <li>Volume and container size</li>
            <li>Custom branding or packaging needs</li>
          </ul>
          <p>Orders placed on weekends or holidays are processed on the next business day.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Shipping Destinations & Delivery Estimates</h2>
          <p className="mb-4">
            We serve both domestic and international markets, including B2B customers, importers, and distributors.
          </p>
          
          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <h3 className="font-bold text-lg mb-3">📦 Domestic Shipping (India):</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Metro Cities: 3–5 business days post-dispatch</li>
              <li>Non-Metro/Rural: 5–10 business days</li>
            </ul>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg my-6">
            <h3 className="font-bold text-lg mb-3">🌍 International Shipping:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Middle East, Gulf Countries: 10–18 business days</li>
              <li>Europe & UK: 14–21 business days</li>
              <li>USA, Canada: 18–25 business days</li>
              <li>Asia-Pacific & Africa: Varies based on port and customs clearance</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
            <p className="font-medium">📝 Note:</p>
            <p>Delivery estimates may shift due to customs inspections, port congestion, weather disruptions, or international trade holidays.</p>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Shipping Charges</h2>
          <p className="mb-4">
            Shipping costs are calculated based on:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Destination (port/city/country)</li>
            <li>Order weight and packaging volume</li>
            <li>Shipping method (air cargo, LCL, FCL)</li>
            <li>Incoterms (e.g., FOB, CIF, EXW, DDP)</li>
          </ul>
          <p>
            All shipping charges will be transparently quoted in your proforma invoice or final invoice, prior to shipment. 
            We offer cost-effective container consolidation options for multi-client exports from India.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Tracking Your Shipment</h2>
          <p className="mb-4">
            Once your order is dispatched, you will receive:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Shipping carrier & booking reference</li>
            <li>Tracking link (for courier/freight)</li>
            <li>Shipping invoice & packing list</li>
          </ul>
          <p>
            You can also contact our logistics support for live updates or documents needed for customs clearance.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Delays & Exceptions</h2>
          <p className="mb-4">
            Despite our best efforts, shipping may be impacted due to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Port strikes, customs delays, or trade sanctions</li>
            <li>Global container shortages or freight fluctuations</li>
            <li>Force majeure (natural disasters, war, pandemic-related restrictions)</li>
          </ul>
          <p>
            In such cases, we will keep you informed via email, WhatsApp, or your designated trade contact, with estimated adjustments and alternatives.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Wholesale, B2B & Export Logistics</h2>
          <p className="mb-4">
            For enterprise clients and large-volume buyers, we provide:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Full container load (FCL) coordination</li>
            <li>Partial shipments & LCL options</li>
            <li>Export documentation (Invoice, CO, B/L, Phyto certificate, FSSAI, etc.)</li>
            <li>Temperature/moisture-controlled packaging</li>
            <li>Buyer-side inspection support (if required)</li>
          </ul>
          <p>Our export desk ensures compliance with destination country food safety regulations.</p>
        </section>

        <section className="my-8 bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
          <p className="mb-4">
            For any shipping-related queries or coordination help, contact our support team:
          </p>
          <div className="space-y-2">
            <p>📧 Email: <a href="mailto:rsenterprises5902@gmail.com" className="text-primary hover:underline">rsenterprises5902@gmail.com</a></p>
            <p>📞 Phone/WhatsApp: <a href="https://wa.me/917200230057" className="text-primary hover:underline">+91 72002 30057</a></p>
            <p>🕘 Business Hours: Mon–Sat, 9 AM – 6 PM IST</p>
          </div>
          <p className="mt-4">
            We look forward to delivering your order on time—with quality you can trust.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ShippingPolicy;
