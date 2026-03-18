import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { Loader2 } from 'lucide-react';

const RestaurantList = ({ restaurants }) => {
  const [loading, setLoading] = useState(false);
  const [loadedCount, setLoadedCount] = useState(9);

  // Reset count when restaurants array changes (due to filtering)
  useEffect(() => {
    setLoadedCount(9);
  }, [restaurants]);

  // Simulating infinite scroll or "load more"
  const loadMore = () => {
    if (loadedCount >= restaurants.length) return;
    setLoading(true);
    setTimeout(() => {
      setLoadedCount(prev => Math.min(prev + 6, restaurants.length));
      setLoading(false);
    }, 800);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all">
        {restaurants.slice(0, loadedCount).map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      
      {loading && (
        <div className="flex justify-center py-10 mt-4">
          <Loader2 className="animate-spin text-zomato w-10 h-10" />
        </div>
      )}
      
      {loadedCount < restaurants.length && !loading && (
        <div className="mt-12 text-center flex justify-center items-center">
            <button 
              onClick={loadMore}
              className="px-10 py-3 border-2 border-zomato text-zomato font-bold text-lg rounded-xl hover:bg-zomato hover:shadow-lg hover:shadow-zomato/20 hover:text-white transition-all active:scale-95"
            >
              Load More
            </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
