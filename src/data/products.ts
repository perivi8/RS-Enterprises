import premium from '@/assets/product-premium.jpg';
import organic from '@/assets/product-organic.jpg';
import roasted from '@/assets/product-roasted.jpg';
import rawImg from '@/assets/product-raw.jpg';
import honey from '@/assets/product-honey.jpg';
import spiced from '@/assets/product-spiced.jpg';
import pieces from '@/assets/product-pieces.jpg';
import butter from '@/assets/product-butter.jpg';

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  pricePerKgINR: number; // base price in INR
  moqKg: number;
  badges: string[];
  images: string[];
  specs: Record<string, string>;
  active: boolean;
  rating?: number;
  note?: string;
};

export const products: Product[] = [
  {
    id: 'premium-cashew',
    name: 'Premium Cashew W320',
    slug: 'premium-cashew',
    description: 'W320 grade premium whole cashews with rich, buttery flavor. Perfect for snacking and gifting.',
    pricePerKgINR: 720,
    moqKg: 10,
    badges: ['Premium', 'W320'],
    images: [premium, organic],
    specs: { grade: 'W320', moisture: '<5%', origin: 'India', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.8,
    note: 'W320 Grade',
  },
  {
    id: 'organic-cashew',
    name: 'Organic Cashew',
    slug: 'organic-cashew',
    description: 'Certified organic cashews, clean and naturally delicious. Grown without pesticides or chemicals.',
    pricePerKgINR: 850,
    moqKg: 10,
    badges: ['Organic', 'Certified'],
    images: [organic, rawImg],
    specs: { certification: 'Organic', grade: 'W320', moisture: '<5%', origin: 'India', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.7,
  },
  {
    id: 'roasted-cashew',
    name: 'Roasted & Salted Cashew',
    slug: 'roasted-cashew',
    description: 'Perfectly roasted and lightly salted cashews with a warm, golden crunch. Ready to eat.',
    pricePerKgINR: 780,
    moqKg: 10,
    badges: ['Roasted', 'Salted'],
    images: [roasted, premium],
    specs: { roast: 'Medium Roasted', salt: 'Lightly Salted', moisture: '<3%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.6,
  },
  {
    id: 'raw-cashew',
    name: 'Raw Cashew W320',
    slug: 'raw-cashew',
    description: 'Unroasted, pure whole cashews ready for your recipes. Ideal for cooking and baking.',
    pricePerKgINR: 680,
    moqKg: 10,
    badges: ['Raw', 'Natural'],
    images: [rawImg, pieces],
    specs: { grade: 'W320', processing: 'Unroasted', moisture: '<5%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.5,
  },
  {
    id: 'honey-roasted-cashew',
    name: 'Honey Roasted Cashew',
    slug: 'honey-roasted-cashew',
    description: 'Glossy honey glaze with a delightful crunch. Sweet and savory perfection.',
    pricePerKgINR: 880,
    moqKg: 10,
    badges: ['Honey', 'Flavored'],
    images: [honey, roasted],
    specs: { flavor: 'Natural Honey', coating: 'Light Glaze', moisture: '<3%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.7,
  },
  {
    id: 'spiced-cashew',
    name: 'Masala Spiced Cashew',
    slug: 'spiced-cashew',
    description: 'Vibrant Indian masala spiced cashews with a savory kick. Perfect party snack.',
    pricePerKgINR: 820,
    moqKg: 10,
    badges: ['Spiced', 'Masala'],
    images: [spiced, roasted],
    specs: { spice: 'Indian Masala', heat: 'Medium', moisture: '<3%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.6,
  },
  {
    id: 'cashew-pieces',
    name: 'Cashew Pieces (Broken)',
    slug: 'cashew-pieces',
    description: 'Economical broken cashew pieces ideal for confectionery, sweets, and baking.',
    pricePerKgINR: 480,
    moqKg: 10,
    badges: ['Value', 'Baking'],
    images: [pieces, rawImg],
    specs: { grade: 'LP/SP', type: '4-8 Pieces', moisture: '<5%', packaging: '10kg vacuum pack' },
    active: true,
    rating: 4.4,
  },
  {
    id: 'cashew-butter',
    name: 'Cashew Butter',
    slug: 'cashew-butter',
    description: 'Creamy, stone-ground cashew butter with silky texture. 100% pure cashews, no additives.',
    pricePerKgINR: 920,
    moqKg: 10,
    badges: ['Butter', 'Natural'],
    images: [butter, premium],
    specs: { texture: 'Creamy Smooth', ingredients: '100% Cashew', additives: 'None', packaging: '10kg food-grade pail' },
    active: true,
    rating: 4.6,
  },
];
