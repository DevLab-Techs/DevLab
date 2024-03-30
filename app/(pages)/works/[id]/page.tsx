import Image from "next/image";
import { cache } from "react";
import type { Metadata } from "next";
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

const getWork = cache(async (id: string) => {
  const work: Work = await getWorkById(id);
  return work;
});

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const work: Work = await getWork(id);

  return {
    title: work.title,
    description: work.description,
    alternates: {
      canonical: "/",
    },
  };
}

type Work = {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink?: string;
  images: string[];
  tags: string[];
};

const WorkDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const work: Work = await getWork(id);

  return (
    <>
      <h1 className="main-heading">{work.title}</h1>
      <Carousel className="mx-10">
        <CarouselContent className="sm:w-[420px]">
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
      <p className="text-muted-foreground font-semibold">{work.description}</p>
      <div className="w-full sm:w-fit gap-4 sm:gap-10 flex flex-col sm:flex-row justify-evenly">
        <Button asChild variant="outline" className="sm:w-40">
          <a href={work.projectLink} target="_blank" rel="noopener noreferrer">
            <AiFillEye size={24} />
          </a>
        </Button>
        {work.codeLink && (
          <Button asChild variant="outline" className="sm:w-40">
            <a href={work.codeLink} target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={24} />
            </a>
          </Button>
        )}
      </div>
    </>
  );
};

export default WorkDetailsPage;
