import { Activity, AlertTriangle, CalendarDays } from "lucide-react";

import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";

function DashboardPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Kitchen dashboard</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Snapshot of plan readiness, unresolved imports, and procurement alerts.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Plans in progress</CardTitle>
            <CalendarDays className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Weekly planner scaffold pending API integration.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open import flags</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">No incomplete entities yet.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Production load</CardTitle>
            <Activity className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <p className="text-xs text-muted-foreground">Planner workload metrics will arrive with plan data.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Incomplete entities</CardTitle>
          <CardDescription>Flagged imports or recipes requiring follow-up.</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex h-48 flex-col items-center justify-center gap-3 text-sm text-muted-foreground">
          <Badge variant="secondary">No outstanding items</Badge>
          <p>
            Once the import workflow lands, incomplete entities will appear here for
            rapid remediation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardPage;
