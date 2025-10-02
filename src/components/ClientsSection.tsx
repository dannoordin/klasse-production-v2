import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
const ClientsSection = () => {
  const clientLogos = [
    { name: "PruBSN" },
    { name: "KataKita" },
    { name: "SpaceDollah" },
    { name: "Larenme" },
    { name: "Anaaka" },
    { name: "Carsome" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc",
      industry: "Technology",
      rating: 5,
      text: "Their digital marketing strategy increased our online conversions by 300%. Exceptional work!"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "GrowthCorp",
      industry: "E-commerce",
      rating: 5,
      text: "Professional, creative, and results-driven. They transformed our brand presence completely."
    },
    {
      name: "Emma Rodriguez",
      role: "Brand Manager",
      company: "InnovateLab",
      industry: "Healthcare",
      rating: 5,
      text: "Outstanding attention to detail and strategic thinking. Our ROI improved significantly."
    }
  ];
  
  return <section id="clients" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl sm:text-5xl font-elegant font-medium text-foreground mb-6">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Global Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've had the privilege of working with amazing companies across various industries, 
            helping them achieve their digital marketing goals and drive exceptional results.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Companies We've Worked With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => <div key={index} className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-300">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground text-center">
                    {client.name}
                  </span>
                </div>
              </div>)}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-medium text-muted-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="mt-4">
                    {testimonial.industry}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default ClientsSection;