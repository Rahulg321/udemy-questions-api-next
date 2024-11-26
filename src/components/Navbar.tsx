import { Code, Coins, BookOpen, Users } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { icon: Code, text: "API", href: "/api" },
  { icon: Coins, text: "Pricing", href: "/pricing" },
  { icon: BookOpen, text: "Documentation", href: "/docs" },
  { icon: Users, text: "Community", href: "/community" },
];

export default function Navbar({ classname }: { classname?: string }) {
  return (
    <nav
      className={cn(
        "z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800",
        classname
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2  transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="whitespace-nowrap">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium dark:text-gray-300 dark:hover:text-white transition-colors whitespace-nowrap">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap">
              Get Started
            </button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
