import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Medal } from "lucide-react";

const Certificates = () => {
  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Add your academic achievements and awards here",
      category: "Academic"
    },
    {
      icon: Trophy,
      title: "Technical Certifications",
      description: "Add your technical certifications and courses here",
      category: "Professional"
    },
    {
      icon: Medal,
      title: "Competition Wins",
      description: "Add your competition achievements and recognitions here",
      category: "Competition"
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-serif">
            Certificates & Achievements
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            My certifications, awards, and recognitions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">
                        {achievement.category}
                      </Badge>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 mt-12 bg-muted/30 text-center">
            <Award className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-3">More to Come</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This section will be updated with my certificates, awards, and achievements 
              as I progress through my academic journey. Stay tuned for updates on my 
              professional certifications and recognitions.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
