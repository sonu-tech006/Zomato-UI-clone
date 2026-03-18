import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, ChevronDown, Map } from 'lucide-react';

const MOCK_LOCATIONS = [
  "Bangalore", "Mumbai", "Delhi NCR", "Hyderabad", "Kanpur", "Chennai", "Pune", "Kolkata"
];

const Hero = ({ location, setLocation, restaurants, onSelectRestaurant }) => {
  const [locInput, setLocInput] = useState(location);
  const [showLocDropdown, setShowLocDropdown] = useState(false);
  
  const [searchInput, setSearchInput] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const locRef = useRef(null);
  const searchRef = useRef(null);

  // Handle clicks outside the dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locRef.current && !locRef.current.contains(event.target)) {
        setShowLocDropdown(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLocations = MOCK_LOCATIONS.filter(loc => 
    loc.toLowerCase().includes(locInput.toLowerCase())
  );

  const filteredRestaurants = restaurants.filter(res => 
    res.name.toLowerCase().includes(searchInput.toLowerCase()) || 
    res.cuisine.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, 5);

  // -- Location Handlers --
  const handleLocationSubmit = (locValue) => {
    if (!locValue.trim()) return;
    setLocInput(locValue);
    setLocation(locValue);
    setShowLocDropdown(false);
  };

  const onLocKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLocationSubmit(locInput);
    }
  };

  // -- Restaurant Handlers --
  const handleRestaurantSubmit = (resObj) => {
    if (!resObj) return;
    setSearchInput(""); 
    setShowSearchDropdown(false);
    onSelectRestaurant(resObj);
  };

  const onSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // If there's an exact match or partial match, select the first one
      if (filteredRestaurants.length > 0) {
        handleRestaurantSubmit(filteredRestaurants[0]);
      }
    }
  };

  return (
    <div className="relative h-[65vh] min-h-[500px] w-full bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden shadow-inner transition-colors" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')" }}>
      
      <div className="z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4 animate-fade-in-up">
        {/* Large Logo */}
        <h1 className="text-6xl md:text-8xl font-extrabold italic tracking-tighter mb-8 drop-shadow-xl select-none">
          zomato
        </h1>
        
        <p className="text-2xl md:text-4xl text-center mb-10 font-medium tracking-wide drop-shadow-md">
          Discover the best food & drinks in <span className="font-bold underline decoration-white decoration-4 underline-offset-8 transition-all">{location}</span>
        </p>
        
        {/* Large Search Bars */}
        <div className="flex w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 relative z-20 focus-within:ring-4 focus-within:ring-zomato/30">
          
          {/* Location Input */}
          <div ref={locRef} className="flex relative items-center px-4 bg-transparent w-full sm:w-2/5 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700">
            <MapPin className="text-zomato h-6 w-6 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Detect current location" 
              className="w-full px-3 py-4 text-lg text-gray-700 dark:text-gray-200 bg-transparent outline-none truncate"
              value={locInput}
              onChange={(e) => {
                setLocInput(e.target.value);
                setShowLocDropdown(true);
              }}
              onFocus={() => setShowLocDropdown(true)}
              onKeyDown={onLocKeyDown} // Allows "Enter" to apply custom city
            />
            <ChevronDown className="text-gray-500 h-5 w-5 flex-shrink-0 cursor-pointer" onClick={() => setShowLocDropdown(!showLocDropdown)} />
            
            {/* Location Dropdown Reccomendations */}
            {showLocDropdown && (
              <div className="absolute top-[105%] left-0 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-2 max-h-60 overflow-y-auto z-50 animate-fade-in-up">
                {filteredLocations.length > 0 ? filteredLocations.map((loc, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleLocationSubmit(loc)}
                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex items-center text-gray-700 dark:text-gray-200 transition-colors"
                  >
                    <Map size={18} className="text-gray-400 mr-3" />
                    <span>{loc}</span>
                  </div>
                )) : (
                  <div className="px-4 py-3 text-gray-500 text-sm">Press Enter to search custom city...</div>
                )}
              </div>
            )}
          </div>

          {/* Restaurant Search Input */}
          <div ref={searchRef} className="flex relative items-center flex-1 px-4 bg-transparent">
            <Search className="text-gray-400 h-6 w-6 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search for restaurant, cuisine or a dish" 
              className="w-full px-3 py-4 text-lg text-gray-700 dark:text-gray-200 bg-transparent outline-none truncate"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                setShowSearchDropdown(true);
              }}
              onFocus={() => {
                if(searchInput.length > 0) setShowSearchDropdown(true);
              }}
              onKeyDown={onSearchKeyDown} // Press Enter shifts card to top
            />

            {/* Restaurant Search Dropdown */}
            {showSearchDropdown && searchInput.length > 0 && (
              <div className="absolute top-[105%] left-0 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 py-2 max-h-80 overflow-y-auto z-50 animate-fade-in-up">
                {filteredRestaurants.length > 0 ? filteredRestaurants.map((res) => (
                  <div 
                    key={res.id} 
                    onClick={() => handleRestaurantSubmit(res)}
                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-4 transition-colors border-b border-gray-50 dark:border-gray-700 last:border-0"
                  >
                    <img src={res.image} alt={res.name} className="w-12 h-12 object-cover rounded-md shadow-sm" />
                    <div className="flex flex-col">
                       <span className="text-gray-800 dark:text-white font-semibold text-lg">{res.name}</span>
                       <span className="text-gray-500 dark:text-gray-400 text-sm truncate">{res.cuisine}</span>
                    </div>
                  </div>
                )) : (
                  <div className="px-4 py-3 text-gray-500 text-sm">Press Enter to search...</div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
      
      {/* Bottom Wave/Gradient shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent opacity-80 z-0 transition-colors"></div>
    </div>
  );
};

export default Hero;
