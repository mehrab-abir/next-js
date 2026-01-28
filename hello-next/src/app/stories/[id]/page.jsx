import React from 'react';
import StoryDetails from './StoryDetails';

const page = async ({params}) => {
    const {id} = await params;
    return (
        <StoryDetails id={id}></StoryDetails>
    );
};

export default page;