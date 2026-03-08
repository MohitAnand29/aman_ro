import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback
  const defaultProducts = [
    {
      _id: '1',
      name: 'AquaGuard Pro',
      image: 'https://images.unsplash.com/photo-1548811579-017fac23fa65?q=80&w=400&auto=format&fit=crop',
      description: 'Advanced 7-stage RO+UV+UF purification.',
      price: '₹12,499',
      features: ['10L storage', 'Copper infused', 'Smart indicators']
    },
    {
      _id: '2',
      name: 'Kent Grand Plus',
      image: 'https://images.unsplash.com/photo-1548811579-017fac23fa65?q=80&w=400&auto=format&fit=crop',
      description: 'Zero water wastage technology.',
      price: '₹14,999',
      features: ['RO+UV+UF+TDS Control', 'UV LED in tank', '8L storage']
    },
    {
      _id: '3',
      name: 'PureIt Advanced',
      image: 'https://images.unsplash.com/photo-1548811579-017fac23fa65?q=80&w=400&auto=format&fit=crop',
      description: 'Compact design for modern kitchens.',
      price: '₹10,999',
      features: ['6-stage purification', 'Space saving', '7L storage']
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        if (data.length > 0) {
          setProducts(data);
        } else {
          setProducts(defaultProducts);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts(defaultProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-primary py-16 mb-12 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Latest <span className="text-blue-200">RO Purifiers</span></h1>
        <p className="max-w-2xl mx-auto text-blue-50 text-lg">Browse our collection of high-quality water purifiers for your home and office.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                    <span className="font-bold text-lg text-primary">{product.price}</span>
                  </div>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  
                  {product.features && product.features.length > 0 && (
                     <div className="mb-6">
                       <h4 className="text-sm font-semibold text-slate-800 mb-2 uppercase tracking-wide">Features:</h4>
                       <div className="flex flex-wrap gap-2">
                         {product.features.map((feature, i) => (
                           <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md">{feature}</span>
                         ))}
                       </div>
                     </div>
                  )}

                  <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-medium">
                    <ShoppingCart size={18} />
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
