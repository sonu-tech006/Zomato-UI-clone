import React from 'react';
import { Filter, ChevronDown, Repeat } from 'lucide-react';

const FilterBar = ({ filters, activeFilters, toggleFilter }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar py-2 px-1">
      <button className="flex items-center space-x-2 px-4 py-2 border rounded-full whitespace-nowrap transition-all duration-200 text-sm font-medium shadow-sm active:scale-95 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:shadow-md hover:border-gray-400">
        <Filter size={16} />
        <span>Filters</span>
        <Repeat className="ml-1" size={14} />
      </button>

      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => toggleFilter(filter.id)}
          className={`flex items-center space-x-2 px-4 py-2 border rounded-full whitespace-nowrap transition-all duration-200 text-sm font-medium shadow-sm active:scale-95 ${
            activeFilters.includes(filter.id)
              ? 'bg-zomato-dark text-white border-zomato-dark border-opacity-30'
              : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:shadow-md hover:border-gray-400'
          }`}
        >
          <span>{filter.label}</span>
          {filter.id === 'deliveryTime' && <ChevronDown size={14} />}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
