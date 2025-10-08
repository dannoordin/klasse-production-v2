import { Search, Target, TrendingUp, Users, Megaphone, BarChart3, Truck, Globe, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prubsnStars from "@/assets/prubsn-stars.png";
const ServicesSection = () => {
  const services = [{
    icon: TrendingUp,
    title: "Social Media Management",
    description: "Build a strong social presence and engage your audience across all major social media platforms.",
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Social Analytics"]
  }, {
    icon: Users,
    title: "Content Creation & Marketing",
    description: "Create compelling content that tells your story, educates your audience, and drives conversions.",
    features: ["Commercials", "Social Media Content", "Event Coverage", "Brand Strategy"]
  }, {
    icon: Camera,
    title: "Full Scale Production",
    description: "Professional content production services to bring your brand vision to life with high-quality visuals and media.",
    features: ["Photography", "Videography", "Graphic Design", "Live Streams"]
  }, {
    icon: Truck,
    title: "Retail Distribution & Management",
    description: "Seamlessly connect your products with premium retail distributors and optimize your supply chain for maximum market penetration.",
    features: ["Customs Clearance", "Warehouse to Store Logistics", "Inventory Management", "Sales Analytics"]
  }];
  return <section id="services" className="py-20 bg-[hsl(0,0%,98%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl font-elegant font-medium text-[hsl(220,15%,8%)] mb-6">
            Our Services
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => <Card key={index} className="group hover:shadow-glow transition-all duration-300 transform hover:scale-105 bg-white backdrop-blur-sm border-[hsl(220,15%,85%)] hover:border-primary/50 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_1px_1px,hsl(220,15%,85%)_1px,transparent_1px)] before:bg-[length:24px_24px] before:opacity-30">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-[hsl(220,15%,8%)] group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {index === 0 && <img src={prubsnStars} alt="PruBSN Stars Social Media Content" className="w-full rounded-lg mb-4" />}
                <p className="text-[hsl(220,15%,30%)] mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-[hsl(220,15%,35%)]">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;