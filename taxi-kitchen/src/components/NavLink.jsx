"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({children, href}) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${pathname.startsWith(href) && 'text-orange-500 font-semibold underline'}`}>
            {children}
        </Link>
    );
};

export default NavLink;