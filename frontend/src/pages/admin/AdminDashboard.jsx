import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, Users, Package, PenTool, MessageSquare, Trash2, Edit, Plus, CheckCircle, XCircle } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('inquiries');
  const [data, setData] = useState({ inquiries: [], services: [], products: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getAuthHeader = () => {
    const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));
    if (!adminInfo || !adminInfo.token) {
      navigate('/admin/login');
      return null;
    }
    return { headers: { Authorization: `Bearer ${adminInfo.token}` } };
  };

  const fetchData = async () => {
    const config = getAuthHeader();
    if (!config) return;

    setLoading(true);
    try {
      const [inquiriesRes, servicesRes, productsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/inquiries', config),
        axios.get('http://localhost:5000/api/services'),
        axios.get('http://localhost:5000/api/products')
      ]);

      setData({
        inquiries: inquiriesRes.data,
        services: servicesRes.data,
        products: productsRes.data
      });
    } catch (error) {
      console.error('Failed to fetch admin data', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('adminInfo');
        navigate('/admin/login');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminInfo');
    navigate('/admin/login');
  };

  const deleteInquiry = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      const config = getAuthHeader();
      try {
        await axios.delete(`http://localhost:5000/api/inquiries/${id}`, config);
        fetchData();
      } catch (error) {
        alert('Failed to delete inquiry');
      }
    }
  };

  const deleteService = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const config = getAuthHeader();
      try {
        await axios.delete(`http://localhost:5000/api/services/${id}`, config);
        fetchData();
      } catch (error) {
        alert('Failed to delete service');
      }
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const config = getAuthHeader();
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`, config);
        fetchData();
      } catch (error) {
        alert('Failed to delete product');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row pt-20">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0 md:min-h-[calc(100vh-80px)]">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-8">Admin Dashboard</h2>
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: Users },
              { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
              { id: 'services', label: 'Services', icon: PenTool },
              { id: 'products', label: 'Products', icon: Package },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-primary text-white' : 'text-slate-300 hover:bg-slate-800'}`}
              >
                <tab.icon size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 mt-8 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Dashboard Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 font-medium">Total Inquiries</p>
                      <p className="text-3xl font-bold text-slate-800">{data.inquiries.length}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl text-primary"><MessageSquare size={24} /></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 font-medium">Total Services</p>
                      <p className="text-3xl font-bold text-slate-800">{data.services.length}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl text-green-600"><PenTool size={24} /></div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 font-medium">Total Products</p>
                      <p className="text-3xl font-bold text-slate-800">{data.products.length}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl text-purple-600"><Package size={24} /></div>
                  </div>
                </div>
              </div>
            )}

            {/* INQUIRIES TAB */}
            {activeTab === 'inquiries' && (
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Customer Inquiries</h3>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="p-4 font-semibold text-slate-600">Date</th>
                        <th className="p-4 font-semibold text-slate-600">Customer</th>
                        <th className="p-4 font-semibold text-slate-600">Contact</th>
                        <th className="p-4 font-semibold text-slate-600">Type</th>
                        <th className="p-4 font-semibold text-slate-600">Message</th>
                        <th className="p-4 font-semibold text-slate-600 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.inquiries.length === 0 ? (
                        <tr><td colSpan="6" className="p-8 text-center text-slate-500">No inquiries found.</td></tr>
                      ) : (
                        data.inquiries.map(inq => (
                          <tr key={inq._id} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-4 text-sm text-slate-600">{new Date(inq.createdAt).toLocaleDateString()}</td>
                            <td className="p-4 text-sm font-medium text-slate-800">{inq.name}</td>
                            <td className="p-4 text-sm text-slate-600">{inq.phone}</td>
                            <td className="p-4 text-sm text-slate-600">
                              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">{inq.productOrService}</span>
                            </td>
                            <td className="p-4 text-sm text-slate-600 max-w-xs truncate" title={inq.message}>{inq.message}</td>
                            <td className="p-4 text-center">
                              <button onClick={() => deleteInquiry(inq._id)} className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors">
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SERVICES TAB */}
            {activeTab === 'services' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800">Manage Services</h3>
                  {/* Note: Add functionality would open a modal with a form */}
                  <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                    <Plus size={18} /> <span>Add Service</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.services.map(srv => (
                    <div key={srv._id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">{srv.title}</h4>
                        <p className="text-sm text-slate-500 mb-4 line-clamp-2">{srv.description}</p>
                        <p className="font-bold text-primary">{srv.price}</p>
                      </div>
                      <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-slate-100">
                        <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-lg"><Edit size={18} /></button>
                        <button onClick={() => deleteService(srv._id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRODUCTS TAB */}
            {activeTab === 'products' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800">Manage Products</h3>
                  {/* Note: Add functionality would open a modal with a form */}
                  <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                    <Plus size={18} /> <span>Add Product</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.products.map(prod => (
                    <div key={prod._id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                      <div className="h-40 bg-slate-100">
                         <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-slate-800">{prod.name}</h4>
                            <span className="font-bold text-primary">{prod.price}</span>
                          </div>
                          <p className="text-sm text-slate-500 mb-4 line-clamp-2">{prod.description}</p>
                        </div>
                        <div className="flex justify-end space-x-2 mt-4 pt-4 border-t border-slate-100">
                          <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-lg"><Edit size={18} /></button>
                          <button onClick={() => deleteProduct(prod._id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg"><Trash2 size={18} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
