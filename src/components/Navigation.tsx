import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/class-prod-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About Us",
    href: "#about"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Work",
    href: "#portfolio"
  }, {
    name: "Contact Us",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Klasse Production Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 lg:space-x-8 md:space-x-4">
              {navItems.slice(0, -1).map(item => 
                <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300">
                  {item.name}
                </button>
              )}
              <Button 
                onClick={() => scrollToSection("#contact")} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm font-medium"
              >
                Contact Us
              </Button>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.slice(0, -1).map(item => 
              <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300">
                {item.name}
              </button>
            )}
            <Button 
              onClick={() => scrollToSection("#contact")} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
            >
              Contact Us
            </Button>
          </div>
        </div>}
    </nav>;
};
export default Navigation;