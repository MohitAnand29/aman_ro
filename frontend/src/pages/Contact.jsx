import { useState } from 'react';
import axios from 'axios';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post('http://localhost:5000/api/inquiries', formData);
      setStatus({ type: 'success', message: 'Message sent successfully! We will contact you shortly.' });
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact submit error:', error);
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
         <title>Contact Aman RO Services | RO Repair & Installation in Patna</title>
         <meta name="description" content="Get in touch with Aman RO Services for expert water purifier repair, installation, and filter replacement in Patna. Call us at 8092108671 for 24/7 service." />
      </Helmet>
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-blue-400 to-primary pt-32 pb-40 text-center relative overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548811579-017fac23fa65?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">Contact Us</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Get in touch with our expert team. We're here to help!
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-20">
        
        {/* 4 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Phone size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Phone</h3>
            <a href="tel:+918092108671" className="text-primary font-medium hover:underline block truncate">
              8092108671
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Mail size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Email</h3>
            <a href="mailto:amanguptapatna13@gmail.com" className="text-primary font-medium hover:underline block truncate">
              amanguptapatna13@gmail.com
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <MapPin size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Our Location</h3>
            <span className="text-primary font-medium block truncate" title="behind Gokul Sweets, Chhoti Pahari, Patna, Bihar 800030">
              Chhoti Pahari, Patna
            </span>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Clock size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Working Hours</h3>
            <span className="text-slate-600 font-medium block truncate">
              24/7 Emergency Service
            </span>
          </div>
        </div>

        {/* Split Form & Map Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Form */}
          <div className="lg:w-[60%] bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Send us a message</h2>
            
            {status.message && (
              <div className={`p-4 rounded-xl mb-8 font-medium text-center ${
                status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 block text-left">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white text-slate-800"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 block text-left">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white text-slate-800"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700 block text-left">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white text-slate-800"
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 block text-left">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white text-slate-800"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 block text-left">Your Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-white text-slate-800 resize-y"
                  placeholder="Please share the details of your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-md text-white font-semibold text-lg transition-all duration-300 shadow-md flex justify-center items-center gap-2 mt-4 ${
                  isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-[#0ea5e9] hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={20} className="-ml-1" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Location / Map */}
          <div className="lg:w-[40%] bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full">
            {/* Header Block */}
            <div className="bg-primary p-6 text-white text-left">
              <h2 className="text-xl font-bold mb-1">Our Location</h2>
              <p className="text-blue-100 text-sm">behind Gokul Sweets, Chhoti Pahari, Patna</p>
            </div>
            
            {/* Map Frame */}
            <div className="flex-grow w-full h-[400px] lg:h-auto min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6322899479365!2d85.19057857597115!3d25.583868215949512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5fbf53971127%3A0x5bbcff375c17bd1f!2sAman%20RO%20Waterpurifier%20Service%20(Kent%2C%20Aquaguard)%20Patna!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
                title="Google Maps Location"
              ></iframe>
            </div>

            {/* Address Details */}
            <div className="p-6 bg-white text-left border-t border-slate-100">
               <h4 className="font-bold text-slate-800 text-sm mb-2">Address: <span className="font-normal text-slate-600">behind Gokul Sweets, Chhoti Pahari, Patna, Bihar 800030</span></h4>
               <a href="https://maps.app.goo.gl/FzAHtJc7PaPPmqvR6?g_st=awb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline font-medium text-sm">
                 <MapPin size={16} className="mr-1" /> View on Google Maps
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
