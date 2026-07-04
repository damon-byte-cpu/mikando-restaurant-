import mongoose from 'mongoose';
import Product from '../src/models/Product';

const sampleProducts = [
  {
    name: 'Mikando Mega Double Combo',
    description: 'Two smashed patties, melted cheddar, signature sauce, crispy onions served with fresh cut golden fries and refreshing cola.',
    price: 35000,
    category: 'Combos',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
    isBestSeller: true
  },
  {
    name: 'Classic Crinkle Cut Fries',
    description: 'Perfectly sea-salted, crisp ridges, cooked to clean golden optimization.',
    price: 12000,
    category: 'Fries',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
    isBestSeller: false
  },
  {
    name: 'Passion Fruit Quencher Blend',
    description: 'House-brewed tropical iced extraction, crisp refreshment served over crushed ice.',
    price: 8000,
    category: 'Thirst Quenchers',
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
    isBestSeller: true
  },
  {
    name: 'Crispy Strips & Dip',
    description: 'Three hand-breaded white meat chicken tenders with our house signature dipping standard.',
    price: 18000,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80',
    isAvailable: true,
    isBestSeller: false
  }
];

async function seedDatabase() {
  if (!process.env.MONGODB_URI) {
    console.error("Set MONGODB_URI env variable!");
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI);
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log("Database successfully seeded! 🌱");
  process.exit(0);
}
