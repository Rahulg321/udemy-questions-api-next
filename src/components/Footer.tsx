"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, Sun, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="relative overflow-hidden border-t dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold">DevSpace</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering developers to build the future
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-primary">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/licenses" className="hover:text-primary">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter and Theme Toggle */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-sm font-semibold">Stay Updated</h3>
              <div className="flex max-w-md space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-[240px] bg-background"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Theme</h3>
              <ModeToggle />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 dark:border-gray-800">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevSpace. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-background to-background" />
      </div>
    </footer>
  );
}
