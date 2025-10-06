import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Calendar, Star, Quote } from "lucide-react";
import kataKitaPodcastWork from "@/assets/kata-kita-podcast-new.png";
import socialMediaWork from "@/assets/social-media-content.png";
import spaceDollahWork from "@/assets/space-dollah-work.png";
import anaakaVideo from "@/assets/anaaka-video.mp4";
import prubsnLogo from "@/assets/client-prubsn-latest.png";
import kataKitaLogo from "@/assets/client-katakita-latest.png";
import spaceDollahLogo from "@/assets/client-spacedollah-latest.png";
import larenmeLogo from "@/assets/client-larenme-latest.png";
import anaakaLogo from "@/assets/client-anaaka-latest.png";
import carsomeLogo from "@/assets/client-carsome-latest.png";
import jomBorakLogo from "@/assets/client-jomborak-latest.png";
const WorkSection = () => {
  const clientLogos = [{
    name: "Jom Borak",
    logo: jomBorakLogo
  }, {
    name: "PruBSN Stars",
    logo: prubsnLogo
  }, {
    name: "Kata Kita Podcast",
    logo: kataKitaLogo
  }, {
    name: "Carsome",
    logo: carsomeLogo
  }, {
    name: "SpaceDollah",
    logo: spaceDollahLogo
  }, {
    name: "Anaaka Halal Skincare",
    logo: anaakaLogo
  }, {
    name: "Larenme PR & Media",
    logo: larenmeLogo
  }];
  return <section id="portfolio" className="py-20 bg-[hsl(0,0%,98%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-medium mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Our</span>
            <span className="text-[hsl(220,15%,8%)]"> Work</span>
          </h2>
          
        </div>

        {/* Work Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-[hsl(220,15%,85%)] bg-white">
            <div className="aspect-video overflow-hidden">
              <video src={anaakaVideo} autoPlay muted loop className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3">Commercial Production</Badge>
              <h3 className="text-xl font-semibold mb-2 text-[hsl(220,15%,8%)]">Anaaka</h3>
              <p className="text-[hsl(220,15%,30%)] text-sm leading-relaxed">
                Professional commercial video production featuring creative direction, filming, and post-production services for brand storytelling.
              </p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-[hsl(220,15%,85%)] bg-white">
            <div className="aspect-video overflow-hidden">
              <img src={socialMediaWork} alt="Social Media Content Creation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3">Social Media Management</Badge>
              <h3 className="text-xl font-semibold mb-2 text-[hsl(220,15%,8%)]">PruBSN Stars </h3>
              <p className="text-[hsl(220,15%,30%)] text-sm leading-relaxed">
                Engaging social media content creation and management across multiple platforms including Instagram, TikTok, and Facebook.
              </p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-[hsl(220,15%,85%)] bg-white">
            <div className="aspect-video overflow-hidden">
              <img src={spaceDollahWork} alt="Space Dollah Youtube Videos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3">Content Production</Badge>
              <h3 className="text-xl font-semibold mb-2 text-[hsl(220,15%,8%)]">SpaceDollah</h3>
              <p className="text-[hsl(220,15%,30%)] text-sm leading-relaxed">Engaging Youtube content production with creative inputs, edits and studio setting.</p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-[hsl(220,15%,85%)] bg-white">
            <div className="aspect-video overflow-hidden">
              <img src={kataKitaPodcastWork} alt="Kata Kita Podcast Sessions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3">Podcast Production</Badge>
              <h3 className="text-xl font-semibold mb-2 text-[hsl(220,15%,8%)]">Kata Kita Podcast </h3>
              <p className="text-[hsl(220,15%,30%)] text-sm leading-relaxed">Weekly podcast production featuring diverse conversations and celebrity guests in a professional studio setting.</p>
            </CardContent>
          </Card>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-elegant font-semibold text-center mb-8">
            
            <span className="bg-gradient-primary bg-clip-text text-transparent text-xl">Clients & Partners</span>
          </h3>
          <div className="grid grid-cols-3 gap-8 md:flex md:justify-center md:items-center md:gap-16">
            {clientLogos.map((client, index) => <div key={index} className="flex items-center justify-center transition-all duration-300">
                <img src={client.logo} alt={client.name} className="h-12 md:h-16 w-auto object-contain" />
              </div>)}
          </div>
        </div>

        {/* Testimonials */}
        
      </div>
    </section>;
};
export default WorkSection;