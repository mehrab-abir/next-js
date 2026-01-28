import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-30'>
            <h3 className="text-xl font-semibold text-red-500">404 | Page Not Found</h3>
            <Link href="/" className='mt-4 underline'>Go To Home</Link>
        </div>
    );
};

export default NotFoundPage;