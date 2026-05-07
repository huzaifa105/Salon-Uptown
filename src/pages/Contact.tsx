import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', msg: data.message });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Failed to connect to server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-0 bg-cream"
    >
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Connect with Us</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">Get in Touch.</h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Whether you have a specific inquiry about our services or simply want to learn more about the Salon Uptown experience, our concierge team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-dark mb-2">Location</h4>
                  <p className="text-gray-500 text-sm font-light">913 Judson Rd, Longview, TX 75601</p>
                </div>
              </div>

              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-dark mb-2">Telephone</h4>
                  <p className="text-gray-500 text-sm font-light">+1 903-738-8325</p>
                </div>
              </div>

              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-dark mb-2">Email</h4>
                  <p className="text-gray-500 text-sm font-light">concierge@salonuptown.com</p>
                </div>
              </div>

              <div className="space-y-4 group">
                <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-dark mb-2">Concierge Hours</h4>
                  <p className="text-gray-500 text-sm font-light">Mon - Fri: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-500 text-sm font-light">Sat: 10:00 AM - 5:00 PM</p>
                  <p className="text-burgundy text-[10px] uppercase font-bold tracking-widest mt-1">Closed Sunday</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-dark/5 space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Follow the Journey</h4>
              <div className="flex space-x-6 text-dark/40">
                <a href="#" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Facebook size={24} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Twitter size={24} /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 shadow-sm border border-dark/5 relative">
             {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "absolute top-0 left-0 w-full p-4 text-center text-xs uppercase tracking-widest font-bold z-10",
                  status.type === 'success' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                )}
              >
                {status.msg}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Your Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 555-0000"
                    className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="">Select Inqury Type</option>
                    <option value="Appointment">Appointment Question</option>
                    <option value="Services">Service Details</option>
                    <option value="Employment">Employment Opportunities</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we help you create your next look?"
                  className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300 resize-none"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-dark text-white py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-accent hover:text-dark transition-all duration-500 flex items-center justify-center space-x-3 group"
              >
                <span>{loading ? 'Sending Protocol...' : 'Send Message'}</span>
                <Send size={16} className={cn("transition-transform group-hover:translate-x-1 group-hover:-translate-y-1", loading && "animate-pulse")} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full grayscale contrast-[1.2] brightness-[0.8] hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.034335016086!2d-94.7388325!3d32.5350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86363edf5b900001%3a0x86363edf5b900001!2s913%20Judson%20Rd%2C%20Longview%2C%20TX%2075601!5e0!3m2!1sen!2sus!4v1715106000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </motion.div>
  );
}
