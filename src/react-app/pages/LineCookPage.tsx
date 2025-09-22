import { HardHat } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function LineCookPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Line Cook View</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Prep, cook, and order tasks are organised by station with printable
          layouts and time estimates.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HardHat className="h-5 w-5 text-primary" />
            Daily task board
          </CardTitle>
          <CardDescription>
            The dedicated production checklists will be implemented after planner
            execution APIs.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 text-sm text-muted-foreground">
          Printable prep and cook views will appear in this workspace. Keyboard
          shortcuts, filters, and station views are coming soon.
        </CardContent>
      </Card>
    </div>
  );
}

export default LineCookPage;
