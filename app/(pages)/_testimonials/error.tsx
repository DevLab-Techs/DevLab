"use client";

import { FaTriangleExclamation } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const TestimonialsError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log(error.message);

  return (
    <>
      <FaTriangleExclamation size={100} className="text-primary" />

      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Oops! Something Went Wrong...
        </h2>
        <h3 className="text-2xl font-semibold tracking-tight">
          Please Try Again Later
        </h3>
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </>
  );
};

export default TestimonialsError;
