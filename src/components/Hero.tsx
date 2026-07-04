'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-brand-dark text-white overflow-hidden py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-brand-red text-brand-yellow font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
            Mwani, Masaka Exclusive Diner
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 leading-tight">
            Crispy. Fresh. <br/>
            <span className="text-brand-yellow">Mikando Flavor.</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-md">
            Experience the retro charm of classic roadside American burgers, combined with our signatures and unbeatable local taste.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/menu" className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition shadow-xl transform hover:-translate-y-0.5">
              Order Online
            </Link>
            <a href="tel:0704147415" className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md font-semibold px-6 py-4 rounded-xl transition">
              Call Direct: 0704 147415
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex justify-center"
        >
          {/* Decorative Background Glow Elements */}
          <div className="absolute w-72 h-72 bg-brand-red/30 rounded-full blur-3xl top-10 pointer-events-none"></div>
          <div className="absolute w-60 h-60 bg-brand-yellow/20 rounded-full blur-3xl bottom-10 pointer-events-none"></div>
          
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" 
            alt="Mikando Signature Burger Combo" 
            className="rounded-3xl shadow-2xl border-4 border-brand-yellow object-cover max-w-[85%] relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
