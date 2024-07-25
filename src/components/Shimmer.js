// Shimmer.js
import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-wrap justify-between items-center shadow-lg p-4 lg:ml-36">
        <div className="flex w-full md:w-1/2 mb-4 md:mb-0">
          <div className="flex-grow py-2 px-4 mr-2 bg-gray-200 rounded-md relative overflow-hidden">
            <div className="absolute top-0 left-[-150px] h-full w-[150px] bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-shimmer"></div>
          </div>
          <div className="py-2 px-4 ml-2 w-24 h-10 bg-gray-200 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-[-150px] h-full w-[150px] bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-shimmer"></div>
          </div>
        </div>
        <div className="py-2 px-4 ml-2 w-48 h-10 bg-gray-200 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-[-150px] h-full w-[150px] bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-shimmer"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="w-72 h-72 m-4 bg-gray-200 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-[-150px] h-full w-[150px] bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-shimmer"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
