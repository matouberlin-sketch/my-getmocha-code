import { Suspense } from "react";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { DashboardPage } from "./routes/dashboard/DashboardPage";
import { ImportRecipesPage } from "./routes/import/ImportRecipesPage";
import { ItemDetailPage } from "./routes/item/ItemDetailPage";
import { PlannerPage } from "./routes/planner/PlannerPage";
import { RecipeDetailPage } from "./routes/recipe/RecipeDetailPage";
import { AppShell } from "./components/layout/AppShell";

function RootLayout(): JSX.Element {
  return (
    <AppShell>
      <main className="flex min-h-screen flex-col">
        <Suspense fallback={<div className="p-6 text-sm text-muted-foreground">Loading…</div>}>
          <Outlet />
          <ScrollRestoration />
        </Suspense>
      </main>
    </AppShell>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "planner", element: <PlannerPage /> },
      { path: "items/:itemId", element: <ItemDetailPage /> },
      { path: "recipes/:recipeId", element: <RecipeDetailPage /> },
      { path: "import/recipes", element: <ImportRecipesPage /> },
      {
        path: "*",
        element: (
          <div className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
            Page not found
          </div>
        ),
      },
    ],
  },
]);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
