import { useEffect, useState } from 'react';
import axios from 'axios';
import { Settings, PenTool, Wrench, Droplets, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case backend is not running or empty
  const defaultServices = [
    { _id: '1', title: 'RO Installation', description: 'Professional installation of all brands of RO purifiers. Ensures zero leakage and perfect water pressure for your home.', icon: 'Tool', price: '₹499' },
    { _id: '2', title: 'RO Repair & Maintenance', description: 'Expert diagnosis and repair for any RO issue. From strange tastes to motor problems, we fix it all.', icon: 'Wrench', price: '₹299' },
    { _id: '3', title: 'Filter Replacement', description: 'Timely replacement of worn-out filters to ensure your water remains 100% pure and healthy.', icon: 'Droplets', price: '₹899' },
    { _id: '4', title: 'Annual Maintenance (AMC)', description: 'Comprehensive yearly coverage for your RO system including regular checkups and free parts replacement.', icon: 'Settings', price: '₹2499' },
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/services');
        if (data.length > 0) {
          setServices(data);
        } else {
          setServices(defaultServices);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
        setServices(defaultServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getIcon = (iconName) => {
    switch(iconName?.toLowerCase()) {
      case 'tool': return <PenTool size={32} />;
      case 'wrench': return <Wrench size={32} />;
      case 'settings': return <Settings size={32} />;
      case 'droplets': return <Droplets size={32} />;
      default: return <Wrench size={32} />;
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary py-16 mb-12 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Our Premium <span className="text-blue-200">Services</span></h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Comprehensive water purifier solutions tailored to ensure your family's health and safety.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service._id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col sm:flex-row">
                {/* Icon Side */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center sm:w-1/3">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {getIcon(service.icon)}
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="p-8 sm:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                       {service.price && <span className="text-primary font-bold text-lg">{service.price}</span>}
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div>
                    <ul className="mb-6 space-y-2">
                      {['Expert Technician', 'Genuine Parts', 'Guaranteed Satisfaction'].map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-green-500 mr-2" />
                           {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="tel:+918092108671" className="inline-block w-full text-center bg-primary text-white font-semibold py-3 rounded-full hover:bg-secondary hover:scale-105 transition-all duration-300 shadow-md">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Services;
