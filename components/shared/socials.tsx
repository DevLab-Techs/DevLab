import { Button } from "@/components/ui/button";
import { socials } from "@/lib/constants";

const Socials = () => {
  return (
    <div className="sm:absolute flex flex-row sm:flex-col-reverse left-4 bottom-8 md:left-8">
      {socials.map(({ link, Icon }) => (
        <Button
          key={link}
          variant="secondary"
          size="icon"
          asChild
          className="w-10 h-10 flex items-center justify-center text-2xl
        bg-gray-200 dark:bg-secondary hover:text-primary
        transition duration-300 m-2 rounded-full"
        >
          <a href={link} target="_blank">
            <Icon />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
