import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

  return <Link href={href} className={`${pathname.startsWith(href) && 'text-emerald-500 underline'}`}>{children}</Link>;
};

export default NavLink;
