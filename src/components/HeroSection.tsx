import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-background-new.mp4";
import heroVideoMobile from "@/assets/hero-background-mobile.mp4";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-end justify-center pt-16 pb-32 overflow-hidden bg-white" style={{ contain: 'layout' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-white" style={{ willChange: 'auto' }}>
        {/* Desktop/Tablet Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="none"
          className="hidden md:block w-full h-full object-cover pointer-events-none"
          style={{ willChange: 'auto' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Mobile Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="none"
          className="block md:hidden w-full h-full object-cover pointer-events-none"
          style={{ willChange: 'auto' }}
        >
          <source src={heroVideoMobile} type="video/mp4" />
        </video>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center">
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-elegant font-medium text-slate-900 mb-10 sm:mb-20 leading-tight animate-fade-in" style={{ willChange: 'opacity, transform' }}>
            <span className="block animate-fade-in [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]" style={{ willChange: 'opacity, transform' }}>Elevating Creativity,</span>
            <span className="block bg-gradient-primary bg-clip-text py-[8px] text-slate-950 animate-fade-in [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]" style={{ willChange: 'opacity, transform' }}>
              Amplifying Impact
            </span>
          </h1>
          
          <p className="text-xl text-slate-700 mb-0 max-w-3xl mx-auto leading-relaxed text-center font-light sm:text-lg">Our team of forward-thinking creators, strategists, and visual
storytellers work hand-in-hand with brands to produce high-impact
content that sparks conversations and delivers real-world results.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            
            
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default HeroSection;