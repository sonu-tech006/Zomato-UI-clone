import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, ChevronDown, User, X, Menu, Moon, Sun } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authType, setAuthType] = useState('login');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const openAuth = (type) => {
    setAuthType(type);
    setIsAuthOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 transition-colors duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-4xl font-extrabold italic text-zomato tracking-tighter hover:opacity-90 transition-opacity">
                zomato
              </Link>
            </div>

            {/* Location and Search - Desktop */}
            <div className="hidden md:flex flex-1 max-w-3xl mx-6">
              <div className="flex w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg overflow-hidden transition-all hover:shadow-md focus-within:shadow-md focus-within:border-gray-300 dark:focus-within:border-gray-600">
                <div className="flex items-center px-3 bg-white dark:bg-gray-800 w-1/3 border-r border-gray-200 dark:border-gray-700">
                  <MapPin className="text-zomato h-5 w-5 flex-shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Bangalore" 
                    className="w-full px-2 py-3 text-sm text-gray-700 dark:text-gray-200 bg-transparent outline-none"
                    defaultValue="Bangalore"
                  />
                  <ChevronDown className="text-gray-500 h-4 w-4 flex-shrink-0 cursor-pointer" />
                </div>
                <div className="flex items-center flex-1 px-3 bg-white dark:bg-gray-800 relative z-10 group">
                  <Search className="text-gray-400 dark:text-gray-500 h-5 w-5 flex-shrink-0" />
                  <input 
                    type="text" 
                    placeholder="Search for restaurant, cuisine or a dish" 
                    className="w-full px-2 py-3 text-sm text-gray-700 dark:text-gray-200 bg-transparent outline-none"
                  />
                  {/* Autocomplete simulation */}
                  <div className="absolute top-12 left-0 w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all z-20 overflow-hidden">
                     <div className="p-3 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition">
                        <img src="https://b.zmtcdn.com/data/pictures/chains/6/59026/05ed43d3b7337eb6fcd92c4cd8f8bb46.jpg" className="w-10 h-10 rounded object-cover" />
                        <div>
                           <p className="text-sm font-semibold dark:text-white">Leon's Burgers</p>
                           <p className="text-xs text-gray-500 dark:text-gray-400">Delivery</p>
                        </div>
                     </div>
                     <div className="p-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition">
                        <Search className="text-gray-400 w-5 h-5"/>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">biryani</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Actions - Desktop */}
            <div className="hidden md:flex items-center space-x-6 text-lg text-gray-500 dark:text-gray-300 font-light">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-500"/> : <Moon size={20} />}
              </button>
              <button onClick={() => openAuth('login')} className="hover:text-gray-800 dark:hover:text-white transition-colors">Log in</button>
              <button onClick={() => openAuth('signup')} className="hover:text-gray-800 dark:hover:text-white transition-colors">Sign up</button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-500"/> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 absolute w-full shadow-lg z-30">
            <div className="px-4 py-4 space-y-4">
              <div className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg dark:bg-gray-800">
                <MapPin className="text-zomato h-5 w-5 mr-3" />
                <input type="text" placeholder="Location" className="w-full bg-transparent outline-none dark:text-white" />
              </div>
              <div className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                <Search className="text-gray-400 h-5 w-5 mr-3" />
                <input type="text" placeholder="Search..." className="w-full bg-transparent outline-none dark:text-white" />
              </div>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button 
                  onClick={() => openAuth('login')} 
                  className="w-full bg-zomato text-white py-3 rounded-lg font-medium text-lg shadow-sm hover:bg-zomato-dark transition-colors"
                >
                  Log in
                </button>
                <button 
                  onClick={() => openAuth('signup')}
                  className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-3 rounded-lg font-medium text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal Overlay */}
      {isAuthOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center" 
          onClick={() => setIsAuthOpen(false)}
        >
          <AuthModal 
            isOpen={isAuthOpen} 
            onClose={() => setIsAuthOpen(false)} 
            initialType={authType} 
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
