import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Award, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            Pranjal Yadav
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            MCA Student at IIPS, DAVV Indore
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/connect">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-serif">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <GraduationCap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Currently pursuing Master of Computer Applications (MCA) at Institute of 
                  Information and Planning Sciences (IIPS), DAVV Indore.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Code className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Skills & Interests</h3>
                <p className="text-muted-foreground">
                  Passionate about software development, problem-solving, and learning 
                  new technologies. Building projects to enhance my technical expertise.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-card">
              <div className="flex items-start gap-4">
                <Award className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Academic Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As an MCA student at IIPS, DAVV Indore, I'm constantly expanding my knowledge 
                    in computer applications, software engineering, and emerging technologies. 
                    This portfolio showcases my academic assignments, projects, and achievements 
                    throughout my learning journey. I'm dedicated to developing practical skills 
                    that bridge the gap between theoretical knowledge and real-world applications.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Assignments</h3>
              <p className="text-muted-foreground mb-4">
                View my academic assignments and coursework
              </p>
              <Button asChild variant="outline">
                <Link to="/assignments">View Assignments</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Certificates</h3>
              <p className="text-muted-foreground mb-4">
                Check out my certifications and achievements
              </p>
              <Button asChild variant="outline">
                <Link to="/certificates">View Certificates</Link>
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Projects</h3>
              <p className="text-muted-foreground mb-4">
                Explore my technical projects and work
              </p>
              <Button asChild variant="outline">
                <Link to="/projects">View Projects</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
