import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';

const Header = () => {
    return (
      <header className="py-4 w-full shadow-md">
        <div className="w-10/12 mx-auto flex items-center justify-between">
          <Link href="/" className='flex items-center gap-1'>
            <Image src="/logo.png" alt="" width={2} height={1} className='w-full h-auto' />
            <h1 className="text-xl font-bold">Foodies</h1>
          </Link>

          <nav className='space-x-5'>
            <NavLink href={"/foods"}>All Foods</NavLink>
            <NavLink href="/reviews">Reviews</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/feedback">Feedbacks</NavLink>
          </nav>
        </div>
      </header>
    );
};

export default Header;