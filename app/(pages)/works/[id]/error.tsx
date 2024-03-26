"use client";

import { FaTriangleExclamation } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const WorkDetailsError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log(error.message);

  return (
    <>
      <div className="space-y-6 text-center">
        <FaTriangleExclamation size={100} className="text-primary mx-auto" />

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

export default WorkDetailsError;
