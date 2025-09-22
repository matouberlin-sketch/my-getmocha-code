import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Button } from "../ui/button";

export function RouteErrorBoundary(): JSX.Element {
  const error = useRouteError();

  let title = "Something went wrong";
  let description = "An unexpected error occurred while loading this page.";
  let status: number | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    title = `Error ${error.status}`;
    description = error.statusText;
  } else if (error instanceof Error) {
    description = error.message;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
        <p className="max-w-xl text-balance text-muted-foreground">{description}</p>
        {status && status >= 500 ? (
          <p className="text-sm text-muted-foreground">
            Our team has been notified. Please refresh the page to try again.
          </p>
        ) : null}
      </div>
      <Button onClick={() => window.location.assign("/")}>Return home</Button>
    </div>
  );
}
