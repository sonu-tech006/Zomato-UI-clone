import React from 'react';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 border-t border-gray-200 dark:border-gray-800 pb-10 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-8 border-b border-gray-200 dark:border-gray-800">
           <div className="text-left mb-6 md:mb-0">
               <h2 className="text-5xl font-extrabold italic text-gray-900 dark:text-white tracking-tighter mb-2">zomato</h2>
           </div>
           
           <div className="flex gap-4">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300">
                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" className="w-6 h-4 object-cover" alt="India" />
                 <span className="font-medium">India</span>
                 <span className="text-xs">▼</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300">
                 <Globe size={18} />
                 <span className="font-medium">English</span>
                 <span className="text-xs">▼</span>
              </button>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-wide uppercase text-sm">About Zomato</h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Who We Are</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Blog</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Work With Us</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Investor Relations</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Report Fraud</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-wide uppercase text-sm">Zomaverse</h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Zomato</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Blinkit</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Feeding India</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Hyperpure</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Zomaland</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-wide uppercase text-sm">For Restaurants</h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Partner With Us</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Apps For You</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-wide uppercase text-sm">Learn More</h4>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Security</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Terms</a></li>
              <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">Sitemap</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
             <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-wide uppercase text-sm">Social links</h4>
             <div className="flex space-x-3 mb-6">
                <a href="#" className="bg-black dark:bg-gray-800 text-white p-1.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition shadow-sm"><LinkedInIcon /></a>
                <a href="#" className="bg-black dark:bg-gray-800 text-white p-1.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition shadow-sm"><Instagram size={18} /></a>
                <a href="#" className="bg-black dark:bg-gray-800 text-white p-1.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition shadow-sm"><Twitter size={18} /></a>
                <a href="#" className="bg-black dark:bg-gray-800 text-white p-1.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition shadow-sm"><Facebook size={18} /></a>
             </div>
             <div>
                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="App Store" className="h-10 mb-3 cursor-pointer hover:opacity-90 transition"/>
                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="Google Play" className="h-10 cursor-pointer hover:opacity-90 transition"/>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
           <p className="text-gray-400 dark:text-gray-500 text-xs font-light leading-relaxed">
              By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

// Simple LinkedIn Icon component
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
)

export default Footer;
