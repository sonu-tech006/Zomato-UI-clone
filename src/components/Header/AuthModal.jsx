import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, initialType = 'login' }) => {
  const [type, setType] = useState(initialType);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fade-in-up transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          {type === 'login' ? 'Login' : 'Sign up'}
        </h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {type === 'signup' && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zomato focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zomato focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zomato focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
            />
          </div>

          <button className="w-full bg-zomato text-white py-3 rounded-lg font-bold text-lg hover:bg-zomato-dark transition-colors mt-2 shadow-md active:scale-95 duration-200">
             {type === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 dark:text-gray-400 flex flex-col space-y-2">
           <p>
             {type === 'login' ? "New to Zomato? " : "Already have an account? "}
             <button 
                onClick={() => setType(type === 'login' ? 'signup' : 'login')}
                className="text-zomato font-medium hover:underline"
             >
               {type === 'login' ? 'Create account' : 'Log in'}
             </button>
           </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
