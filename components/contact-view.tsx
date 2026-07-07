import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ContactView() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="min-h-screen bg-zinc-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
            Reach out to Dubbel Medical Corporation for product inquiries, training programs, and technical assistance.
          </p>
        </div>

        {/* Main Split Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-zinc-200/50 overflow-hidden border border-zinc-100 flex flex-col md:flex-row">
          
          {/* Left Column: Contact Info (Dark Theme) */}
          <div className="md:w-5/12 bg-[#114227] p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-emerald-500 opacity-10 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Company Info</h3>
                <div className="space-y-6">
                  {/* Address */}
                  <a href="#" className="flex items-start space-x-4 group">
                    <div className="bg-white/10 text-emerald-300 p-3 rounded-xl shrink-0 group-hover:bg-white/20 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-emerald-100 mb-1">Headquarters</h4>
                      <p className="text-emerald-50/80 text-sm leading-relaxed">
                        Unit 202 Second Floor Ablaza Bldg.<br />
                        117 E. Rodriguez, Sr. Avenue<br />
                        Quezon City, 1102, Philippines
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+63287400713" className="flex items-center space-x-4 group">
                    <div className="bg-white/10 text-emerald-300 p-3 rounded-xl shrink-0 group-hover:bg-white/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-emerald-100 mb-1">Telefax</h4>
                      <p className="text-emerald-50/80 text-sm">(+632) 8740 0713</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:dubbelmedicalcorp@yahoo.com.ph" className="flex items-center space-x-4 group">
                    <div className="bg-white/10 text-emerald-300 p-3 rounded-xl shrink-0 group-hover:bg-white/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-emerald-100 mb-1">Email Support</h4>
                      <p className="text-emerald-50/80 text-sm">dubbelmedicalcorp@yahoo.com.ph</p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/10 text-emerald-300 p-3 rounded-xl shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-emerald-100 mb-1">Business Hours</h4>
                      <p className="text-emerald-50/80 text-sm">Mon — Fri, 8:00 AM — 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Callout Card */}
              <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  Training & Support
                </h3>
                <p className="text-emerald-50/80 text-sm leading-relaxed mb-3">
                  We regularly conduct training programs and provide technical assistance to all our clients.
                </p>
                <button className="text-emerald-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
                  Schedule a session <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Form Component */}
          <div className="md:w-7/12 p-10 md:p-12 bg-white">
            <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-2">Send us a Message</h3>
            <p className="text-zinc-500 text-sm mb-8">Our team typically responds within 24 hours.</p>
            
            {submitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Message Sent!</h4>
                <p className="text-zinc-500 text-sm max-w-sm">
                  Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-emerald-700 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-1.5">First Name</label>
                    <input id="firstName" required type="text" placeholder="John" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-sm transition-all focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 placeholder:text-zinc-400" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-1.5">Last Name</label>
                    <input id="lastName" required type="text" placeholder="Doe" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-sm transition-all focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 placeholder:text-zinc-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1.5">Email Address</label>
                  <input id="email" required type="email" placeholder="john@example.com" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-sm transition-all focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 placeholder:text-zinc-400" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1.5">Phone Number</label>
                  <input id="phone" type="tel" placeholder="+63 (912) 345-6789" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-sm transition-all focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 placeholder:text-zinc-400" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-1.5">Subject</label>
                  <select id="subject" required className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-sm transition-all focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600">
                    <option value="">Select a subject</option>
                    <option value="inquiry">Product Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="training">Training Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1.5">Message</label>
                  <textarea id="message" required rows={4} placeholder="How can we help you today?" className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl p-3 text-sm transition-all focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 placeholder:text-zinc-400 resize-y" />
                </div>

                <button type="submit" className="w-full bg-[#114227] hover:bg-emerald-900 text-white font-medium text-sm py-3.5 px-6 rounded-xl transition-colors shadow-xs flex justify-center items-center gap-2 mt-2">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}