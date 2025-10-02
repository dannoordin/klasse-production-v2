import { Award, Users, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";
import about4 from "@/assets/about-4.jpg";
const AboutSection = () => {
  
  return <section id="about" className="bg-gradient-to-b from-[hsl(220,15%,8%)] via-[hsl(220,15%,92%)] to-[hsl(0,0%,98%)] py-[140px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-5xl font-elegant font-light text-[hsl(220,15%,8%)] mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Klasse Production</span>
            </h2>
            <p className="text-xl text-[hsl(220,15%,25%)] mb-8 leading-relaxed">We don't just create content - We craft
experiences that make brands
impossible to ignore.</p>
            <p className="text-lg text-[hsl(220,15%,30%)] mb-8 leading-relaxed">At Klasse Production, we blend bold creativity with smart
strategy to produce scroll-stopping content that drives
engagement and boosts brand presence.
From marketing magic to cinematic production, we bring
ideas to life in a way that resonates, connects, and converts.</p>
            
            
          </div>
          
          {/* Photo Grid */}
          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-elegant">
                <img 
                  src={about1} 
                  alt="Elegant dessert presentation showcasing Klasse Production's attention to detail" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-elegant">
                <img 
                  src={about2} 
                  alt="Professional barista crafting coffee - behind the scenes of content creation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-elegant">
                <img 
                  src={about3} 
                  alt="Rocket espresso machine - professional equipment for premium content" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-elegant">
                <img 
                  src={about4} 
                  alt="Beauty and lifestyle content creation - showcasing diverse production capabilities" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default AboutSection;