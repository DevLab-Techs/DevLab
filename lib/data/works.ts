"use server";

import { unstable_noStore as noStore } from "next/cache";

import { handleError } from "@/lib/utils";
import Work from "@/lib/models/work";
import { connectToDatabase } from "@/lib/db/mongoose";

export const getWorks = async (tag?: string) => {
  noStore();

  try {
    await connectToDatabase();

    if (tag) {
      const works = await Work.find({ tags: tag });
      return JSON.parse(JSON.stringify(works));
    } else {
      const works = await Work.find();
      return JSON.parse(JSON.stringify(works));
    }
  } catch (error) {
    handleError(error);
  }
};

export const getWorkById = async (id: string) => {
  noStore();
  try {
    await connectToDatabase();

    const work = await Work.findById(id);
    return JSON.parse(JSON.stringify(work));
  } catch (error) {
    handleError(error);
  }
};
