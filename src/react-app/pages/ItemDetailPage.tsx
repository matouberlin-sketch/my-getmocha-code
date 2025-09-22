import { PackageOpen } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function ItemDetailPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Item Detail</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Manage suppliers, costing, and where-used analysis for each raw
          material.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PackageOpen className="h-5 w-5 text-primary" />
            Item intelligence
          </CardTitle>
          <CardDescription>
            Supplier matrix and where-used drill downs will appear here after API
            scaffolding.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 text-sm text-muted-foreground">
          Placeholder for detailed nutrition, allergen, and recipe usage tree.
        </CardContent>
      </Card>
    </div>
  );
}

export default ItemDetailPage;
