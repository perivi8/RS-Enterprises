import { useEffect } from 'react';

const CancellationRefund = () => {
  useEffect(() => {
    document.title = 'Cancellation & Refund — R S Enterprises';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Understand our order cancellation and refund process at R S Enterprises.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel','canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', '/cancellation-refund');
  }, []);

  return (
    <main className="container mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold">Cancellation & Refund Policy</h1>
        <p className="text-xl text-muted-foreground mt-2">Fair Terms. Fresh Products. Trusted Partnerships.</p>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          At R S Enterprises, we are committed to delivering high-quality cashew products with care, consistency, and compliance. 
          This policy outlines our approach to cancellations, damages, and refunds in a fair and transparent manner.
        </p>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Order Cancellations</h2>
          <div className="bg-muted/30 p-4 rounded-lg mb-4">
            <p className="font-semibold">📌 Cancellation Window: Within 4 Hours of Order Confirmation</p>
          </div>
          <p className="mb-4">
            You may request cancellation within 4 hours of order placement, provided that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>The order has not been processed or packed</li>
            <li>Shipment booking has not been made</li>
            <li>No custom packaging or labeling has begun</li>
          </ul>
          <p className="mb-4">
            Once the order is handed over to our logistics or export team, cancellation is no longer possible due to the perishable and process-driven nature of food-grade exports.
          </p>
          <p>
            To cancel: Contact us via email or WhatsApp with your Order ID and reason for cancellation. Urgent requests should be communicated immediately for swift action.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Damaged or Defective Goods</h2>
          <p className="mb-4">
            If you receive:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Products damaged in transit</li>
            <li>Packaging that is tampered with or leaking</li>
            <li>Quantity shortages</li>
            <li>Visibly spoiled or mold-affected stock (upon receipt)</li>
          </ul>
          <p className="mb-4">
            Please notify us within 5 business days of delivery with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Your Order ID</li>
            <li>Clear photos of damage/defect</li>
            <li>Batch number (if visible)</li>
            <li>Brief explanation of the issue</li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p className="font-semibold mb-2">Resolution Options (upon verification):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>✅ Replacement of the affected batch</li>
              <li>✅ Credit note for next order</li>
              <li>✅ Refund via original payment method</li>
            </ul>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Return & Refund Conditions</h2>
          <p className="mb-4">
            Due to the perishable nature of cashews and international food compliance laws, we do not accept returns of shipped goods except under these conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Verified damage during shipping</li>
            <li>Certified non-compliance with pre-agreed specs (after inspection)</li>
            <li>Quality deviation backed by buyer-side testing within 5 days of receipt</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
            <p className="font-semibold mb-2">We do not issue refunds for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Delay due to customs clearance or import-side logistics</li>
              <li>Client-side storage or mishandling after delivery</li>
              <li>Flavor/texture variation within accepted natural range</li>
              <li>Change of mind after dispatch</li>
            </ul>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">B2B / Bulk Order Terms</h2>
          <p className="mb-4">
            For export clients, importers, and bulk buyers, cancellation, refund, and replacement policies will follow the agreed purchase terms, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Incoterms (FOB, CIF, etc.)</li>
            <li>Pre-shipment sample approval</li>
            <li>Packaging & branding customizations</li>
          </ul>
          <p>
            Please refer to your sales agreement or email confirmation for final terms.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
          <p className="mb-4">
            If your refund request is approved:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><span className="font-semibold">Initiation:</span> Within 3–7 business days</li>
            <li><span className="font-semibold">Mode:</span> Via the original payment method or as store credit (as applicable)</li>
            <li><span className="font-semibold">Settlement Time:</span> 5–10 business days (varies by bank/payment gateway)</li>
          </ul>
          <p>
            You will be notified via email or WhatsApp once your refund has been processed.
          </p>
        </section>

        <section className="my-8 bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Need Help with a Cancellation or Refund?</h2>
          <p className="mb-4">
            Contact our support team:
          </p>
          <div className="space-y-2">
            <p>📧 Email: <a href="mailto:rsenterprises5902@gmail.com" className="text-primary hover:underline">rsenterprises5902@gmail.com</a></p>
            <p>📞 Phone/WhatsApp: <a href="https://wa.me/917200230057" className="text-primary hover:underline">+91 72002 30057</a></p>
            <p>🕘 Support Hours: Mon–Sat, 9 AM – 6 PM IST</p>
          </div>
          <p className="mt-4">
            At R S Enterprises, we prioritize ethical trade, long-term partnerships, and food safety. All claims are handled with utmost fairness and customer-centricity.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CancellationRefund;
