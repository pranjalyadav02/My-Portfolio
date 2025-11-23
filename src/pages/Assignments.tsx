import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Assignments = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-serif">
            Assignments
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            My academic assignments and coursework
          </p>

          {/* Placeholder Content */}
          <Card className="p-12 text-center bg-muted/30">
            <FileText className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Assignment details will be added here. This section will showcase my 
              academic work, problem-solving approaches, and coursework submissions.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
