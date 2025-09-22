import { UploadCloud } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";

function ImportRecipesPage(): JSX.Element {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Recipe Import</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Upload CSV, JSON, or AI extracted recipes with validation, dry runs, and
          conflict resolution.
        </p>
      </div>
      <Card>
        <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <CardTitle>Import workspace</CardTitle>
            <CardDescription>
              Structured workflow for ingestion, mapping, conflict resolution, and
              transactional commits.
            </CardDescription>
          </div>
          <Button className="gap-2">
            <UploadCloud className="h-4 w-4" />
            Upload files
          </Button>
        </CardHeader>
        <Separator />
        <CardContent className="h-72 text-sm text-muted-foreground">
          The guided import wizard will be implemented in subsequent milestones.
        </CardContent>
      </Card>
    </div>
  );
}

export default ImportRecipesPage;
