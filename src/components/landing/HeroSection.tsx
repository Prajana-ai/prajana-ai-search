import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl/none">
              AI-Powered Search For Your Documentation
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Transform your documentation experience with intelligent search capabilities. Get instant, accurate answers from your docs.
            </p>
          </div>
          <div className="space-x-4 pt-6">
            <Button asChild size="lg">
              <Link href="#get-started">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
