import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918092108671?text=Hello!%20I%20need%20help%20with%20my%20RO%20water%20purifier."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-6 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center gap-3 font-bold text-lg group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="animate-pulse" />
      <span>Chat on WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
