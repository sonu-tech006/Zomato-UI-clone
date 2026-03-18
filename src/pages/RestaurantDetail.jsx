import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockDetailData, mockRestaurants, realImages } from '../data/mockData';
import { Star, Clock, MapPin, Share2, Bookmark, ChevronRight, Check } from 'lucide-react';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulate API Fetch
    setLoading(true);
    setTimeout(() => {
      // Find dynamic restaurant data based on the route ID
      const restaurantInfo = mockRestaurants.find(r => r.id === id);
      
      if (restaurantInfo) {
        setData({
          ...mockDetailData,
          name: restaurantInfo.name,
          about: restaurantInfo.cuisine,
          address: restaurantInfo.location,
          rating: restaurantInfo.rating,
          reviewsCount: restaurantInfo.reviews,
          timing: `${restaurantInfo.deliveryTimeMins} mins (Delivery)`,
          // Ensure the main gallery image matches the actual card clicked!
          images: [
            restaurantInfo.image, 
            realImages[Math.floor(Math.random() * realImages.length)], 
            realImages[Math.floor(Math.random() * realImages.length)]
          ]
        });
      } else {
        setData(mockDetailData);
      }
      setLoading(false);
    }, 600);
  }, [id]);

  const handleShare = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.id !== itemId);
    });
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (loading) {
    return (
      <div className="container mx-auto px-4 max-w-6xl py-10 mt-20 animate-pulse bg-white dark:bg-gray-900 min-h-screen transition-colors">
         <div className="flex space-x-2 text-gray-400 mb-6 font-medium text-sm items-center">
            <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div> <ChevronRight size={14}/> 
            <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 h-80">
           <div className="w-full md:w-2/3 h-full rounded-2xl bg-gray-200 dark:bg-gray-700"></div>
           <div className="w-full md:w-1/3 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 h-full">
               <div className="h-full w-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex-1"></div>
               <div className="h-full w-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex-1"></div>
           </div>
        </div>
        <div className="w-1/2 h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    );
  }

  if (!data) return <div className="text-center mt-20 dark:text-gray-300">Restaurant not found</div>;

  return (
    <div className="dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
          <div className="flex space-x-2 text-gray-500 dark:text-gray-400 mb-6 font-medium text-sm items-center">
              <Link to="/" className="hover:text-zomato">Home</Link> <ChevronRight size={14}/> 
              <span className="text-gray-400 dark:text-gray-500">{data.name}</span>
          </div>

        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-2 h-auto md:h-[400px] mb-8 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="md:w-2/3 h-64 md:h-full relative overflow-hidden group bg-gray-100 dark:bg-gray-800">
            <img src={data.images[0]} alt="main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </div>
          <div className="md:w-1/3 flex flex-row md:flex-col gap-2 h-32 md:h-full">
            <div className="w-1/2 md:w-full h-full md:h-1/2 relative overflow-hidden group bg-gray-100 dark:bg-gray-800">
              <img src={data.images[1]} alt="thumb1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="w-1/2 md:w-full h-full md:h-1/2 relative overflow-hidden group bg-gray-100 dark:bg-gray-800">
              <img src={data.images[2]} alt="thumb2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-colors">
                <span className="text-white font-medium">View Gallery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Header Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">{data.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-1">{data.about}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1 font-light"><MapPin size={16} /> {data.address}</p>
            <p className="text-zomato text-sm font-medium flex items-center gap-1"><Clock size={16}/> {data.timing}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-gray-800 rounded-lg border border-green-100 dark:border-gray-700 shadow-sm transition-colors">
              <div className="flex items-center space-x-1 bg-green-600 text-white px-2 py-1 rounded shadow-sm mb-1">
                <span className="font-bold text-base">{data.rating}</span>
                <Star fill="white" size={14} className="stroke-green-600" />
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-300 font-medium border-b border-gray-400 border-dashed pb-0.5 mt-1">
                {data.reviewsCount} Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-10 pb-6 border-b border-gray-100 dark:border-gray-800 relative z-10">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm text-gray-700 dark:text-gray-300 font-medium active:scale-95">
            <Star size={18} className="text-zomato"/> <span>Add Review</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm text-gray-700 dark:text-gray-300 font-medium active:scale-95">
            <Bookmark size={18} className="text-zomato"/> <span>Bookmark</span>
          </button>
          <button onClick={handleShare} className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm text-gray-700 dark:text-gray-300 font-medium active:scale-95">
            <Share2 size={18} className="text-zomato"/> <span>Share</span>
          </button>
        </div>

        {/* Menu Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 sm:p-6 mb-24 relative transition-colors z-0">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Order Online</h2>
          {data.menu.map((category, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map(item => {
                  const cartItem = cart.find(c => c.id === item.id);
                  const quantity = cartItem ? cartItem.quantity : 0;
                  
                  return (
                  <div key={item.id} className="flex flex-col sm:flex-row justify-between pb-6 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0 gap-6 relative">
                    <div className="flex-1 pr-0 sm:pr-4">
                      <div className="w-4 h-4 rounded border border-green-600 mb-2 flex items-center justify-center p-0.5">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      </div>
                      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-1">{item.name}</h4>
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">₹{item.price}</p>
                      {item.rating && (
                        <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400 flex items-center gap-1 mb-2">
                            <Star size={14} fill="currentColor" /> {item.rating} <span className="text-gray-400 font-normal">({item.votes} votes)</span>
                        </span>
                      )}
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-light leading-relaxed">{item.description}</p>
                    </div>
                    
                    <div className="w-full sm:w-32 h-32 relative rounded-xl flex-shrink-0 flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl shadow-sm" />
                      ) : (
                        <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                          <span className="text-gray-400 dark:text-gray-500 text-sm">No Image</span>
                        </div>
                      )}
                      
                      <div className="absolute -bottom-4 sm:-bottom-4 left-1/2 transform -translate-x-1/2 z-10 w-28 bg-white dark:bg-gray-900 border border-green-200 dark:border-green-800 shadow-md font-bold rounded-lg overflow-hidden flex items-center justify-between text-green-600 dark:text-green-400 transition-colors">
                        {quantity === 0 ? (
                           <button onClick={() => addToCart(item)} className="w-full h-full py-2 hover:bg-green-50 dark:hover:bg-gray-800 transition-colors text-center font-extrabold text-sm tracking-wide">
                             ADD +
                           </button>
                        ) : (
                           <div className="flex items-center w-full justify-between px-2 py-1.5 bg-green-50 dark:bg-green-900/20">
                              <button onClick={() => removeFromCart(item.id)} className="text-lg px-2 hover:bg-green-100 dark:hover:bg-green-800/50 rounded transition-colors">−</button>
                              <span className="text-sm">{quantity}</span>
                              <button onClick={() => addToCart(item)} className="text-lg px-2 hover:bg-green-100 dark:hover:bg-green-800/50 rounded transition-colors">+</button>
                           </div>
                        )}
                      </div>
                    </div>
                  </div>
                )})}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Cart (Improved) */}
        {cartTotalItems > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_20px_rgba(0,0,0,0.4)] flex justify-between items-center z-50 transform translate-y-0 transition-all duration-300 animate-fade-in-up">
            <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-4">
                <div>
                    <h4 className="font-bold text-lg dark:text-white">{cartTotalItems} item{cartTotalItems > 1 ? 's' : ''} added</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Total: ₹{cartTotalPrice}</p>
                </div>
                <button className="bg-zomato text-white px-6 sm:px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-zomato-dark transition-colors active:scale-95 flex items-center gap-2">
                    View Cart <ChevronRight size={20}/>
                </button>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-2 z-[100] animate-bounce">
            <Check size={18} className="text-green-400" />
            <span className="font-medium">Link copied to clipboard!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
