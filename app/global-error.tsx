"use client";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <html>
      <body>
        <div className="text-center p-50">
          <h2 className="text-primary text-4xl font-semibold">(-_-)</h2>
          <p>A critical server error occurred.</p>
          <button className="text-accent" onClick={() => router.refresh()}>
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}
