"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";

import { links } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLink from "./nav-link";
import ThemeToggle from "./theme-toggle";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <FaBars size={25} className="text-primary" />
      </SheetTrigger>
      <SheetContent className="sheet-content sm:w-64 md:hidden">
        <div className="my-6 flex flex-col items-center justify-center">
          <ThemeToggle />
        </div>
        <nav>
          <ul className="flex flex-col" onClick={() => setOpen(false)}>
            {links.map((link) => (
              <NavLink key={link.link} {...link} />
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
