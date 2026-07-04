import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="bg-brand-light dark:bg-gray-900 min-h-screen">
      <Hero />
      
      {/* Dynamic Info Strip Section */}
      <section className="bg-brand-yellow text-brand-dark font-black py-4 uppercase tracking-widest overflow-hidden relative whitespace-nowrap">
        <div className="inline-block animate-marquee gap-8">
          🔥 Freshly Made Burgers • 📍 Mwani, Masaka • 📞 Order via 0704 147415 • 🔥 Freshly Made Burgers • 📍 Mwani, Masaka • 📞 Order via 0704 147415
        </div>
      </section>
    </main>
  );
}
