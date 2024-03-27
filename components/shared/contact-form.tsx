"use client";

import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useForm } from "react-hook-form";
import { useMemo, useTransition } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as useFormSpree } from "@formspree/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { submitMessage } from "@/lib/action/message";
import { ContactSchema, ContactData } from "@/lib/schema";
import { MotionDiv, MotionH1, formVariants } from "@/lib/motion";

const ContactFrom = () => {
  const { width, height } = useWindowSize();
  const [isPending, startTransition] = useTransition();
  const [state, handleSubmit] = useFormSpree("mvoebegy");

  console.log({ width, height });

  const form = useForm<ContactData>({
    resolver: yupResolver(ContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const isLoading = useMemo(() => {
    return isPending || state.submitting;
  }, [isPending, state.submitting]);

  const isDisabled = useMemo(() => {
    return (
      !!form.formState.errors.email ||
      !!form.formState.errors.message ||
      !!form.formState.errors.name ||
      !!form.formState.errors.phone ||
      isLoading
    );
  }, [
    form.formState.errors.email,
    form.formState.errors.message,
    form.formState.errors.name,
    form.formState.errors.phone,
    isLoading,
  ]);

  function onSubmit(values: ContactData) {
    startTransition(() => {
      submitMessage(values)
        .then((data) => {
          if (data?.success) {
            handleSubmit(values);
          }
        })
        .catch((error) => console.log(error));
    });
  }

  return (
    <>
      {!state.succeeded ? (
        <Form {...form}>
          <form
            noValidate
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full sm:w-4/5 xl:w-3/5"
          >
            <MotionDiv variants={formVariants}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className={`${
                          form.formState.errors.name &&
                          "focus-visible:ring-destructive"
                        }`}
                        autoComplete="off"
                        placeholder="Name *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
            <MotionDiv variants={formVariants}>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className={`${
                          form.formState.errors.phone &&
                          "focus-visible:ring-destructive"
                        }`}
                        autoComplete="off"
                        placeholder="Phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
            <MotionDiv variants={formVariants}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className={`${
                          form.formState.errors.email &&
                          "focus-visible:ring-destructive"
                        }`}
                        autoComplete="off"
                        placeholder="Email *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
            <MotionDiv variants={formVariants}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        className={`${
                          form.formState.errors.message &&
                          "focus-visible:ring-destructive"
                        } resize-none`}
                        autoComplete="off"
                        placeholder="Message *"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
            <MotionDiv variants={formVariants}>
              <Button
                disabled={isDisabled}
                className="block mx-auto"
                type="submit"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </MotionDiv>
          </form>
        </Form>
      ) : (
        <div>
          <MotionH1
            variants={formVariants}
            className="text-center text-5xl font-extrabold capitalize text-primary"
          >
            Thank you for getting in touch!
          </MotionH1>
          <Confetti width={width} height={height} />
        </div>
      )}
    </>
  );
};

export default ContactFrom;
