"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ title, link }: { title: string; link: string }) => {
  const pathname = usePathname();

  const isActive = pathname === link;

  return (
    <li
      className={`my-6 md:my-2 md:mx-4 uppercase transition duration-300 flex flex-col items-center justify-center 
      group hover:text-primary font-semibold text-sm lg:text-base ${
        isActive ? "text-primary" : ""
      }`}
    >
      <div className="w-2 h-2 hidden md:block rounded-full bg-transparent mb-1 group-hover:bg-primary" />
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default NavLink;
