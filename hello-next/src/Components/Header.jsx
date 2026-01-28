"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  const pathname = usePathname();

  //not showing this header in dashboard
  if (pathname.startsWith("/dashboard")) return <></>;

  return (
    <header className="border-b border-green-800 py-5 px-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-emerald-500">
        💫 Dev Story
      </Link>

      <nav className="space-x-5">
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/stories"}>Stories</NavLink>
        <NavLink href={"/tutorials"}>Tutorials</NavLink>
        <NavLink href={"/login"}>Login</NavLink>
        <NavLink href={"/register"}>Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
