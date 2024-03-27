import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { MotionSpan, navButtonsVariants } from "@/lib/motion";

const NavButtons = ({
  firstLink,
  firstTitle,
  secondLink,
  secondTitle,
}: {
  firstLink?: string;
  firstTitle?: string;
  secondLink?: string;
  secondTitle?: string;
}) => {
  return (
    <div className="w-full flex justify-evenly items-center">
      {firstLink && firstTitle && (
        <Button
          variant="link"
          asChild
          className="transition-colors duration-300 text-xl sm:text-3xl md:text-4xl font-bold capitalize"
        >
          <Link href={firstLink}>
            <MotionSpan
              variants={navButtonsVariants}
              whileHover="hover"
              className="flex items-center"
            >
              <FaArrowLeft className="mr-2 md:mr-4" />
              {firstTitle}
            </MotionSpan>
          </Link>
        </Button>
      )}
      {secondLink && secondTitle && (
        <Button
          variant="link"
          asChild
          className="transition-colors duration-300 text-xl sm:text-3xl md:text-4xl font-bold capitalize"
        >
          <Link href={secondLink}>
            <MotionSpan
              variants={navButtonsVariants}
              whileHover="hover"
              className="flex items-center"
            >
              {secondTitle}
              <FaArrowRight className="ml-2 md:ml-4" />
            </MotionSpan>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default NavButtons;
