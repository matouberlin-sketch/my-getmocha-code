import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps): JSX.Element {
  return (
    <div className={cn("min-h-screen bg-background text-foreground")}>{children}</div>
  );
}
