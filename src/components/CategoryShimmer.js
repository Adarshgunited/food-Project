import React from "react";
import { FaChevronDown } from "react-icons/fa";

const CategoryShimmer = () => {
  const shimmerItems = Array.from({ length: 6 }, (_, index) => index); // Create an array of 6 items to fill the page

  return (
    <div className="w-full mx-auto my-4 p-4">
      {shimmerItems.map((item) => (
        <div key={item} className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto my-4 bg-white shadow-lg p-4 rounded-lg transition-all duration-300 animate-pulse">
          {/* Header shimmer */}
          <div className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
            <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
            <span className="text-2xl text-gray-300">
              <FaChevronDown />
            </span>
          </div>
          {/* Body shimmer */}
          <div className="mt-4 space-y-4">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryShimmer;
