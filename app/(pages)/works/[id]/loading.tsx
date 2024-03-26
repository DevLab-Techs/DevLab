import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const WorkDetailsLoading = () => {
  return (
    <>
      <Skeleton className="bg-gray-200 dark:bg-muted w-full sm:w-96 h-8 sm:h-12" />
      <Carousel className="mx-10 max-sm:w-4/5">
        <CarouselContent>
          <CarouselItem>
            <Skeleton
              className="bg-gray-200 dark:bg-muted aspect-square w-full
    sm:w-[400px] sm:h-[350px]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Skeleton className="bg-gray-200 dark:bg-muted w-full sm:w-96 h-6" />
      <div className="w-full sm:w-fit gap-10 flex flex-col sm:flex-row justify-evenly">
        <Skeleton className="bg-gray-200 dark:bg-muted w-full sm:w-40 h-10" />
        <Skeleton className="bg-gray-200 dark:bg-muted w-full sm:w-40 h-10" />
      </div>
    </>
  );
};

export default WorkDetailsLoading;
