import React from 'react';
import FoodDetails from './FoodDetails';

const page = async ({params}) => {
    const {id} = await params;

    return (
        <FoodDetails id={id}></FoodDetails>
    );
};

export default page;