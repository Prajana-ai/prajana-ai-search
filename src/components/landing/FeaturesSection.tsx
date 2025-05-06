import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Search } from "lucide-react"; // Use Search as a placeholder for the play-like symbol

export function FeaturesSection() {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "AI-Powered Search",
      description: "Advanced machine learning algorithms provide precise and contextual search results.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Get instant answers with our optimized search engine built for speed.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Private",
      description: "Your documentation stays private with enterprise-grade security.",
    },
  ];

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-md rounded-lg bg-card">
              <CardHeader className="pb-4">
                 <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                   {feature.icon}
                 </div>
                 <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
