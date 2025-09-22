import { ChefHat } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function RecipeDetailPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Recipe Detail</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Review yields, nutrition, supplier costings, and component structure for
          each recipe.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChefHat className="h-5 w-5 text-primary" />
            Recipe intelligence
          </CardTitle>
          <CardDescription>
            Supplier comparisons, allergen breakdowns, and BOM visualisations will
            appear once recipe APIs are available.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-64 text-sm text-muted-foreground">
          Placeholder for per-portion costing, nutrition, and allergen analytics.
        </CardContent>
      </Card>
    </div>
  );
}

export default RecipeDetailPage;
