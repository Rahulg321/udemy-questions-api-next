import { BookOpenCheck } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href={"/"}
      className={`flex items-center gap-2 text-white transition-opacity hover:opacity-90 ${className}`}
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-60 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
        <div className="relative rounded-lg bg-gray-900 p-2 ring-1 ring-gray-800">
          <BookOpenCheck className="h-6 w-6 text-indigo-400" />
        </div>
      </div>
    </Link>
  );
}
