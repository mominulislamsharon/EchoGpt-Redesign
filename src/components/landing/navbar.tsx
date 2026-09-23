"use client";

import { useState } from "react";
import ThemeToggle from "../ui/theme-toggle";
import Link from "next/dist/client/link";
import { Button, buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import Logo from "./logo";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Models", href: "#models" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Link href="/app" className={buttonVariants({ variant: "ghost" })}>
              Sign in
            </Link>
            <Link
              href="/app"
              className={buttonVariants({ className: "rounded-full" })}
            >
              Get started
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="sr-only">
                {" "}
                Site navigation{" "}
              </SheetDescription>
            </SheetHeader>

            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-2 px-4">
              <Link
                href="/app"
                className={buttonVariants({ variant: "outline" })}
              >
                Sign in
              </Link>
              <Link
                href="/app"
                className={buttonVariants({ className: "rounded-full" })}
              >
                Get started
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Navbar;
