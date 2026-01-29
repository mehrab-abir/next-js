import Link from 'next/link';
import React from 'react';
import AddToCart from './buttons/AddToCart';

const FoodCard = ({food}) => {
    const {id, title, foodImg, price, category} = food;
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={foodImg}
            alt="Pear Tarte Tatin"
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-700">
            {category}
          </span>

          <h2 className="text-lg font-bold text-gray-800 h-18">{title}</h2>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xl font-semibold text-emerald-600">${price}</span>

            <AddToCart food={food}></AddToCart>
          </div>
          <Link href={`/foods/${id}`} className='bg-gray-700 p-2 rounded-md text-white w-full block mt-2'>Details</Link>
        </div>
      </div>
    );
};

export default FoodCard;