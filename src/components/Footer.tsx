import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }];
  const footerLinks = {
    Services: ["Social Media Management", "Content Creation & Marketing", "Full Scale Production", "Retail Distribution & Management"]
  };
  const officeAddress = ["Klasse Production", "A2-13-1, Arcoris SOHO, Jalan Kiara,", "50480 Kuala Lumpur", "Wilayah Persekutuan, Malaysia"];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-gradient-dark border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Klasse Production
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming businesses through innovative digital marketing strategies 
              that drive real, measurable results.
            </p>
            
          </div>
          
          {/* Services */}
          {Object.entries(footerLinks).map(([category, links]) => <div key={category}>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {links.map(link => <li key={link}>
                    <button className="text-muted-foreground hover:text-primary transition-colors text-left">
                      {link}
                    </button>
                  </li>)}
              </ul>
            </div>)}
          
          {/* Office */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Office
            </h4>
            <div className="space-y-2">
              {officeAddress.map((line, index) => <p key={index} className="text-muted-foreground">
                  {line}
                </p>)}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 sm:mb-0">© 2025 Klasse Production. All rights reserved.</div>
          
          <div className="flex items-center space-x-6">
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </button>
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="hover:bg-primary/20 hover:text-primary transition-colors">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;