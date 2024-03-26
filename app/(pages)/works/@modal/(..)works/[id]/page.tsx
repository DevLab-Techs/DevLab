import Image from "next/image";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getWorkById } from "@/lib/data/works";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Work = {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink?: string;
  images: string[];
  tags: string[];
};

const WorkModalPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const work: Work = await getWorkById(id);

  console.log(work);

  return (
    <div className="md:w-[720px] flex flex-col md:flex-row gap-4">
      <Carousel className="mx-10">
        <CarouselContent>
          {work.images.map((image) => (
            <CarouselItem key={image}>
              <div className="rounded-lg overflow-hidden w-full sm:w-[400px] sm:h-[350px]">
                <Image
                  src={image}
                  alt="image"
                  width={500}
                  height={450}
                  className="w-full aspect-square"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Separator orientation="vertical" className="hidden md:block" />
      <Separator orientation="horizontal" className="md:hidden" />
      <div className="flex flex-col md:py-4 md:min-w-[205px]">
        <h1 className="text-2xl font-semibold">{work.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{work.description}</p>
        <Button asChild variant="outline" className="mt-4">
          <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
            <AiFillEye size={24} />
          </a>
        </Button>
        {work.codeLink && (
          <Button asChild variant="outline" className="mt-4">
            <a href={work.codeLink} target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={24} />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default WorkModalPage;
{
  /* <div className="md:w-[720px] flex flex-col md:flex-row gap-4">
<Carousel className="mx-10">
  <CarouselContent>
    {work.images.map((image) => (
      <CarouselItem key={image}>
        <div className="rounded-lg overflow-hidden w-full sm:w-[400px] sm:h-[350px]">
          <Image
            src={image}
            alt="image"
            width={500}
            height={450}
            className="w-full aspect-square"
          />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
<Separator orientation="vertical" className="hidden md:block" />
<Separator orientation="horizontal" className="md:hidden" />
<div className="flex flex-col md:py-4 md:min-w-[205px]">
  <h1 className="text-2xl font-semibold">{work.title}</h1>
  <p className="mt-4 text-sm text-muted-foreground">{work.description}</p>
  <Button asChild variant="outline" className="mt-4">
    <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
      <AiFillEye size={24} />
    </a>
  </Button>
  {work.codeLink && (
    <Button asChild variant="outline" className="mt-4">
      <a href={work.codeLink} target="_blank" rel="noopener noreferrer">
        <AiFillGithub size={24} />
      </a>
    </Button>
  )}
</div>
</div> */
}
