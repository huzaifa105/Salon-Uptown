import { motion } from 'motion/react';
import { Scissors, Check, Star, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceCategories = [
    {
      name: 'Hair Artistry',
      services: [
        { name: 'Precision Cut & Sculpt', duration: '60 min', price: '$85+', desc: 'Technical architectural cutting followed by master finishing.' },
        { name: 'Creative Director Cut', duration: '90 min', price: '$120+', desc: 'Exclusively with our elite educators for total transformation.' },
        { name: 'Wash & Signature Blowout', duration: '45 min', price: '$55+', desc: 'Voluminous red-carpet finish with luxury treatments.' },
        { name: 'Updo & Event Styling', duration: '75 min', price: '$95+', desc: 'Elegant designs for high-society events and celebrations.' }
      ]
    },
    {
      name: 'Color Laboratory',
      services: [
        { name: 'Balayage Artistry', duration: '180 min', price: '$250+', desc: 'Hand-painted sun-kissed perfection for seamless dimension.' },
        { name: 'Full Dimensional Color', duration: '120 min', price: '$150+', desc: 'Luxury multi-tonal application using organic pigments.' },
        { name: 'Color Correction', duration: 'Varies', price: 'Priced on consult', desc: 'Expert restoration of over-processed or undesired tones.' },
        { name: 'Gloss & Tone Refresh', duration: '60 min', price: '$75+', desc: 'Instant shine and tone revival between major visits.' }
      ]
    },
    {
      name: 'Restorative Rituals',
      services: [
        { name: 'Royal Silk Treatment', duration: '45 min', price: '$65+', desc: 'Deep hydration using botanical oils and silk proteins.' },
        { name: 'Scalp Detoxification', duration: '30 min', price: '$50+', desc: 'Exfoliation and massage ritual for optimal hair growth.' },
        { name: 'Keratin Smoothing', duration: '120 min', price: '$300+', desc: 'Professional frizz reduction and mirror-like shine.' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-0 bg-cream"
    >
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
           <div className="flex-1">
             <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Menu</span>
             <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.8]">Master <br /> Services.</h1>
           </div>
           <div className="flex-1 space-y-6 pt-10 px-4 border-l border-dark/10">
             <p className="text-gray-500 text-lg font-light leading-relaxed">
               Our menu is a curated collection of techniques designed to reveal your most authentic beauty. Every service begins with a master consultation to ensure the results align with your vision.
             </p>
             <div className="flex items-center space-x-6">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Trusted by Local Professionals</p>
             </div>
           </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-32 border-t border-dark/5">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               <aside className="lg:col-span-4">
                 <div className="sticky top-40 space-y-8">
                   <h2 className="text-5xl font-bold tracking-tight">{cat.name}</h2>
                   <p className="text-gray-400 font-light text-sm leading-relaxed">
                     Technical excellence meets creative passion. Each service is executed with precision using the world's most exclusive product lines.
                   </p>
                   <div className="h-[1px] w-12 bg-accent" />
                 </div>
               </aside>
               
               <div className="lg:col-span-8 space-y-8">
                 {cat.services.map((s, sIdx) => (
                   <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group"
                   >
                     <div className="flex justify-between items-end border-b border-dark/5 pb-8 group-hover:border-accent transition-colors">
                       <div className="space-y-2 max-w-lg">
                         <div className="flex items-center space-x-3">
                           <h4 className="text-xl font-bold uppercase tracking-wide group-hover:text-accent transition-colors">{s.name}</h4>
                           <span className="text-[10px] border border-dark/10 px-2 py-0.5 text-gray-400 tracking-tighter rounded-full">{s.duration}</span>
                         </div>
                         <p className="text-gray-500 font-light text-sm italic">{s.desc}</p>
                       </div>
                       <div className="text-right">
                         <span className="text-2xl font-display font-medium text-dark">{s.price}</span>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-cream text-center border-t border-dark/5">
        <h2 className="text-4xl font-display italic mb-10 text-dark/80">Every visit is a unique creation.</h2>
        <Link
          to="/booking"
          className="inline-block bg-dark text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-accent hover:text-dark transition-all duration-500"
        >
          Book Your Experience
        </Link>
      </section>
    </motion.div>
  );
}
