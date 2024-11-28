"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  CreditCard,
  Users,
  Terminal,
  LogIn,
  ArrowRight,
} from "lucide-react";

type NavbarProps = {
  className?: string;
};

const desktopNav = [
  { navlink: "/api", navlabel: "API", icon: Terminal },
  { navlink: "/pricing", navlabel: "Pricing", icon: CreditCard },
  { navlink: "/community", navlabel: "Community", icon: Users },
];

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm transition-colors duration-200 dark:bg-gray-900/80",
        className,
      )}
    >
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        {/* Desktop Layout */}
        <div className="relative flex h-16 items-center justify-between lg:justify-normal">
          {/* Logo - Left */}
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Code2 className="h-6 w-6 text-indigo-500" />
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Udemy API Generator
              </span>
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="hidden lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
            <div className="flex items-center gap-1">
              {desktopNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.navlink}
                    href={item.navlink}
                    className={cn(
                      "group flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-indigo-500",
                      pathname === item.navlink
                        ? "text-indigo-500"
                        : "text-muted-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    {item.navlabel}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons - Right */}
          <div className="hidden items-center gap-4 lg:ml-auto lg:flex">
            <Link href="/auth/login">
              <Button variant="ghost" className="gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-muted-foreground hover:bg-accent lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn("lg:hidden", isOpen ? "block" : "hidden")}
        >
          <div className="border-t py-4">
            <div className="flex flex-col space-y-3">
              {desktopNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.navlink}
                    href={item.navlink}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-500",
                      pathname === item.navlink
                        ? "text-indigo-500"
                        : "text-muted-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.navlabel}
                  </Link>
                );
              })}
              <div className="space-y-3 border-t pt-4">
                <Link
                  href="/auth/login"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-indigo-500"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Link>
                <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>HN</AvatarFallback>
        </Avatar>
        <span className="flex items-center font-medium">
          Account <ChevronDown className="ml-1 h-4 w-4" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
