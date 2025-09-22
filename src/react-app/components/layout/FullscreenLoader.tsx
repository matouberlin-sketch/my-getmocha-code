import { Loader2 } from "lucide-react";

export function FullscreenLoader(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      <div className="flex items-center gap-3 rounded-md border border-border bg-background px-6 py-4 shadow-sm">
        <Loader2 className="h-5 w-5 animate-spin text-primary" />
        <span className="text-sm font-medium text-muted-foreground">
          Loading KitchenFlow...
        </span>
      </div>
    </div>
  );
}
