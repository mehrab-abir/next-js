import React from 'react';
import AllFoods from './AllFoods';

const page = async ({searchParams}) => {
    const {search = ''} = await searchParams; 
    //takes the search param from url, which is sent to url by the SearchInput component, see SearchInput component

    return (
        <AllFoods search={search}></AllFoods>
    );
};

export default page;