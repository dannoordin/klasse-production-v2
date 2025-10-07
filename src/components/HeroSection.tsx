import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-background-new.mp4";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-end justify-center pt-16 pb-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-elegant font-medium text-slate-900 mb-6 leading-tight mt-12">
            Elevating Creativity,
            <span className="block bg-gradient-primary bg-clip-text py-[8px] text-slate-950">
              Amplifying Impact
            </span>
          </h1>
          
          <p className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed text-center font-light sm:text-lg py-[40px] my-0">Our team of forward-thinking creators, strategists, and visual
storytellers work hand-in-hand with brands to produce high-impact
content that sparks conversations and delivers real-world results.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            
            
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default HeroSection;