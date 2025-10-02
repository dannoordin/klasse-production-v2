import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    details: "omarbarakbah@klasseproduction.com",
    action: "mailto:omarbarakbah@klasseproduction.com"
  }, {
    icon: Phone,
    title: "Phone",
    details: "+60122202015",
    action: "tel:+60122202015"
  }, {
    icon: MapPin,
    title: "Office",
    details: ["Klasse Production", "A2-13-1, Arcoris SOHO, Jalan Kiara", "50480 Kuala Lumpur", "Wilayah Persekutuan, Malaysia"],
    action: "https://maps.google.com"
  }];
  return <section id="contact" className="py-20 bg-gradient-to-b from-[hsl(0,0%,98%)] via-[hsl(220,15%,92%)] to-[hsl(220,15%,8%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl font-elegant font-light text-[hsl(220,15%,8%)] mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Looking to expand your digital presence? Let's discuss how we can help your business reach new heights.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-background/50 border-border focus:border-primary" />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-background/50 border-border focus:border-primary" />
                  </div>
                </div>
                <div>
                  <Input type="text" name="company" placeholder="Company Name (Optional)" value={formData.company} onChange={handleChange} className="bg-background/50 border-border focus:border-primary" />
                </div>
                <div>
                  <Textarea name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required rows={6} className="bg-background/50 border-border focus:border-primary resize-none" />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-950">
                Let's start a conversation
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to answer any questions and discuss how our team can help grow your business.
                Reach out to us through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-3">
              {contactInfo.map((info, index) => <Card key={index} className="group hover:shadow-glow transition-all duration-300 transform hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 cursor-pointer" onClick={() => window.open(info.action, '_blank')}>
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </h4>
                      <div className="text-muted-foreground">
                        {Array.isArray(info.details) ? info.details.map((line, lineIndex) => <p key={lineIndex} className="leading-tight">
                              {line}
                            </p>) : <p>{info.details}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;