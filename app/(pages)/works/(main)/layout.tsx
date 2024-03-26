import { Suspense } from "react";

import Filters from "@/components/shared/filters";
import NavButtons from "@/components/shared/nav-buttons";
import FiltersLoader from "@/components/shared/filters-loader";

const WorksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="min-h-full flex flex-col gap-4 md:gap-10 justify-evenly
  items-center py-4 sm:py-8 px-8"
    >
      <h1 className="main-heading">
        Our Creative <span className="text-primary">Portfolio</span>
      </h1>
      <Suspense fallback={<FiltersLoader />}>
        <Filters />
      </Suspense>
      {children}
      <NavButtons
        firstLink="/about"
        firstTitle="About"
        secondLink="/skills"
        secondTitle="Skills"
      />
    </section>
  );
};

export default WorksLayout;
