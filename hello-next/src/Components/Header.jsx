import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='border-b border-green-800 py-5 px-4 flex items-center justify-between'>
            <Link href='/' className="text-2xl font-bold text-emerald-500">💫 Dev Stroy</Link>

            <nav className='space-x-5'>
                <Link href={'/about'}>About</Link>
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'}>Register</Link>
            </nav>
        </header>
    );
};

export default Header;