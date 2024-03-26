"use client";

import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Button } from "@/components/ui/button";

type Testimonial = {
  _id: string;
  name: string;
  image: string;
  company: string;
  feedback: string;
};

const TestimonialsCard = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  return (
    <>
      <div
        className="lg:w-[800px] lg:min-h-[400px] sm:w-[600px] sm:min-h-[300px] bg-gray-200 dark:bg-muted
      rounded-3xl flex flex-col sm:flex-row p-4 sm:p-8"
      >
        <div className="w-[60px] h-[60px] sm:min-w-[100px] sm:min-h-[100px] mx-auto sm:m-0 rounded-full overflow-hidden">
          <Image
            src={current.image}
            alt={current.name}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col sm:px-8 px-4 mt-4 sm:m-0 text-left items-start justify-around">
          <p className="sm:text-xl text-base">{current.feedback}</p>
          <div className="flex flex-col mt-4 sm:mt-6">
            <p className="sm:text-2xl text-xl text-primary font-bold">
              {current.name}
            </p>
            <p className="text-sm">{current.company}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <Button
          className="group/testimonial w-14 h-14 rounded-full mx-4 bg-gray-200 dark:bg-muted hover:bg-primary
        transition-colors duration-300 flex items-center justify-center cursor-pointer p-0"
          onClick={() =>
            currentIndex === 0
              ? setCurrentIndex(testimonials.length - 1)
              : setCurrentIndex(currentIndex - 1)
          }
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
          onClick={() =>
            currentIndex === testimonials.length - 1
              ? setCurrentIndex(0)
              : setCurrentIndex(currentIndex + 1)
          }
        >
          <HiChevronRight
            size={30}
            className="text-4xl text-black dark:text-white group-hover/testimonial:text-white
            dark:group-hover/testimonial:text-[#111] transition-colors duration-300"
          />
        </Button>
      </div>
    </>
  );
};

export default TestimonialsCard;
