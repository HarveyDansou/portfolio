import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center p-50">
      <h2 className="text-primary text-4xl font-semibold">Page Not Found</h2>
      <p>Could not find the requested resource.</p>
      <Link href="/" className="text-accent">
        Return Home
      </Link>
    </div>
  );
}
