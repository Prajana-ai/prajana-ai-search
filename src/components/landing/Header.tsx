"use client"; // Required for potential future mobile menu interactions

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const navLinks = [
    { href: "#getting-started", label: "Getting Started" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#docs", label: "Docs" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-foreground">Prajana AI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-foreground/60 hover:text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
           <Link href="/" className="flex items-center space-x-2">
             <span className="font-bold text-foreground">Prajana AI</span>
           </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
               <nav className="flex flex-col space-y-4 pt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-6 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-l-md"
                  >
                    {link.label}
                  </Link>
                ))}
                 <div className="px-6 pt-4">
                   <Button asChild className="w-full">
                      <Link href="/signin">Sign In</Link>
                   </Button>
                 </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          <Button asChild variant="ghost">
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
