import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold text-primary">R S Enterprises</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Premium cashews from India since 2017. Export-ready with certifications. 
            Founded by Sudhagar P with a commitment to quality and sustainable farming.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">Products</Link></li>
            <li><Link to="/export" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">Export Services</Link></li>
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">About Us</Link></li>
            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                No: 46, Iyanar Koil Street, Sivalingapuram,<br />
                Ariyankuppam, Pondicherry - 605007
              </span>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 text-primary mr-2" />
              <a href="mailto:rsenterprises5902@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                rsenterprises5902@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-primary mr-2" />
              <a href="tel:+917200230057" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +91 72002 30057
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe to get updates on new products, offers, and industry insights.
          </p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
              alert(`Thank you for subscribing with ${email}!`);
            }} 
            className="space-y-3"
          >
            <div className="flex">
              <input
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 rounded-l-md border border-r-0 border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
              />
              <button 
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-muted-foreground mb-2 md:mb-0">
            © 2017-{new Date().getFullYear()} R S Enterprises. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/shipping-policy" className="hover:text-primary transition-colors">Shipping Policy</Link>
            <Link to="/cancellation-refund" className="hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
