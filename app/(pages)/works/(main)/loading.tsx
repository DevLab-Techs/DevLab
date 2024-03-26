import { Skeleton } from "@/components/ui/skeleton";

const LoadingWorks = () => {
  return (
    <div
      className="add-scrollbar flex max-w-full overflow-x-auto
gap-3 sm:gap-5 pb-4"
    >
      <Skeleton className="min-w-[300px] h-[280px] sm:min-w-[500px] sm:h-[450px] bg-gray-200 dark:bg-muted" />
      <Skeleton className="min-w-[300px] h-[280px] sm:min-w-[500px] sm:h-[450px] bg-gray-200 dark:bg-muted" />
      <Skeleton className="min-w-[300px] h-[280px] sm:min-w-[500px] sm:h-[450px] bg-gray-200 dark:bg-muted" />
      <Skeleton className="min-w-[300px] h-[280px] sm:min-w-[500px] sm:h-[450px] bg-gray-200 dark:bg-muted" />
      <Skeleton className="min-w-[300px] h-[280px] sm:min-w-[500px] sm:h-[450px] bg-gray-200 dark:bg-muted" />
    </div>
  );
};

export default LoadingWorks;
