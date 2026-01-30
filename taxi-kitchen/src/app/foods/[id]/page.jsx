import React from 'react';
import FoodDetails from './FoodDetails';

export const generateMetadata = async ({params})=>{
    const {id} = await params;

    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    );
    const {details = {}} = await res.json(); //'details' is a key in the response obj, directly destructured it

    return {
        title : details.title,
        description : "Best Food in Town"
    }
}

const page = async ({params}) => {
    const {id} = await params;

    return (
        <FoodDetails id={id}></FoodDetails>
    );
};

export default page;