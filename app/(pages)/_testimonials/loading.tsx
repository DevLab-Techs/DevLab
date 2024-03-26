import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const LoadingTestimonials = () => {
  return (
    <>
      <Skeleton
        className="lg:w-[800px] lg:h-[400px] sm:w-[600px] sm:h-[300px]
      bg-gray-200 dark:bg-muted rounded-3xl"
      />
      <div className="flex">
        <Button
          className="group/testimonial w-14 h-14 rounded-full mx-4 bg-gray-200 dark:bg-muted hover:bg-primary
        transition-colors duration-300 flex items-center justify-center cursor-pointer p-0"
        >
          <HiChevronLeft
            size={30}
            className="text-4xl text-black dark:text-white group-hover/testimonial:text-white
            dark:group-hover/testimonial:text-[#111] transition-colors duration-300"
          />
        </Button>
        <Button
          className="group/testimonial w-14 h-14 rounded-full mx-4 bg-gray-200 dark:bg-muted hover:bg-primary
        transition-colors duration-300 flex items-center justify-center cursor-pointer p-0"
        >
          <HiChevronRight
            size={30}
            className="text-4xl text-black dark:text-white group-hover/testimonial:text-white
            dark:group-hover/testimonial:text-[#111] transition-colors duration-300"
          />
        </Button>
      </div>{" "}
    </>
  );
};

export default LoadingTestimonials;
