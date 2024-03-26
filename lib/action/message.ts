"use server";

import { ContactData } from "@/lib/schema";
import { handleError } from "@/lib/utils";
import Message from "@/lib/models/message";
import { connectToDatabase } from "@/lib/db/mongoose";

export const submitMessage = async (message: ContactData) => {
  try {
    await connectToDatabase();

    await Message.create(message);

    return { success: true };
  } catch (error) {
    handleError(error);
  }
};
