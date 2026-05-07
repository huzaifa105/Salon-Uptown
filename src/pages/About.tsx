import { motion } from 'motion/react';
import { Star, Shield, Award, Users, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const team = [
    { name: 'Alexander Rose', role: 'Artistic Director', bio: '20+ years of high-fashion styling in NYC and London.', img: 'https://i.pravatar.cc/300?u=alex' },
    { name: 'Isabella Thorne', role: 'Master Colorist', bio: 'Specialist in French Balayage and natural dimensional tones.', img: 'https://i.pravatar.cc/300?u=isabella' },
    { name: 'Vittorio Conti', role: 'Creative Director', bio: 'Award-winning sculptor of hair with a focus on editorial looks.', img: 'https://i.pravatar.cc/300?u=vittorio' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream"
    >
      {/* Editorial Header */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
           <div>
              <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Legacy of Excellence</span>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.8] mb-12">Artistry <br /> in Motion.</h1>
              <p className="text-gray-500 text-xl font-light leading-relaxed max-w-xl">
                Salon Uptown isn’t just a destination; it’s a standard. Founded on the belief that beauty is an evolving art form, we dedicate ourselves to the pursuit of perfection in every strand.
              </p>
           </div>
           <div className="relative aspect-[4/5] bg-dark overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                alt="Salon Work"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 right-10 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center p-4 backdrop-blur-sm">
                <span className="text-[10px] uppercase text-center tracking-widest text-white/60">EST. 2010</span>
              </div>
           </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl font-bold leading-tight uppercase tracking-tighter italic text-dark/20">Our Story</h2>
          <p className="text-2xl md:text-3xl font-display leading-[1.4] text-dark">
            "In the heart of Longview, TX, we envisioned a sanctuary where the precision of architectural design meets the warmth of Southern hospitality. Salon Uptown was born from a desire to provide world-class artistry without the pretension."
          </p>
          <div className="flex items-center justify-center space-x-6 pt-10">
            <div className="h-[1px] w-20 bg-dark/10" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-accent">The Visionary Core</span>
            <div className="h-[1px] w-20 bg-dark/10" />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-dark/5">
        {[
          { label: 'Years Active', val: '14' },
          { label: 'Master Stylists', val: '08' },
          { label: 'Happy Clients', val: '5k+' },
          { label: 'Beauty Awards', val: '12' }
        ].map((m, i) => (
          <div key={i} className="py-20 border-r border-dark/5 last:border-r-0 flex flex-col items-center justify-center bg-white group hover:bg-dark transition-colors duration-500">
             <span className="text-5xl font-display text-accent mb-2 group-hover:scale-110 transition-transform">{m.val}</span>
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 group-hover:text-white/40 transition-colors">{m.label}</span>
          </div>
        ))}
      </section>

      {/* The Team */}
      <section className="py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Meet the Artists</span>
            <h2 className="text-6xl font-bold tracking-tighter">The Creative Council.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={t.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={t.name} referrerPolicy="no-referrer" />
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-dark/90 backdrop-blur-md">
                     <p className="text-xs text-white/60 font-light leading-relaxed">{t.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-1">{t.name}</h3>
                <p className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-40 bg-dark relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">Elevating <br /> The Human Spirit.</h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              We believe that when you look your best, you move differently throughout the world. Our mission is to instill that confidence through obsessive attention to detail and unwavering artistic integrity.
            </p>
            <Link to="/booking" className="inline-block py-6 px-12 border border-accent text-accent hover:bg-accent hover:text-dark transition-all duration-500 uppercase tracking-[0.3em] text-xs font-bold">
              Become the Muse
            </Link>
         </div>
         {/* Background accent */}
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy/20 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      </section>
    </motion.div>
  );
}
