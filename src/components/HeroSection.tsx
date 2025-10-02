import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Shader Animation Background */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Elevating Creativity,
            <span className="block bg-gradient-primary bg-clip-text text-transparent py-[8px]">
              Amplifying Impact
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">Our team of forward-thinking creators, strategists, and visual
storytellers work hand-in-hand with brands to produce high-impact
content that sparks conversations and delivers real-world results.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-glow" onClick={() => document.querySelector("#contact")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300" onClick={() => document.querySelector("#services")?.scrollIntoView({
            behavior: "smooth"
          })}>
              <Play className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default HeroSection;