import { Skeleton } from "@/components/ui/skeleton";

const FiltersLoader = () => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
      <Skeleton className="bg-gray-200 dark:bg-muted w-20 h-9 rounded-md" />
      <Skeleton className="bg-gray-200 dark:bg-muted w-20 h-9 rounded-md" />
      <Skeleton className="bg-gray-200 dark:bg-muted w-20 h-9 rounded-md" />
      <Skeleton className="bg-gray-200 dark:bg-muted w-20 h-9 rounded-md" />
      <Skeleton className="bg-gray-200 dark:bg-muted w-20 h-9 rounded-md" />
      <Skeleton className="bg-gray-200 dark:bg-muted w-20 h-9 rounded-md" />
    </div>
  );
};

export default FiltersLoader;
