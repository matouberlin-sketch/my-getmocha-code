import { ArrowLeft, MapPinOff } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";

function NotFoundPage(): JSX.Element {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <MapPinOff className="h-8 w-8 text-primary" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          The screen you’re looking for hasn’t been implemented yet. Return to the
          dashboard while we wire up the remaining flows.
        </p>
      </div>
      <Button asChild className="gap-2">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>
      </Button>
    </div>
  );
}

export default NotFoundPage;
