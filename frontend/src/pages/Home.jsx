import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, CheckCircle, Wrench, ArrowRight, Droplets, PenTool, ClipboardCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Aman RO Services | Expert Water Purifier Repair & Service in Patna</title>
        <meta name="description" content="Aman RO Services provides top-notch RO water purifier repair, maintenance, and installation services in Patna. Book a home visit for Kent, Aquaguard, and more." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-accent/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* subtle pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-4">
              <ShieldCheck size={16} />
              <span>100% Guaranteed Pure Water</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              RO Care India – <span className="text-primary">Best RO Service</span> & Water Purifier
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 font-medium">
              Expert technicians, quick response within 4 hours, and 100% genuine spare parts. Your family's health is our top priority.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <Link to="/contact" className="px-8 py-3.5 bg-primary hover:bg-secondary text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                Book RO Service <ArrowRight size={20} />
              </Link>
              <a href="tel:+918092108671" className="px-8 py-3.5 bg-white text-primary border-2 border-primary hover:bg-blue-50 font-semibold rounded-full text-lg transition-all duration-300 shadow-sm flex items-center justify-center gap-2">
                Call: 8092108671
              </a>
            </div>
            {/* Social Proof Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 pt-6 text-sm font-semibold text-slate-700">
              <a href="https://maps.app.goo.gl/FzAHtJc7PaPPmqvR6?g_st=awb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                <span className="flex text-yellow-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </span>
                5.0 Rating (85+ Google Reviews)
              </a>
              <div className="flex items-center gap-2"><ShieldCheck className="text-primary h-5 w-5" /> Trusted Service</div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            {/* The image here would ideally be generated via the UI tools or placeholder */}
            <div className="relative mx-auto w-full max-w-md h-80 bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-2xl p-6 border border-white flex flex-col items-center justify-center transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548811579-017fac23fa65?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-[2px]"></div>
                
                <div className="relative z-10 bg-white/90 backdrop-blur p-6 rounded-xl shadow-xl text-center">
                    <Droplets className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold tracking-tight text-slate-800">Pure Water</h3>
                    <p className="text-primary font-medium">Healthy Life</p>
                </div>
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
                  <Clock size={20} className="text-orange-500" />
                  <span className="font-bold text-sm">4 Hr Service</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-12 bg-white relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            { label: 'Expert Technicians', value: '70+', icon: PenTool },
            { label: 'Years Experience', value: '10+', icon: ShieldCheck },
            { label: 'Happy Customers', value: '10K+', icon: CheckCircle },
            { label: 'Service Guarantee', value: '4 Hrs', icon: Clock },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4">
              <stat.icon className="mx-auto h-8 w-8 text-secondary mb-3" />
              <h4 className="text-3xl font-black text-slate-800">{stat.value}</h4>
              <p className="text-sm font-medium text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-100/50 text-secondary rounded-full text-sm font-bold uppercase tracking-wider">Our Services</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Excellence in Every Drop</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">
            We are committed to providing the highest quality water purifier services with a personal touch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'RO Installation',
                desc: 'Quick and professional installation of all types of RO water purifiers ensuring perfect setup.',
                icon: ClipboardCheck
              },
              {
                title: 'Repair & Maintenance',
                desc: 'Expert repair services for all brands. We fix leaks, pressure issues, and odd tastes.',
                icon: Wrench
              },
              {
                title: 'Filter Replacement',
                desc: 'Timely replacement of pre-filters, RO membranes, and post-carbon filters for pure water.',
                icon: Droplets
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="h-14 w-14 bg-accent/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                  <srv.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{srv.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{srv.desc}</p>
                <Link to="/services" className="inline-flex items-center text-primary font-medium hover:text-secondary">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
             <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 shadow-sm">
               View All Services
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Excellent Ratings & Reviews</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Hear from our happy and satisfied clients across the city.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Mangal Mishra', loc: 'Google Review', text: 'Very nice service. He was humble and polite and best part he knows how to fix the things.' },
              { name: 'Nitish Kumar', loc: 'Google Review', text: 'Very good service, perfect & affordable price of spare parts.' },
              { name: 'Brajesh Kumar Bharti', loc: 'Google Review', text: 'No one will give you such service at this time. It was great overall best service at an affordable price.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                </div>
                <p className="text-slate-700 italic mb-6">"{review.text}"</p>
                <div>
                  <p className="font-bold text-slate-800">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-300 blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need RO Service?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-medium">
            Get instant support from our expert technicians. We are available to solve your water purifier problems right away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+918092108671" className="px-8 py-4 bg-white text-primary font-bold rounded-full text-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105 shadow-lg text-center">
              Call: 8092108671
            </a>
            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-lg text-center">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
