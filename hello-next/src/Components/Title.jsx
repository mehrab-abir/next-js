import React from 'react';

const Title = ({children}) => {
    return (
        <h1 className='text-2xl font-bold text-blue-500 mb-2'>{children}</h1>
    );
};

export default Title;