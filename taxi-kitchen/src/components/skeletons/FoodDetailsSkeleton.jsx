import React from 'react';

const FoodDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 animate-pulse">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Image Skeleton */}
        <div className="h-72 md:h-96 w-full bg-gray-200" />

        {/* Content Skeleton */}
        <div className="p-6 md:p-8 space-y-5">
          {/* Tags */}
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-full bg-gray-200" />
            <div className="h-6 w-24 rounded-full bg-gray-200" />
          </div>

          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-200 rounded" />

          {/* Price */}
          <div className="h-7 w-24 bg-gray-200 rounded" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="h-12 w-full sm:w-40 bg-gray-200 rounded-xl" />
            <div className="h-12 w-full sm:w-44 bg-gray-200 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
