import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Connect = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@pranjalyadav",
      href: "https://github.com/pranjalyadav",
      description: "Check out my code repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Pranjal Yadav",
      href: "https://linkedin.com/in/pranjalyadav",
      description: "Connect professionally"
    },
    {
      icon: Mail,
      label: "Email",
      username: "pranjal@example.com",
      href: "mailto:pranjal@example.com",
      description: "Send me an email"
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@pranjalyadav",
      href: "https://twitter.com/pranjalyadav",
      description: "Follow me on Twitter"
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-serif">
            Connect With Me
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Let's connect and collaborate
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Card key={social.label} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{social.label}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {social.username}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {social.description}
                      </p>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="gap-2"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          Visit <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-muted/30 text-center">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              I'm always open to discussing new opportunities, collaborations, or 
              just having a chat about technology. Feel free to reach out through 
              any of the platforms above!
            </p>
            <Button asChild size="lg">
              <a href="mailto:pranjal@example.com">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Connect;
