import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            About Page --- Company ... Teams

            <div className='mt-5 flex space-x-6'>
                <Link href='/about/company'>Company</Link>
                <Link href={'/about/teams'}>Teams</Link>
            </div>
        </div>
    );
};

export default About;