import React from 'react';
import AllFoods from './AllFoods';

//metadata has to be in page.jsx, not in its components
export const metadata = {
  title: "All Foods",
  description: "Best Food in Town",
};

const page = async ({searchParams}) => {
    const {search = ''} = await searchParams; 
    //takes the search param from url, which is sent to url by the SearchInput component, see SearchInput component

    return (
        <AllFoods search={search}></AllFoods>
    );
};

export default page;