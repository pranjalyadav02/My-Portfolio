import { Card } from "@/components/ui/card";
import { FolderGit2 } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-serif">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            My technical projects and development work
          </p>

          <Card className="p-12 text-center bg-muted/30">
            <FolderGit2 className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Project details will be added here. This section will showcase my 
              technical projects, coding work, and software development initiatives.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
