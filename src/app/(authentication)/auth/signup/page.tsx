import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create an account to get started",
};

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative hidden md:block">
        <Image
          src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Authentication background"
          className="absolute inset-0 object-cover"
          fill
          priority
        />
      </div>
      <div className="container flex items-center justify-center md:px-20">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="mb-4">
              <Link href={"/"}>
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="App logo"
                  className="mx-auto"
                />
              </Link>
            </div>
            <h1 className="text-3xl font-bold">DevSpace</h1>
            <p className="text-sm text-muted-foreground">
              Create an account to get started
            </p>
          </div>
          <div className="grid gap-4">
            <Button variant="outline" className="relative">
              <FaGoogle className="mr-2 h-4 w-4" />
              <span className="ml-2">Continue with Google</span>
            </Button>
            <Button variant="outline">
              <FaGithub className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Already have an account?
              </span>
            </div>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/auth/login" className="w-full">
              Log In
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
