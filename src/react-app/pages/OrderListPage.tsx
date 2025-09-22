import { PackageCheck } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function OrderListPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Order List</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Aggregate item requirements by supplier with accurate costing before you
          lock the weekly plan.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PackageCheck className="h-5 w-5 text-primary" />
            Supplier allocations
          </CardTitle>
          <CardDescription>
            CSV export, supplier switching, and order summaries will render in this
            workspace once plan locking is wired.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 text-sm text-muted-foreground">
          Pending integration with costing engine and traceability modules.
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderListPage;
