import Title from '@/Components/Title';
import React from 'react';

const Tutorials = async ({params}) => {
    const {slug} =await params;

    const [technology, topic, , subject,page_no ] = slug;
    return (
        <div>
            <Title>{technology} tutorials</Title>
            <h2>Topic: {topic}</h2>
            <hr />
            <h3>Subject: {subject}</h3>
            <p>Page: {page_no}</p>
        </div>
    );
};

export default Tutorials;