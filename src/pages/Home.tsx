import { motion } from 'motion/react';
import { ChevronRight, Star, Quote, Clock, CheckCircle2, ArrowRight, Play, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover"
          alt="Luxury Salon Interior"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="h-[1px] w-12 bg-accent/50" />
            <span className="text-accent text-sm tracking-[0.4em] uppercase font-medium">Elevate Your Essence</span>
            <div className="h-[1px] w-12 bg-accent/50" />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-display leading-[0.9] font-bold tracking-tighter">
            Modern Artistry <br />
            <span className="italic font-normal text-accent/90">Timeless</span> Luxury.
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Experience the pinnacle of hair and beauty excellence in Longview. Our master stylists blend contemporary techniques with a sophisticated Art-Deco atmosphere.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              to="/booking"
              className="group relative bg-accent text-dark px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-500 w-full sm:w-auto"
            >
              <span className="relative z-10">Reserve Appointment</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link
              to="/services"
              className="group flex items-center space-x-4 text-white text-sm uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors"
            >
              <span>Explore Services</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors">
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Elements */}
      <div className="absolute bottom-10 left-0 w-full px-12 hidden lg:flex justify-between items-end z-10">
        <div className="flex items-center space-x-8 text-white/40 text-[10px] uppercase tracking-[0.3em]">
          <span>Est. 2010</span>
          <div className="h-[1px] w-8 bg-white/20" />
          <span>Award Winning Salon</span>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center space-y-4 text-accent"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] vertical-text transform rotate-0">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const services = [
    {
      title: 'Precision Haircuts',
      desc: 'Architectural cuts tailored to your face shape and lifestyle.',
      price: 'From $65',
      img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Artisanal Coloring',
      desc: 'Master colorists specializing in balayage, vivids, and corrective color.',
      price: 'From $120',
      img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Luxury Treatments',
      desc: 'Restorative rituals using high-end organic botanical extracts.',
      price: 'From $45',
      img: 'https://images.unsplash.com/photo-1595476108010-b4d1f80d91f1?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Experience</span>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">Masterfully Crafted <br /> Salon Services.</h2>
          </div>
          <Link to="/services" className="group flex items-center space-x-3 text-dark text-sm uppercase tracking-widest font-bold">
            <span>View All Services</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-accent" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white">
                  <p className="text-dark font-display italic text-lg">{s.price}</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  return (
    <section className="py-32 bg-dark text-white overflow-hidden relative">
      {/* Decorative Text */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 text-[20rem] font-display font-bold opacity-5 pointer-events-none select-none uppercase tracking-tighter whitespace-nowrap">
        Salon Uptown
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="relative z-10 aspect-square overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200"
              alt="Salon Ambience"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-accent/30 z-0" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="absolute -top-10 -left-10 w-40 h-40 border border-accent/10 rounded-full z-0 flex items-center justify-center p-4"
          >
             <span className="text-[8px] uppercase tracking-[0.5em] text-center text-accent/40">Luxury Artistry Excellence Service</span>
          </motion.div>
        </div>

        <div className="space-y-10 group">
          <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold block">Our Philosophy</span>
          <h2 className="text-5xl md:text-7xl font-bold leading-[0.9]">Exceptional Beauty, <br /> Personalized.</h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Founded in 2010, Salon Uptown has become a sanctuary for those seeking more than just a haircut. We believe in the power of visual storytelling, using hair and beauty as a canvas to express your inner confidence.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <span className="text-3xl font-display text-accent">14+</span>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl font-display text-accent">5.0</span>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Client Rating</p>
            </div>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center space-x-6 py-6 border-b border-accent/30 hover:border-accent transition-colors"
          >
            <span className="uppercase tracking-[0.3em] text-xs font-bold">Meet the Master Stylists</span>
            <ChevronRight className="text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Regular Client',
      text: 'Salon Uptown is hands down the best in Texas. The attention to detail and the Art-Deco vibe make every visit feel like a royal retreat. My hair has never looked healthier.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Michael Chen',
      role: 'Executive Member',
      text: 'I\'ve tried many high-end barbers and salons, but the sophistication here is unmatched. Professional, timely, and truly master-level grooming.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Bridal Client',
      text: 'The bridal package was flawless. They handled my entire party with such grace and professionalism. We all looked dream-like for the big day.',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Kind Words</span>
          <h2 className="text-5xl md:text-6xl font-bold">Client Reflections.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 relative shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-accent bg-white flex items-center justify-center p-2">
                <Quote size={20} className="text-accent" />
              </div>
              <div className="flex justify-center mb-8">
                 <div className="flex space-x-1 text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
              </div>
              <p className="text-gray-600 font-light italic leading-relaxed text-center mb-10">"{r.text}"</p>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/20 grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center">
                  <h4 className="font-bold uppercase tracking-[0.1em] text-xs">{r.name}</h4>
                  <p className="text-[10px] text-gray-400 font-medium tracking-widest">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 bg-burgundy relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover opacity-20"
          alt="Atmosphere"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-burgundy/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Ready for Your <br /> Transformation?</h2>
        <p className="text-white/60 text-lg font-light mb-12 max-w-2xl mx-auto">
          Secure your place at Salon Uptown and experience the art of premium beauty. Our schedule fills quickly, book your preferred time today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/booking"
            className="bg-accent text-dark px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-300 w-full sm:w-auto"
          >
            Request Appointment
          </Link>
          <a
            href="tel:+1903-738-8325"
            className="flex items-center space-x-4 group"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
              <Phone size={24} className="text-accent" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Call Concierge</p>
              <p className="text-xl font-bold tracking-widest">+1 903-738-8325</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream"
    >
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      
      {/* Why Choose Us */}
      <section className="py-32 border-y border-dark/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <Star className="text-accent" />, title: 'Elite Stylists', desc: 'Masters of contemporary color and precision cuts.' },
            { icon: <Clock className="text-accent" />, title: 'Punctuality', desc: 'Your time is luxury; we respect every second.' },
            { icon: <CheckCircle2 className="text-accent" />, title: 'Top Products', desc: 'Exclusive access to the world\'s finest hair care lines.' },
             { icon: <Quote className="text-accent" />, title: 'Unique Spirit', desc: 'An atmosphere designed for total relaxation.' }
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center space-x-3 text-accent">
                {item.icon}
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold">{item.title}</h4>
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </motion.div>
  );
}
