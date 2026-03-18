import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/restaurant/${restaurant.id}`} className="group block focus:outline-none focus:ring-2 focus:ring-zomato focus:border-transparent rounded-2xl relative">
      <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] dark:group-hover:shadow-[0_12px_30px_rgba(255,255,255,0.05)] border border-transparent group-hover:border-gray-100 dark:group-hover:border-gray-700 flex flex-col h-full">
        
        {/* Image Container */}
        <div className="relative w-full h-56 lg:h-64 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700">
          {!imageLoaded && (
            <div className="absolute inset-0 shimmer dark:opacity-30" />
          )}
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              // Fallback unbreakable image
              e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80";
            }}
          />

          {/* Promoted Badge */}
          {restaurant.promoted && (
            <div className="absolute top-3 left-3 bg-gray-900 bg-opacity-70 text-white text-xs px-2 py-0.5 rounded flex items-center shadow-lg backdrop-blur-md">
              Promoted
            </div>
          )}

          {/* Offers Overlay */}
          {restaurant.offers && restaurant.offers.length > 0 && (
            <div className="absolute bottom-3 left-0 bg-blue-600 text-white text-xs px-3 py-1 font-medium shadow-lg rounded-r-md">
              {restaurant.offers[0]}
            </div>
          )}
          
          <div className="absolute bottom-3 right-3 text-xs font-semibold bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur text-gray-800 dark:text-gray-200 px-2 py-1 rounded shadow-sm">
            {restaurant.deliveryTimeMins ? `${restaurant.deliveryTimeMins} min` : restaurant.time}
          </div>
        </div>

        {/* Content Details */}
        <div className="flex-1 flex flex-col pt-1">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 truncate flex-1">{restaurant.name}</h3>
            <div className="flex items-center space-x-1 bg-green-600 text-white px-1.5 py-0.5 rounded-md shadow-sm ml-auto">
              <span className="text-xs font-bold leading-none">{restaurant.rating}</span>
              <Star fill="white" size={10} className="stroke-green-600 flex-shrink-0" />
            </div>
          </div>
          <div className="flex justify-between text-gray-600 dark:text-gray-400 text-sm mb-2 mt-auto">
            <span className="truncate pr-4 font-medium flex-1">{restaurant.cuisine}</span>
            <span className="whitespace-nowrap font-medium text-gray-500 dark:text-gray-400">₹{restaurant.priceForTwo} for two</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-500 font-light truncate">
            {restaurant.location}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
