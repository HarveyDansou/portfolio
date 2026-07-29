"use strict";
"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  return (
    <div className="text-center p-50">
      <h2 className="text-primary text-4xl font-semibold">Ooops!</h2>
      <p>Something went wrong on the servers.</p>
      <button className="text-accent" onClick={() => router.refresh()}>
        Try again
      </button>
    </div>
  );
}
