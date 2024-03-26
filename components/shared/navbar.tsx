import Link from "next/link";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import ThemeToggle from "@/components/shared/theme-toggle";
import MobileNav from "@/components/shared/mobile-nav";
import NavLink from "@/components/shared/nav-link";
import { MotionHeader, navbarVariants } from "@/lib/motion";
import { links } from "@/lib/constants";

const Navbar = () => {
  return (
    <MotionHeader
      variants={navbarVariants}
      initial="hide"
      animate="show"
      className="sticky top-0 z-10 bg-background flex justify-between items-center
    py-4 px-6 shadow-md dark:shadow-primary/20"
    >
      <div className="w-20 lg:w-32">
        <Link href="/">
          <AspectRatio ratio={2 / 1}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={160}
              height={80}
              priority
              className="object-contain"
            />
          </AspectRatio>
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex">
          {links.map((link) => (
            <NavLink key={link.title} {...link} />
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="md:hidden flex items-center">
        <MobileNav />
      </div>
    </MotionHeader>
  );
};

export default Navbar;
