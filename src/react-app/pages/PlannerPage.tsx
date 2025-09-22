import { PlusCircle, Sparkles } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";

function PlannerPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Weekly Planner</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Coordinate production, prep, and service for the entire week. Slots,
          recipes, costing, and traceability are orchestrated here.
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <CardTitle>KitchenFlow planner workspace</CardTitle>
            <CardDescription>
              Drag &amp; drop slots, assign recipes, and monitor live costing as you
              scale production.
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Load demo data
            </Button>
            <Button className="gap-2">
              <PlusCircle className="h-4 w-4" />
              New plan
            </Button>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="flex h-72 flex-col items-center justify-center gap-3 text-center text-muted-foreground">
          <p className="text-sm">
            Planner grid coming soon. Configure slots, drag recipes, and sync with
            costing in real time.
          </p>
          <p className="text-xs uppercase tracking-wide">
            Implementation milestone 4
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default PlannerPage;
