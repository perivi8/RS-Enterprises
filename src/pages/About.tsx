import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, Leaf, CheckCircle, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-cashews.jpg';

const About = () => {
  useEffect(() => {
    document.title = 'About Us — R S Enterprises';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Learn about R S Enterprises — premium cashew manufacturer & exporter since 2017, founded by Sudhagar P.');
  }, []);

  return (
    <main className="container mx-auto py-10 px-4">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">About R S Enterprises</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Crafting Premium Cashews Since 2017
            </p>
            <p className="text-muted-foreground mb-4">
              Founded by <span className="font-semibold text-foreground">Sudhagar P</span> in 2017, R S Enterprises has grown from a small family venture 
              into a trusted name in the cashew industry. Based in Pondicherry, India, we specialize in processing, 
              packaging, and exporting premium-grade cashew nuts to customers across the globe.
            </p>
            <p className="text-muted-foreground">
              Our journey began with a simple vision: to bring the finest quality cashews from Indian farms to tables worldwide, 
              while maintaining the highest standards of quality, hygiene, and sustainability.
            </p>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Premium cashews from R S Enterprises" 
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mb-12 bg-muted/50 rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Meet Our Founder</h2>
          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary/20">
            <img 
              src="/Sudhagar.jpg" 
              alt="Sudhagar P - Founder & Managing Director of R S Enterprises" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Sudhagar P</h3>
          <p className="text-muted-foreground mb-4">Founder & Managing Director</p>
          <p className="text-muted-foreground">
            With a deep passion for quality and a vision to put Indian cashews on the global map, Sudhagar P established 
            R S Enterprises in 2017. His hands-on approach to business, commitment to ethical sourcing, and dedication to 
            customer satisfaction have been the driving forces behind the company's success. Under his leadership, 
            R S Enterprises has built strong relationships with farmers, processors, and international buyers alike.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">2017</div>
              <div className="text-sm text-muted-foreground">Year Established</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Quality Commitment</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">Our Core Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Every cashew undergoes rigorous quality checks. We never compromise on freshness, taste, or nutritional value.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Leaf className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-sm text-muted-foreground">
                We work closely with farmers who follow sustainable and ethical farming practices, ensuring minimal environmental impact.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Global Standards</h3>
              <p className="text-sm text-muted-foreground">
                Our facilities are certified with ISO, HACCP, Organic, and FSSAI standards, meeting international export requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">Why Choose R S Enterprises?</h2>
        <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            'Direct sourcing from trusted farmers in India',
            'State-of-the-art processing and packaging facilities',
            'Complete traceability from farm to pack',
            'Competitive pricing for bulk and export orders',
            'Flexible packaging options including private label',
            'Dedicated customer support and logistics assistance',
            'On-time delivery with reliable shipping partners',
            'Over 8 years of industry experience since 2017',
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-6 md:grid-cols-2 mb-12">
        <Card className="bg-primary text-white">
          <CardContent className="pt-6">
            <TrendingUp className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="opacity-90">
              To deliver the finest quality cashews to customers worldwide while supporting sustainable farming practices 
              and creating value for all stakeholders in our supply chain.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Globe className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-muted-foreground">
              To become a globally recognized leader in the cashew industry, known for uncompromising quality, 
              ethical business practices, and customer-centric service.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="font-serif text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Whether you're looking for premium cashews for retail, bulk orders for your business, or export-ready shipments, 
          R S Enterprises is here to serve you with excellence.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
            Contact Us
          </a>
          <a href="/products" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
            View Products
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
