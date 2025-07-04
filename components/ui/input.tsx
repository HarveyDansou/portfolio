import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[40px] rounded-sm border border-primary/10 focus:border-accent font-light bg-background px-4 py-5 text-base placeholder:text-primary/60 outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
