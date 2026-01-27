"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();

    const btnClick = ()=>{
        const pass = prompt()

        if(pass === "1234"){
            router.push('/dashboard')
        }
    }
    return (
        <div className='flex flex-col items-center justify-center py-10 bg-linear-to-t from-emerald-300 to-emerald-800'>
            <h1 className="text-3xl font-bold">Welcome to Dev Story</h1>

            <button onClick={btnClick} className='mt-4 rounded-md px-2 py-1 cursor-pointer text-white bg-blue-600'>Dashboard</button>
        </div>
    );
};

export default Banner;