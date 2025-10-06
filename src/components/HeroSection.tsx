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
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-elegant font-medium text-white mb-6 leading-tight drop-shadow-lg">
            Elevating Creativity,
            <span className="block py-[8px]">
              <span className="text-white">Amplifying </span>
              <span className="text-red-600">Impact</span>
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