"use client";

import { useCallback } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const WorkModalLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <Dialog open onOpenChange={onDismiss}>
        <DialogContent className="sm:w-fit">{children}</DialogContent>
      </Dialog>
    </>
  );
};

export default WorkModalLayout;
