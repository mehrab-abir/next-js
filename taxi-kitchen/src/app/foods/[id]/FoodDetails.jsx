import Link from 'next/link';
import React from 'react';

const getFoodDetails = async (id)=>{
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();
    return data.details;
}

const FoodDetails = async ({id}) => {
    const food = await getFoodDetails(id);
    const { title, foodImg, price, category, area, video } = food || {};

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Image */}
          <div className="h-72 md:h-96 w-full overflow-hidden">
            <img
              src={foodImg}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-5">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                {category}
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                {area}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {title}
            </h1>

            {/* Price */}
            <p className="text-2xl font-semibold text-emerald-600">৳{price}</p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">
                Add to Cart
              </button>

              {video && (
                <Link
                  href={video}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition text-center"
                >
                  Watch Recipe
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodDetails;