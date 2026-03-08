import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Droplet, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-sm text-white">
                 <Droplet className="h-6 w-6" />
              </div>
              <span className="font-bold text-2xl text-slate-900 tracking-tight">
                Aman <span className="text-primary">RO</span>
              </span>
            </Link>
          </div>

          {/* Nav Links - Center (Desktop) */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary font-semibold' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Group - Right */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Blinking Phone Pill */}
            <a 
              href="tel:+918092108671" 
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-semibold shadow-sm hover:bg-secondary hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-4 w-4 animate-blink" />
              <span>8092108671</span>
            </a>
            
            {/* Action Icons */}
            <div className="flex items-center space-x-2 border-l border-slate-200 pl-4">
              <button className="p-2 text-slate-500 hover:text-primary hover:bg-blue-50 rounded-full transition-colors focus:outline-none">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <Link to="/admin/login" className="p-2 text-slate-500 hover:text-primary hover:bg-blue-50 rounded-full transition-colors focus:outline-none">
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none p-2 bg-slate-50 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0 top-full">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === link.path ? 'bg-accent text-primary' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col space-y-3">
              <a 
                href="tel:+918092108671" 
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3.5 rounded-xl font-semibold w-full shadow-sm"
              >
                <Phone className="h-4 w-4 animate-blink" />
                <span>Call: 8092108671</span>
              </a>
              <div className="flex justify-center space-x-4 pb-2">
                <button className="p-3 text-slate-600 bg-slate-50 rounded-full hover:bg-slate-100"><ShoppingCart className="h-5 w-5" /></button>
                <Link to="/admin/login" className="p-3 text-slate-600 bg-slate-50 rounded-full hover:bg-slate-100"><User className="h-5 w-5" /></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
