import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-background.mp4";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-elegant font-medium text-white mb-6 leading-tight drop-shadow-lg">
            Elevating Creativity,
            <span className="block bg-gradient-primary bg-clip-text py-[8px] text-slate-950">
              Amplifying Impact
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-thin sm:text-xl text-center">Our team of forward-thinking creators, strategists, and visual
storytellers work hand-in-hand with brands to produce high-impact
content that sparks conversations and delivers real-world results.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            
            
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default HeroSection;