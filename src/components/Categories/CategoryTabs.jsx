import React from 'react';

const CategoryTabs = ({ categories, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-8 mb-8 overflow-x-auto pb-4 hide-scrollbar">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveTab(category.id)}
          className={`flex items-center space-x-4 pb-4 border-b-2 transition-all duration-300 ease-in-out px-2 whitespace-nowrap min-w-max ${
            activeTab === category.id 
              ? 'border-zomato' 
              : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center p-3 transition-colors duration-300 ${
            activeTab === category.id ? 'bg-blue-50 dark:bg-blue-900/40' : 'bg-gray-100 dark:bg-gray-800'
          }`}>
            <img 
              src={activeTab === category.id && category.activeImage ? category.activeImage : category.image} 
              alt={category.name} 
              className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 transform hover:scale-110" 
            />
          </div>
          <span className={`text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
            activeTab === category.id ? 'text-zomato font-bold' : 'text-gray-600 dark:text-gray-300 font-medium'
          }`}>
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
