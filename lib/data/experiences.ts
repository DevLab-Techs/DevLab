"use server";

import { unstable_noStore as noStore } from "next/cache";

import { handleError } from "@/lib/utils";
import Experience from "@/lib/models/experience";
import { connectToDatabase } from "@/lib/db/mongoose";

export const getExperiences = async () => {
  noStore();

  try {
    await connectToDatabase();

    const experiences = await Experience.find().sort({ year: -1 });

    return JSON.parse(JSON.stringify(experiences));
  } catch (error) {
    handleError(error);
  }
};
