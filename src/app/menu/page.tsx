'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const categories = ['All', 'Combos', 'Fries', 'Thirst Quenchers', 'Sides', 'Plain'];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const url = activeTab === 'All' ? '/api/products' : `/api/products?category=${encodeURIComponent(activeTab)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) setProducts(data.data);
      setLoading(false);
    }
    fetchProducts();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-brand-light dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center text-brand-dark dark:text-white uppercase tracking-wider mb-8">
          Explore Our <span className="text-brand-red">Menu</span>
        </h2>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold tracking-wide transition text-sm ${
                activeTab === cat 
                  ? 'bg-brand-red text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid Architecture */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-80 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {products.map((product: any) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product._id}
                  className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-gray-100">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                    {product.isBestSeller && (
                      <span className="absolute top-4 left-4 bg-brand-yellow text-brand-dark text-xs font-black uppercase px-2.5 py-1 rounded-md">
                        Best Seller
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-2">{product.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-xl font-extrabold text-brand-dark dark:text-white">
                        {product.price.toLocaleString()} UGX
                      </span>
                      <button
                        onClick={() => addToCart({ id: product._id, name: product.name, price: product.price, image: product.image, quantity: 1 })}
                        className="bg-brand-yellow hover:bg-amber-500 text-brand-dark font-bold px-4 py-2 rounded-xl text-sm transition"
                      >
                        Add +
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
      }
          
