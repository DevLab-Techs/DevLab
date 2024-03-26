import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { AspectRatio } from "../ui/aspect-ratio";

const AboutCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="min-w-[150px] max-w-[250px]">
      <CardHeader className="py-4 md:py-6">
        <AspectRatio
          className="bg-[#121b26] rounded-md overflow-hidden"
          ratio={5 / 3}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="200"
            className={`object-contain ${image !== "/mern.avif" && "py-2"}`}
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="pb-2 md:pb-6">
        <p className="text-center text-primary font-bold">{title}</p>
        <CardDescription className="mt-2 text-xs lg:text-sm text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
