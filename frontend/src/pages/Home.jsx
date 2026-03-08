import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, CheckCircle, Wrench, ArrowRight, Droplets, PenTool, ClipboardCheck, Star, Sparkles, Award, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-20 bg-slate-50 selection:bg-primary/20">
      <Helmet>
        <title>Aman RO Services | Expert Water Purifier Repair & Service in Patna</title>
        <meta name="description" content="Aman RO Services provides top-notch RO water purifier repair, maintenance, and installation services in Patna. Book a home visit for Kent, Aquaguard, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50/50 to-primary/5 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left pt-12 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-primary text-sm font-bold mb-2 hover:shadow-md transition-shadow cursor-default">
              <Sparkles size={16} className="text-yellow-500" />
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Premium Water Solutions in Patna</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Pure Water For <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-primary">Healthy Living</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300/40 -z-10 -rotate-1"></span>
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Expert technicians, quick response within 4 hours, and 100% genuine spare parts. We service all brands including Kent, Aquaguard & PureIt.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-4">
              <Link to="/contact" className="px-8 py-4 bg-primary hover:bg-secondary text-white font-bold rounded-2xl text-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Book RO Service <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+918092108671" className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 hover:border-primary hover:text-primary font-bold rounded-2xl text-lg transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group">
                <span className="relative flex h-3 w-3 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                8092108671
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 border-t border-slate-200/60 mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" />
                ))}
              </div>
              <div className="text-sm font-semibold text-slate-700">
                <div className="flex text-yellow-500 mb-0.5">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span>Trusted by 5,000+ families</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-16 lg:mt-0 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-100 to-white shadow-2xl overflow-hidden border-8 border-white p-2 group">
                <img 
                  src="https://images.unsplash.com/photo-1548811579-017fac23fa65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Crystal clear water" 
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-2 -right-2 bg-white p-4 rounded-2xl shadow-xl w-48 border border-slate-100 animate-float z-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Certified</h4>
                    <p className="text-xs text-slate-500">Technicians</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-4 bg-white p-4 rounded-2xl shadow-xl w-56 border border-slate-100 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-primary rotate-12">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">TDS Balanced</p>
                    <p className="font-black text-slate-800 text-xl">100% Pure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Banner */}
      <div className="border-y border-slate-200 bg-white shadow-sm relative z-20 w-full py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Expert Service For All Major Brands</p>
          <div className="flex justify-center flex-wrap gap-x-12 gap-y-8 md:gap-x-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 font-black text-2xl md:text-3xl lg:text-4xl text-slate-800 tracking-tighter">
            <span className="hover:text-blue-600 transition-colors">KENT</span>
            <span className="hover:text-cyan-600 transition-colors">AQUAGUARD</span>
            <span className="hover:text-blue-500 transition-colors">PUREIT</span>
            <span className="hover:text-indigo-600 transition-colors">LIVPURE</span>
            <span className="hover:text-sky-600 transition-colors">BLUE STAR</span>
          </div>
        </div>
      </div>

      {/* Stats Section with sleek overlapping layout */}
      <section className="relative z-30 mt-12 mb-12 mx-auto max-w-6xl px-4 hidden md:block">
        <div className="bg-slate-900 rounded-3xl shadow-2xl p-10 grid grid-cols-4 gap-8 divide-x divide-slate-800">
          {[
            { label: 'Expert Technicians', value: '70+', icon: PenTool },
            { label: 'Years Experience', value: '10+', icon: Award },
            { label: 'Happy Customers', value: '10K+', icon: ShieldCheck },
            { label: 'Service Time', value: '4 Hrs', icon: Clock },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <stat.icon className="mx-auto h-8 w-8 text-primary mb-4 group-hover:-translate-y-1 transition-transform" />
              <h4 className="text-4xl font-black text-white mb-1">{stat.value}</h4>
              <p className="font-semibold text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Stats (visible only on mobile) */}
      <section className="md:hidden py-12 bg-white border-b border-slate-100">
        <div className="grid grid-cols-2 gap-6 px-4">
          {[
            { label: 'Technicians', value: '70+' },
            { label: 'Experience', value: '10+ Yrs' },
            { label: 'Customers', value: '10K+' },
            { label: 'Speed', value: '4 Hrs' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-slate-50 rounded-2xl">
              <h4 className="text-3xl font-black text-primary mb-1">{stat.value}</h4>
              <p className="text-sm font-bold text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Every Drop</span></h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              From routine maintenance to complex repairs, our certified experts ensure your RO system delivers the purest water possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'RO Installation',
                desc: 'Flawless setup of all RO purifier brands, ensuring zero leakage and optimal water flow from day one.',
                icon: ClipboardCheck,
                bg: 'bg-blue-50',
                color: 'text-blue-600'
              },
              {
                title: 'Repair & Maintenance',
                desc: 'Expert diagnosis and quick repair. We fix strange noises, bad taste, and pressure issues perfectly.',
                icon: Wrench,
                bg: 'bg-indigo-50',
                color: 'text-indigo-600'
              },
              {
                title: 'Filter Replacement',
                desc: 'Prompt replacement of pre-filters, membranes, and carbon filters with 100% original manufacturer parts.',
                icon: Droplets,
                bg: 'bg-cyan-50',
                color: 'text-cyan-600'
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                {/* Decorative background shape */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${srv.bg} rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150`}></div>
                
                <div className={`relative h-16 w-16 ${srv.bg} ${srv.color} rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-inner`}>
                  <srv.icon size={32} />
                </div>
                
                <h3 className="relative text-2xl font-bold text-slate-800 mb-4">{srv.title}</h3>
                <p className="relative text-slate-600 mb-8 leading-relaxed font-medium">{srv.desc}</p>
                
                <Link to="/services" className={`relative inline-flex items-center font-bold ${srv.color} group-hover:text-slate-900 transition-colors`}>
                  Learn more 
                  <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center ml-3 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/services" className="inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
               View All Services
             </Link>
          </div>
        </div>
      </section>

      {/* Modern Split Feature Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1581092921461-7031e4bf0e56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Technician" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white inline-block">
                    <h4 className="text-2xl font-bold mb-1">100% Genuine Parts</h4>
                    <p className="text-slate-200 font-medium">Guaranteeing longer lifespan</p>
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[radial-gradient(#0ea5e9_2px,transparent_2px)] [background-size:16px_16px] -z-10"></div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">We Ensure <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Every Drop</span> is Safe</h2>
              
              <ul className="space-y-6 pt-4">
                {[
                  { title: 'Certified Technicians', desc: 'Background-verified experts with years of experience.' },
                  { title: 'Transparent Pricing', desc: 'No hidden costs. You approve the quote before we start.' },
                  { title: 'Prompt Service', desc: 'We respect your time and guarantee 4-hour visit turnout.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mt-1">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width CTA */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8 mx-auto">
            <Phone size={36} className="text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Need RO Service <span className="text-cyan-400 italic">Today?</span></h2>
          <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
            Don't compromise on your family's health. Book an expert technician right now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+918092108671" className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl text-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              Call 8092108671
            </a>
            <Link to="/contact" className="px-10 py-5 bg-primary border-2 border-primary text-white font-bold rounded-2xl text-xl hover:bg-transparent transition-all duration-300 shadow-xl flex items-center justify-center">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer pre-banner spacer */}
      <div className="h-6 bg-slate-900"></div>
    </div>
  );
};

export default Home;
