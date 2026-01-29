"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const AddToCart = ({food}) => {
    const {addToCart} = use(CartContext);

    const [inCart, setInCart] = useState(false);

    const handleAddToCart = ()=>{
        addToCart(food);
        setInCart(true);
    }

    return (
      <button
        className="px-4 py-2 rounded-xl text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition disabled:bg-gray-300 disabled:text-gray-700 cursor-pointer"
        onClick={handleAddToCart}
        disabled={inCart}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    );
};

export default AddToCart;