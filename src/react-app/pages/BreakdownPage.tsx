import { ClipboardList } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function BreakdownPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Production Breakdown</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Toggle between component and item views to plan labor, trims, and
          procurement in one glance.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary" />
            Daily roll-up
          </CardTitle>
          <CardDescription>
            Interactive grouped breakdown will render here during the planner
            milestone.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 text-sm text-muted-foreground">
          Detailed component net weights, yields, and time requirements will be
          visualised once planner data APIs are available.
        </CardContent>
      </Card>
    </div>
  );
}

export default BreakdownPage;
