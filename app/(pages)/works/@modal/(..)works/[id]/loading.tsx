import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const WorkModalLoading = () => {
  return (
    <div className="md:w-[720px] flex flex-col md:flex-row gap-4">
      <Carousel className="mx-10">
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
      <Separator orientation="vertical" className="hidden md:block" />
      <Separator orientation="horizontal" className="md:hidden" />
      <div className="flex flex-col md:py-4 md:min-w-[205px]">
        <Skeleton className="bg-gray-200 dark:bg-muted w-full h-8" />
        <Skeleton className="bg-gray-200 dark:bg-muted w-full h-10 mt-4" />
        <Skeleton className="bg-gray-200 dark:bg-muted w-full h-10 mt-4" />
        <Skeleton className="bg-gray-200 dark:bg-muted w-full h-10 mt-4" />
      </div>
    </div>
  );
};

export default WorkModalLoading;
