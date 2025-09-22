import { NavLink, Outlet } from "react-router-dom";

import { cn } from "../../lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { TooltipProvider } from "../ui/tooltip";

const navItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/planner", label: "Planner" },
  { to: "/planner/breakdown", label: "Breakdown" },
  { to: "/planner/line-cook", label: "Line Cook" },
  { to: "/planner/orders", label: "Orders" },
  { to: "/import/recipes", label: "Import" },
];

export function AppLayout(): JSX.Element {
  return (
    <TooltipProvider delayDuration={150} skipDelayDuration={0}>
      <div className="flex min-h-screen flex-col bg-muted/10 text-foreground">
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
            <div className="flex flex-wrap items-center gap-4">
              <NavLink to="/" className="text-lg font-semibold">
                KitchenFlow
              </NavLink>
              <nav className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                        "text-muted-foreground hover:bg-muted hover:text-foreground",
                        isActive && "bg-primary/10 text-primary hover:bg-primary/10",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
          <nav className="flex flex-wrap gap-2 border-t border-border px-4 py-2 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-1 text-sm font-medium",
                    "text-muted-foreground ring-1 ring-border",
                    isActive && "bg-primary/10 text-primary",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>
        <main className="flex-1">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
        <footer className="border-t border-border bg-background/95 py-4">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-xs text-muted-foreground md:px-6">
            <p>&copy; {new Date().getFullYear()} KitchenFlow. All rights reserved.</p>
            <p>Version 0.1.0 • Crafted for production kitchens.</p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
