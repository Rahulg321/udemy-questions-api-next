import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight, Book, Code2, FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

const ApiPage = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary-foreground opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome to DevSpace API Documentation
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to integrate DevSpace into your applications.
            Follow our step-by-step guides and API references to get started.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <Book
                  className="h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                Getting Started
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  New to DevSpace? Start here for a comprehensive introduction
                  to our API.
                </p>
                <p className="mt-6">
                  <Button variant="ghost" className="group">
                    Quick Start Guide{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <Code2
                  className="h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                API Reference
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  Detailed documentation of all API endpoints, request/response
                  formats, and authentication.
                </p>
                <p className="mt-6">
                  <Button variant="ghost" className="group">
                    View Reference{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <FileText
                  className="h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                Examples & Guides
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  Learn from practical examples and step-by-step guides for
                  common integration scenarios.
                </p>
                <p className="mt-6">
                  <Button variant="ghost" className="group">
                    Browse Examples{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </p>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 flex justify-center gap-x-6">
          <Button asChild>
            <Link href="/docs/quickstart">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/api">API Reference</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
