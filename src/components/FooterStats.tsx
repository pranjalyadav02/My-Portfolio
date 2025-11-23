import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

// Using CountAPI (no server required). Namespace/key chosen to be project-specific.
const COUNTAPI_URL = "https://api.countapi.xyz/hit/pranjalyadav02/portfolio_visits";

export default function FooterStats() {
  const [count, setCount] = useState<number | null>(null);
  const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString());

  useEffect(() => {
    let mounted = true;

    fetch(COUNTAPI_URL)
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        if (data && typeof data.value === "number") setCount(data.value);
      })
      .catch(() => {
        // don't block UI on errors
      });

    const t = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => {
      mounted = false;
      clearInterval(t);
    };
  }, []);

  return (
    <section className="py-6 bg-background/50">
      <div className="container mx-auto px-4">
        <Card className="p-4 flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-sm text-muted-foreground">Current time: <span className="font-mono">{time}</span></div>
          <div className="text-sm text-muted-foreground">Visitors: <span className="font-medium">{count ?? "—"}</span></div>
        </Card>
      </div>
    </section>
  );
}
