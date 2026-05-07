import { motion } from 'motion/react';
import { Calendar, Clock, User, Scissors, MessageSquare, ChevronRight, Check } from 'lucide-react';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { cn } from '../lib/utils';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    'Precision Cut', 'Luxury Wash & Style', 'Artisanal Color (Partial/Full)', 'Balayage Artistry',
    'Keratin Treatment', 'Bridal Design', 'Men\'s Executive Grooming', 'Kids Cut (Under 12)'
  ];

  const stylists = ['Alexander (Senior Master)', 'Isabella (Master Stylist)', 'Vittorio (Styling Director)', 'Sofia (Creative Colorist)'];
  const times = ['09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await resp.json();
      if (data.success) {
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="pt-40 pb-32 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-16 shadow-xl border border-accent/20"
        >
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <Check className="text-accent" size={40} />
          </div>
          <h2 className="text-4xl font-display font-bold mb-6">Request Received.</h2>
          <p className="text-gray-500 font-light leading-relaxed mb-10">
            Thank you, {formData.name}. Our salon concierge will review your request and contact you shortly to confirm your appointment details.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="text-xs uppercase tracking-[0.3em] font-bold border-b border-accent pb-2 hover:text-accent transition-colors"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Legend Side */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Concierge Booking</span>
              <h1 className="text-6xl font-bold tracking-tighter mb-8 leading-tight">Elevate Your Presence.</h1>
              <p className="text-gray-500 font-light leading-relaxed">
                By requesting an appointment, you take the first step towards a bespoke beauty experience tailored specifically to your features and lifestyle.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all", step >= 1 ? "bg-dark text-white shadow-lg" : "bg-gray-200 text-gray-500")}>01</div>
                <span className={cn("uppercase tracking-widest text-[10px] font-bold", step >= 1 ? "text-dark" : "text-gray-400")}>Selection</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all", step >= 2 ? "bg-dark text-white shadow-lg" : "bg-gray-200 text-gray-500")}>02</div>
                <span className={cn("uppercase tracking-widest text-[10px] font-bold", step >= 2 ? "text-dark" : "text-gray-400")}>Schedule</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all", step >= 3 ? "bg-dark text-white shadow-lg" : "bg-gray-200 text-gray-500")}>03</div>
                <span className={cn("uppercase tracking-widest text-[10px] font-bold", step >= 3 ? "text-dark" : "text-gray-400")}>Finalize</span>
              </div>
            </div>

            <div className="bg-white p-8 border border-dark/5 shadow-sm space-y-4">
               <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent">Note on Bookings</h4>
               <p className="text-xs text-gray-400 leading-relaxed italic">
                 "All appointment requests are subject to review. We value your time and will confirm your placement within 2 business hours."
               </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 bg-white p-8 md:p-16 shadow-2xl relative border border-dark/5">
            <form onSubmit={handleSubmit} className="space-y-12">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        <Scissors size={12} className="text-accent" />
                        <span>Select Service</span>
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setFormData({...formData, service: s})}
                            className={cn(
                              "text-left py-4 px-6 text-xs uppercase tracking-widest transition-all",
                              formData.service === s ? "bg-dark text-white" : "bg-cream/50 text-gray-600 hover:bg-cream"
                            )}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        <User size={12} className="text-accent" />
                        <span>Preferred Stylist</span>
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {stylists.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setFormData({...formData, stylist: s})}
                            className={cn(
                              "text-left py-4 px-6 text-xs uppercase tracking-widest transition-all",
                              formData.stylist === s ? "bg-dark text-white" : "bg-cream/50 text-gray-600 hover:bg-cream"
                            )}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={!formData.service || !formData.stylist}
                    onClick={() => setStep(2)}
                    className="w-full py-6 bg-accent text-dark text-xs uppercase tracking-[0.3em] font-bold hover:bg-dark hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed group flex items-center justify-center space-x-4"
                  >
                    <span>Choose Schedule</span>
                    <ChevronRight size={16} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4 text-center md:text-left">
                       <label className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        <Calendar size={12} className="text-accent" />
                        <span>Select Date</span>
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-cream p-4 text-sm focus:outline-none focus:ring-1 ring-accent/20"
                      />
                    </div>
                    <div className="space-y-4">
                       <label className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        <Clock size={12} className="text-accent" />
                        <span>Preferred Time</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {times.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({...formData, time: t})}
                            className={cn(
                              "text-center py-4 text-[10px] uppercase tracking-widest transition-all font-bold",
                              formData.time === t ? "bg-dark text-white shadow-xl" : "bg-cream/50 text-gray-400 hover:bg-cream"
                            )}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-6 border border-dark/10 text-xs uppercase tracking-[0.2em] font-bold hover:bg-cream transition-all"
                    >
                      Back
                    </button>
                    <button
                      disabled={!formData.date || !formData.time}
                      onClick={() => setStep(3)}
                      className="flex-[2] py-6 bg-accent text-dark text-xs uppercase tracking-[0.2em] font-bold hover:bg-dark hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Complete Request
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-10"
                >
                  <div className="space-y-6">
                     <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent">Personal Information</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <input
                          required
                          type="text"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300 uppercase tracking-widest"
                        />
                        <input
                          required
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300 uppercase tracking-widest"
                        />
                     </div>
                     <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300 uppercase tracking-widest"
                      />
                      <textarea
                        rows={3}
                        placeholder="Additional Notes / Stylist Requests"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="w-full bg-cream/50 border-b border-dark/10 py-3 px-1 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300 resize-none uppercase tracking-widest"
                      />
                  </div>

                  <div className="bg-cream/30 p-8 border border-dark/5 space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark">Summary</h4>
                    <div className="grid grid-cols-2 gap-y-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                      <span>Service:</span> <span className="text-dark">{formData.service}</span>
                      <span>Stylist:</span> <span className="text-dark">{formData.stylist}</span>
                      <span>Date:</span> <span className="text-dark">{formData.date}</span>
                      <span>Time:</span> <span className="text-dark">{formData.time}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 py-6 border border-dark/10 text-xs uppercase tracking-[0.2em] font-bold hover:bg-cream transition-all"
                    >
                      Back
                    </button>
                    <button
                      disabled={loading || !formData.name || !formData.email || !formData.phone}
                      type="submit"
                      className="flex-[2] py-6 bg-dark text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center space-x-4"
                    >
                      {loading ? 'Processing protocol...' : 'Confirm Request'}
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
