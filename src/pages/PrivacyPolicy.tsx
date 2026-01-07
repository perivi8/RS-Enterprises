import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — R S Enterprises';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Read the Privacy Policy of R S Enterprises — premium cashew manufacturer & exporter.');
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel','canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', '/privacy-policy');
  }, []);

  return (
    <main className="container mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground">Your Privacy is Our Priority</p>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-6">
          At R S Enterprises, your privacy is of utmost importance. As a trusted manufacturer and global exporter of premium cashew nuts, 
          we are committed to safeguarding the personal and business information you share with us. Our privacy practices are rooted in 
          transparency, data security, and compliance—aligned with the Indian Information Technology Act and internationally recognized 
          data protection standards, including the GDPR.
        </p>

        <div className="bg-muted/50 p-6 rounded-lg my-8">
          <p className="font-semibold text-lg mb-2">Last Updated: August 2025</p>
        </div>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="mb-4">
            When you visit our website, request a quote, place a purchase order, or connect with our export support team, 
            we may collect the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Full Name</li>
            <li>Company Name (for B2B or distributor accounts)</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Shipping & Billing Address</li>
            <li>Business ID / GST Number (if applicable)</li>
            <li>Payment Details (via secure third-party gateways)</li>
            <li>Product preferences and purchase history</li>
            <li>Trade documentation details (for exports)</li>
            <li>Device, browser, and session data</li>
            <li>Cookies and tracking information (for analytics and performance)</li>
          </ul>
          <p>
            We collect only the information necessary to fulfill your cashew sourcing needs and support a secure and professional buyer experience.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Why We Collect Your Information</h2>
          <p className="mb-4">
            Your data helps us deliver a smooth, secure, and efficient business interaction. We use it to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process domestic and international orders</li>
            <li>Prepare invoices and export/commercial documentation</li>
            <li>Manage shipping, customs, and logistics coordination</li>
            <li>Provide product catalogs, batch availability updates, and trade alerts</li>
            <li>Maintain distributor and wholesale account relationships</li>
            <li>Send optional promotional communications (with opt-in consent)</li>
            <li>Analyze visitor behavior and product demand trends (aggregated and anonymized)</li>
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">How Your Information is Protected</h2>
          <p className="mb-4">
            We uphold strict security standards to protect your data from unauthorized access, misuse, or disclosure.
          </p>
          <p className="font-semibold mb-2">Our safeguards include:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>SSL Encryption for all website and form interactions</li>
            <li>PCI-compliant Payment Processing through secure third-party gateways (we do not store card or banking data)</li>
            <li>Firewall-Protected Servers with regular vulnerability checks</li>
            <li>Access Controls that limit data access to authorized personnel only</li>
          </ul>
          <p>We continuously monitor our systems to ensure your data remains protected.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Your Rights & Choices</h2>
          <p className="mb-4">
            You retain full control over your information. At any time, you may:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Request access to the data we hold about you</li>
            <li>Request corrections or updates to your profile or business details</li>
            <li>Request deletion of personal data (subject to regulatory retention obligations)</li>
            <li>Unsubscribe from marketing communications</li>
            <li>Raise concerns about privacy, compliance, or data security</li>
          </ul>
          <p>
            To exercise any of the above rights, please write to us at <a href="mailto:rsenterprises5902@gmail.com" className="text-primary hover:underline">rsenterprises5902@gmail.com</a>. 
            We strive to respond within 30 business days.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or our data handling practices, 
            reach out to our Data Compliance Officer:
          </p>
          <div className="bg-muted/50 p-6 rounded-lg my-6">
            <p className="font-semibold">R S Enterprises</p>
            <p>Attn: Data Protection Officer</p>
            <p>No: 46, Iyanar Koil Street, Sivalingapuram</p>
            <p>Ariyankuppam, Pondicherry - 605007</p>
            <p>Email: <a href="mailto:rsenterprises5902@gmail.com" className="text-primary hover:underline">rsenterprises5902@gmail.com</a></p>
            <p>Phone: <a href="tel:+917200230057" className="text-primary hover:underline">+91 72002 30057</a></p>
          </div>
          <p>We are committed to responding promptly and fairly to all privacy-related queries.</p>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
          <p className="mb-4">
            This Privacy Policy may be updated periodically to reflect changes in law, industry best practices, 
            or our own internal processes. All updates will be posted on this page with a revised "Last Updated" date.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg my-6">
            <p className="font-semibold">Last Updated: August 2025</p>
          </div>
          <p className="mt-6">
            Thank you for trusting R S Enterprises. We value your partnership and remain dedicated to protecting 
            your privacy while delivering world-class cashew products.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            © 2017-2025 R S Enterprises. Founded by Sudhagar P. All rights reserved.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
