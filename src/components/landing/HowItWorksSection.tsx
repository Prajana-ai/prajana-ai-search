import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud, Cpu, MessageSquare } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: <UploadCloud className="h-6 w-6 text-primary" />, // Using UploadCloud for "Connect Your Docs"
      title: "Connect Your Docs",
      description: "Easily integrate your documentation from any source.",
    },
    {
      number: "2",
      icon: <Cpu className="h-6 w-6 text-primary" />, // Using Cpu for "AI Processing"
      title: "AI Processing",
      description: "Our AI analyzes and indexes your content for optimal search.",
    },
    {
      number: "3",
      icon: <MessageSquare className="h-6 w-6 text-primary" />, // Using MessageSquare for "Start Searching"
      title: "Start Searching",
      description: "Get instant, accurate answers from your documentation.",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple steps to unlock powerful AI search for your documentation.
            </p>
          </div>
          <div className="grid gap-8 pt-10 md:grid-cols-3 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center space-y-4">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <span className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                     {step.number}
                   </span>
                   {step.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
