import FoodCard from "@/components/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import SearchInput from "@/components/SearchInput";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods || [];
};

const AllFoods = async ({search}) => {
  
  const foods = await getFoods(search);
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">{foods.length} foods found</h1>

      <SearchInput></SearchInput>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => {
            return <FoodCard key={food.id} food={food}></FoodCard>;
          })}
        </div>

        <div className="border border-gray-500 rounded-lg w-60 p-4">
          <h3 className="text-xl font-bold">Cart</h3>
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
