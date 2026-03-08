import { Droplet, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-full text-white">
                <Droplet size={24} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Aman <span className="text-primary">RO Services</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional water purifier sales, service, and maintenance. We ensure your family drinks safe and pure water everyday.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/#about' },
                { name: 'Services', path: '/services' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center hover:text-primary transition-colors text-sm">
                    <ChevronRight size={16} className="mr-1 text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {['RO Installation', 'RO Repair & Maintenance', 'Filter Replacement', 'Annual Maintenance (AMC)'].map((service) => (
                <li key={service} className="flex items-center text-sm">
                  <ChevronRight size={16} className="mr-1 text-primary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-sm">behind Gokul Sweets, Chhoti Pahari<br/>Patna, Bihar 800030</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 flex-shrink-0" size={20} />
                <a href="tel:+918092108671" className="text-sm hover:text-white transition-colors">
                  +91-8092108671
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 flex-shrink-0" size={20} />
                <a href="mailto:amanguptapatna13@gmail.com" className="text-sm hover:text-white transition-colors">
                  amanguptapatna13@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aman RO Services. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
