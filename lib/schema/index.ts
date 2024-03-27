import { object, string, InferType } from "yup";

export type ContactData = InferType<typeof ContactSchema>;

export const ContactSchema = object({
  name: string()
    .required("Name is Required!")
    .min(3, "Name must be  at least 3 characters!"),
  email: string().email("Invalid Email!").required("Email is required!"),
  phone: string(),
  message: string()
    .required("Message is Required!")
    .min(3, "Message must be  at least 10 characters!"),
});
