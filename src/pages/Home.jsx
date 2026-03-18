import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero/Hero';
import CategoryTabs from '../components/Categories/CategoryTabs';
import FilterBar from '../components/Filters/FilterBar';
import RestaurantList from '../components/Restaurants/RestaurantList';
import { mockCategories, mockFilters, mockRestaurants } from '../data/mockData';

const Home = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [activeFilters, setActiveFilters] = useState([]);
  
  const [location, setLocation] = useState('Bangalore');
  const [pinnedRestaurant, setPinnedRestaurant] = useState(null);

  const toggleFilter = (filterId) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const handleSelectRestaurant = (restaurant) => {
    setPinnedRestaurant(restaurant);
    // Optionally alert or scroll down? The pinning will make it appear at the top
    window.scrollTo({
      top: 600, // Approximate height of hero banner
      behavior: 'smooth'
    });
  };

  const filteredRestaurants = useMemo(() => {
    let filteredList = mockRestaurants.filter(rest => {
      let pass = true;
      activeFilters.forEach(filter => {
        if (filter === 'rating' && rest.rating < 4.0) pass = false;
        if (filter === 'pureVeg' && !rest.pureVeg) pass = false;
        if (filter === 'safeAndHygienic' && !rest.safeAndHygienic) pass = false;
        if (filter === 'deliveryTime' && rest.deliveryTimeMins > 30) pass = false; 
        if (filter === 'greatOffers' && rest.offers.length === 0) pass = false;
      });
      return pass;
    });

    // If a pinned restaurant exists, ensure it's at the very top of the arrays provided it passes filters
    // Or just manually inject it at index 0 and remove it from duplicates.
    if (pinnedRestaurant) {
       filteredList = filteredList.filter(r => r.id !== pinnedRestaurant.id);
       filteredList.unshift(pinnedRestaurant);
    }

    return filteredList;
  }, [activeFilters, activeTab, pinnedRestaurant]);

  return (
    <div className="dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <Hero 
        location={location} 
        setLocation={setLocation} 
        restaurants={mockRestaurants}
        onSelectRestaurant={handleSelectRestaurant} 
      />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <CategoryTabs categories={mockCategories} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="my-8 sticky top-20 z-10 bg-white dark:bg-gray-900 shadow-sm py-4 -mx-4 px-4 md:mx-0 md:px-0 transition-colors">
          <FilterBar 
            filters={mockFilters} 
            activeFilters={activeFilters} 
            toggleFilter={toggleFilter} 
          />
        </div>

        <div className="mb-8 animate-fade-in-up">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              {activeTab === 'delivery' ? `Delivery Restaurants in ${location}` : 
               activeTab === 'dining' ? `Best Dining Restaurants in ${location}` : `Nightlife in ${location}`}
            </h2>
            {pinnedRestaurant && (
               <button 
                 onClick={() => setPinnedRestaurant(null)} 
                 className="text-sm font-bold text-zomato border border-zomato px-3 py-1 rounded hover:bg-red-50"
               >
                 Clear Search
               </button>
            )}
          </div>
          
          {filteredRestaurants.length > 0 ? (
             <RestaurantList restaurants={filteredRestaurants} />
          ) : (
             <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                 <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">No restaurants match your filters.</h3>
                 <p className="text-gray-500 mt-2">Try removing some filters to see more results.</p>
                 <button 
                    onClick={() => setActiveFilters([])} 
                    className="mt-6 px-6 py-2 bg-zomato text-white rounded-lg font-medium hover:bg-zomato-dark"
                 >
                    Clear Filters
                 </button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
