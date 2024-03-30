import Link from "next/link";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MotionA, linkHoverVariants } from "@/lib/motion";

type Work = {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink?: string;
  images: string[];
  tags: string[];
};

const WorksCard = ({ work }: { work: Work }) => {
  return (
    <Card className="group/card relative">
      <CardContent className="w-[300px] h-[280px] sm:w-[500px] sm:h-[450px] p-0">
        <div className="w-full h-full overflow-hidden rounded-md">
          <Image
            src={work.images[0]}
            alt={work.title}
            width={500}
            height={450}
            className="w-full h-full"
          />
        </div>
      </CardContent>
      <CardFooter
        className="opacity-0 p-0 group-hover/card:opacity-100 flex-col items-center
        justify-evenly absolute top-0 left-0 w-full h-full z-30 bg-black/80
        transition duration-300"
      >
        <h2 className="text-2xl font-semibold">{work.title}</h2>
        <Button size="default" variant="link" asChild>
          <MotionA
            //@ts-ignore
            variants={linkHoverVariants}
            initial="hide"
            whileHover="hover"
            transition={{ duration: 0.25 }}
            href={work.projectLink}
            target="_blank"
            rel="noreferrer noopener"
            className="w-16 h-16 sm:w-24 sm:h-24 bg-muted !rounded-full"
          >
            <AiFillEye className="w-3/4" size={48} />
          </MotionA>
        </Button>
        <Button asChild>
          <Link href={`/works/${work._id}`}>More Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorksCard;
