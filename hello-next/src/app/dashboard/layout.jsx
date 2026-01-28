import Title from '@/Components/Title';
import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
      <div>
        <Link href="/" className="text-2xl font-bold text-emerald-500">
          💫 Dev Story
        </Link>
        <div className='mt-4'>
            <Title>Dashboard Panel</Title>
        </div>
        
        <div className="grid grid-cols-12">
          <div className="col-span-3 border-r border-gray-600 min-h-screen">
            <nav className="flex flex-col space-y-4 mr-2">
              <Link
                href={"/dashboard/addstory"}
                className="bg-gray-800 p-2 rounded-md"
              >
                Add Story
              </Link>
              <Link
                href={"/dashboard/profile"}
                className="bg-gray-800 p-2 rounded-md"
              >
                Profile
              </Link>
              <Link
                href={"/dashboard/settings"}
                className="bg-gray-800 p-2 rounded-md"
              >
                Settings
              </Link>
            </nav>
          </div>
          <div className="col-span-9 pl-4">{children}</div>
        </div>
      </div>
    );
};

export default layout;