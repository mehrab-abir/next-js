import FoodCardSkeletons from '@/components/skeletons/FoodCardSkeletons';
import React from 'react';

const loading = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(12)].map((_, index) => {
          return <FoodCardSkeletons key={index}></FoodCardSkeletons>;
        })}
      </div>
    );
};

export default loading;