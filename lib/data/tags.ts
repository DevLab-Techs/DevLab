"use server";

import { unstable_noStore as noStore } from "next/cache";

import { handleError } from "@/lib/utils";
import Tag from "@/lib/models/tag";
import { connectToDatabase } from "@/lib/db/mongoose";

export const getTags = async () => {
  noStore();
  try {
    await connectToDatabase();

    const tags = await Tag.find();

    return JSON.parse(JSON.stringify(tags));
  } catch (error) {
    handleError(error);
  }
};
