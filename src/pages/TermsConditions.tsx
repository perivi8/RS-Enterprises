import { useEffect } from 'react';

const TermsConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions — R S Enterprises';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Review the Terms & Conditions for using R S Enterprises website and services.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel','canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', '/terms');
  }, []);

  return (
    <main className="container mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
        <div className="bg-muted/50 p-4 rounded-lg mt-4 inline-block">
          <p className="font-semibold">Last Updated: August 2025</p>
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">1. General Use of the Website</h2>
          <p className="mb-4">
            By using this website, you confirm that you are:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>At least 18 years of age, or</li>
            <li>Accessing the site under the supervision of a parent or legal guardian.</li>
          </ul>
          <p>
            You agree to use the website for lawful business purposes only. R S Enterprises reserves the right to suspend, restrict, or terminate access to the website without notice or liability in cases of misuse or violation.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">2. Product Listings, Pricing & Availability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All cashew product listings are subject to availability and may be modified or removed without prior notice.</li>
            <li>While we strive for accuracy in product descriptions, grade specifications, and visuals, occasional errors may occur.</li>
            <li>Prices are listed in INR or USD (as applicable) and are subject to market fluctuations, global commodity rates, and logistic variables.</li>
            <li>Minimum Order Quantities (MOQs) apply for export or wholesale orders. Custom quotations will be provided for high-volume clients.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">3. Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full payment is required at the time of placing the order unless otherwise agreed upon via formal business terms.</li>
            <li>We accept bank transfers, Letters of Credit (L/C), verified export payment gateways, and domestic payment options including UPI and NEFT.</li>
            <li>R S Enterprises does not store payment information. All transactions are processed through secure third-party platforms.</li>
            <li>For any billing or payment-related discrepancies, contact our finance team promptly.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">4. Shipping & Delivery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We offer domestic and international shipping via reliable logistics and freight forwarding partners.</li>
            <li>Delivery timelines are shared based on destination, product type, quantity, and packaging specifications.</li>
            <li>Tracking details will be provided once goods are dispatched.</li>
            <li>Customs delays, freight disruptions, or force majeure events are beyond our direct control, though we actively assist in resolution and coordination.</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">5. User Conduct & Responsibilities</h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Post or share unlawful, misleading, or abusive content.</li>
            <li>Attempt to gain unauthorized access to systems, data, or order history.</li>
            <li>Use any part of the website for resale, scraping, or unauthorized commercial activity.</li>
            <li>Interfere with the site's functionality, security, or availability.</li>
          </ul>
          <p>Violations may result in suspended access, legal action, or both.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
          <p>
            All content—including the R S Enterprises logo, product imagery, technical documents, and website text—is the intellectual property of R S Enterprises. No content may be reproduced, distributed, or used commercially without our express written permission.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">7. Modifications to Terms</h2>
          <p>
            R S Enterprises reserves the right to amend or revise these Terms & Conditions at any time. Updates will be reflected on this page with the revised date. Continued use after any changes signifies your acceptance of the updated terms.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">R S Enterprises, its directors, or affiliates shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Indirect or consequential damages from site use</li>
            <li>Delays in shipment or order fulfillment due to external disruptions</li>
            <li>Data loss or transaction failure caused by third-party platforms</li>
          </ul>
          <p>Use of this website and our services is at your own discretion and risk.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
          <p>
            These terms shall be governed by the laws of India, with exclusive jurisdiction under the courts of Pondicherry.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            For questions, commercial inquiries, or operational support, please contact:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold">R S Enterprises</p>
            <p>No: 46, Iyanar Koil Street, Sivalingapuram</p>
            <p>Ariyankuppam, Pondicherry - 605007</p>
            <p>Email: <a href="mailto:rsenterprises5902@gmail.com" className="text-primary hover:underline">rsenterprises5902@gmail.com</a></p>
            <p>Phone: <a href="tel:+917200230057" className="text-primary hover:underline">+91 72002 30057</a></p>
          </div>
          <p className="mt-4">
            We are committed to building transparent, ethical, and reliable trade partnerships across the globe.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            © 2017-2025 R S Enterprises. Founded by Sudhagar P. All rights reserved.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsConditions;
