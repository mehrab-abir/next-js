import React from 'react';

const FoodCardSkeletons = () => {
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-lg animate-pulse">
        {/* Image Skeleton */}
        <div className="h-48 w-full bg-gray-200" />

        {/* Content Skeleton */}
        <div className="p-4 space-y-3">
          <div className="h-5 w-24 rounded-full bg-gray-200" />

          <div className="h-6 w-3/4 bg-gray-200 rounded" />

          <div className="flex items-center justify-between pt-3">
            <div className="h-6 w-16 bg-gray-200 rounded" />
            <div className="h-9 w-28 bg-gray-200 rounded-xl" />
          </div>
        </div>
      </div>
    );
};

export default FoodCardSkeletons;