import { getTags } from "@/lib/data/tags";
import Tags from "@/components/shared/tags";

const Filters = async () => {
  try {
    const filters = await getTags();

    return <Tags filters={filters} />;
  } catch (error) {
    return <div>Oops! Something went wrong fetching tags...</div>;
  }
};

export default Filters;
